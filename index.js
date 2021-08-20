
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
// When the user clicks esc it will close the image modal
var modal1 = document.querySelector('.modal')
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal1.style.display = 'none'
  }
})

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

// function myFunction() {
//     var xbut = getElementById("subBut");
//     if (xbut.style.display=="none"){
//         xbut.style.display="block";
//     } else {
//         xbut.style.display="none";
//     }
// }

// var down = document.getElementById("GFG_DOWN");
// var form = document.createElement("form");
// form.setAttribute("method", "post");
// form.setAttribute("data-netlify", "true");

// var FN = document.createElement("input");
// FN.setAttribute("type", "text");
// FN.setAttribute("name", "FullName");
// FN.setAttribute("placeholder", "Full Name");

// var DOB = document.createElement("input");
// DOB.setAttribute("type", "text");
// DOB.setAttribute("name", "dob");
// DOB.setAttribute("placeholder", "DOB");

// var s = document.createElement("input");
// s.setAttribute("type", "submit");
// s.setAttribute("value", "Submit");
// form.appendChild(FN); 
// form.appendChild(DOB); 
// form.appendChild(br.cloneNode()); 



$(document).ready(function () {
    var wrapper1 = $(".infoFille"); //Fields wrapper
    var wrapper2 = $(".infoFillp"); //Fields wrapper
    var wrapper3 = $(".infoFillv"); //Fields wrapper
    var add_button1 = $(".submitButton2e"); //Add button ID
    var add_button2 = $(".submitButton2p"); //Add button ID
    var add_button3 = $(".submitButton2v"); //Add button ID
    var x = 1; //initlal text box count
    var y = 1;
    var z = 1;
    
    $(add_button1).click(function (e) { //on add input button click
        e.preventDefault();
        x++; //text box increment
        if (x == 2) {
            $(wrapper1).append('<form name="2nd info" method="POST" data-netlify="true"><div class="infoFille2"><h1>School 2</h1><div class="input_fields_wrap1"><input class="txtBox" type="text" name="School Location 2" size="100" placeholder="Where did you go to school?"> </div><div class="input_fields_wrap1"><label style="margin-right:18rem;color:#7395AE;">Start Date</label><label style="color:#7395AE;margin-right:3rem;">End Date</label><br><input class="txtBox1" type="date" name="School start date 2" placeholder="When did start and finish at this job?"><input type="date" class="txtBox1" name="School end date 2" ></div><div class="input_fields_wrap1"><input class="txtBox" type="text" name="School Awards " size="100" placeholder="Did you win any awards during your time at this school?"></div></div></form>');
        }//add input box
        else if (x == 3) {
            $(wrapper1).append('<form name="3rd info" method="POST" data-netlify="true"><div class="infoFille3"><h1>School 3</h1><div class="input_fields_wrap1"><input class="txtBox" type="text" name="School Location 3" size="100" placeholder="Where did you go to school?"> </div><div class="input_fields_wrap1"><label style="margin-right:18rem;color:#7395AE;">Start Date</label><label style="color:#7395AE;margin-right:3rem;">End Date</label><br><input class="txtBox1" type="date" name="School start date 3" placeholder="When did start and finish at this job?"><input type="date" class="txtBox1" name="School end date 3" ></div><div class="input_fields_wrap1"><input class="txtBox" type="text" name="School Awards " size="100" placeholder="Did you win any awards during your time at this school?"></div></div></form>');
        }
    });

    $(add_button2).click(function (e) {
        e.preventDefault();
        y++; //text box increment
        if (y == 2) {
            $(wrapper2).append('<form name="Customer Information" method="POST" data-netlify="true"><div class="infoFillp2"><h1>Experience 2</h1><div class="input_fields_wrap2"><input class="txtBox" type="text" name="Work Location 2" size="100" placeholder="Where did you work?"> </div><div class="input_fields_wrap2"><label style="margin-right:18rem;color:#7395AE;">Start Date</label><label style="color:#7395AE;margin-right:3rem;">End Date</label><br><input class="txtBox1" type="date" name="Work start date 2" placeholder="When did start and finish at this job?"><input type="date" class="txtBox1" name="Work end date 2" "></div><div class="input_fields_wrap2"><input class="txtBox" type="text" name="School Awards " size="100" placeholder="What was your job title and responsibilities at this company"></div></div></form>');
        }//add input box
        else if (y == 3) {
            $(wrapper2).append('<form name="Customer Information" method="POST" data-netlify="true"><div class="infoFillp3"><h1>Experience 3</h1><div class="input_fields_wrap2"><input class="txtBox" type="text" name="Work Location 3" size="100" placeholder="Where did you work?"> </div><div class="input_fields_wrap2"><label style="margin-right:18rem;color:#7395AE;">Start Date</label><label style="color:#7395AE;margin-right:3rem;">End Date</label><br><input class="txtBox1" type="date" name="Work start date 3" placeholder="When did start and finish at this job?"><input type="date" class="txtBox1" name="Work end date 3" ></div><div class="input_fields_wrap2"><input class="txtBox" type="text" name="School Awards " size="100" placeholder="What was your job title and responsibilities at this company?"></div></div></form>');
        }
    });
    $(add_button3).click(function (e) {
        e.preventDefault();
        z++; //text box increment
        if (z == 2) {
            $(wrapper3).append('<form name="Customer Information" method="POST" data-netlify="true"><div class="infoFillv2"><h1>Experience 2</h1><div class="input_fields_wrap3"><input class="txtBox" type="text" name="Extracurricular Experience 2" size="100" placeholder="What was the experience?"></div><div class="input_fields_wrap3"><label style="margin-right:18rem;color:#7395AE;">Start Date</label><label style="color:#7395AE;margin-right:3rem;">EndDate</label><br><input class="txtBox1" type="date" name="Volunteer start date 2" placeholder="When did start and finish at this school?"><input type="date" class="txtBox1" name="Volunteer end date 2"></div><div class="input_fields_wrap3"><input class="txtBox" type="text" name="School Awards " size="100" placeholder="What was your role and responsibilities in this experience?"></div></div></form>');
        }//add input box
        else if (z == 3) {
            $(wrapper3).append('<form name="Customer Information" method="POST" data-netlify="true"><div class="infoFillv3"><h1>Experience 3</h1><div class="input_fields_wrap3"><input class="txtBox" type="text" name="Extracurricular Experience 3" size="100" placeholder="What was the experience?"> </div><div class="input_fields_wrap3"><label style="margin-right:18rem;color:#7395AE;">Start Date</label><label style="color:#7395AE;margin-right:3rem;">EndDate</label><br><input class="txtBox1" type="date" name="Volunteer start date 3" placeholder="When did start and finish at this school?"><input type="date" class="txtBox1" name="Volunteer end date 3" ></div><div class="input_fields_wrap3"><input class="txtBox" type="text" name="School Awards " size="100" placeholder="What was your role and responsibilities in this experience?"></div></div></form>');
        }
    });
});
document.body.onload = getElementById('id01');