
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'easycareer-services.myshopify.com',
      storefrontAccessToken: 'f8dee8c043eb324384f8a67a6378eb76',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [1886360928321],
        node: document.getElementById('product-component-2dd6bfb8512'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
"product": {
"variantId": "all",
"width": "380px",
"contents": {
  "imgWithCarousel": false,
  "variantTitle": false,
  "description": false,
  "buttonWithQuantity": false,
  "quantity": false
},
"text": {
  "button": "加入购物车"
},
"styles": {
  "product": {
    "text-align": "centre",
    "@media (min-width: 601px)": {
      "max-width": "100%",
      "margin-left": "0",
      "margin-bottom": "50px"
    }
  },
  "button": {
    "background-color": "#33aacc",
    ":hover": {
      "background-color": "#2e99b8"
    },
    ":focus": {
      "background-color": "#2e99b8"
    }
  },
  "compareAt": {
    "font-size": "12px"
  }
}
},
"cart": {
"contents": {
  "button": true
},
"styles": {
  "button": {
    "background-color": "#33aacc",
    ":hover": {
      "background-color": "#2e99b8"
    },
    ":focus": {
      "background-color": "#2e99b8"
    }
  },
  "footer": {
    "background-color": "#ffffff"
  }
}
},
"modalProduct": {
"contents": {
  "img": false,
  "imgWithCarousel": true,
  "variantTitle": false,
  "buttonWithQuantity": true,
  "button": false,
  "quantity": false
},
"styles": {
  "product": {
    "@media (min-width: 601px)": {
      "max-width": "100%",
      "margin-left": "0px",
      "margin-bottom": "0px"
    }
  },
  "button": {
    "background-color": "#33aacc",
    ":hover": {
      "background-color": "#2e99b8"
    },
    ":focus": {
      "background-color": "#2e99b8"
    }
  }
}
},
"toggle": {
"styles": {
  "toggle": {
    "background-color": "#33aacc",
    ":hover": {
      "background-color": "#2e99b8"
    },
    ":focus": {
      "background-color": "#2e99b8"
    }
  }
}
},
"productSet": {
"styles": {
  "products": {
    "@media (min-width: 601px)": {
      "margin-left": "-20px"
    }
  }
}
}
}
      });
    });
  }
})();


    /*<![CDATA[*/

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'easycareer-services.myshopify.com',
          storefrontAccessToken: 'f8dee8c043eb324384f8a67a6378eb76',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1825124646977],
            node: document.getElementById('product-component-c3adc591c15'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "variantId": "all",
    "width": "380px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "加入购物车"
    },
    "styles": {
      "product": {
        "text-align": "centre",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
    /*]]>*/



    /*<![CDATA[*/

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'easycareer-services.myshopify.com',
          storefrontAccessToken: 'f8dee8c043eb324384f8a67a6378eb76',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1886376230977],
            node: document.getElementById('product-component-7c9f281128d'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "variantId": "all",
    "width": "380px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "加入购物车"
    },
    "styles": {
      "product": {
        "text-align": "centre",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
    /*]]>*/



    /*<![CDATA[*/

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'easycareer-services.myshopify.com',
          storefrontAccessToken: 'f8dee8c043eb324384f8a67a6378eb76',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1886380425281],
            node: document.getElementById('product-component-f73cb377666'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "variantId": "all",
    "width": "380px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "加入购物车"
    },
    "styles": {
      "product": {
        "text-align": "centre",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#33aacc",
        ":hover": {
          "background-color": "#2e99b8"
        },
        ":focus": {
          "background-color": "#2e99b8"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
    /*]]>*/
    