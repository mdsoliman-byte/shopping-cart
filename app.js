function incriptionNumber(incription) {
  const productQuantity = document.getElementById("product-quantity");
  const productNumber = parseInt(productQuantity.value);
  if (incription == true) {
    productQuantity.value = productNumber + 1;
  } else if (productNumber > 1) {
    productQuantity.value = productNumber - 1;
  }
}

document.getElementById("incript-plus").addEventListener("click", function () {
  incriptionNumber(true);
});
document.getElementById("decript-minus").addEventListener("click", function () {
  incriptionNumber(false);
});
