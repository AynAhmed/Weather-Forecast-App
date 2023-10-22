$(document).ready(function () {
    // add click function & logic for AJAX request here
    // do not forget to hid API key by following steps in README
    $("#search").click("click", function(){
        var input = $("#location").val()
       var api_key = config.KEY;
        console.log(input);

        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`,

            method: "GET",

            success: function(data){
            
             //convert temp from kelvin to Fahrenheit
            var convertTemp = data.main.temp
            var temp = (convertTemp - 273.15) * 9/5 + 32


            ///display data
            $("#location-title").html("Weather in " + data.name + ", " + data.sys.country)
                $("#p1").html( "Temperature : " + temp.toFixed(2) + "°F " + "<br>" + "Weather: " + data.weather[0]["description"]);
                $("#p2").html("Humidity : " + data.main.humidity+ "<br>" + "Wind Speed:" + data.wind.speed)

            },

            error: function(xhr, status, error){

             $("#error").html("Status: " + status + "<br>"+ " Message: " + error)
             $("#error").css("color", "red")
            }

        })

    });
 
});