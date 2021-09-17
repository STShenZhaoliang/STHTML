const express = require('express')
const app = express()
    // const bodyParser = require('body-parser')
    // 处理静态资源
app.use(express.static('public'))
    // 处理参数
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 设置允许跨域访问该服务
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/async1', (req, res) => {
    res.send('hello1')
})
app.get('/async2', (req, res) => {
    if (req.query.info == 'hello') {
        res.send('world')
    } else {
        res.send('error')
    }
})

app.get('/adata', (req, res) => {
    res.send('Hello axios!')
})
app.get('/axios', (req, res) => {
    res.send('axios get 传递参数' + req.query.id)
})
app.get('/axios/:id', (req, res) => {
    res.send('axios get (Restful) 传递参数' + req.params.id)
})
app.delete('/axios', (req, res) => {
    res.send('axios delete 传递参数' + req.query.id)
})
app.post('/axios', (req, res) => {
    res.send('axios post 传递参数' + req.body.uname + '---' + req.body.pwd)
})
app.put('/axios/:id', (req, res) => {
    res.send('axios put 传递参数' + req.params.id + '---' + req.body.uname + '---' + req.body.pwd)
})

app.get('/axios-json', (req, res) => {
    res.json({
        uname: 'lisi',
        age: 12
    });
})


app.get('/fdata', (req, res) => {
    res.send('Hello Fetch!')
})
app.get('/books', (req, res) => {
    res.send('传统的URL传递参数!' + req.query.id)
})
app.get('/books/:id', (req, res) => {
    res.send('Restful形式的URL传递参数!' + req.params.id)
})
app.delete('/books/:id', (req, res) => {
    res.send('DELETE请求传递参数!' + req.params.id)
})
app.post('/books', (req, res) => {
    res.send('POST请求传递参数!' + req.body.uname + '---' + req.body.pwd)
})
app.put('/books/:id', (req, res) => {
    res.send('PUT请求传递参数!' + req.params.id + '---' + req.body.uname + '---' + req.body.pwd)
})

app.get('/json', (req, res) => {
    res.json({
        uname: 'lisi',
        age: 13,
        gender: 'male'
    });
})

app.get('/a1', (req, res) => {
    setTimeout(function() {
        res.send('Hello TOM!')
    }, 1000);
})
app.get('/a2', (req, res) => {
    setTimeout(function() {
        res.send('Hello JERRY!')
    }, 2000);
})
app.get('/a3', (req, res) => {
    setTimeout(function() {
        res.send('Hello SPIKE!')
    }, 3000);
})

// 路由
app.get('/data', (req, res) => {
    res.send('Hello World!')
})
app.get('/data1', (req, res) => {
    setTimeout(function() {
        res.send('Hello TOM!')
    }, 1000);
})
app.get('/data2', (req, res) => {
    res.send('Hello JERRY!')
})

// 头条移动端
// 登录接口
app.post('/app/v1_0/authorizations', (req, res) => {
    console.log(req.body)
    // res.send('authorizations')
    res.json({
        data: 'authorizations'
    });
})

// 获取用户信息接口
app.get('/app/v1_0/user', (req, res) => {
    console.log(req.body)
    // res.send('authorizations')
    res.json({
        data: {
            photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
            name: 'st',
            art_count: 1001,
            follow_count: 2000,
            fans_count: 3000,
            like_count: 4000
        }
    });
})

// 获取用户频道列表
app.get('/app/v1_0/user/channels', (req, res) => {
    console.log(req.body)
    // res.send('authorizations')
    res.json({
        data: {
            channels: [{
                id: 0,
                name: '体育0'
            }, {
                id: 1,
                name: '体育1'
            }, {
                id: 2,
                name: '体育2'
            }, {
                id: 3,
                name: '体育3'
            }, {
                id: 4,
                name: '体育4'
            }]
        }
    });
})

// 获取频道列表
app.get('/app/v1_0/channels', (req, res) => {
    console.log(req.body)
    // res.send('authorizations')
    res.json({
        data: {
            channels: [{
                id: 0,
                name: '体育0'
            }, {
                id: 1,
                name: '体育1'
            }, {
                id: 2,
                name: '体育2'
            }, {
                id: 3,
                name: '体育3'
            }, {
                id: 4,
                name: '体育4'
            }]
        }
    });
})

// 获取文章列表
app.get('/app/v1_1/articles', (req, res) => {
    console.log(req.body)
    // res.send('authorizations')
    res.json({
        data: {
            results: [{
                title: "title",
                cover: {
                    type: 1,
                    images: []
                },
                aut_name: 'aut_name',
                comm_count: 1000,
                pubdate: '2021年09月16日18:09:02'
            }],
            pre_timestamp: 111
        }
    });
})

// 启动监听
app.listen(3000, () => {
    console.log('running...')
})
