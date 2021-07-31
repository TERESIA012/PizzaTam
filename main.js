$(document).ready(function(){

    $(".animation").mouseover(function(){
       $(this).animate({
                          height:'200px',
                          width:'200px',
                          left : '-11px'
                        })
                                });
    
    $(".animation").mouseout(function(){
       $(this).animate({
                          height:'178px',
                          width:'178px',
                          left : '0px'
                        })
                                });
    
    });