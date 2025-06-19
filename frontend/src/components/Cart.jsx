import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem } from '../utils/cartSlice';

function Cart() {
  const cartItems = useSelector((store)=>store.cart.items)
  const dispatch = useDispatch();
  function ClearCart(){
    dispatch(clearCart())
  }
  function removeCart(){
    dispatch(removeItem())
  }
  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold mb-10">
        List of items available for RESTAURANT
      </h1>

      {cartItems.map((foodItem, index) => {
        const info = foodItem.card.info;

        return (
          <div
            key={index}
            className="flex w-11/12 md:w-3/4 mx-auto mb-10 border p-4 rounded-xl shadow-md hover:-translate-y-2 transform transition duration-300 bg-white"
          >
            {/* Text Content */}
            <div className="flex flex-col w-3/4 pr-4">
              <h2 className="text-xl font-semibold mb-1">{info.name}</h2>
              <p className="text-gray-700 mb-1 font-medium">
                ₹{(info.price || info.defaultPrice) / 100}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                {info.category || 'General'}
              </p>
              <p className="text-sm text-gray-500 line-clamp-3">{info.description}</p>
            </div>

            {/* Image and Button */}
            <div className="relative w-52 flex flex-col items-center">
              {info.imageId && (
                <img
                  className="w-full h-44 object-cover rounded-md border shadow-sm border-gray-200 mb-2"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`}
                  alt={info.name}
                />
              )}

              {/* Add to Cart Button */}
              <button
                className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition duration-200"
                onClick={()=>removeCart()}

              >
                Remove item
              </button>
            </div>
          </div>
        );
      })}
      <button  className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition duration-200"
      onClick={()=>ClearCart()}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart