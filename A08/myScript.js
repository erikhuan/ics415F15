/**
 * Created by Yuantien Huang on 9/27/2015.
 */
$(document).ready(function(){
    $("submit").click(function(){
        $("#links").load("url");
    });
});
$(document).ready(function(){
    $("#q1").click(function(){
        $("#a1").slideToggle(function(){
            $("#mark1").text(function(){
               return $("#a1").is(":visible") ?
                   "-":"+";
            });
        });
    });
});
$(document).ready(function(){
    $("#q2").click(function(){
        $("#a2").slideToggle(function(){
            $("#mark2").text(function(){
                return $("#a2").is(":visible") ?
                    "-":"+";
            });
        });
    });
});
$(document).ready(function(){
    $("#q3").click(function(){
        $("#a3").slideToggle(function(){
            $("#mark3").text(function(){
                return $("#a3").is(":visible") ?
                    "-":"+";
            });
        });
    });
});
$(document).ready(function(){
    $("#q4").click(function(){
        $("#a4").slideToggle(function(){
            $("#mark4").text(function(){
                return $("#a4").is(":visible") ?
                    "-":"+";
            });
        });
    });
});
$(document).ready(function(){
    $("#q5").click(function(){
        $("#a5").slideToggle(function(){
            $("#mark5").text(function(){
                return $("#a5").is(":visible") ?
                    "-":"+";
            });
        });
    });
});
$(document).ready(function(){
    $("button").click(function(){
        $("#test").load("text.txt");
    });
});