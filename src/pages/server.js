var app = require("express")();
var bodyParser = require("body-parser");

app.use(bodyParser.json()) //use专门使用中间件的方法
app.use(bodyParser.urlencoded({ //使用url编码来处理form表单提交的post请求
   extended: true
}))


app.get("/index",function(req,res){
  console.log(req.body)
   res.json({
   	 
         		joblist:[{
                        "positionId": 2556858,
                        "positionName": "Web前端工程师",
                        "city": "成都",
                        "createTime": "昨天 09:56",
                        "salary": "20k-30k",
                        "companyId": 150134,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/5E/D2/CgqKkVfs3OaAaxyFAAO24Szt7Io547.png",
                        "companyName": "德誉网络",
                        "companyFullName": "成都德誉电子科技有限公司"
                    },
                    {
                        "positionId": 2735603,
                        "positionName": "Web前端Leader",
                        "city": "成都",
                        "createTime": "今天 08:49",
                        "salary": "18k-20k",
                        "companyId": 30148,
                        "companyLogo": "http://www.lgstatic.com/image1/M00/00/43/CgYXBlTUXNOAB9zQAACiK-dB8kg706.jpg",
                        "companyName": "海南航空",
                        "companyFullName": "海南航空股份有限公司"
                    },
                    {
                        "positionId": 2889754,
                        "positionName": "PHP架构师/PHP高级工程师",
                        "city": "成都",
                        "createTime": "昨天 09:53",
                        "salary": "20k-30k",
                        "companyId": 33179,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/30/1C/CgpFT1k5HyuAc11WAAEB4bMyYyg889.jpg",
                        "companyName": "掌麦科技",
                        "companyFullName": "四川掌麦科技有限公司"
                    },
                     {
                        
                        "positionId": 3271545,
                        "positionName": "java招商经理/招商主管",
                        "city": "广州",
                        "createTime": "今天 15:57",
                        "salary": "6k-12k",
                        "companyId": 196450,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/17/3B/CgpFT1j-xwmAOpRVAABWv_N_V2g980.jpg",
                        "companyName": "飞人网络",
                        "companyFullName": "广州飞人网络科技有限公司"
                    },
                    {
                       
                        "positionId": 3274891,
                        "positionName": "java产品运营",
                        "city": "广州",
                        "createTime": "今天 15:55",
                        "salary": "5k-8k",
                        "companyId": 147898,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/59/B8/CgqKkVfZH_uAF8znAAA0bBI3Ep8805.png",
                        "companyName": "糖谷游戏",
                        "companyFullName": "广州糖谷信息科技有限公司"
                    },
                    {
                        "positionId": 3269904,
                        "positionName": "PHP架构师",
                        "city": "天津",
                        "createTime": "今天 15:55",
                        "salary": "6k-8k",
                        "companyId": 92931,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/2B/83/CgpFT1kvqu2Acq8aAACPuLnbQ5M586.png",
                        "companyName": "捷普科技（上海）有限公司",
                        "companyFullName": "捷普科技（上海）有限公司"
                    },
                    {
                       
                        "positionId": 3272605,
                        "positionName": "web系统工程师",
                        "city": "深圳",
                        "createTime": "今天 15:55",
                        "salary": "8k-15k",
                        "companyId": 159292,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/76/A7/Cgp3O1g2VsKAQMouAABPiGFYZvk328.png",
                        "companyName": "擎力文化",
                        "companyFullName": "深圳擎力文化有限公司"
                    },
                    {
                        
                        "positionId": 3272859,
                        "positionName": "html广告投放专员",
                        "city": "广州",
                        "createTime": "今天 15:54",
                        "salary": "5k-10k",
                        "companyId": 203718,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/27/D6/CgpEMlkcEWmAT4ONAAAXRR2Ab80628.png",
                        "companyName": "青蜂信息",
                        "companyFullName": "广州青蜂信息科技有限公司"
                    },
                    {
                        "positionId": 3273265,
                        "positionName": "html前端/HTML5开发工程师",
                        "city": "温州",
                        "createTime": "今天 15:54",
                        "salary": "5k-8k",
                        "companyId": 155441,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/38/A7/CgpEMllDbPeAJfK9AAJvdpk8FkA405.png",
                        "companyName": "温州泊啤汇网络科技有限公司",
                        "companyFullName": "温州泊啤汇网络科技有限公司"
                    }
                    ]
   });
})

