function getPageList(totalPages, page, maxLength) {
  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

  if (totalPages <= maxLength) {
    return range(1, totalPages);
  }

  if (page <= maxLength - sideWidth - 1 - rightWidth) {
    return range(1, maxLength - sideWidth - 1).concat(
      0,
      range(totalPages - sideWidth + 1, totalPages)
    );
  }

  if (page >= totalPages - sideWidth - 1 - rightWidth) {
    return range(1, sideWidth).concat(
      0,
      range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
    );
  }

  return range(1, sideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - sideWidth + 1, totalPages)
  );
}

var numberOfItems = $(".card-content .card").length;
var limitPerPage = 9; //How many card items visible per a page
var totalPages = Math.ceil(numberOfItems / limitPerPage);
var pagenationSize = 7; //How many page elements visible in the pagenation
var currentPage;

function showPage(whichPage) {
  if (whichPage < 1 || whichPage > totalPages) return false;

  currentPage = whichPage;

  $(".card-content .card")
    .hide()
    .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
    .show();

  $(".category-selected li").slice(1, -1).remove();

  getPageList(totalPages, currentPage, pagenationSize).forEach((item) => {
    $("<li>")
      .addClass("page-item")
      .addClass(item ? "current-page" : "dots")
      .toggleClass("active", item === currentPage)
      .append(
        $("<a>")
        .addClass("page-link")
        .attr({
          href: "javascript:void(0)"
        })
        .text(item || "...")
      )
      .insertBefore(".next-page");
  });

  $(".previous-page").toggleClass("disable", currentPage === 1);
  $(".next-page").toggleClass("disable", currentPage === totalPages);

  // Sembunyikan atau tampilkan pagination berdasarkan halaman saat ini
  var paginationContainer = document.getElementById('pagination');
  paginationContainer.style.display = (totalPages > 1) ? 'block' : 'none';
  return true;
}

$(".category-selected").append(
  $("<li>")
  .addClass("page-item")
  .addClass("previous-page")
  .append(
    $("<a>")
    .addClass("page-link")
    .attr({
      href: "javascript:void(0)"
    })
    .text("Prev")
  ),
  $("<li>")
  .addClass("page-item")
  .addClass("next-page")
  .append(
    $("<a>")
    .addClass("page-link")
    .attr({
      href: "javascript:void(0)"
    })
    .text("Next")
  )
);

$(".card-content").show();
showPage(1);

$(document).on(
  "click",
  ".category-selected li.current-page:not(.active)",
  function () {
    return showPage(+$(this).text());
  }
);

$(".next-page").on("click", function () {
  return showPage(currentPage + 1);
});

$(".previous-page").on("click", function () {
  return showPage(currentPage - 1);
});

function filterData() {
  var select = document.getElementById("filterSelect");
  var filter = select.value.toUpperCase();

  var productCards = document.getElementsByClassName("card");
  for (var i = 0; i < productCards.length; i++) {
    var txtValue = productCards[i]
      .getAttribute("data-category")
      .toUpperCase();

    if (filter === "" || filter === "SEMUA") {
      productCards[i].style.display = "";
      return showPage(1);
    }

    if (txtValue === filter) {
      productCards[i].style.display = "";
    } else {
      productCards[i].style.display = "none";
    }
  }

  // Sembunyikan atau tampilkan pagination berdasarkan filter
  var paginationContainer = document.getElementById('pagination');
  paginationContainer.style.display = (filter === "" || filter === "SEMUA") ? 'block' : 'none';
}

function searchData() {
  var input, filter, productCards, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  productCards = document.getElementsByClassName("card");

  if(filter === ""){
    return showPage(1)
  }

  for (i = 0; i < productCards.length; i++) {
    txtValue = productCards[i].getAttribute("data-name").toUpperCase();

    if (txtValue.indexOf(filter) > -1) {
      productCards[i].style.display = "";
    } else {
      productCards[i].style.display = "none";
    }
  }

}
