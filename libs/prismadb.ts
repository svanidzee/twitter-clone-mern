import { PrismaClient } from '@prisma/client';

// let prisma: PrismaClient;
// if we declare like this prisma, we got error:
// fix error Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.

// fix:
declare global {
  var prisma: PrismaClient | undefined;
}
const client = globalThis.prisma || new PrismaClient();

// fix hot reload problem, that cretes new PrismaClient instances:
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
