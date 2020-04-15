module.exports = {

    reactWithEmoji: async function (bot, message, emojiList) {
        return emojiList.forEach(emoji => {
            bot.api.reactions.add({
                timestamp: message.ts,
                channel: message.channel,
                name: emoji,
            }, function (err, res) {
                if (err) {
                    bot.botkit.log('Failed to add emoji reaction :(', err);
                }
            });
        })
    },


    getTextMessageBlock: async function (title) {
        let msg = {
            "blocks": [
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "plain_text",
                        "text": title,
                        "emoji": true
                    }
                }
            ]
        }
        return msg
    },

    getImgMessageBlock: async function (url, title) {
        let imgMessage = {
            "blocks": [
                {
                    "type": "image",
                    "title": {
                        "type": "plain_text",
                        "text": title,
                        "emoji": true
                    },
                    "image_url": url,
                    "alt_text": title
                }
            ]
        }
        return imgMessage
    },

    getImgMessageWithTextBlock: async function (url, title) {
        let msg = {
            "blocks": [
                {
                    "type": "divider"
                },
                {
                    "type": "image",
                    "title": {
                        "type": "plain_text",
                        "text": "Image",
                        "emoji": true
                    },
                    "image_url": url,
                    "alt_text": "Image"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "plain_text",
                        "text": title,
                        "emoji": true
                    }
                }
            ]
        }
        return msg
    }

}

