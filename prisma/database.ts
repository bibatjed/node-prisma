import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
  } catch (e) {
    await prisma.$disconnect();
    throw e;
  }
}

export default main;
