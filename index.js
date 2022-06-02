const { Telegraf } = require('telegraf')

const bot = new Telegraf('5426815210:AAG_eyLkha4BSRwhnraGJKqBM04LFaUz30c'); //сюда помещается токен, который дал botFather

var users = {};

bot.start((ctx) => {
    ctx.reply('Welcome')
    users[ctx.chat.id] = [];
}) 

bot.help((ctx) =>{
    ctx.reply('Вы можете прислать мне любую ссылку, а я ее запомню для вас. Круто, правда?')
})

bot.command("/show", (ctx) =>{
    users[ctx.chat.id].forEach((element) => {
        ctx.reply(element);
      })
    
})

bot.command('/registr', (ctx) => {
    ctx.reply(`Ваш УНИКАЛЬНЫЙ id для регистрации на сайте:`)
    ctx.reply(ctx.chat.id);
})


//ctx.message.text
bot.on("text", (ctx) => {
    try{
        users[ctx.chat.id].push(ctx.message.text);
        ctx.reply('Запомнил!');
    }
    catch{
        ctx.reply('Кажется, вы не нажали /start \nИсправляйтесь');
    }
    
  });

bot.launch();

console.log('Server-side code running');

const express = require('express');

const app = express('express');

app.use(express.json());

app.listen(3000, () => {
    console.log('listening on http://localhost:3000/');
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
  
app.get('/client.js', (req, res) => {
    res.sendFile(__dirname + '/public/client.js');
  });

app.post('/orders', (req, res) => {
    res.send(users[req.body[1]]);
});

app.post('/addlink', (req, res) => {
    users[req.body[1]].push(req.body[2])
    res.send(201);
});