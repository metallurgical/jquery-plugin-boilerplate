(function ($) {
    "use strict";
 
    // Global Variables
    var MAX_HEIGHT = 100;
 
    $.blogPost = function(el, options) {
        // Private Functions
        function debug(e) {
            console.log(e);
        }
 
        // Global Private Variables
        var MAX_WIDTH = 200;
        var base = this;

        base.options = $.extend({},$.blogPost.defaultOptions, options);
 
        base.$el = $(el);
        base.el = el;
 
        base.$el.data('blogPost', base);
 
        base.init = function(){
            var totalButtons = 0;
 
            base.$el.append('<button name="public" style="'+base.options.buttonStyle+'">Private</button>');
            base.$el.append('<button name="private" style="'+base.options.buttonStyle+'">Public</button>');
 
        };
 
        base.clicker = function(e) {
            debug(e);
 
            base.options.buttonPress.call( this );
        };
 
        base.init();
    };
 
    $.blogPost.defaultOptions = {
        buttonStyle: "border: 1px solid #fff; background-color:#000; color:#fff; padding:20px 50px",
        buttonPress: function () {}
    };
 
    $.fn.blogPost = function(options){
        return this.each(function(){
            var bp = new $.blogPost(this, options);
 
            $('button[name="public"]').click(function(e) {
                bp.clicker(e);
            });
            $('button[name="private"]').click(function(e) {
                bp.debug(e);
            });
        });
    };
})(jQuery);
