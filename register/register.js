$(function(){
    console.log("jq is ready")
    $("#years").hover(() => {
        $(".years-hidden").stop(true).slideDown(300)
    },() => {
        $(".years-hidden").hover(() => {
            $(".years-hidden").stop(true).slideDown(300)
        },() => {
            $(".years-hidden").stop(true).slideUp()
        })

        
        $(".years-hidden").stop(true).slideUp()
    })

    $("#months").hover(() => {
        $(".months-hidden").stop(true).slideDown(300)
    },() => {
        $(".months-hidden").hover(() => {
            $(".months-hidden").stop(true).slideDown(300)
        },() => {
            $(".months-hidden").stop(true).slideUp()
        })

        
        $(".months-hidden").stop(true).slideUp()
    })

    $("#days").hover(() => {
        $(".days-hidden").stop(true).slideDown(300)
    },() => {
        $(".days-hidden").hover(() => {
            $(".days-hidden").stop(true).slideDown(300)
        },() => {
            $(".days-hidden").stop(true).slideUp()
        })

        
        $(".days-hidden").stop(true).slideUp()
    })
})