/**
  * wp-widget.js
  *
  * Inserts an iframe into the DOM and calls the remote embed plugin
  * via a get parameter:
  * e.g http://www.example.com/?embed=posts
  * This is intercepted by the remote 'WordPress Widget Embed' plugin
  *
  */

(function() {

// Localize jQuery variable
var jQuery;

/* Load jQuery if not present */
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '3.5.1') 
{
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
    if (script_tag.readyState) 
    {
      script_tag.onreadystatechange = function () 
      { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') 
          {
              scriptLoadHandler();
          }
      };
    } 
    else 
    {
      script_tag.onload = scriptLoadHandler;
    }

    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} 
else 
{
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
}

/* Called once jQuery has loaded */
function scriptLoadHandler() 
{
    jQuery = window.jQuery.noConflict(true);
    main(); 
}

/* Our Start function */
function main() 
{ 
    jQuery(document).ready(function($) 
    { 
        /* Get 'embed' parameter from the query */
        var widget = window.widget_embed;
        //var domain = encodeURIComponent(window.document.location);

        /* Set 'height' and 'width' according to the content type */
        var iframeContent = '<iframe style="overflow-y: hidden;" height="" width="300" frameborder="0" border="0" cellspacing="0" scrolling="no" src="https://id.mydaily.deals/widget?ref='+ widget +'"></iframe>';

        $("#embed-widget-container").html(iframeContent);
    });
}

})();
