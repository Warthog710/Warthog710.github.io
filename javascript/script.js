function getPgRdy() {
    birthday = new Date(1998, 7, 10);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    document.getElementById("age").innerHTML = Math.abs(ageDate.getUTCFullYear() - 1970);

    //Enable Bootstrap Tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}

function addShadow(id) {
    document.getElementById(id).style.boxShadow = "6px 6px 3px grey";
}

function removeShadow(id) {
    document.getElementById(id).style.boxShadow = "";
}

function enlargeStars(id) {
    document.getElementById(id).style = "transform: scale(1.2, 1.2);";
}

function shrinkStars(id) {
    document.getElementById(id).style = "transform: scale(1.0, 1.0)";
}

function openNav() {
    document.getElementById("openbtn").style.visibility = "hidden";
    document.getElementById("closebtn").style.visibility = "visible";
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("closebtn").style.visibility = "hidden";
    document.getElementById("openbtn").style.visibility = "visible";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
