$(document).ready(function() {
    console.log("jQuery is ready!");

    $(".greeting").text("Hello, I am Islambek");
    $(".intro").css("font-weight", "bold");
    $("#btn-light").click(function(){ $("body").removeClass("dark").addClass("light"); });
    $("#btn-dark").click(function(){ $("body").removeClass("light").addClass("dark"); });

    $("#btn-hide").click(function(){ $("#status-message").hide(); });
    $("#btn-show").click(function(){ $("#status-message").show(); });
    $("#btn-toggle").click(function(){ $("#status-message").toggle(); });

    $("#btn-fadeout").click(function(){ $(".gallery-img").fadeOut(); });
    $("#btn-fadein").click(function(){ $(".gallery-img").fadeIn(); });
    $("#btn-fadetoggle").click(function(){ $(".gallery-img").fadeToggle(); });

    $(".slide-title").click(function(){ $(this).next(".panel").slideToggle(); });
    $("#btn-slideup").click(function(){ $(".panel").slideUp(); });
    $("#btn-slidedown").click(function(){ $(".panel").slideDown(); });

    $("#btn-add").click(function(){
        let val = $("#skill-input").val().trim();
        if(val !== "") {
            $("#skills-list").append("<li>" + val + "</li>");
            $("#skill-input").val("");
        }
    });
    $("#btn-prepend").click(function(){
        let val = $("#skill-input").val().trim();
        if(val !== "") {
            $("#skills-list").prepend("<li>" + val + "</li>");
            $("#skill-input").val("");
        }
    });
    $("#btn-remove").click(function(){
        $("#skills-list li:last").remove();
    });

    $("#btn-attr").click(function(){
        $("#social-link").attr("href", "https://linkedin.com").text("LinkedIn");
    });

    $("#input-name, #input-email").on("input", function(){
        $("#live-name").text($("#input-name").val());
        $("#live-email").text($("#input-email").val());
    });

    let isAnimated = false;
    $("#btn-animate").click(function(){
        if(!isAnimated) {
            $(".skill-bar").each(function(){
                $(this).animate({ width: $(this).attr("data-width") }, 1000);
            });
            isAnimated = true;
        } else {
            $(".skill-bar").animate({ width: "0" }, 1000);
            isAnimated = false;
        }
    });
});
