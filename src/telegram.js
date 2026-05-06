const axios = require('axios');

const baseUrl = () => `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;

const call = (method, data) =>
  axios.post(`${baseUrl()}/${method}`, data).then((r) => r.data);

const sendMessage = (chatId, text, options = {}) =>
  call('sendMessage', {
    chat_id: chatId,
    text,
    parse_mode: 'Markdown',
    ...options,
  });

const sendPhoto = (chatId, photo, caption, options = {}) =>
  call('sendPhoto', {
    chat_id: chatId,
    photo,
    caption,
    parse_mode: 'Markdown',
    ...options,
  });

const sendVideo = (chatId, video, caption, options = {}) =>
  call('sendVideo', {
    chat_id: chatId,
    video,
    caption,
    parse_mode: 'Markdown',
    ...options,
  });

const sendMediaGroup = (chatId, media) =>
  call('sendMediaGroup', {
    chat_id: chatId,
    media,
  });

module.exports = { sendMessage, sendPhoto, sendVideo, sendMediaGroup };