app.get("/api/index",function(req,res){
  console.log(req.body)
   res.json({
        joblist:[
            {
                        "positionId": 3272220,
                        "positionName": "PHP开发工程师",
                        "city": "上海",
                        "createTime": "今天 15:52",
                        "salary": "15k-30k",
                        "companyId": 197709,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/18/19/CgpFT1kAOoeAPFUCAAAnHHZSZmQ043.png",
                        "companyName": "优锐",
                        "companyFullName": "优锐医药科技（上海）有限公司"
                    },
                    {
                       
                        "positionId": 3270529,
                        "positionName": "大客户销售经理",
                        "city": "北京",
                        "createTime": "今天 15:50",
                        "salary": "10k-18k",
                        "companyId": 42369,
                        "companyLogo": "http://www.lgstatic.com/image2/M00/04/81/CgqLKVXyK3OAfaHsAAAbS4BZIUI843.png",
                        "companyName": "ETCP",
                        "companyFullName": "北京悦畅科技有限公司"
                    },
                    {
                        "positionId": 3270616,
                        "positionName": "客服专员",
                        "city": "北京",
                        "createTime": "今天 15:50",
                        "salary": "4k-6k",
                        "companyId": 42369,
                        "companyLogo": "http://www.lgstatic.com/image2/M00/04/81/CgqLKVXyK3OAfaHsAAAbS4BZIUI843.png",
                        "companyName": "ETCP",
                        "companyFullName": "北京悦畅科技有限公司"
                    },
                    {
                       
                        "positionId": 3270676,
                        "positionName": "客服",
                        "city": "北京",
                        "createTime": "今天 15:45",
                        "salary": "4k-7k",
                        "companyId": 23727,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/00/6D/CgqKkVZJj_qAIz4tAAAZsDXnarY482.jpg",
                        "companyName": "知网",
                        "companyFullName": "同方知网（北京）技术有限公司"
                    }, {
                        "positionId": 3272220,
                        "positionName": "PHP开发工程师",
                        "city": "上海",
                        "createTime": "今天 15:52",
                        "salary": "15k-30k",
                        "companyId": 197709,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/18/19/CgpFT1kAOoeAPFUCAAAnHHZSZmQ043.png",
                        "companyName": "优锐",
                        "companyFullName": "优锐医药科技（上海）有限公司"
                    },
                    {
                       
                        "positionId": 3270529,
                        "positionName": "大客户销售经理",
                        "city": "北京",
                        "createTime": "今天 15:50",
                        "salary": "10k-18k",
                        "companyId": 42369,
                        "companyLogo": "http://www.lgstatic.com/image2/M00/04/81/CgqLKVXyK3OAfaHsAAAbS4BZIUI843.png",
                        "companyName": "ETCP",
                        "companyFullName": "北京悦畅科技有限公司"
                    },
                    {
                        "positionId": 3270616,
                        "positionName": "客服专员",
                        "city": "北京",
                        "createTime": "今天 15:50",
                        "salary": "4k-6k",
                        "companyId": 42369,
                        "companyLogo": "http://www.lgstatic.com/image2/M00/04/81/CgqLKVXyK3OAfaHsAAAbS4BZIUI843.png",
                        "companyName": "ETCP",
                        "companyFullName": "北京悦畅科技有限公司"
                    },
                    {
                       
                        "positionId": 3270676,
                        "positionName": "客服",
                        "city": "北京",
                        "createTime": "今天 15:45",
                        "salary": "4k-7k",
                        "companyId": 23727,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/00/6D/CgqKkVZJj_qAIz4tAAAZsDXnarY482.jpg",
                        "companyName": "知网",
                        "companyFullName": "同方知网（北京）技术有限公司"
                    }
                ]
          
   });
})
app.get("/api/pp/index",function(req,res){
  console.log(req.body)
   res.json({
        joblist:[
            {
                        "positionId": 3272220,
                        "positionName": "PHP开发工程师",
                        "city": "上海",
                        "createTime": "今天 15:52",
                        "salary": "15k-30k",
                        "companyId": 197709,
                        "companyLogo": "http://www.lgstatic.com/i/image/M00/18/19/CgpFT1kAOoeAPFUCAAAnHHZSZmQ043.png",
                        "companyName": "优锐",
                        "companyFullName": "优锐医药科技（上海）有限公司"
                    }
                ]
          
   });
})
app.listen(8090,function(){
   console.log("启动成功！")
});