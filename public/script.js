$(document).ready(function(){
  $("#post").click(function(){
    var adTitle = document.getElementById("title").value;
    var adbody = document.getElementById("body").value;
    $("#title").val('');
    $("#body").val('');
    firebase.database().ref().child('ads').push({
      title: adTitle,
      body: adbody
    })
  })
})