$(document).ready(function(){
  firebase.database().ref('ads').once('value').then(function(snapshot){
    var ad_list = snapshot.val();
    var outputstring = "";
    for (var key in ad_list) {
      var ad = ad_list[key];
      console.log(ad["body"]);
      var outputstring = outputstring + "<div class = 'postedAd'>";
      var headline = ad["title"];
      var content = ad["body"];
      var posted = ad["dayPosted"];
      var outputstring = outputstring + "<h1>" + headline + "</h1>";
      var outputstring = outputstring + "<p>" + posted + "</p>";
      var outputstring = outputstring + "<p>" + content + "</p>" + "</div>";
    }
    var box = document.getElementById("adbox");
    box.innerHTML = outputstring;
  })

  $("#post").click(function(){
    var adTitle = document.getElementById("title").value;
    var adbody = document.getElementById("body").value;
    $("#title").val('');
    $("#body").val('');
    var d = new Date();
    firebase.database().ref().child('ads').push({
      title: adTitle,
      body: adbody,
      dayPosted: d.toDateString()
    })
  })
})