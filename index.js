/* Toggle between showing and hiding the navigation menu links when the user clicks on the nav-item menu / bar icon */

<script>
function myFunction() {
  var x = document.getElementByClass("nav-item");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

</script>