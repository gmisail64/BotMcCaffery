var Discord = require('discord.js')

const Client = new Discord.Client()

var pester_david = false

function send_text_to_speech(message_event, text)
{
    message_event.reply(text, {tts: true})
}

function on_message_recieved(e)
{
    var message = e.content.toLowerCase()
    if(message == "never gonna")
    {
        send_text_to_speech(e, "give you up, never gonna let you down, Never gonna run around and desert you, Never gonna make you cry, never gonna say goodbye, Never gonna tell a lie and hurt you")
    }
    else if(message == "hey now")
    {
        e.reply("https://www.youtube.com/watch?v=L_jWHffIx5E")
    }
    else if(message == "rick")
    {
        e.reply("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
    else if(message == "$400")
    {
        e.reply("http://www.dryships.com/")
    }
    else if(message == "where is my money?")
    {
        e.reply(":flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: :flag_gr: ")
    }
    else if(message == "toggle david")
    {
        if(message.author.id == "8601")
        {
            e.reply("David Stop.")
        }
    }
}

Client.on('message', on_message_recieved)

Client.login(process.env.BOT_TOKEN)