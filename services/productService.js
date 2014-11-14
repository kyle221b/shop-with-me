var products = require('../data/products.json');
var amazonProducts = require('../data/amazon_product.json');

module.exports = {
  getProductsForProductListId: function(productListId) {
    var productListProducts = [];
    products.forEach(function(product, index) {
      if (product.product_list_id == productListId) {
        var amazonProduct = getProductDetailsForProduct(product);
        amazonProduct.votes = product.votes;
        productListProducts.push(amazonProduct);
      }
    });
    return productListProducts;
  },
  getAllAmazonProducts: function() {
    return amazonProducts;
  }
}

var getProductDetailsForProduct = function(productObj) {
  var productAsin = productObj.amazon_asin;
  var amazonProductReturn;
  amazonProducts.forEach(function(amazonProduct, index) {
    if (amazonProduct.asin == productAsin) {
      amazonProductReturn = amazonProduct;
      return;
    }
  });
  return amazonProductReturn;
}
