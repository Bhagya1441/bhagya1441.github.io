$(document).ready(function(){
    
    var count=0;

    developer_animation();

    function developer_animation() {
    
        setTimeout(function(){
        count++;
        if(count==1){
            title="D";
        }else if(count==2){
            title="De";
        }else if(count==3){
            title="Dev";
        }else if(count==4){
            title="Deve";
        }else if(count==5){
            title="Devel";
        }else if(count==6){
            title="Develo";
        }else if(count==7){
            title="Develop";
        }else if(count==8){
            title="Develope";
        }else if(count==9){
            title="Developer";
        }
        if(count !=10){
            $('.title').text(`I'm a ${title}`);
            developer_animation();
        }else if(count==10){
            count=0;
            setTimeout(function(){
                designer_animation();
            },1000);
        }

    },100);

}

        function designer_animation(){
            
            setTimeout(function(){
                count++;
                if(count==1){
                    title="D";
                }else if(count==2){
                    title="De";
                }else if(count==3){
                    title="Des";
                }else if(count==4){
                    title="Desi";
                }else if(count==5){
                    title="Desig";
                }else if(count==6){
                    title="Design";
                }else if(count==7){
                    title="Designe";
                }else if(count==8){
                    title="Designer";
                }

                if(count!=9){
                    $('.title').text(`I'm a ${title}`);
                    designer_animation();
                }else if(count==9){
                    count=0;
                    setTimeout(function(){
                        developer_animation();
                    },1000);
                }

            },100);
        }

    $('.see_resume').mouseenter(function(){
        $(this).css('background-color','rgb(182, 21, 21)');
    })

    $('.see_resume').mouseleave(function(){
        $(this).css('background-color','rgb(165, 42, 42)');
    })

    animate_title();
    function animate_title() { 


    setTimeout(function(){

        $(".java_title").animate({ fontSize: "+=30px" }, 500);
        $(".java_title").animate({ letterSpacing: "+=15px" }, 1000);
        $('.and_title').animate({fontSize:'+=30px'}, 500);
        $('.and_title').animate({letterSpacing:'+=15px'}, 1000);
        $('.adobe_title').animate({fontSize:'+=30px'}, 500);
        $('.adobe_title').animate({letterSpacing:'+=18px'}, 1000);

        setTimeout(function(){

        $(".java_title").animate({ fontSize: "-=30px" }, 500);
        $(".java_title").animate({ letterSpacing: "-=15px" }, 1000);
        $('.and_title').animate({fontSize:'-=30px'}, 500);
        $('.and_title').animate({letterSpacing:'-=15px'}, 1000);
        $('.adobe_title').animate({fontSize:'-=30px'}, 500);
        $('.adobe_title').animate({letterSpacing:'-=18px'}, 1000);
        animate_title();
        
        },4000);
    },2000);
    }

    $('.project_name').text('Java');
    $('.project_content').text('Writing graphics applications in Java using Swing can be quite a daunting experience which requires understanding of some large libraries, and fairly advanced aspects of Java.');

    var project_count= 1;
    $('.next').click(function(){
        if(project_count==3){
        project_count=0;
        }
        project_count++;
        $('.actual').attr('src','/img/project'+ project_count +'.jpg')
        
        if(project_count==1){
            $('.project_name').text("Java");
            $('.project_content').text('Writing graphics applications in Java using Swing can be quite a daunting experience which requires understanding of some large libraries, and fairly advanced aspects of Java.')
        } else if(project_count==2){
            $('.project_name').text("Jquery");
            $('.project_content').text('jQuery simplifies the process of making animations in HTML with JavaScript. You can use this ability of jQuery to build a fantastic opening animation for your web page.')
        } else if(project_count==3){
            $('.project_name').text("Photoshop");
            $('.project_content').text('every creative project, from photo editing and compositing to digital painting, animation and graphic design.')
        }

    })
    $('.prev').click(function(){
        if(project_count==1){
        project_count=4;
        }
        project_count--;
        $('.actual').attr('src','/img/project'+ project_count +'.jpg')
        
        if(project_count==1){
            
            $('.project_name').text("Java");
            $('.project_content').text('Writing graphics applications in Java using Swing can be quite a daunting experience which requires understanding of some large libraries, and fairly advanced aspects of Java.')
        } else if(project_count==2){
            $('.project_name').text("Jquery");
            $('.project_content').text('jQuery simplifies the process of making animations in HTML with JavaScript. You can use this ability of jQuery to build a fantastic opening animation for your web page.')
        } else if(project_count==3){
            $('.project_name').text("Photoshop");
            $('.project_content').text('every creative project, from photo editing and compositing to digital painting, animation and graphic design.')
        } 

    })

})