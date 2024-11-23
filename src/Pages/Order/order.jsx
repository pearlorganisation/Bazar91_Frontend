import React from "react";

const orders = [
  {
    id: 1,
    orderNumber: "ORD12345",
    date: "2024-11-15",
    status: "Replacement Completed",
    price: "₹222",
    color: "Green",
    image: "https://bazar91.com/2658-home_default/brother-f540e-comprised-embroidery-machine.jpg", // Replace with actual image URL
    message:
      "We have resent this product. Due to shipment-related issues, we could not deliver this product via the original order. Please track the new order from My Orders.",
    replacementId: "10103212068202681312",
  },
  {
    id: 2,
    orderNumber: "ORD67890",
    date: "2024-08-12",
    status: "Cancelled",
    price: "₹564",
    color: "Multicolor",
    image: "https://bazar91.com/2363-home_default/hsw-1632-single-head-embroidery-machine-bazar91-india.jpg", // Replace with actual image URL
    message: "Shipment is cancelled",
  },
  {
    id: 3,
    orderNumber: "ORD78901",
    date: "2024-08-14",
    status: "Replacement Completed",
    price: "₹564",
    color: "Multicolor",
    image: "https://bazar91.com/1997-home_default/brother-pr1055x-single-head-embroidery-machine.jpg", // Replace with actual image URL
    message:
      "We have resent this product. Due to shipment-related issues, we could not deliver this product via the original order. Please track the new order from My Orders.",
    replacementId: "10203202501573363644",
  },
];

const MyOrdersPage = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 max-w-3xl mx-auto "
          >
            <div className="flex items-start space-x-4">
              {/* Product Image */}
              <img
                src={order.image}
                alt={order.orderNumber}
                className="w-36 h-36 rounded border"
              />

              {/* Order Details */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="font-medium text-gray-800">
                    {order.color} - {order.orderNumber}
                  </h2>
                  <span
                    className={`text-sm font-medium ${
                      order.status === "Cancelled"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">Price: {order.price}</p>
                <p className="text-gray-500 text-sm">Date: {order.date}</p>
                {order.replacementId && (
                  <p className="text-gray-500 text-sm">
                    Replacement ID: {order.replacementId}
                  </p>
                )}
                {/* Message */}
                <p className="text-gray-600 mt-2 text-sm">{order.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrdersPage;
