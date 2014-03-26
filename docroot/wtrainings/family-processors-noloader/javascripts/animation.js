/*=========================================================================================
Author: Tou Lee
Created: 1/16/14
Last Updated: 2/13/14 - 12:57pm
Version: 1.0.0

** This is the file for any javascript animations for the course **

Changelog v1.0.0
  - Created file

Changelog v1.0.1
  - Added panel snapping

==========================================================================================*/
(function($) {
  /* ----------------------------------------------------------------
    Reusuable cached variables
  ---------------------------------------------------------------- */
  var $html = $('html');
  var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

  $(document).ready(function() {
    /* ----------------------------------------------------------------
       Panel Snap
       	- Snap to the panels when the user comes close to them
       	- Elements with class of '.panel-snap' will snap to them
    ---------------------------------------------------------------- */
    $(document).scrollsnap({
    	snaps: '.panel-snap',
    	proximity: (isMobile) ? 200 : 350,
    	easing: 'easeInOutExpo',
    	duration: 200,
    	onSnapWait: 200,
    	onSnapEvent: 'total'
    });

    /* ----------------------------------------------------------------
      Section 2: Customer Chat Bubbles
    ---------------------------------------------------------------- */
		$('.s2p1 h1.light').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
			if(isInView) {
		   	if(visiblePartY == 'both') {
		
		   	//unbind the event
		    $(this).off('inview');
		
		    //console.log('SECTION 2: inview fired');
		
			  //var tl = new TimelineMax({onComplete: removeInView, onCompleteParams: [this]});
			  var tl = new TimelineMax();
			  tl.from('.speech-bubbles.cust1', 0.8, { css:{ force3D: true, autoAlpha: 0, top: '50px', left: '50%'},  ease: 'Back.easeOut'})
		    	.from('.speech-bubbles.cust2', 0.8, { css:{ force3D: true, autoAlpha: 0, top: '50px', left: '30%'},  ease: 'Back.easeOut'})
		    	.from('.speech-bubbles.rsa',   0.8, { css:{ force3D: true, autoAlpha: 0, top: '50px', left: '-10%'}, ease: 'Back.easeOut'});
		 		}
		 	}
		});


    /* ----------------------------------------------------------------
      Section 4: Customer Chat Bubbles
    ---------------------------------------------------------------- */
    $('.s4p1 .icons.pov').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView) {
       	if(visiblePartY == 'both') {

         	//unbind the event
         	$(this).off('inview');

         	//console.log('SECTION 4: inview fired');
	
         	//This is the point of convergence
         	var povOffset = $('.icons.pov').offset();

         	/* 
         	  Loop through each element, and then find their relative position (offset) from the 
         	  point of convergence, and use that to animate them to it 
         	*/
  			  $('.icons').each(function(i) {
  			    var $this = $(this),
  			      thisOffset = $this.offset(),
  			      relativeY = povOffset.top - thisOffset.top,
  			      relativeX = povOffset.left - thisOffset.left;
	
	      			TweenMax.to($this, 0.75, { css:{ left: relativeX, top: relativeY, autoAlpha: 0 }, delay: 0.2});
	      			//TweenMax.to($this, (i*0.15), { css:{ left: relativeX, top: relativeY, autoAlpha: 0 }, delay: 0.2});
  			 	});

          //Hide the container-icon
          var tl = new TimelineMax();
          tl.to($('.icons-container'), 1, { css:{ height: 0, autoAlpha: 0, force3D: true }, delay: 0.5 })
            .from($('.tech-phone'), 1, { css:{ autoAlpha: 0, top: '250px', force3D: true }, ease: 'Power4.easeInOut'})
            .staggerFrom($('.tech'), 1, { css:{ autoAlpha: 0, display: 'block', rotationX: 90, force3D: true }, ease: 'Back.easeOut' }, 0.2, "-=0.75")
            .staggerFrom($('.tech > p'), 0.5, { css:{ autoAlpha: 0, top: '-30px', force3D: true }}, 0.2, "-=1.1");
        }
      }
    });


    /* ----------------------------------------------------------------
      Section 6: Leadership Circles and #1
    ---------------------------------------------------------------- */
    $('.s6p1 .square-box').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView) {
        if(visiblePartY == 'top' || visiblePartY == 'both') {

          //unbind the event
          $(this).off('inview');

          //console.log('SECTION 6: inview fired');

          var tl = new TimelineMax();
          tl.from($(this).children('h1'), 1, { css:{ autoAlpha: 0, fontSize: '0.5em', force3D: true }, ease: 'Power4.easeInOut' })
            .staggerFrom($('.circles'), 1.25, { css:{ autoAlpha: 0, rotationY: 180, top: '-=100px', force3D: true }, ease: 'Back.easeInOut' }, 0.2);
        }
      }
    });


    /* ----------------------------------------------------------------
      Section 7: Snapdragon Family Chips
    ---------------------------------------------------------------- */
    // $('.s7p1 h1.subheader').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    $('.s7p1').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView) {
        if(visiblePartY == 'top' || visiblePartY == 'both') {

          //unbind the event
          $(this).off('inview');

          //console.log('SECTION 7: inview fired');

          var tl = new TimelineMax();
          tl.staggerFrom($('.chips'), 1.2, { css:{ autoAlpha: 0, right: '-100%', force3D: true }, ease: 'Back.easeOut' }, 0.25)
        }
      }
    });

     
    /* ----------------------------------------------------------------
      Section 8,9,10,11: Chip Features
    ---------------------------------------------------------------- */
    $('.spec-main-img').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView) {
        if(visiblePartY == 'top' || visiblePartY == 'bottom' || visiblePartY == 'both') {

          //unbind the event
          $(this).off('inview');

          //console.log('SECTION 8,9,10,11 Spec section: inview fired');

          TweenMax.from($(this).find('img.spec-chip-img'), 1.5, { css:{ autoAlpha: 0, marginTop: '-200%', width: '75%', marginLeft: '-37.5%', force3D: true }, ease: 'Power4.easeInOut' });
        }
      }
    });


    /* ----------------------------------------------------------------
      Section 8,9,10,11: Customer Icons
    ---------------------------------------------------------------- */
    $('.cust-main-img').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView) {
        if(visiblePartY == 'top' || visiblePartY == 'bottom' || visiblePartY == 'both') {

          //unbind the event
          $(this).off('inview');

          //console.log('SECTION 8,9,10,11 Chip section: inview fired');

          //Tween the chip image into the spot
          TweenMax.from($(this).find('img.cust-chip-img'), 1.5, { css:{ autoAlpha: 0, marginTop: '-200%', width: '36%', marginLeft: '-18%', force3D: true }, ease: 'Power4.easeInOut' });

          var tl = new TimelineMax({ repeat: -1, yoyo: true });
          tl.staggerTo($(this).find('.cust-floating-icon'), 0.38, { css:{ marginTop: '5px', force3D: true }, ease: 'Power0.easeInOut' }, 0.1);
        }
      }
    });


  }); //end $(document).ready()

  
  /* ----------------------------------------------------------------
    removeInView
      - Removes the 'inview' event from the object
    @params elem -- the elment have 'inview' event unbound
  ---------------------------------------------------------------- */
  function removeInView(elem) {
   	$(elem).off('inview');
    //console.log(elem + ' has "inview" event removed');
  }

})(jQuery); //end self-invoking anonymous function