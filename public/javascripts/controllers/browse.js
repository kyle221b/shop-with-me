var productsJSON = [  
   {  
      "asin":"B00O1T2JQO",
      "title":"Hurley Big Boys' Slim Twill Pant",
      "description":"60% Polyester/40% Cotton",
      "cost":29.99,
      "rating":4.3
   },
   {  
      "asin":"B00EZEER2E",
      "title":"Zanerobe Men's Sureshot Drawstring Pant",
      "description":"Imported from Detroit",
      "cost":99.00,
      "rating":4.0
   },
   {  
      "asin":"B00NL19JES",
      "title":"Beautees Big Girls' Ugly Christmas Tee",
      "description":"",
      "cost":15.99,
      "rating":4.0
   },
   {  
      "asin":"B00LKBS76W",
      "title":"SSLR Men's Summer Casual Flower Short Sleeve Shirt",
      "description":"The clothing of SSLR is very known for quality,simplicity and delicate. We have the desire that makes the fashion trend more efficient and easy going. That's how we change the world. We combine British style with European,American and Korea fashion well, and strive to make perfect blend of colors, materials and design. Hope you will like our work. ",
      "cost":22.00,
      "rating":3.8
   },
   {  
      "asin":"B0089OQHSS",
      "title":"Columbia Men's Bahama II Short-Sleeve Shirt",
      "description":"Designed specifically for the needs of anglers, this lightweight, durable nylon shirt dries fast, with mesh-lined cape vents at the back shoulder to keep you cool and built-in UV protection.",
      "cost":39.95,
      "rating":4.5
   },
   {  
      "asin":"B0089OQHSS",
      "title":"Columbia Men's Bahama II Short-Sleeve Shirt",
      "description":"Designed specifically for the needs of anglers, this lightweight, durable nylon shirt dries fast, with mesh-lined cape vents at the back shoulder to keep you cool and built-in UV protection.",
      "cost":39.95,
      "rating":4.5
   },
   {  
      "asin":"B0089OQHSS",
      "title":"Gaorui Men winter sport quilted jacket cotton-padded coats Zipper overcoat Outwear",
      "description":"Super Thickening warm Lining. Excellent sewing. High quality thickengin warm down coat.",
      "cost":30.44,
      "rating":4.0
   }
];

app.controller('BrowseCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.test = "Hello World";
    $scope.products = productsJSON;
  }
]);
