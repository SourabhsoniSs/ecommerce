import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

function Orders() {
  const { currency, products } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-6">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className="space-y-4">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 px-4 border-b rounded-sm bg-white 
                       flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            {/* LEFT SIDE - Product Info */}
            <div className="flex items-center gap-4 text-sm md:w-1/2">
              <img
                className="w-16 sm:w-20 rounded-md border"
                src={item.image?.[0]}
                alt={item.name}
              />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p>
                    {currency} {item.price}
                  </p>
                  <p>Quantity : 1</p>
                  <p>Size : M</p>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Date: <span className="text-gray-400">25, Aug, 2025</span>
                </p>
              </div>
            </div>

            {/* MIDDLE SIDE - Status */}
            <div className="flex items-center gap-2 md:w-1/4">
              <span className="min-w-2 h-2 w-2 rounded-full bg-green-500"></span>
              <p className="text-sm md:text-base font-medium text-green-600">
                Ready to ship
              </p>
            </div>

            {/* RIGHT SIDE - Track Button */}
            <div className="md:w-1/4 flex justify-end">
              <button className="border px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
