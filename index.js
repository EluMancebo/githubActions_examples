require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_ID_USER;

if (!token || !chatId) {
  console.error(
    "Error: TELEGRAM_TOKEN o TELEGRAM_ID_USER no están configurados."
  );
  process.exit(1);
}

const bot = new TelegramBot(token);

bot
  .sendMessage(
    chatId,
    "¡Hola desde GitHub Actions! Tu mensaje ha sido enviado exitosamente."
  )
  .then(() => console.log("Mensaje enviado con éxito."))
  .catch((error) => {
    console.error("Error al enviar el mensaje:", error);
    process.exit(1);
  });
