const ques = document.getElementsByClassName("question");

var i;

for (i = 0; i < ques.length; i++) {
  ques[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var ans = this.nextElementSibling;
    const plusIcon = this.querySelector(".plus");
    const minusIcon = this.querySelector(".minus");
    if (ans.style.display === "block") {
      ans.style.display = "none";
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      ans.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
}
