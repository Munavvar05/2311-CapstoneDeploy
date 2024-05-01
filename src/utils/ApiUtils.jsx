class ApiUtils {
  static getAllProducts() {
    const ProductList = [
      {
        id: "1",
        image_url: "./assets/RoseAbaya.png",
        name: "Eyana three piece set - Rose ",
        price: 165,
        strikedoffprice: 180,
      },
      {
        id: "2",
        image_url: "./assets/MayaMaxiDress.png",
        name: "Maya Maxi Dress - Off White ",
        price: 124,
        strikedoffprice: 150,
      },
      {
        id: "3",
        image_url: "./assets/MyraLongSlDress.png",
        name: "Myra Long Sleeve Maxi Dress - Dark Rose",
        price: 124,
        strikedoffprice: 150,
      },
      {
        id: "4",
        image_url: "./assets/SerenaAbaya.png",
        name: "Serena Hand-Sewn Diamond Abaya Set ",
        price: 180,
      },
    ];
    return ProductList;
  }
  
  static addToCart(item) {
    const storedCartData = this.getCartItems();
    storedCartData.push(item);
    localStorage.setItem('cart', JSON.stringify(storedCartData));
  }
  
  static removeFromCart(item) {
    const storedCartData = this.getCartItems();
    const updatedCartData = [];
    storedCartData.forEach(cartItem => {
      if (cartItem.id !== item.id) {
        updatedCartData.push(cartItem)
      }
    });
    localStorage.setItem('cart', JSON.stringify(updatedCartData));
  }
  
  static getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  static checkout(item) {
    const storedOrdersData = this.getOrderItems();
    storedOrdersData.push(item);
    localStorage.setItem('order', JSON.stringify(storedOrdersData));
  }

  static removeFromOrder(item) {
    const storedOrderData = this.getOrderItems();
    const updatedOrderData = [];
    storedOrderData.forEach(cartItem => {
      if (cartItem.id !== item.id) {
        updatedOrderData.push(cartItem)
      }
    });
    localStorage.setItem('order', JSON.stringify(updatedOrderData));
  }

  static getOrderItems() {
    return JSON.parse(localStorage.getItem('order')) || [];
  }
}

export default ApiUtils;
