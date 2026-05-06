require('dotenv').config();

const express = require('express');
const { handleUpdate } = require('./handlers');
const tg = require('./telegram');

const app = express();
app.use(express.json());

// Telegram webhook — receives updates from Telegram servers
app.post('/webhook', async (req, res) => {
  res.sendStatus(200); // answer Telegram immediately

  try {
    await handleUpdate(req.body);
  } catch (err) {
    console.error('Webhook handler error:', err.message);
  }
});

// API for Laravel — send a plain notification message
app.post('/api/send-message', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.API_SECRET}`) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' });
  }

  const { chat_id, text, options = {} } = req.body;
  if (!chat_id || !text) {
    return res.status(400).json({ ok: false, error: 'chat_id and text are required' });
  }

  try {
    await tg.sendMessage(chat_id, text, options);
    res.json({ ok: true });
  } catch (err) {
    console.error('send-message error:', err.message);
    res.status(500).json({ ok: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Telegram bot service running on port ${PORT}`);
});
