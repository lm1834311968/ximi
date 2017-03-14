var i=1;
var lengVa=0;
var tru=false;
$(function(){
$("#logo_btn li").mouseover(function(){
	$(this).addClass("active").siblings().removeClass("active");
	var index=$("#logo_btn li").index($(this));
	i=index;
	if(tru){
		$("#logo_img img").attr("src","images/lb_"+(4-i)+".png");
		tru=false;
	}else{
		$("#logo_img img").attr("src","images/lb_"+(index+1)+".png");
	}
});
});
var sx=function(){
	$("#logo_btn li").eq(i).trigger('mouseover');
	i++;
	lengVal=$("#logo_btn>li").length-1;
	if(i>lengVal){
		i=0;
	}
}
$("#logo .left").click(function(){
	tru=true;
	$("#logo_btn li").eq(i).trigger("mouseover");
	i--;
	if (i<0)
	{
		i=lengVal+1;
	}
})
$("#logo .right").click(function(){
	$("#logo_btn li").eq(i).trigger("mouseover");
	i++;
	if(i>lengVal){
		i=0;
	}
})
$("#logo .left").hover(function(){
	clearInterval(tag)
},function(){
	tag=setInterval("sx()",3000);
})
$("#logo .right").hover(function(){
	clearInterval(tag)
},function(){
	tag=setInterval("sx()",3000);
})
$("#logo_img li").hover(function(){
		clearInterval(tag)
	},function(){
		tag=setInterval("sx()",3000);
})
var tag=setInterval("sx()",3000);
$(".mi_popularize .mi_right .left").click(function(){
	$(this).css({"background-image":"url(images/back_1.png)"})
	$(".mi_popularize .mi_right .right").css({"background-image":"url(images/more.png)"})
	$(".mi_popularize  .mi_ad ul li").animate({"right":"0px"},500)
	or=true;
})
$(".mi_popularize .mi_right .right").click(function(){
	$(this).css({"background-image":"url(images/more_1.png)"});
	$(".mi_popularize .mi_right .left").css({"background-image":"url(images/back.png)"})
	$(".mi_popularize  .mi_ad ul li").animate({"right":"+1250px"},500)
	or=false;
})
var or=false;
var lunbo= function(){
	if(or==false){
		$(".mi_popularize .mi_right .left").trigger('click');
		or=true;
	}else{
		$(".mi_popularize .mi_right .right").trigger('click');
		or=false;
	}
}
var tab=setInterval("lunbo()",5000)
/*推广轮播的border颜色数组*/
var arr=["#FCB45D","#8CFA97","#71EEF5","red","#3DEEF7","#FCB45D","#8CFA97","#71EEF5","red","#FCB45D"];
for(var color=0;color<arr.length;color++){
	$(".mi_popularize  .mi_ad ul li").eq(color).css({"border-top":"1px solid"+arr[color]})
}
/*商品搭配鼠标移动到当前搭配类型是切换商品*/
$("#mi_1 .match .match_float ul li").mousemove(function(){
	var index=$(this).index();
	$("#mi_1 .match .match_float ul li").removeClass("items").eq(index).addClass("items");
	$("#mi_1 .mi_match_main ul").hide();
	$("#mi_1 .mi_match_main ul").eq(index).show();
})
/*商品搭配鼠标移动到当前搭配类型是切换商品1*/
$("#mi_2 .match .match_float ul li").mousemove(function(){
	var index=$(this).index();
	$("#mi_2 .match .match_float ul li").removeClass("items").eq(index).addClass("items");
	$("#mi_2 .mi_match_main ul").hide();
	$("#mi_2 .mi_match_main ul").eq(index).show();
})
/*商品搭配鼠标移动到当前搭配类型是切换商品2*/
$("#mi_3 .match .match_float ul li").mousemove(function(){
	var index=$(this).index();
	$("#mi_3 .match .match_float ul li").removeClass("items").eq(index).addClass("items");
	$("#mi_3 .mi_match_main ul").hide();
	$("#mi_3 .mi_match_main ul").eq(index).show();
})

