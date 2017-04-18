$(document).ready(function(){
  firebase.database().ref('ads').orderByChild("dayPosted").once('value').then(function(snapshot){
    var ad_list = snapshot.val();
    var outputstring = "";
    for (var key in ad_list) {
      var ad = ad_list[key];
      var headline = ad["title"];
      var content = ad["body"];
      var posted = ad["dayPosted"];
      outputstring = makeDiv(outputstring, headline, content, posted);
    }
    var box = document.getElementById("adbox");
    box.innerHTML = outputstring;
  })


  $("#post").click(function(){
    var adTitle = document.getElementById("title").value;
    var adbody = document.getElementById("body").value;
    $("#title").val('');
    $("#body").val('');
    saveData(adTitle, adbody);
  })

  function makeDiv (string, h, c, p) {
    var string = string + "<div class='postedAd'><h1>" +h + "</h1><p>" + p.toDateString() + "</p><p>" + c + "</p></div><hr>";
    return string;
  }

  function saveData (ttl, bdy) {
    var d = new Date();
    firebase.database().ref().child('ads').push({
      title: ttl,
      body: bdy,
      dayPosted: d
    })
  }
})

