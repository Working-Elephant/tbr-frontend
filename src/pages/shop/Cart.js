import React from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";
import { FiPlus, FiMinus } from "react-icons/fi";
import { ReactComponent as BuyNow } from "../../assets/images/buy_now.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../store/features/productSlice";

const Cart = () => {
  const crumbs = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Pets",
      link: "categories/pets",
    },
    {
      name: "Cart",
      link: "cart",
    },
  ];
  const product = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  const { item } = product;

  console.log(product);

  const handleQuantity = (val) => {
    if (val === "inc") {
      dispatch(increaseQuantity());
    } else {
      dispatch(decreaseQuantity());
    }
  };

  return (
    <div className="w-5/6 md:w-5/6 mx-auto  my-5">
      <div className="my-3">
        <BreadCrumb crumbs={crumbs} />
      </div>
      <div className="mt-6">
        {product.item ? (
          <table className="table-fixed w-full">
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
              <tr className="border-b border-borderGrey text-center w-full">
                <td className="p-2 text-center ">
                  <div className=" max-h-28 flex items-center justify-center">
                    <img
                      src={item?.image}
                      alt=""
                      className="rounded-xl max-h-28"
                    />
                  </div>
                </td>
                <td className="p-2 text-center ">
                  <p className="uppercase font-semibold text-start mb-4">
                    {item?.category}
                  </p>
                  <p className="text-xs text-justify md:text-sm  break-words">
                    {item?.description}
                  </p>
                </td>
                <td className="p-2 text-center">
                  {product?.quantity ? (
                    <div className="  mx-auto py-2 flex items-center justify-center border border-borderGrey text-xs lg:text-lg w-fit">
                      <span
                        className="px-2  lg:px-3"
                        onClick={() => handleQuantity("dec")}
                      >
                        <FiMinus />
                      </span>
                      <span className="px-2  lg:px-3">{product.quantity}</span>
                      <span
                        className="px-2  lg:px-3"
                        onClick={() => handleQuantity("inc")}
                      >
                        <FiPlus />
                      </span>
                    </div>
                  ) : null}
                </td>
                <td className="p-2 text-center font-bold text-lg">
                  {item?.price ? (
                    <span>&#163;{item?.price?.toLocaleString()}</span>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="w-full text-center mt-12 py-5">
            <p className="my-8 ">No item found in the cart</p>
            <Link to="/categories/pets" className="bg-yellow p-4">
              Go back to shop
            </Link>
          </div>
        )}

        {item ? (
          <div className="md:w-1/3 ml-auto border-b-.5 border-borderGrey  text-end mb-5 ">
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>SUBTOTAL</span>
              <span>&#163;{product?.subTotal?.toLocaleString()}</span>
            </div>
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>SHIPPING</span>
              <span>&#163;{product?.shipping}</span>
            </div>
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>TAXES</span>
              <span>&#163;{product?.tax}</span>
            </div>
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>TOTAL</span>
              <span className="font-bold text-lg">
                &#163;{product?.total?.toLocaleString()}
              </span>
            </div>
            <div className="my-3 flex items-center justify-end pr-3">
              <Link to="/cart/shipping">
                <button className="bg-yellow flex items-center ">
                  <i className="bg-lightGrey py-4 px-4 text-lg">
                    <BuyNow />
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
