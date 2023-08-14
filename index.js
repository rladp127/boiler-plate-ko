// backend 서버의 시작점

const express = require('express'); // express 모듈 가져오기
const app = express() // 함수 사용해서 앱 만들기
const port = 5000 // 아무거나 해도 됨!

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rladp127:dPdls1217!@youtubeclone.macg1yz.mongodb.net/?retryWrites=true&w=majority', {
    // useNewUrlParse: true, userUnifiedTopology: true, 
    // useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected....'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World! 안뇽')) // 루트 디렉토리에, Hello world 출력

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // 5000번에서 앱 실행