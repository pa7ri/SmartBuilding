function onBuildingSelected() {
  if (!document.getElementById("feeds-building").classList.contains("active")) {
    document.getElementById("feeds-building").classList.add("active");
  }
  if (document.getElementById("feeds-your-home").classList.contains("active")) {
    document.getElementById("feeds-your-home").classList.remove("active");
  }
  if (document.getElementById("feeds-my-home").classList.contains("active")) {
    document.getElementById("feeds-my-home").classList.remove("active");
  }
}

function onYourHomeSelected() {
  if (document.getElementById("feeds-building").classList.contains("active")) {
    document.getElementById("feeds-building").classList.remove("active");
  }
  if (
    !document.getElementById("feeds-your-home").classList.contains("active")
  ) {
    document.getElementById("feeds-your-home").classList.add("active");
  }
  if (document.getElementById("feeds-my-home").classList.contains("active")) {
    document.getElementById("feeds-my-home").classList.remove("active");
  }
}

function onMyHomeSelected() {
  if (document.getElementById("feeds-building").classList.contains("active")) {
    document.getElementById("feeds-building").classList.remove("active");
  }
  if (document.getElementById("feeds-your-home").classList.contains("active")) {
    document.getElementById("feeds-your-home").classList.remove("active");
  }
  if (!document.getElementById("feeds-my-home").classList.contains("active")) {
    document.getElementById("feeds-my-home").classList.add("active");
  }
}
