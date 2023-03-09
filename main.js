// slice img

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlice");
  var dots = document.getElementsByClassName("imgItem");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

//   tabs
// function openselect(evt, btnName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tabslink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace("active", "");
//   }
//   document.getElementById(btnName).style.display = "block";
//   evt.currentTarget.className += "active";
// }


// tabs detail
function openselect(evt, contentName) {
  var i, tablinks;
  var x = document.getElementsByClassName("tabcontent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabslink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
  }
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " activeTab";
}

// tab sliec customer 
function openSlice(evt, sliceName) {
  console.log('saiii');
  var i, sliceLink;
  var x = document.getElementsByClassName("sliceContent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  sliceLink = document.getElementsByClassName("btnTabs");
  for (i = 0; i < sliceLink.length; i++) {
    sliceLink[i].className = sliceLink[i].className.replace(" activeslicce", "");
  }
  document.getElementById(sliceName).style.display = "flex";
  evt.currentTarget.className += " activeslicce";

  document.getElementById("defaultOpen").click();
}