import React from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import { CartData } from "../../mockData/mockData";
import logo from "../../assets/images/doggo1.jpeg";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";

const Cart = () => {
  const crumbs = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Pets",
      link: "pets",
    },
    {
      name: "Cart",
      link: "cart",
    },
  ];

  const { items, dispatch } = useCartContext();

  const data = items[0]

  const handleQuantity=(val)=>{
    
  }

 
  return (
    <div className="w-5/6 md:w-5/6 mx-auto  my-5">
      <div className="my-3">
        <BreadCrumb crumbs={crumbs} />
      </div>
      <div className="mt-6">
        {items[0] ? (
          <table class="table-fixed">
            <thead>
              <tr className="border-b border-borderGrey uppercase ">
                <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                  Item
                </th>
                <th className=" text-center text-xs font-normal mb-4 md:w-2/5 md:text-base">
                  Description
                </th>
                <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                  Quantity
                </th>
                <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                  Unit Price
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-b border-borderGrey text-center">
                  <td className="p-2 text-center ">
                    <div className="  ">
                      <img src={item?.image} alt="" className="rounded-xl" />
                    </div>
                  </td>
                  <td className="p-2 text-center">
                    <p className="uppercase font-semibold text-start mb-4">
                      {item.category}
                    </p>
                    <p className="text-xs text-justify md:text-sm">
                      {item?.description}
                    </p>
                  </td>
                  <td className="p-2 text-center">
                    {item?.quantity ? (
                      <div className="  mx-auto py-2 flex items-center justify-center border border-borderGrey text-xs lg:text-lg w-fit">
                        <span className="px-2  lg:px-3" onClick={()=>handleQuantity("dec")}>
                          <FiMinus />
                        </span>
                        <span className="px-2  lg:px-3">{item.quantity}</span>
                        <span className="px-2  lg:px-3" onClick={()=>handleQuantity("inc")}>
                          <FiPlus />
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td className="p-2 text-center font-bold text-lg">
                    {item?.unitPrice ? (
                      <span>&#163;{item?.unitPrice?.toLocaleString()}</span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="w-full text-center mt-12 py-5">
            <p className="my-8 ">No items found in the cart</p>
            <Link to="/categories/pets" className="bg-yellow p-4">
              Go back to shop
            </Link>
          </div>
        )}

        {items[0] ? (
          <div className="md:w-1/3 ml-auto border-b-.5 border-borderGrey  text-end mb-5 ">
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>SUBTOTAL</span>
              <span>
                &#163;{data?.subTotal?.toLocaleString()}
              </span>
            </div>
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>SHIPPING</span>
              <span>&#163;{data?.shippingFee}</span>
            </div>
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>TAXES</span>
              <span>&#163;{data?.tax}</span>
            </div>
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>TOTAL</span>
              <span className="font-bold text-lg">
                &#163;{(data?.total)?.toLocaleString()}
              </span>
            </div>
            <div className="my-3 flex items-center justify-end pr-3">
              <Link to="/cart/shipping">
                <button className="bg-yellow flex items-center ">
                  <i className="bg-lightGrey py-4 px-4 text-lg">
                    <FaWallet />
                  </i>
                  <span className="px-7 font-semibold">BUY NOW</span>
                </button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
