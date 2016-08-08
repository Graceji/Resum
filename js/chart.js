  (function(window){
    var oAboutMap=$('#about_map'),
        oAboutDiv=$('.about');

    var aboutArr=[{data:76},{data:86},{data:76},{data:90},{data:100}];
    var oBtn=true;

    function about(){
      for(var i=0;i<oAboutDiv.length;i++){
        upFn(oAboutDiv[i],aboutArr[i].data,150);
      }
      oBtn=true;
    };

    function upFn(obj,target,sum){

      var aP = $(obj).find('p');
      var oSpan = $(obj).find('span');
      var timer = null;
      var num = 0;

      clearInterval(timer);
      timer = setInterval(function(){
        num += 2;
        if(num>=target){
          clearInterval(timer);
        }

        oSpan.css({bottom:num + 25});
        oSpan.html(Math.floor( num*100/sum ) + "%");

        aP.eq(0).css('bottom',num);
        aP.eq(1).css('height',num);
        aP.eq(2).css('height',num);
      },20)
    };

    about();
    window.chart={
      about:about
    }
  })(window);
