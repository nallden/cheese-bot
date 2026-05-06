const BUTTONS = {
  HOW_PRESENT_LOOKS_LIKE: '🎁 Как выглядит подарок?',
  WHAT_RECEIVER_WILL_SEE: '👀 Что увидит получатель?',
  WHERE_PRODUCED: '🏭 Где и из чего производится сыр?',
  WHAT_DIFFERENCE: '⭐ В чём эксклюзив?',
  CAN_VISIT: '🚗 А можно на экскурсию?',
  WHAT_IF_NOT_LIKE: '🤔 А вдруг не понравится?',
  HOW_TO_BUY: '💳 Как приобрести и есть ли доставка?',
  CONTACT_US: '💬 Связаться с нами',
  BACK: '◀️ Назад',
};

const KEYBOARDS = {
  DEFAULT: {
    resize_keyboard: true,
    one_time_keyboard: false,
    keyboard: [
      [{ text: BUTTONS.HOW_PRESENT_LOOKS_LIKE }, { text: BUTTONS.WHAT_RECEIVER_WILL_SEE }],
      [{ text: BUTTONS.WHERE_PRODUCED }, { text: BUTTONS.WHAT_DIFFERENCE }],
      [{ text: BUTTONS.CAN_VISIT }, { text: BUTTONS.WHAT_IF_NOT_LIKE }],
      [{ text: BUTTONS.HOW_TO_BUY }, { text: BUTTONS.CONTACT_US }],
    ],
  },
  BACK: {
    resize_keyboard: true,
    one_time_keyboard: false,
    keyboard: [[{ text: BUTTONS.BACK }]],
  },
};

const FILE_IDS = {
  HOW_PRESENT_PHOTO: 'AgACAgIAAxkBAAIBR2j7Vf7PSwXXt1c-KJ7qNQ7YJQmyAALY-DEbsnPYS3zd6wYU_upMAQADAgADeQADNgQ',
  HOW_PRESENT_VIDEO: 'BAACAgIAAxkBAAIDimka3aoCoEOjLExd5QkDqbiv_Ba3AAIUhgAC71DYSHYSck9wd483NgQ',
  WHAT_RECEIVER_VIDEO: 'BAACAgIAAxkBAAM0aPIhcjC_wGPO13xXitRQoo176TsAAsCEAAL_HJFLkwAB16z3myPKNgQ',
  WHAT_IF_NOT_LIKE_PHOTO: 'AgACAgIAAxkBAAPKaPi26Lkwp9W1yu6x8r5vUGUuv1IAArf0MRtOtchLHZvwZlZuj-wBAAMCAAN5AAM2BA',
};

const MESSAGES = {
  WELCOME: '*Добро пожаловать* ❤️',

  ALREADY_SUBSCRIBED: `ℹ️ В этом боте можно только получать информацию и уведомления.\n\nЕсли нужен администратор:\n- Напишите нам в [WhatsApp](https://wa.me/79527323738)\n- [Telegram](https://t.me/chesse_master)\n- Или позвоните: +7 (952) 732-37-38\n- my-cheese.ru`,

  CONTACT_US: `По всем вопросам вам помогут наши администраторы 💡\n\n- Напишите нам в [WhatsApp](https://wa.me/79527323738)\n- [Telegram](https://t.me/chesse_master)\n- Или позвоните: +7 (952) 732-37-38\n- my-cheese.ru`,

  HOW_PRESENT_LOOKS: `🎁 *Как выглядит подарок*\n\nВаш подарок - это не просто сыр, это целое путешествие в мир гастрономии!\n\nПолностью упакован и готов к вручению в любую минуту!`,

  WHAT_RECEIVER_SEES: `👀 *Что увидит получатель подарка?*\n\nПосмотрите видео-инструкцию для получателя.\n\nМы можем дополнить Ваш подарок личными пожеланиями.\nВсё это будет под пломбой прямо в коробке.\nПолучатель увидит их в момент распаковки.`,

  WHERE_PRODUCED: `🏭 *Где и из чего производится сыр?*\n\nНаш сыр производится в *Никольской Слободе* - месте с многолетними традициями сыроварения.\n\n🥛 Только натуральное молоко высшего качества\n🌿 Без искусственных добавок и консервантов\n👨‍🍳 Традиционные технологии производства\n✅ Полный контроль качества на всех этапах\n\n[Перейти на сайт Никольской Слободы](https://nksl.ru/about)`,

  WHAT_DIFFERENCE: `⭐ *В чём эксклюзив*\n\n➔ Такой подарок получат только от ВАС\n➔ Целая сырная голова весом 3-4 кг. созданная в единственном экземпляре\n➔ Созревание под личным контролем 24/7`,

  CAN_VISIT: `🚗 *А можно на экскурсию?*\n\nКонечно!  *Никольская Слобода* устраивает экскурсии!\n\n[Записаться на экскурсию](https://nksl.ru/farm#rec743690219)`,

  WHAT_IF_NOT_LIKE: `🤔 *А вдруг не понравится?*\n\n➔ Получатель сам выберет любимый сорт сыра.\n➔ Будет наблюдать за процессом созревания.\n➔ Вы держали в руках целую сырную голову? Понравиться ВСЕМ!`,

  HOW_TO_BUY: `💳 *Как приобрести | 🚚 Доставка*\n\nНапишите нам в:\n- [WhatsApp](https://wa.me/79527323738)\n- [Telegram](https://t.me/chesse_master)\n- Или позвоните: +7 (952) 732-37-38\n- my-cheese.ru\n\nДоставим по Екатеринбургу быстро и бесплатно.\n\n*Это не просто подарок - это путешествие в мир гастрономии.*`,
};

module.exports = { BUTTONS, KEYBOARDS, FILE_IDS, MESSAGES };
