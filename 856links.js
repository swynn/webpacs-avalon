function hideLinks(){
    
    var stringsToHide = new Array ();
    stringsToHide[1] = new Array ("centralmethodist");
    stringsToHide[3] = new Array ("Missouri Valley eBook", "moval");
	stringsToHide[4] = new Array ("State Fair eBook");
	stringsToHide[6] = new Array ("atsu");
	stringsToHide[7] = new Array ("culver");
	stringsToHide[8] = new Array ("hlg");
	stringsToHide[9] = new Array ("State Tech");
	stringsToHide[10] = new Array ("MACC");
	stringsToHide[11] = new Array ("Truman", "truman");
    


    var scopeDropdown = $("#searchscope").val();
    
    delete stringsToHide[scopeDropdown];
	
    if ($("table").is('.bibLinks')){
	for (var k in stringsToHide) {
	    for (var l in stringsToHide[k]) {
		$(".bibLinks a").each(function(index, element) {
		    if($(element).parent().html().indexOf(stringsToHide[k][l]) > -1) {
			$(element).parent().parent().hide()
		    }    
		});
	    }
	}
	if ($(".bibLinks tr[style*=none]").length < $(".bibLinks a").length){
	    $(".bibLinks").show();       
	}
    }  
}
    
    
    $(document).ready(function () {
	hideLinks();
});