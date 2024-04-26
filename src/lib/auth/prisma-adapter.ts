import { Adapter } from "next-auth/adapters";

import { prisma } from "../prisma";

export function CustomPrismaAdapter(): Adapter {
  return {
    async createUser(user) {
      const newUser = await prisma.user.create({
        data: {
          email: user.email,
          name: user.name,
          image: user.image,
        },
      });

      return {
        id: newUser.id,
        email: newUser.email ?? "",
        name: newUser.name ?? "",
        emailVerified: null,
        image: newUser.image ?? "",
      };
    },
    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) return null;

      return {
        id: user.id,
        email: user.email ?? "",
        name: user.name ?? "",
        emailVerified: null,
        image: user.image ?? "",
      };
    },
    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) return null;

      return {
        id: user.id,
        email: user.email ?? "",
        name: user.name ?? "",
        emailVerified: null,
        image: user.image ?? "",
      };
    },
    async getUserByAccount({ provider, providerAccountId }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
        include: {
          user: true,
        },
      });

      if (!account) return null;

      const { user } = account;

      return {
        id: user.id,
        email: user.email ?? "",
        name: user.name ?? "",
        emailVerified: null,
        image: user.image ?? "",
      };
    },
    async updateUser(user) {
      const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          name: user.name,
          email: user.email,
          image: user.image,
        },
      });

      return {
        id: updatedUser.id,
        email: updatedUser.email ?? "",
        name: updatedUser.name ?? "",
        emailVerified: null,
        image: updatedUser.image ?? "",
      };
    },
    async linkAccount(account) {
      await prisma.account.create({
        data: {
          userId: account.userId,
          type: account.type,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      });
    },
    async createSession({ expires, sessionToken, userId }) {
      await prisma.session.create({
        data: {
          userId,
          expires,
          sessionToken,
        },
      });

      return { sessionToken, userId, expires };
    },
    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          sessionToken,
        },
        include: {
          user: true,
        },
      });

      if (!prismaSession) return null;

      const { user, ...session } = prismaSession;

      return {
        session: {
          expires: session.expires,
          userId: session.userId,
          sessionToken: session.sessionToken,
        },
        user: {
          id: user.id,
          email: user.email ?? "",
          name: user.name ?? "",
          emailVerified: null,
          image: user.image ?? "",
        },
      };
    },
    async updateSession({ sessionToken, expires, userId }) {
      const updatedSession = await prisma.session.update({
        where: {
          sessionToken,
        },
        data: {
          expires,
          userId,
        },
      });

      return {
        sessionToken: updatedSession.sessionToken,
        userId: updatedSession.userId,
        expires: updatedSession.expires,
      };
    },
    async deleteSession(sessionToken) {
      await prisma.session.deleteMany({
        where: {
          sessionToken,
        },
      });
    },
  };
}
