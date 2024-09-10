import { PrismaClient } from '@prisma/client';

const main = async () => {
  const client = new PrismaClient();

  try {
    await client.user.create({
      data: {
        email: 'test@example.com',
        lastName: 'Tanaka',
        firstName: 'Taku',
      },
    });
  } catch (err) {
    console.log(err);
  } finally {
    await client.$disconnect();
  }
};

await main();
