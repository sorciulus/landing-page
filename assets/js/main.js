;(function( $, window, document ) {
    'use strict';

    var Main = {

        /**
         * Initialize
         */
        init: function() {
            this.smooth_scroll();
            
            console.log('hello world');    
            $(document).foundation({
                abide : {
                    live_validate : false,
                    validate_on_blur : false,
                    focus_on_invalid : false,
                    error_labels: true,
                    timeout : 0,
                    patterns: {
                        telephone: /^3+[0-9]{9}$/                        
                    }
                }
            });        
        },
        
        smooth_scroll: function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
                    var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 500, 'swing');

                        return false;
                    }
                }
            });
        }
    };

    Main.init();
})( jQuery, window, document );