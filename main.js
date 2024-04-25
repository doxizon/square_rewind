function like_click(element) {
    var img = element.querySelector('img');
    var filename = img.src.substring(img.src.lastIndexOf('/') + 1);

    if (filename == 'heart.png') {
        console.log(filename);
        img.src = 'img/filled_heart.png';
    }
    else {
        img.src = 'img/heart.png';
        img.style.opacity = 1;
        return;
    }
    var cnt = 0;
    function increaseOpacity() {
        if (cnt <= 100) {
            img.style.opacity = cnt / 100; 
            cnt+=2;
            setTimeout(increaseOpacity, 10); 
        }
    }
    increaseOpacity();
}

function viewmore(){
    window.location.pathname = "/catalog.html";
}

var currentPhoto = 1; 

function changePhoto(direction) {
document.getElementById('fn').style.backgroundColor = '#FFFFFF';
document.getElementById('sn').style.backgroundColor = '#FFFFFF';
document.getElementById('thn').style.backgroundColor = '#FFFFFF';
  var img = document.getElementById('imm_sw');
  var maxPhotos = 3; 
  if (direction === 'prev') {   
    if(currentPhoto ==1)
    currentPhoto = maxPhotos;
else 
    currentPhoto = currentPhoto-1;
  } else if (direction === 'next') {
    if(currentPhoto ==maxPhotos) 
            currentPhoto = 1;
        else 
            currentPhoto = currentPhoto+1;
  }
  if(currentPhoto==1)
    document.getElementById('fn').style.backgroundColor = '#00FFF0';
  if(currentPhoto==2)
    document.getElementById('sn').style.backgroundColor = '#00FFF0';
  if(currentPhoto==3)
    document.getElementById('thn').style.backgroundColor = '#00FFF0';
  
  img.src = 'img/' + currentPhoto + 'a.png';
}

var lypa = document.getElementById('search');
var tab_s = document.getElementById('search_tab');


var notactive = true;
var temp = document.querySelector(".search_input");
temp.addEventListener("focus", function() {
  console.log("hi");

});
temp.addEventListener('blur', function() {
  console.log("bye");
});

function search_mega(){
    
    lypa.style.left = '1092px';
    tab_s.style.left = "1077px";
    tab_s.style.width = "190px";
    tab_s.style.height = "60px";
    
    tab_s.style.top = "60px";
    console.log('Tyda ego');
    console.log(tab_s.style.left);
    lypa.style.width = '25px';
    lypa.style.height = '25px';

    document.querySelector('.search_input').style.opacity = '1';
    document.querySelector('.kryg_se').style.opacity = '1';
}

function levee() {
    
    if(notactive){
      tab_s.style.width = "35px";
      tab_s.style.left = "1152px";
      console.log('levee');
      lypa.style.width = '35px';
      lypa.style.height = '35px';
      document.querySelector('.search_input').style.opacity = '0';
      document.querySelector('.kryg_se').style.opacity = '0';
      lypa.style.left = '1152px';
    } 

}

tab_s.addEventListener('mouseenter', search_mega);
tab_s.addEventListener('mouseleave', levee);

// document.addEventListener("DOMContentLoaded", function() {
//   var searchContainer = document.getElementById("search-container");
//   var searchIcon = document.getElementById("search-icon");
//   var searchInput = document.getElementById("search-input");
//   var isInputFocused = false;

//   searchContainer.addEventListener("mouseenter", function() {
//     if (!isInputFocused) {
//       searchInput.style.display = "inline-block";
//     }
//   });

//   searchContainer.addEventListener("mouseleave", function(e) {
//     if (!isInputFocused && !searchInput.contains(e.relatedTarget)) {
//       searchInput.style.display = "none";
//     }
//   });

//   searchInput.addEventListener("focus", function() {
//     isInputFocused = true;
//     searchInput.style.display = "inline-block";
//   });
//   searchInput.addEventListener("blur", function() {
//     searchInput.style.display = "none";
//   });
//   searchInput.addEventListener("blur", function() {
//     isInputFocused = false;
//   });
//   searchIcon.addEventListener("click", function() {
//     searchInput.style.display = "inline-block";
//   });
// });