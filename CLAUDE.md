# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # development with auto-restart via nodemon
npm start      # production start (node src/index.js)
```

No build step, no test suite, no linter.

## Environment

Copy `.env.example` to `.env` and fill in:
- `BOT_TOKEN` — Telegram bot token
- `API_SECRET` — shared secret for the Laravel → bot HTTP API
- `PORT` — defaults to 3000

## Architecture

A stateless Telegram bot for a Russian cheese shop (`my-cheese.ru`), running in **webhook mode**. No database, no session state.

**`src/index.js`** — Express entry point with two routes:
- `POST /webhook` — receives Telegram updates, responds 200 immediately, then calls `handleUpdate()` async
- `POST /api/send-message` — internal API for a Laravel backend to push messages; protected by `Authorization: Bearer <API_SECRET>`

**`src/handlers.js`** — dispatches on `message.text` (button labels or slash commands) to one of nine handler functions, each sending a response via `src/telegram.js`

**`src/telegram.js`** — thin axios wrapper around the Telegram Bot API (`sendMessage`, `sendPhoto`, `sendVideo`, `sendMediaGroup`); all text uses `parse_mode: 'Markdown'`

**`src/constants.js`** — single source of truth for all static content: button label strings (Russian), two keyboard layouts (`DEFAULT` 2×4 grid and `BACK`), hardcoded Telegram `file_id` values for pre-uploaded media, and all bot response text

**Data flow:**
```
Telegram → POST /webhook → handleUpdate() → handler → tg.*() → Telegram Bot API
Laravel  → POST /api/send-message → tg.sendMessage() → Telegram Bot API
```

When adding a new menu item: add the button label to `BUTTONS` and keyboard layout in `constants.js`, add the response text/file IDs there too, then add a handler function in `handlers.js` and wire it into the `handleUpdate` dispatch.
