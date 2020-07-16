//app.js
//const clo = require('wx-server-sdk')
//clo.init()
const that=this
const runtime=require("utils/regenrator-runtime/runtime.js")

App({

  
  onLaunch: function () {
    wx.cloud.init({
      env:"tycloud-r9mxs",
      traceUser:true
    })
   

    
   
   











   //this.globalData.Daitotal=10
    // console.log("qu")
    // console.log(this.globalData.Daitotal)

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
    
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    })
    
  },
 
 
  globalData: {
   Pagelineflag:0,
   DateArray:['日期'],
    IncalArray:['摄入热量'],
    ConcalArray:['运动消耗热量'],
    userInfo: null,
    selectedfood:'',
    foodgram:'',
    foodcal:''
  },
  aData:{   
      selectedfood:'',
    foodgram:'',
    foodcal:'',
    consumecal:0,
    intakecal:0,
    DBweight:0,
    age:0,
    sex:'',
    tall:0,
    weight:0,
    openid:0,
    nickName:'',
    avatarUrl:'',
    BMR:0,
    DBM:0,
    BFR:0,
    BMI:0
  }
})