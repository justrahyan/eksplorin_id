function searchData() {
  var input, filter, productCards, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  productCards = document.getElementsByClassName("card");

  for (i = 0; i < productCards.length; i++) {
    txtValue = productCards[i].getAttribute("data-name").toUpperCase();
    var categoryFilter = document
      .getElementById("filterSelect")
      .value.toUpperCase();

    if (
      filter === "" &&
      (categoryFilter === "" || txtValue.indexOf(categoryFilter) > -1)
    ) {
      productCards[i].style.display = "";
    } else if (
      txtValue.indexOf(filter) > -1 &&
      (categoryFilter === "" || txtValue.indexOf(categoryFilter) > -1)
    ) {
      productCards[i].style.display = "";
    } else {
      productCards[i].style.display = "none";
    }
  }
}

function filterData() {
  var select, productCards, i, txtValue;
  select = document.getElementById("filterSelect");
  filter = select.value.toUpperCase();
  productCards = document.getElementsByClassName("card");

  for (i = 0; i < productCards.length; i++) {
    txtValue = productCards[i]
      .getAttribute("data-category")
      .toUpperCase();
    var searchFilter = document
      .getElementById("searchInput")
      .value.toUpperCase();

    if (
      filter === "" &&
      (searchFilter === "" || txtValue.indexOf(searchFilter) > -1)
    ) {
      productCards[i].style.display = "";
    } else if (
      txtValue === filter &&
      (searchFilter === "" || txtValue.indexOf(searchFilter) > -1)
    ) {
      productCards[i].style.display = "";
    } else {
      productCards[i].style.display = "none";
    }
  }
}