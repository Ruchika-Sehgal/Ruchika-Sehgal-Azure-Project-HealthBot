let clicked = false;
$(".fa-bars").click(()=>{
    if(clicked == false){
        
        $("#navigation").css({
            "flexDirection":"column"
        })
        // $(".navul").css({
        //     "display":"block"
        // })
        $(".navul").addClass("applied");
        clicked = true;
    }
    else{
        $("#navigation").css({
            "flexDirection":"row"
        })
        $(".navul").removeClass("applied");
        clicked = false;
    }
})