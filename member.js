function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberValueLength = skillsMemberValue.length;
    if (skillsMemberValueLength > 0) {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
}