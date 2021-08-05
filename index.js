//         // Get the modal
//         var modal1 = document.getElementById("myModal");
        
//         // Get the image and insert it inside the modal - use its "alt" text as a caption
//         var img = document.getElementById("myImg");
//         var modalImg = document.getElementById("img01");
//         var captionText = document.getElementById("caption");
//         img.onclick = function(){
//           modal1.style.display = "block";
//           modalImg.src = this.src;
//           captionText.innerHTML = this.alt;
//         }
        
//         // Get the <span> element that closes the modal
//         var span = document.getElementsByClassName("close")[0];
        
//         // When the user clicks on <span> (x), close the modal
//         span.onclick = function() { 
//           modal1.style.display = "none";
//         }
//         // Get the modal
//         var modal1 = document.getElementById("myModal");
        
//         // Get the image and insert it inside the modal - use its "alt" text as a caption
//         var img = document.getElementById("myImg2");
//         var modalImg = document.getElementById("img01");
//         var captionText = document.getElementById("caption");
//         img.onclick = function(){
//           modal1.style.display = "block";
//           modalImg.src = this.src;
//           captionText.innerHTML = this.alt;
//         }
        
//         // Get the <span> element that closes the modal
//         var span = document.getElementsByClassName("close")[0];
        
//         // When the user clicks on <span> (x), close the modal
//         span.onclick = function() { 
//           modal1.style.display = "none";
//         }
//         // Get the modal
//         var modal1 = document.getElementById("myModal");
        
//         // Get the image and insert it inside the modal - use its "alt" text as a caption
//         var img = document.getElementById("myImg3");
//         var modalImg = document.getElementById("img01");
//         var captionText = document.getElementById("caption");
//         img.onclick = function(){
//           modal1.style.display = "block";
//           modalImg.src = this.src;
//           captionText.innerHTML = this.alt;
//         }
        
//         // Get the <span> element that closes the modal
//         var span = document.getElementsByClassName("close")[0];
        
//         // When the user clicks on <span> (x), close the modal
//         span.onclick = function() { 
//           modal1.style.display = "none";
//         }

//         // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
//         $(document).ready(function() {
//             var max_fields      = 5; //maximum input boxes allowed
//             var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
//             var add_button      = $(".submitButton2"); //Add button ID

//             var x = 1; //initlal text box count
//             $(add_button).click(function(e){ //on add input button click
//                 e.preventDefault();
//                 if(x < max_fields){ //max input box allowed
//                     x++; //text box increment
//                     $(wrapper).append('<div><input class ="txtBox" type="text" name="mytext[]"/><a href="#" class="remove_field"><i class="fa fa-trash"></i></a></div>'); //add input box
//                 }
//             });
//             $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
//                 e.preventDefault(); $(this).parent('div').remove(); x--;
//             })
//         }); 
//         document.body.onload = getElementById('id01');








// Get the modal
var modal1 = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal1.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal1.style.display = "none";
}
// Get the modal
var modal1 = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal1.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal1.style.display = "none";
}
// Get the modal
var modal1 = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal1.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal1.style.display = "none";
}

$(document).ready(function () {
  var max_fields = 5; //maximum input boxes allowed
  var wrapper1 = $(".input_fields_wrap1"); //Fields wrapper
  var wrapper2 = $(".input_fields_wrap2"); //Fields wrapper
  var wrapper3 = $(".input_fields_wrap3"); //Fields wrapper
  var add_button1 = $(".submitButton2e"); //Add button ID
  var add_button2 = $(".submitButton2p"); //Add button ID
  var add_button3 = $(".submitButton2v"); //Add button ID

  var x = 1; //initlal text box count
  $(add_button1).click(function (e) { //on add input button click
      e.preventDefault();
      if (x < max_fields) { //max input box allowed
          x++; //text box increment
          $(wrapper1).append('<div><input class ="txtBox" type="text" name="mytext[]"/><a href="#" class="remove_field"><i class="fa fa-trash"></i></a></div>'); //add input box
      }
  });
  $(add_button2).click(function (e) {
      e.preventDefault();
      if (x < max_fields) {
          x++;
          $(wrapper2).append('<div><input class ="txtBox" type="text" name="mytext[]"/><a href="#" class="remove_field"><i class="fa fa-trash"></i></a></div>');
      }
  });
  $(add_button3).click(function (e) {
      e.preventDefault();
      if (x < max_fields) {
          x++;
          $(wrapper3).append('<div><input class ="txtBox" type="text" name="mytext[]"/><a href="#" class="remove_field"><i class="fa fa-trash"></i></a></div>');
      }
  });
  $(wrapper1).on("click", ".remove_field", function (e) { //user click on remove text
      e.preventDefault(); $(this).parent('div').remove(); x--;
  })
  $(wrapper2).on("click", ".remove_field", function (e) {
      e.preventDefault(); $(this).parent('div').remove(); x--;
  })
  $(wrapper3).on("click", ".remove_field", function (e) {
      e.preventDefault(); $(this).parent('div').remove(); x--;
  })
});
document.body.onload = getElementById('id01');