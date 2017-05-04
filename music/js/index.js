$(document).ready(function(){


  var playlist = [{
      title:"Try Everything",
      artist:"Shakira",
      mp3:"http://up.haoduoge.com:82/mp3/2017-04-09/1491750713.mp3",
      poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493888472871&di=37c2cbc0e3b952b22b502542abbb6de0&imgtype=0&src=http%3A%2F%2Fcs.vmoiver.com%2FUploads%2Fcover%2F2016-03-11%2F56e264fa0a836_cut.jpeg%40600w_400h_1e_1c.jpg"
    },{
      title:"Faded",
      artist:"Alan Walker",
      mp3:"http://mp3.haoduoge.com/s/2017-04-08/1491634606.mp3",
      poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493888523612&di=34f2e379b2d4df007855c8515b2393d2&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F306f97c0dfd15991aa35458e0469ef2369cc49a4.jpg"
    },{
      title:"刚好遇见你",
	  artist:"李玉刚",
      mp3: "http://mp3.haoduoge.com/s/2017-04-25/1493082872.mp3",
      poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493889033762&di=cfd3d9abf1ad88a0255cb290dd0d182b&imgtype=0&src=http%3A%2F%2Fwww.ilife.cn%2Fimages%2Fupload%2Finfo%2Fbeauty%2Fother_images%2F8_2017323110852_1.jpg"
  }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});