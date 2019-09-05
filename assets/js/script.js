$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});
$("ul").on("click", "span", function(){
	if(confirm("Are you sure?")){
		$(this).parent().remove();

	}
});
let input = $("input[type='text']");
input.on("keypress", function(e){
	if(e.keyCode === 13){
		let inputText = $(this).val();
		$("ul").append(`<li><span class="del-icon"><i class="fa fa-trash"></i></span> ${input.val()}</li>`);
		 $(this).val("");
	}
});
$(".h1").on("click", function(){
	input.slideToggle(300);
});