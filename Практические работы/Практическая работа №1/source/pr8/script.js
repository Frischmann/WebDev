var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "first.html") {
  setTimeout(() => {
    document.location.href = "second.html";
  }, 3000);
} else {
  setTimeout(() => {
    document.location.href = "first.html";
  }, 3000);
}
