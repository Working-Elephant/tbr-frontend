import React from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import { CartData } from "../../mockData/mockData";
import logo from "../../assets/images/doggo1.jpeg";
import { Link } from "react-router-dom";

const Cart = () => {
  const data = {
    itemImage: logo,
    itemCategory: "Bull Dog",
    itemDescription:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    itemQuantity: 1,
    unitPrice: 2750,
  };
  return (
    <div className="w-5/6 md:w-5/6 mx-auto  my-5">
      <div>
        <BreadCrumb />
      </div>
      <div>
        {CartData && CartData.length > 0 ? (
          <table class="table-fixed">
            <thead>
              <tr className="border-b-.5 border-borderGrey uppercase ">
                <th className=" text-center font-normal mb-4 md:w-1/5">Item</th>
                <th className=" text-center font-normal mb-4 md:w-2/5">
                  Description
                </th>
                <th className=" text-center font-normal mb-4 md:w-1/5">
                  Quantity
                </th>
                <th className=" text-center font-normal mb-4 md:w-1/5">
                  Unit Price
                </th>
              </tr>
            </thead>
            <tbody>
              {CartData.map((data, i) => (
                <tr
                  key={i}
                  className="border-b-.5 border-borderGrey text-center"
                >
                  <td className="py-2 text-center ">
                    <div className=" md:w-3/6 h-2/3 mx-auto ">
                      <img src={data.itemImage} alt="" className="rounded-xl" />
                    </div>
                  </td>
                  <td className="py-2 text-center">
                    <p className="uppercase font-semibold text-start mb-4">
                      {data.itemCategory}
                    </p>
                    <p className="text-sm text-justify">
                      {data.itemDescription}
                    </p>
                  </td>
                  <td className="py-2 text-center">
                    <div className=" md:w-2/4 mx-auto py-2 flex items-center justify-center border-.5 border-borderGrey">
                      <span className="px-3">
                        <FiMinus />
                      </span>
                      <span className="px-3">{data.itemQuantity}</span>
                      <span className="px-3">
                        <FiPlus />
                      </span>
                    </div>
                  </td>
                  <td className="py-2 text-center font-bold text-lg">
                    &#163;{data.unitPrice.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="w-full text-center mt-12 py-5">
            <p className="my-8 ">No items found in the cart</p>
            <Link to="/shop/pets" className="bg-yellow p-4">
              Go back to shop
            </Link>
          </div>
        )}

        {CartData && CartData.length > 0 ? (
          <div className="md:w-1/3 ml-auto border-b-.5 border-borderGrey  text-end mb-5 ">
            <div className="border-b-.5 border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>SUBTOTAL</span>
              <span>
                &#163;{(data.itemQuantity * data.unitPrice).toLocaleString()}
              </span>
            </div>
            <div className="border-b-.5 border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>SHIPPING</span>
              <span>&#163;Free</span>
            </div>
            <div className="border-b-.5 border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>TAXES</span>
              <span>&#163;{0}</span>
            </div>
            <div className="border-b-.5 border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>TOTAL</span>
              <span className="font-bold text-lg">
                &#163;{(data.itemQuantity * data.unitPrice).toLocaleString()}
              </span>
            </div>
            <div className="my-3 flex items-center justify-end pr-3"><Link to="/cart/shipping">
              <button className="bg-yellow flex items-center ">
                
                <i className="bg-lightGrey py-4 px-4 text-lg">
                  <FaWallet />
                </i>
                <span className="px-7 font-semibold">BUY NOW</span>
              </button></Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
