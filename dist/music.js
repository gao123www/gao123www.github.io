const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "曾经的你",
        artist: '许巍',
        url: 'http://www.ytmp3.cn/down/46793.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550763116505&di=6c1c9941b3a249eab230192043e3a536&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012f4a582436d2a84a0e282ba6db98.jpg%401280w_1l_2o_100sh.jpg',
      },
      {
        name: '回忆里的那个人',
        artist: '李行亮',
        url: 'http://www.ytmp3.cn/down/32128.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550763160237&di=974dcda1787f9ca9fa03613027c888f9&imgtype=0&src=http%3A%2F%2Fimg.5nd.com%2Fphoto%2F2013album%2F201410%2F64577.jpg',
      },
      
    ]
});