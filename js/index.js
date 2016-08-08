$(function(){
  var oNav=$('.navbar'); //导航元素
  var oNavH=oNav.outerHeight(); //导航的可见区域的高度
  var oWindowH=$(window).height(); //可视区域的高度；

  var oMyPanel=$('.myPanel');

  var oPanel3=$('.panel3'); //第三屏元素

  var oPanel3H=oPanel3.innerHeight();
  var oPanel3Top=oPanel3.offset().top; //第三屏到页面顶端的距离

  var oA=$('.navbar-collapse').find('a');

  oA.click(function(){
    var index=$(this).parent().index();
    var scrollH=(oWindowH-oNavH)*index;
    $('body').scrollTop(scrollH);
    if(index==2){
      window.chart.about();
    }
    return false;
  });

  // 设置每一屏的高度
  for(i=0;i<oMyPanel.length;i++){
    if(i==0){
      oMyPanel.eq(0).height(oWindowH-oNavH).find('.carousel-inner').find('img').height(oWindowH-oNavH);
    }else if(i==3){
      oMyPanel.eq(3).height(oWindowH-oNavH);
    }
    else{
      oMyPanel.eq(i).height(oWindowH-oNavH-100);
    }
  }

  // var oBtn=true;
  // $(window).scroll(function(){
  //   var scrollTop=document.body.scrollTop;
  //   if((oPanel3Top+oPanel3H/2)<=(scrollTop+oWindowH) && oBtn){
  //     oBtn=false;
  //     window.chart.about(oBtn);
  //     oBtn=true;
  //   }
  // })
})