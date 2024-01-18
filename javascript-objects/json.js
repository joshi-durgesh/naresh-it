const body = document.querySelector("body");

function bodyload() {
  fetch("data/mobile.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (mobile) {
      document.getElementById("imgProduct").src = mobile.image;
      document.getElementById("title").innerHTML = mobile.name;
      document.getElementById("rating").innerHTML = mobile.product_review.rate;
      document.getElementById(
        "review"
      ).innerHTML = `${mobile.product_review.rating} Ratings & ${mobile.product_review.review} Reviews`;
      Object.keys(mobile.product_specification).map(function (keys) {
        var li = document.createElement("li");
        li.innerHTML = mobile.product_specification[keys];
        document.getElementById("lstProductDetail").appendChild(li);
      });
    });
}

body.addEventListener("load", bodyload());
