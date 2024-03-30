const shopclick = document.querySelectorAll(".shop-click");

for (var i = 0; i < shopclick.length; i++) {
  shopclick[i].addEventListener("click", function () {
    var shopName = this.dataset.tab;
    var shopContent = document.getElementById(shopName);

    var allShopContent = document.querySelectorAll(".shop-click");
    var allShopName = document.querySelectorAll(".shop-section");
    for (var j = 0; j < allShopName.length; j++) {
      allShopName[j].style.display = "none";
    }
    for (var k = 0; k < allShopContent.length; k++) {
      allShopContent[k].classList.remove("active");
    }
    shopContent.style.display = "flex";
    this.classList.add("active");
  });
}
document.querySelector(".shop-click").click();