/*商品搭配隐藏的评价*/
/*var tt=null;var tru1=0;
$("#mi_1 .mi_match_main ul li").hover(function(){
	
	$(this).find(".ainmate").slideDown(300);
},function(){
	$(this).find(".ainmate").slideUp(300);
	
})
var tt1=null;var tru2=0;
$("#mi_2 .mi_match_main ul li").hover(function(){
	var tru=$(this).find(".ainmate").length;
	var index=$(this).index()
	if(tru){
		tt1=setTimeout(function(){
			$("#mi_2 .mi_match_main ul li").eq(index).find("a .ainmate").slideDown(300);
			tru2++;
		},200)
	}
},function(){
	if (tru2) {
		$("#mi_2 .mi_match_main ul li").find("a .ainmate").slideUp(300);
	}
	clearTimeout(tt1);
	
})
var tt2=null;var tru3=0;
$("#mi_3 .mi_match_main ul li").hover(function(){
	var tru=$(this).find(".ainmate").length;
	var index=$(this).index()
	if(tru){
		tt2=setTimeout(function(){
			$("#mi_3 .mi_match_main ul li").eq(index).find("a .ainmate").slideDown(300);
			tru3++;
		},200)
	}
},function(){
	if (tru3) {
		$("#mi_3 .mi_match_main ul li").find("a .ainmate").slideUp(300);
	}
	clearTimeout(tt2);
	
})*/
//为您推荐
var mi_count=0,mi_count_=3;
$(".mi_recommend_1 .right").click(function(){//右
	mi_count++;
	mi_count_--;
	if(mi_count_ < 3){
		$(".mi_recommend_1 .right_").css({"background-image":"url(images/back_1.png)"});		
	}
	if(mi_count==4){
		mi_count=3;
		mi_count_=0;
	}else{
		if(mi_count==3){
			$(this).css({"background-image":"url(images/more.png)"});
		}
		$("#recommend ul li").animate({"right":"+=1250px"},500);
	}
})
$(".mi_recommend_1 .right_").click(function(){//左
	mi_count--;
	mi_count_++;
	if(mi_count < 3 && mi_count != -1){
		$(".mi_recommend_1 .right_").css({"background-image":"url(images/back_1.png)"});		
	}
	if(mi_count_==4){
		mi_count=0;
		mi_count_=3;
	}else{
		if(mi_count_==3){
			$(this).css({"background-image":"url(images/back.png)"});
		}
		$(".mi_recommend_1 .right").css({"background-image":"url(images/more_1.png)"});
		$("#recommend ul li").animate({"right":"-=1250px"},500);
	}
})
//热评产品
$(".mi_recommend_goods .hot li a .img_container").each(function(){
    if($(this).text().length>=50){
    	$(this).text($(this).text().substring(0,52));
    	$(this).append("...")//判断字符串的长度。如果超出就截断并且用省略号代替
    }
  });
/*mi 内容部分*/
var inde=null;//该全局变量用与标记当前选中的li位置好判断动画该在那个li执行
var mi_min=[null,null,null,null],mi_max=null;//通过查找当前li里面含有的.content ul li的长度
//内容border颜色数组
var arr_=["#FFAC13","#83C44E","#E53935","#2196F3"];
for(var color=0;color<arr_.length;color++){
	$(".mi_recommend_goods .mi_content>li").eq(color).css({"border-top":"1px solid"+arr_[color]})
	$(".mi_recommend_goods .mi_content li>.head").eq(color).css({"color":arr_[color]})
	$(".mi_recommend_goods .mi_content .content").eq(color).find(".end").css({"border":"1px solid"+arr_[color],"color":arr_[color]})
}
//鼠标移动的时候用数组给每个不同的li里面的颜色设置成不一样的颜色
$(".mi_recommend_goods .mi_content .content ul li a .end").hover(function(){
	$(this).css({"background":arr_[inde],"color":"white"})
},function(){
	$(this).css({"background":"white","color":arr_[inde]})
})
$(".mi_recommend_goods .mi_content>li").hover(function(){
	inde=$(this).index();
	mi_max=$(this).find(".content ul li").length;
	$(this).find(".left").show();
	$(this).find(".right").show();
},function(){
	$(this).find(".left").hide();
	$(this).find(".right").hide();
})
/*滑动按钮下的小圆点*/
var is=[0,0,0,0];
$(".mi_recommend_goods .content_bot span").hover(function(){
	if($(this).index() == is[inde]){
		return false;
	}
	$(this).css({"background":"#ff6700"});
},function(){
	if($(this).index() == is[inde]){
		return false;
	}
	$(this).css({"background":"#ddd"})
})
for(var i = 0;i < 4;i++){//循环给每个内容下面的span标签的第一个颜色修改
	$(".mi_recommend_goods .content_bot").eq(i).find("span").eq(0).css({"background":"white","border-color":"#ff6700"})
}
var past=null;//past历史记录用来标记点击时的历史位置
$(".mi_recommend_goods .content_bot span").click(function(){
	past=is[inde];
	$(".mi_recommend_goods .content_bot").eq(inde).find("span").css({"background":"#ddd","border-color":"white"});
	$(".mi_recommend_goods .content_bot").eq(inde).find("span").eq($(this).index()).css({"background":"white","border-color":"#ff6700"})
	is[inde]=$(this).index();
})

