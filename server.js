// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// ミドルウェアの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// ルートエンドポイント
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// メッセージを受け取ってファイルに書き込むエンドポイント
app.post('/submit', (req, res) => {
    const message = req.body.message;
    fs.appendFile('messages.txt', message + '\n', (err) => {
        if (err) {
            return res.status(500).send('Error writing to file');
        }
        res.send('Message saved!');
    });
});

// サーバーの起動
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});