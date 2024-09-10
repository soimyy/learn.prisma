import express from 'express';
import { prismaClient } from 'clients/prisma.mjs';

export const user = express.Router().get('/users', async (req, res) => {
  try {
    const entries = await prismaClient.user.findMany();
    res.json({ entries });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'internal server error' });
  }
});
