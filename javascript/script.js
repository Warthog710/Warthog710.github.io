function getPgRdy() {
    birthday = new Date(1998, 7, 10);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    document.getElementById("age").innerHTML = Math.abs(ageDate.getUTCFullYear() - 1970);

    //Enable Bootstrap Tooltips
    $(document).ready(function () {
        $("body").tooltip({ selector: '[data-toggle=tooltip]' });
    });
}

function addShadow(id) {
    document.getElementById(id).style.boxShadow = "6px 6px 3px grey";
}

function removeShadow(id) {
    document.getElementById(id).style.boxShadow = "";
}

function enlargeStars(id) {
    document.getElementById(id).style = "transform: scale(1.2, 1.2)";
}

function shrinkStars(id) {
    document.getElementById(id).style = "transform: scale(1.0, 1.0)";
}
