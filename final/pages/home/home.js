// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */

  data: {
    indicatorDots: true,
    show: false,
    tips:"tips:点击",
    consumecal:0,
    intakecal:0,
    swiperCurrent:0,
    avatarUrl:'',
    nickname:'',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    dbw:'期望体重:',
    intake:'今日已摄入热量：',
    output:'今日运动消耗热量：',
    DBW:app.aData.dbw,
    kg:'KG',
    slider: [
      {picUrl: 'http://a1.qpic.cn/psc?/V13wS44R2OtLTh/.35sY8zpnPlhVlJz3hDe0wOAcuBRmAAcZ0wJoZmKKDI6Wg3.woOfyETe4YDptr2WoRvRwv5phfLWprMqpu07Kw!!/b&ek=1&kp=1&pt=0&bo=tQHlALUB5QARADc!&tl=1&tm=1594872000&sce=0-12-12&rf=viewer_311'},
      {picUrl: 'http://a1.qpic.cn/psc?/V13wS44R2OtLTh/.35sY8zpnPlhVlJz3hDe0ydap4fIe*FCAO36ViL*BtOgsrpdHpwuo5QEfmWtvk.DwsexyUpOufXMm9T5AS6OwA!!/b&ek=1&kp=1&pt=0&bo=qgFHAKoBRwARADc!&tl=1&tm=1594872000&sce=0-12-12&rf=viewer_311'},
      {picUrl: 'http://a1.qpic.cn/psc?/V13wS44R2OtLTh/.35sY8zpnPlhVlJz3hDe0.lcHPc3lLnzSz*UzChnfjjn1HcxJZCoixXMEuPH1ktPsLAihY3QgKZy2mE2lDb.DQ!!/b&ek=1&kp=1&pt=0&bo=iwF2AIsBdgARADc!&tl=1&vuin=1978468912&tm=1594872000&sce=50-1-1&rf=viewer_311'},
   
      ],
      swiperCurrent: 0,
    msgList: [
      { 
        title: "体脂率为：" },
      { title: "您的健康体重为：" },
      { title: "您每日所需的热量为:" },
      { title: "您的基础代谢为:" },
      {title: "BMI:"}
      ],
    showModal: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    showModal5: false

    }

  ,
 

  jump: function (e) {

    this.setData({
     show:true,
    
    }); 
  },
  onClose() {
    this.setData({ close: false });
  },
  swiperChange: function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
 
  hideModal: function (e) {

    this.setData({
      showModal: false,
    
    }); 
  },
  hideModal2: function (e) {

    this.setData({
    
      showModal2: false
    }); 
  },
  hideModal3: function (e) {

    this.setData({
    
      showModal3: false
    });
  },
  hideModal4: function (e) {

    this.setData({
    
      showModal4: false
    }); 
  },
  hideModal5: function (e) {

    this.setData({
    
      showModal5: false
    }); 
  },
  getCurIdx(e){
   
      
      
      this.data.swiperCurrent=e.detail.current;
     
    },
  swipclick: function (e) {
    console.log(this.data.swiperCurrent)
    var flag=this.data.swiperCurrent
    if(flag==0){
      this.setData({
        showModal: true
  
      })
    }
    else if(flag==1){
      this.setData({
        showModal2: true
  
      })
    }
    else if(flag==2){
      this.setData({
        showModal3: true
  
      })
    }
    else if (flag==3){
      this.setData({
        showModal4: true
  
      })
    }
    else if (flag==4){
      this.setData({
        showModal5: true
  
      })
    }
  },

 onShow:function(){
  var that=this
  
  var timestamp=Date.parse(new Date());
  var date=new Date(timestamp);
  var Y=date.getFullYear();
  var M=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1)
  var  D=date.getDate()<10?'0'+date.getDate():date.getDate();
  var da=Y+'-'+M+'-'+D;
    
  wx.request({
   url: 'https://kcal.applinzi.com/UpsetItake.php?IN=' + 0+'&date='+da+'&openid='+app.aData.openid  ,
   
   data: {
   
   },
   header: {
     'content-type': 'application/json'
   },
   success: function (res) {
     //打印用户信息
     console.log("ok",res)
  
         that.setData({
 
    intakecal:res.data
  })
   },
 
   
 }),
 wx.request({
  url: 'https://kcal.applinzi.com/UpsetConsume.php?IN=' + 0+'&date='+da+'&openid='+app.aData.openid  ,
  
  data: {
  
  },
  header: {
    'content-type': 'application/json'
  },
  success: function (res) {
    //打印用户信息
    
    console.log(res)
  that.setData({consumecal:res.data})
  
  },

  
})

  
 
 },
  onLoad:function()
  
  {  
     console.log("这是home",app.aData.DateArray)
     var that=this
     wx.showLoading({
       title: '加载中',
       complete: (res) => {},
       fail: (res) => {},
       mask: true,
       success: (res) => {},
     })
    setTimeout(function () { 
      console.log("11",app.aData)
     var tempdata=[]
     app.aData.BMI=(app.aData.weight/(app.aData.tall*app.aData.tall/10000)).toFixed(2)

  tempdata.push({title:"体脂率为："+app.aData.BFR+"%"})
  tempdata.push({ title: "健康体重为："+app.aData.DBweight+"KG" })
  tempdata.push({ title: "每日所需热量为:"+app.aData.BMR+"KCAL" })
  tempdata.push({ title: "每日基础代谢为:"+app.aData.DBM+"KCAL"}) 
  tempdata.push({ title: "BMI为:"+app.aData.BMI})
  console.log("显示",app.aData)
  that.setData({
    avatarUrl:app.aData.avatarUrl,
    nickname:app.aData.nickName,
    msgList:tempdata
  });
  wx.hideLoading()
   }, 1000)
   
    // console.log("???",res)
   
 
} 
, bindveiw: function() {
    console.log("this：",app.aData.avatarUrl)
    wx.navigateTo({
      url: '../id/id'
    })
  },
  jump1:function(){
    wx.navigateTo({
      url: '../line/line'
    })
  }
,
 
   //滑动事件监听
   swiperChange:function(event){
    this.setData({
      currentSwiper: event.detail.current
    });
  },

//banner点击事件
  tapBanner:function(event){
    //下面介绍两种banner 点击获取数据事件
    // 1. 通过数据源获取
    var indexUrl = this.data.imgUrls[this.data.currentSwiper];
    console.log(indexUrl);
    // 2 . 也可以通过自定义属性获取
    var url = event.currentTarget.dataset.indexurl;
    console.log(url);

  }

 
})