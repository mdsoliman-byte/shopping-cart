document.getElementById("incript-plus").addEventListener("click", function () {
  const productQuantity = document.getElementById("product-quantity");
  const productNumber = parseInt(productQuantity.value) + 1;
  productQuantity.value = productNumber;
  // console.log(productNumber)
});
document.getElementById("decript-minus").addEventListener("click", function () {
  const productQuantity = document.getElementById("product-quantity");
  const productNumber = parseInt(productQuantity.value) - 1;
  productQuantity.value = productNumber;
  // console.log(productNumber)
});
