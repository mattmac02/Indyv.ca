
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

const targetDiv2 = document.getElementById("infoFille2");
const targetDiv3 = document.getElementById("infoFille3");
const btn1 = document.getElementById("submitButton2e");
const btn2 = document.getElementById("submitButton2e2");
const targetDiv22 = document.getElementById("infoFillp2");
const targetDiv32 = document.getElementById("infoFillp3");
const btn12 = document.getElementById("submitButton2p");
const btn22 = document.getElementById("submitButton2p2");
const targetDiv23 = document.getElementById("infoFillv2");
const targetDiv33 = document.getElementById("infoFillv3");
const btn13 = document.getElementById("submitButton2v");
const btn23 = document.getElementById("submitButton2v2");
targetDiv2.style.display = "none";
targetDiv3.style.display = "none";
targetDiv22.style.display = "none";
targetDiv32.style.display = "none";
targetDiv23.style.display = "none";
targetDiv33.style.display = "none";
btn1.onclick = function () {
    if (targetDiv2.style.display == "none") {
        targetDiv2.style.display = "block";
        btn1.style.display = "none";
        btn2.style.display = "block";
    }
}
btn2.onclick = function () {
    if (targetDiv3.style.display == "none") {
        targetDiv3.style.display = "block";
        btn2.style.display = "none";
    }
};
btn12.onclick = function () {
    if (targetDiv22.style.display == "none") {
        targetDiv22.style.display = "block";
        btn12.style.display = "none";
        btn22.style.display = "block";
    }
}
btn22.onclick = function () {
    if (targetDiv32.style.display == "none") {
        targetDiv32.style.display = "block";
        btn22.style.display = "none";
    }
};
btn13.onclick = function () {
    if (targetDiv23.style.display == "none") {
        targetDiv23.style.display = "block";
        btn13.style.display = "none";
        btn23.style.display = "block";
    }
}
btn23.onclick = function () {
    if (targetDiv33.style.display == "none") {
        targetDiv33.style.display = "block";
        btn23.style.display = "none";
    }
};



