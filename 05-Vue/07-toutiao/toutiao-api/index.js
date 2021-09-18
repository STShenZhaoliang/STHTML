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

// 获取用户搜索列表
app.get('/app/v1_0/suggestion', (req, res) => {
    console.log(req.body)
    // res.send('authorizations')
    res.json({
        data: {
            options: ['st1', 'st2', 'st3']
        }
    });
})

// 获取用户搜索结果列表
app.get('/app/v1_0/search', (req, res) => {
    console.log(req.body)
    // res.send('authorizations')
    res.json({
        data: {
            results: [
                {
                    title: 'search1'
                },
                {
                    title: 'search2'
                },
                {
                    title: 'search3'
                }
            ]
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
            },{
                id: 5,
                name: '体育5'
            }, {
                id: 6,
                name: '体育6'
            }, {
                id: 7,
                name: '体育7'
            }, {
                id: 8,
                name: '体育8'
            }, {
                id: 9,
                name: '体育9'
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
                art_id: 1,
                title: "title",
                cover: {
                    type: 1,
                    images: []
                },
                aut_name: 'aut_name',
                comm_count: 1000,
                pubdate: '2021-09-18 10:08:01'
            }],
            pre_timestamp: 111
        }
    });
})

// 获取文章
app.get('/app/v1_0/articles/:id', (req, res) => {
    console.log('axios get (Restful) 传递参数' + req.params.id)
    res.json({
        data: {
            title: "标题111111",
            aut_photo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dlrfN1istVGYhf9cKLSnDAHaLH?w=192&h=288&c=7&r=0&o=5&dpr=2&pid=1.7",
            aut_name: "作者22222",
            pubdate: '2021-09-18 11:18:49',
            is_followed: true,
            aut_id: 111,
            content: `
            <p>孙中亮说：“从这个角度讲，随着我国北斗三号投入运行，实现了空间段的高可靠性，提供了技术支撑。再加上毫米波雷达摄像头等传感器，通过融合计算，实现汽车自动驾驶这样一种汽车智慧交通。”</p>
    <div style='text-align:center'>
        <img src='http://i2.chinanews.com.cn/simg/cmshd/2021/09/17/8dd46dc3f206438296d7805b4d672ad9.jpg' style='border:px solid #000000' ></div>
    <div style='text-align: left; text-indent: 2em;'>华大北斗总经理孙中亮接受记者采访。<a target='_blank' href='http://www.chinanews.com/' >中新网</a>记者 张旭 摄</div>
    <p>自动驾驶不仅关系到车，也关系到路，在车路协同方面，北斗能够发挥什么作用？</p>`,
            art_id: '23',
            is_collected: true,
            attitude: true
        
        }
    });
})

// 启动监听
app.listen(3000, () => {
    console.log('running...')
})
