// 年份
$("#year").text(new Date().getFullYear());

// 導覽平滑捲動
$(".nav-link").on("click", function (e) {
  const to = $(this).attr("href");
  if (to && to.startsWith("#")) {
    e.preventDefault();
    const top = $(to).offset().top - 12;
    $("html, body").animate({ scrollTop: top }, 300);
  }
});

// 更多 / 收合
$("#toggleMore").on("click", function () {
  $("#more").toggleClass("collapsed");
  $(this).text($("#more").hasClass("collapsed") ? "閱讀更多" : "收合內容");
});

// 回到頂端
$("#toTop").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
});
