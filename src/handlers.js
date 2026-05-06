const tg = require('./telegram');
const { BUTTONS, KEYBOARDS, FILE_IDS, MESSAGES } = require('./constants');

const withDefaultKeyboard = (extra = {}) => ({
  reply_markup: KEYBOARDS.DEFAULT,
  ...extra,
});

async function handleWelcome(chatId) {
  await tg.sendMessage(chatId, MESSAGES.WELCOME, {
    reply_markup: KEYBOARDS.DEFAULT,
  });
}

async function handleAlreadySubscribed(chatId) {
  await tg.sendMessage(chatId, MESSAGES.ALREADY_SUBSCRIBED, {
    disable_web_page_preview: true,
    reply_markup: KEYBOARDS.DEFAULT,
  });
}

async function handleContactUs(chatId) {
  await tg.sendMessage(chatId, MESSAGES.CONTACT_US, {
    disable_web_page_preview: true,
    reply_markup: KEYBOARDS.DEFAULT,
  });
}

async function handleHowPresentLooksLike(chatId) {
  await tg.sendMediaGroup(chatId, [
    { type: 'photo', media: FILE_IDS.HOW_PRESENT_PHOTO },
    { type: 'video', media: FILE_IDS.HOW_PRESENT_VIDEO },
  ]);
  await tg.sendMessage(chatId, MESSAGES.HOW_PRESENT_LOOKS, withDefaultKeyboard());
}

async function handleWhatReceiverWillSee(chatId) {
  await tg.sendVideo(chatId, FILE_IDS.WHAT_RECEIVER_VIDEO, MESSAGES.WHAT_RECEIVER_SEES, {
    supports_streaming: true,
    reply_markup: KEYBOARDS.DEFAULT,
  });
}

async function handleWhereProduced(chatId) {
  await tg.sendMessage(chatId, MESSAGES.WHERE_PRODUCED, withDefaultKeyboard());
}

async function handleWhatDifference(chatId) {
  await tg.sendMessage(chatId, MESSAGES.WHAT_DIFFERENCE, withDefaultKeyboard());
}

async function handleCanVisit(chatId) {
  await tg.sendMessage(chatId, MESSAGES.CAN_VISIT, withDefaultKeyboard());
}

async function handleWhatIfNotLike(chatId) {
  await tg.sendPhoto(chatId, FILE_IDS.WHAT_IF_NOT_LIKE_PHOTO, MESSAGES.WHAT_IF_NOT_LIKE, {
    reply_markup: KEYBOARDS.DEFAULT,
  });
}

async function handleHowToBuy(chatId) {
  await tg.sendMessage(chatId, MESSAGES.HOW_TO_BUY, {
    disable_web_page_preview: true,
    reply_markup: KEYBOARDS.DEFAULT,
  });
}

async function handleUpdate(update) {
  const message = update.message;
  if (!message) return;

  const chatId = message.from.id;
  const text = message.text;

  if (!text) return;

  switch (text) {
    case '/start':
    case BUTTONS.BACK:
      await handleWelcome(chatId);
      break;
    case BUTTONS.HOW_PRESENT_LOOKS_LIKE:
      await handleHowPresentLooksLike(chatId);
      break;
    case BUTTONS.WHAT_RECEIVER_WILL_SEE:
      await handleWhatReceiverWillSee(chatId);
      break;
    case BUTTONS.WHERE_PRODUCED:
      await handleWhereProduced(chatId);
      break;
    case BUTTONS.WHAT_DIFFERENCE:
      await handleWhatDifference(chatId);
      break;
    case BUTTONS.CAN_VISIT:
      await handleCanVisit(chatId);
      break;
    case BUTTONS.WHAT_IF_NOT_LIKE:
      await handleWhatIfNotLike(chatId);
      break;
    case BUTTONS.HOW_TO_BUY:
      await handleHowToBuy(chatId);
      break;
    case BUTTONS.CONTACT_US:
      await handleContactUs(chatId);
      break;
    default:
      await handleAlreadySubscribed(chatId);
  }
}

module.exports = { handleUpdate };
