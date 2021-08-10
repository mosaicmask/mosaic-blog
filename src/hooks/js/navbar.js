/*
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-04-01 16:17:14
 */
import $ from "jquery";
// ---------Responsive-navbar-router-link-active-animation-----------
function test() {
  let tabsNewAnim = $("#navbarSupportedContent");
  let activeItemNewAnim = tabsNewAnim.find(".router-link-active");
  let activeWidthNewAnimHeight = $(".router-link-active").innerHeight();
  let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  let itemPosNewAnim = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnim.top + "px",
    left: itemPosNewAnim.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px",
  });
  $("#navbarSupportedContent").on("click", "a", function (e) {
    let activeWidthNewAnimHeight = $(this).innerHeight();
    let activeWidthNewAnimWidth = $(this).innerWidth();
    let itemPosNewAnim = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnim.top + "px",
      left: itemPosNewAnim.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  });
}
$(document).ready(function () {
  setTimeout(function () {
    test();
  }, 100);
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  setTimeout(function () {
    test();
  });
});
