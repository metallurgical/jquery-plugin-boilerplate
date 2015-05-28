(function ($) {
    // handle variable from being access outside
    // throw an error if have
    // prevent global access
    "use strict";
 
    // Global Variables
    var MAX_HEIGHT = 100;
 
    // class name with this,and options paramter
    $.blogPost = function(el, options) {
        // Private Functions
        function debug(e) {
            console.log(e);
        }
 
        // Global Private Variables
        var MAX_WIDTH = 200;
        // cache this
        var base = this;

        // extends default options with user defined options
        base.options = $.extend({},$.blogPost.defaultOptions, options);
 
        base.$el = $(el);
        base.el = el;
 
        base.$el.data('blogPost', base);
 
        // will call this function when instantiate object
        base.init = function(){
            var totalButtons = 0;
 
            base.$el.append('<button name="public" style="'+base.options.buttonStyle+'">Private</button>');
            base.$el.append('<button name="private" style="'+base.options.buttonStyle+'">Public</button>');
 
        };
 
        // custom function
        base.clicker = function(e) {
            debug(e);
 
            base.options.buttonPress.call( this );
        };
 
        // call at initial start
        base.init();
    };
 
    // default options for user defined
    $.blogPost.defaultOptions = {
        buttonStyle: "border: 1px solid #fff; background-color:#000; color:#fff; padding:20px 50px",
        // callback function
        buttonPress: function () {}
    };
 

    // create function plugin 
    $.fn.blogPost = function(options){
        //loop over all the element attact in selector jquery
        return this.each(function(){
            // instantiate the javascript constructor
            var bp = new $.blogPost(this, options);
            // happern when selector was click
            $('button[name="public"]').click(function(e) {
                // call function created by class
                bp.clicker(e);
            });
            $('button[name="private"]').click(function(e) {
              // call function created by class
                bp.debug(e);
            });
        });
    };
})(jQuery);
