// pages/home/home.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
     myText : "你好我是home页面",
     toView: 'red',
     scrollTop: 100,
     name: ''
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
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
  
  },

  // bindMusicNameInput监听用户输入
  bindMusicNameInput: function (e) {
    this.setData({
      name: e.detail.value,
    });
  },
  // bindSearch搜索按钮触发
  bindSearch: function (e) {
    console.log(this.data)
    this.getMusicInfos(this.data.name);
  },
  // getMusicInfos发送http请求
  getMusicInfos: function (musicname) {
    wx.request({
      method: 'POST',
      url: 'http://127.0.0.1:3000', //访问node端后台接口
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        musicname: musicname,
      },
      success: (res) => {
        // 把返回的歌曲列表设定为list中的数据
        /* this.setData({
          list: res.data,
          showContainer: false,
        }); */
        console.log('请求node成功')
      },
      error: () => {
        console.log('err');
      }
    });
  },
})