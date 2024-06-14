
$(document).ready(function() {
	
/*	
// Left Navbar toggle	
    $('.position-left .parent-link a').on("click",function(){
        if($(this).hasClass('open')) {
            $(this).removeClass('open');

        } else {
            $(this).addClass('open');

        }
        $(this).parent().siblings().toggleClass('hi');
		$(this).parent().siblings().slideToggle(500);
		
		
    });

*/

// Collapsibel content
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }   });
}
	
});