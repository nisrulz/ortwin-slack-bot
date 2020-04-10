# How to build a slack bot in 2020

# Install Botkit
```
npm install -g yo generator-botkit
```

# Create your bot
```
mkdir mybot && cd mybot && yo botkit
```
When asked for messaging platform, select `slack`

# Start your bot
```
npm start
```
If you set it up properly
> `Webhook endpoint online:  http://localhost:3000/api/messages`

[Read more](https://botkit.ai/getstarted.html)


Now,

1. [Create a Slack app](https://api.slack.com/apps/new) (if you don't already have one).
1. Add a Bot User and configure your bot user with some basic info (display name, default username and its online presence).
1. Once you've completed these fields, click Add Bot User.
1. Next, give your bot access to the Events API.
1. Finally, add your bot to your workspace.