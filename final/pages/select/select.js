// pages/select/select.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showvalue1:'',
    select:"食物热量查询",
    value:''
  },
  btn:function(e){ 
    var that=this
    wx.request({
      url: 'https://api.tianapi.com/txapi/nutrient/index?key=e451a680a0a3f018f61d9ecde40fd854&mode=0',
      data:{
        word:this.data.showvalue1
      },
      success(res){
        console.log(res)
        wx.showLoading({
          title: '加载中',
          complete: (res) => {},
          fail: (res) => {},
          mask: true,
          success: (res) => {},
        })
      if(that.data.showvalue1!=''){
         if(res.data.msg=="success"){
         
         app.globalData.foodcal= res.data.newslist[0].rl,
         app.globalData.foodgram= 100
        app.globalData.selectedfood= res.data.newslist[0].name
        that.setData({showvalue1:''})
      
          wx.navigateTo({
          url: '../selem/selem'
         })
         wx.hideLoading()
      }
      else{
        console.log("失败")
        wx.showToast({
          title: '该美食暂未收录',
          icon: '',
          image: '../image/baocuo.png',
          duration: 1000,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        that.setData({showvalue1:''})
        wx.hideLoading()
      }
      }
      else{
        wx.showToast({
          title: '请输入食物名称',
          icon: '',
          image: '../image/baocuo.png',
          duration: 1000,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        wx.hideLoading()
      }
     
   
      }
    })
  
  },
  inputone:function(e){
    console.log(e)
    this.setData({
      showvalue1:e.detail,
    
    })
    
  },
  cler:function(){
    this.setData({
      showvalue1:''
    })
  },
 
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onClick() {
   
    wx.navigateTo({
      url: '../selem/selem'
    })
  },
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})