import telebot

bot = telebot.TeleBot("")

@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
	bot.reply_to(message, "http://t.me/rorinaomi_bot/Rorinaomi_clicker")

@bot.message_handler(func=lambda message: True)
def echo_all(message):
	bot.reply_to(message, "пожалуйста, перейди по ссылке: http://t.me/rorinaomi_bot/Rorinaomi_clicker")

 bot.infinity_polling()