/*滑动按钮*/
var px=$(".mi_recommend_goods .mi_content .content ul li").width();//滑动的px
$(".mi_recommend_goods .mi_content li .right").click(function(){//右
	mi_min[inde]=is[inde]+1;//当前的位置加1
	if(mi_min[inde]>(mi_max-1)){//判断加1之后是否大于mi_max的最大长度。如果是就return false
		mi_min[inde]=mi_max;
		return false;
	}
	$(".mi_recommend_goods .mi_content>li").eq(inde).find("li").animate({"right":"+="+px},500)
	$(".mi_recommend_goods .content_bot").eq(inde).find("span").css({"background":"#ddd","border-color":"white"});
	$(".mi_recommend_goods .content_bot").eq(inde).find("span").eq(is[inde]+=1).css({"background":"white","border-color":"#ff6700"})
})
$(".mi_recommend_goods .mi_content li .left").click(function(){//左
	mi_min[inde]=is[inde]-1;//当前的位置减1
	if(mi_min[inde]<0){//判断减1之后是否大于mi_max的最大长度。如果是就return false
		mi_min[inde]=null;
		return false;
	}
	$(".mi_recommend_goods .mi_content>li").eq(inde).find("li").animate({"right":"-="+px},500)
	$(".mi_recommend_goods .content_bot").eq(inde).find("span").css({"background":"#ddd","border-color":"white"});
	$(".mi_recommend_goods .content_bot").eq(inde).find("span").eq(is[inde]-=1).css({"background":"white","border-color":"#ff6700"})
})
$(".mi_recommend_goods .content_bot span").click(function(){
	var op=past>is[inde]?'-':'+',px_count = $(".mi_recommend_goods .content_bot").eq(inde).find("span").eq(is[inde]).text()-1;
	px_count=(px_count-past)*px;
	if(px_count < 0){
		px_count = -(px_count)
	}
	px_count+"px";
	if(op=="+"){
		$(".mi_recommend_goods .mi_content>li").eq(inde).find("li").animate({"right":"+="+px_count},500)
	}else if(op=="-"){
		$(".mi_recommend_goods .mi_content>li").eq(inde).find("li").animate({"right":"-="+px_count},500)
	}
})
//标记当前li位置和视频的标题
var mark=null,title=null;
$(".video-main ul li").hover(function(){
	mark=$(this).index();
	title=$(this).find(".title").text();
})
$(".video-main ul li .mi_video").hover(function(){
	$(this).children("i").css({"border-color":"#ff6700","background":"#ff6700"})
},function(){
	$(this).children("i").css({"border-color":"white","background":"rgba(6,6,6,0.5)"})
})
//视频的路径以及播放时显示的图片
var video=[
	{
		src:'http://v.mifile.cn/b2c-mimall-media/dfd4caa06d370caf8a09216325d5f8ba.mp4',
		poster:'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/27670dee2bb809dd7d0d31405f282843.jpg'
	},
	{
		src:'http://v.mifile.cn/b2c-mimall-media/159d45bc9fbd50ad6fc507e5b6c08dbd.mp4',
		poster:'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ef68a52e6a4e3d131994eeadb6f6ade9.jpg'
	},
	{	src:'http://v.mifile.cn/b2c-mimall-media/52a95981a8fa1dbaf34e0d28c2ec6938.mp4',
		poster:'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c1c4d2c2e37e49e2bc58ff66e7363043.jpg'
	},
	{	src:'http://v.mifile.cn/b2c-mimall-media/dfa7330cc043c4ccc9f656f013de4109.mp4',
		poster:'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f556199b84015c629c83ac59cb1f8191.jpg'
	}
]
//被点击的时候显示遮罩层并且根据鼠标移动的时候获取的下标来拿到当前a标签所对应的播放视频。
$(".video-main ul li .mi_video").click(function(){
	$("#video").show();
	$("#video-vessel").css({"opacity":"1"}).slideDown(500,function(){
		var path="http://hd.mi.com/f/zt/hd/miplayer2/index.html?vurl="+video[mark].src+"&poster="+video[mark].poster;
		$("#video-vessel span").text(title);//添加视频标题
		$(this).append("<iframe width='880px' height='536px' src='"+path+"' frameborder='0' allowfullscreen></iframe>");
	})
})

$("#video #video-vessel a").click(function(){
	$("#video-vessel iframe").remove();
	$("#video-vessel").css({"opacity":"0.7"}).slideUp(500,function(){
		$("#video").hide();
		$("#video-vessel span").text("");//隐藏后清空视频标题
	});
})
























