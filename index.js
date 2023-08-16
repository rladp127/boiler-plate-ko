// backend 서버의 시작점

const express = require('express'); // express 모듈 가져오기
const app = express() // 함수 사용해서 앱 만들기
const port = 5000 // 아무거나 해도 됨!

const bodyParser = require('body-parser'); // client 의 정보 받아 줌
const { User } = require("./models/User");

const config = require('./config/key');
 
// application/x-www-form-urlencoded 타입 분석
app.use(bodyParser.urlencoded({extended: true}));
// application/json 타입 분석
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
        w: 'majority', // or your preferred write concern value
    },
}).then(() => console.log('MongoDB Connected....'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 안녕하세요.')) // 루트 디렉토리에, Hello world 출력

app.post('/register', (req, res) => { // 회원가입을 위한 route
    // 회원가입 시 필요한 정보들을 client 에서 가져오면 
    // 그것들을 DB 에 넣어 줌.

    const user = new User(req.body)

    user.save((err, userInfo) => { // mongoDB method
        if (err) return res.json({ success: false, err})
        return res.status(200).json ({
            success: true
        })
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // 5000번에서 앱 실행