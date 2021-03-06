jQuery.fn.imgSlider = function(options){
    
    options = $.extend({ currentPosition: 0, slideWidth:  260, showStatusPosition: false, step: 3, setinterval: true, countOfShow: 1,}, options); var currentPosition = options.currentPosition, slideWidth = options.slideWidth, slidesBlock = $(this), slidesContainer = slidesBlock.find('.slidesContainer'),
        slides = slidesContainer.find('.slide'),
        numberOfSlides = slides.length,
        showStatusPosition = options.showStatusPosition,
        step = options.step,
        setinterval = options.setinterval,
        countOfShow = options.countOfShow,
        idInterval,
        timeout = 5000;

    slidesContainer.css('overflow', 'hidden');
    slides
        .wrapAll('<div class="slideInner"></div>')
        .css({
            'width' : slideWidth
        });
 
    slidesContainer.find('.slideInner').css('width', slideWidth * numberOfSlides);


    if(showStatusPosition) {

        var contentOfStatusBar = '<div class="statusPosition"><ul class="controlPosition">';

        for(var i = 0; i < numberOfSlides; i++){
            contentOfStatusBar += '<li></li>';
        }

        contentOfStatusBar += '</ul></div>';

        slidesBlock.append(contentOfStatusBar);

        slidesBlock.find('.statusPosition ul[class="controlPosition"] li:nth-child('+(currentPosition+1)+')').addClass('active');
    }

    var goStep = function(button){
        return function(button){
            var currentPositionNew = currentPosition;

            if(typeof button != 'undefined'){
                currentPositionNew = ($(button).attr('control') == 'left') ? currentPositionNew - step : currentPositionNew + step;}
            else{
                currentPositionNew = currentPositionNew + step;
            }

            if(currentPositionNew < 0)
                currentPositionNew = numberOfSlides - Math.abs(currentPositionNew) ;

            if(currentPositionNew > (numberOfSlides-1)-countOfShow)
                currentPositionNew = (numberOfSlides)-countOfShow;

            if(currentPositionNew == currentPosition){
                currentPositionNew = 0;
            }

            currentPosition = currentPositionNew;

            setupStatusPosition(currentPosition);
            slidesContainer.find('.slideInner').animate({
                'marginLeft' : slideWidth * (- currentPosition)
            });
        }(button);
    }

    slidesBlock
        .find('.control')
        .bind('click', function(){ goStep(this); });


    if(setinterval){
        idInterval = setInterval( goStep , timeout);
        slidesBlock.hover(
            function(){ clearInterval(idInterval);},
            function(){ idInterval = setInterval( goStep , timeout); }
        );
    }

    if(showStatusPosition){
        slidesBlock
            .find('.statusPosition ul[class="controlPosition"] li')
            .bind('click', function(){
                currentPosition = $(this).index();
                slidesContainer.find('.slideInner').animate({
                    'marginLeft' : slideWidth * (- currentPosition)
                });
                setupStatusPosition(currentPosition);
            });

    }

    function setupStatusPosition(currentPosition){
        if(showStatusPosition){
            var position = currentPosition + 1;
            slidesBlock.find('.statusPosition ul[class="controlPosition"] li').each(function(){ $(this).removeClass('active');});
            slidesBlock.find('.statusPosition ul[class="controlPosition"] li:nth-child('+position+')').addClass('active');
        }
    }

};