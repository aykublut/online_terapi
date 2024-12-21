$(".okb").on("click", function () {
  $(".okb").addClass("active");
  $(".anaSayfa").removeClass("active");
  $(".dehb").removeClass("active");
});

$(".anaSayfa").on("click", function () {
  $(".anaSayfa").addClass("active");
  $(".okb").removeClass("active");
  $(".dehb").removeClass("active");
});

$(".dehb").on("click", function () {
  $(".dehb").addClass("active");
  $(".anaSayfa").removeClass("active");
  $(".okb").removeClass("active");
});

$(document).ready(function () {
  $("#continue-reading").click(function (event) {
    event.preventDefault(); // Sayfanın yenilenmesini engeller
    $("#full-text").toggleClass("d-none"); // Uzun metni göster/gizle

    // Bağlantı metnini değiştir
    if ($("#full-text").hasClass("d-none")) {
      $("#continue-reading").text("Okumaya devam et...");
    } else {
      $("#continue-reading").text("Daha azını göster...");
    }
  });
});

$(document).ready(function () {
  // Tuşa basıldığında okb.html sayfasına yönlendir
  $(".okb").click(function () {
    window.location.href = "okb.html";
  });
});
