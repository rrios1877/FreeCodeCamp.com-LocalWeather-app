$(document).ready(function() {
var lat;
  var long;
  $.getJSON("http://ip-api.com/json", function(data2){
   lat = data2.lat;
    long = data2.lon;
    //API URL with geolocation
      var api ="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=523b595bf67384af1bc9bc58f8731cf4";
      console.log(api);
      $.getJSON(api, function(data){
        //alert(data.coord.lat);
        var fTemp;
        var cTemp;
        var kTemp;
        var tempSwap = true;
        //JSON call for open weather API
        var weatherType = data.weather[0].description;
        kTemp = data.main.temp;
        var windSpeed = data.wind.speed;
        var city = data.name;
        //temperature in kelvin
        //temp in f
        fTemp = (kTemp*(9/5)-459.67).toFixed(1);
        //city name
        cTemp = (kTemp-273).toFixed(1);

        console.log(city);

        $("#city").html(city);
        $("#weatherType").html(weatherType);
        $("#fTemp").html(fTemp + " &#8457;");
        $("#fTemp").click(function() {
          if (tempSwap === false) {
            $("#fTemp").html(fTemp + "&#8457;");
            tempSwap=true;
          }
        else{
          $('#fTemp').html(cTemp + " &#8451;");
          
          tempSwap=false;
        }
        });
        windSpeed=(2.237*(windSpeed)).toFixed(1);
        $('#windSpeed').html(windSpeed + " mph");
        if(fTemp > 80){
          $('body').css('background-image','url(http://www.orem.org/wp-content/uploads/2016/02/e14cf397-b26b-452b-bcec-911d3146da2f.jpg)');
        }
        else if (fTemp > 70){
          $('body').css('background-image', 'url(http://kurir.mk/en/wp-content/uploads/white-clouds-480x360.jpg)');
        }
        else if (fTemp > 60){
          $('body').css('background-image','url(http://www.spotcatch.net/images/gallery/laender/island-iceland/island-licht-wolken.jpg)');
        }
          else if (fTemp > 50){
            
            $('body').css('background-image','url(https://theartistsjourney.files.wordpress.com/2012/01/100_8199.jpg)');
          }
        else if(fTemp >40){
          $('body').css('background-image', 'url(https://www.stihi.ru/pics/2012/05/30/8178.jpg)');
        }
        else if(fTemp>30){
          $('body').css('background-image','url(http://scied.ucar.edu/sites/default/files/images/large_image_for_image_content/weather_0.jpg)');
        }
        
      });

});
});

      

