let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];

let isArray = Array.isArray(orders); // ตรวจสอบว่า orders เป็น Array หรือไม่

let creditCardTypeOfBlindermann; // ค่า creditCardType ของ Toinette Blindermann
for (let order of orders) {
  if (order.customerName === "Toinette Blindermann") {
    creditCardTypeOfBlindermann = order.creditCardType;
    // Reassign creditCardType ของ Toinette Blindermann เป็น "visa"
    order.creditCardType = "visa";
    break; // เมื่อเจอข้อมูลแล้วก็ออกจาก loop
  }
}

let totalPurchaseOfJoannet; // ค่า productQuantity ของ Anjela Joannet
for (let order of orders) {
  if (order.customerName === "Anjela Joannet") {
    totalPurchaseOfJoannet = order.productQuantity;
    break;
  }
}

let totalPurchaseOfDary = 0; // คำนวณยอดซื้อสินค้ารวมของ Celia Dary
for (let order of orders) {
  if (order.customerName === "Celia Dary") {
    totalPurchaseOfDary = order.productPrice * order.productQuantity;
    break;
  }
}

// ลบ Object ของ Brenn Hugk ออกจาก Array orders
orders = orders.filter((order) => order.customerName !== "Brenn Hugk");

console.log(orders);
