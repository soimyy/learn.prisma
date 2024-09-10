import express from 'express';

export const healthcheck = express
  .Router()
  .get('/_healthcheck', (req, res) => res.json({ message: 'ok' }));
