import React from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";
import { FiPlus, FiMinus } from "react-icons/fi";
import { ReactComponent as BuyNow } from "../../assets/images/buy_now.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../store/features/productSlice";
import { FaTimes } from "react-icons/fa";
import usePayment from "../../hooks/usePayment";
import { Loader } from "../../components/shared";
const Cart = () => {
  const imageurl = import.meta.env.VITE_IMAGE_URL;
  const { createOrder, isLoading } = usePayment();
  const crumbs = [
    {
      name: "Home",
      link: "",
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
  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const generateOrderId = () => {
    const cart = [];
    product.items.map((item) => {
      const obj = {
        postAdId: item.id,
        quantity: 1,
        total: item.amount,
      };
      cart.push(obj);
    });
    const obj = {
      cart: cart,
    };
    createOrder(obj);
  };
  // item
  // :
  // address
  // :
  // "Ikeja"
  // amount
  // :
  // "5000"
  // bullyId
  // :
  // null
  // category
  // :
  // {id: 2, categoryName: 'Pet Toys'}
  // categoryId
  // :
  // 2
  // city
  // :
  // "Ikeja"
  // createdAt
  // :
  // "12/22/2022 23:22:09"
  // description
  // :
  // "Table"
  // featured
  // :
  // false
  // id
  // :
  // 13
  // postAdImages
  // :
  // [{…}]
  // state
  // :
  // "Lagos"
  // status
  // :
  // "ACTIVE"
  // telephone
  // :
  // "(123)456-7890"
  // title
  // :
  // "Timbet Ekanem"
  // userId
  // :
  // 1
  // zip
  // :
  // "1234"
  // [[Prototype]]
  // :
  // Object
  // quantity
  // :
  // 1
  // shipping
  // :
  // 0
  // subTotal
  // :
  // NaN
  // tax
  // :
  // 0
  // total
  // :
  // NaN
  return (
    <div className="w-5/6 md:w-5/6 mx-auto  my-5">
      <div className="my-3">
        <BreadCrumb crumbs={crumbs} />
      </div>
      <div className="mt-6">
        {product.items.length ? (
          <table className="table-fixed w-full">
            <thead>
              <tr className="border-b border-borderGrey uppercase ">
                <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                  S/N
                </th>
                <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                  Image
                </th>
                <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                  Category
                </th>
                <th className=" text-center text-xs font-normal mb-4 md:w-2/5 md:text-base">
                  Description
                </th>
                {/* <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                  Quantity
                </th> */}
                <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                  Unit Price
                </th>
              </tr>
            </thead>
            {product.items.map((singleitem, index) => (
              <tbody key={index}>
                <tr className="border-b border-borderGrey text-center w-full">
                  <td className="p-2 text-center ">{index + 1}</td>
                  <td className="p-2 text-center ">
                    <div className=" max-h-28 flex items-center justify-center">
                      <img
                        src={`${imageurl}${singleitem?.postAdImages?.[0]?.url}`}
                        alt=""
                        className="rounded-xl max-h-28"
                      />
                    </div>
                  </td>
                  <td className="p-2 text-center ">
                    <p className="uppercase font-semibold  mb-4">
                      {singleitem?.category?.categoryName}
                    </p>
                  </td>
                  <td className="p-2 text-center ">
                    <p className="text-xs  md:text-sm  break-words">
                      {singleitem?.description}
                    </p>
                  </td>
                  <td className="p-2 text-center font-bold text-lg">
                    {singleitem?.amount ? (
                      <span>${singleitem?.amount?.toLocaleString()}</span>
                    ) : null}
                  </td>
                  <td
                    className="p-2 text-center font-bold text-lg"
                    onClick={() => removeItem(singleitem?.id)}
                  >
                    <i>
                      <FaTimes />
                    </i>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        ) : (
          <div className="w-full text-center mt-12 py-5">
            <p className="my-8 ">No item found in the cart</p>
            <Link to="/categories" className="bg-yellow p-4">
              Go back to shop
            </Link>
          </div>
        )}
        {product?.items?.length ? (
          <div className="md:w-1/3 ml-auto border-b-.5 border-borderGrey  text-end mb-5 ">
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>SUBTOTAL</span>
              <span>${product?.subTotal?.toLocaleString()}</span>
            </div>
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>SHIPPING</span>
              <span>${product?.shipping}</span>
            </div>
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>TAXES</span>
              <span>${product?.tax}</span>
            </div>
            <div className="border-b border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
              <span>TOTAL</span>
              <span className="font-bold text-lg">
                ${product?.total?.toLocaleString()}
              </span>
            </div>
            <div className="my-3 flex items-center justify-end pr-3">
              <button
                className="bg-yellow flex items-center "
                onClick={generateOrderId}
              >
                <i className="bg-lightGrey py-4 px-4 text-lg">
                  <BuyNow />
                </i>
                <span className="px-7 font-semibold">
                  BUY NOW <i>{isLoading && <Loader />}</i>
                </span>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
