import React, { useEffect, useState } from "react";
import { CartData } from "../../data";
import { FaWallet, FaPaypal } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import {
  Input,
  ErrorMessage,
  SelectInput,
  BreadCrumb,
  CustomCheckbox,
} from "../../components/shared";
import { useForm } from "react-hook-form";
import { months, year } from "../../data";
import { useSelector } from "react-redux";
import PayPal from "./PayPal";
import { Link } from "react-router-dom";
import usePayment from "../../hooks/usePayment";
import ScreenLoader from "../../components/shared/ScreenLoader";
import { useAdsContext } from "../../hooks/useAdsContext";

const Billing = () => {
  const crumbs = [
    {
      name: "Home",
      link: "",
    },

    {
      name: "Cart",
      link: "cart",
    },
    // {
    //   name: "Shipping",
    //   link: "cart/shipping",
    // },
    {
      name: "Billing",
      link: "cart/shipping/billing",
    },
  ];
  const { submitPayment, isLoading } = usePayment();
  const { cart } = useSelector((state) => state.product);
  const { orderId } = useAdsContext();
  const imageurl = import.meta.env.VITE_IMAGE_URL;
  const [reference, setReference] = useState("");
  //   duties
  // :
  // 0
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
  // categoryName
  // :
  // "Pet Toys"
  // id
  // :
  // 2
  // [[Prototype]]
  // :
  // Object
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
  // Array(1)
  // 0
  // :
  // id
  // :
  // 21
  // postAdId
  // :
  // 13
  // url
  // :
  // "427b38fe-f434-4a70-ac4b-be548c7cd437_4B570173-212D-45C5-944B-B2455A1A75FF.jpeg"
  // [[Prototype]]
  // :
  // Object
  // length
  // :
  // 1
  // [[Prototype]]
  // :
  // Array(0)
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
  const onApproved = async (data) => {
    let payPal = data;
    console.log(data, "called paypal");
    const amount = payPal?.purchase_units?.[0]?.amount?.value;
    const currencyCode = payPal?.purchase_units?.[0]?.amount?.currency_code;
    const orderId = payPal?.purchase_units?.[0]?.reference_id;
    const payerEmail = payPal?.payer?.email_address;
    const payerName = `${payPal?.payer?.name?.given_name} ${payPal?.payer?.name?.given_name}`;
    const payerPayPalId = payPal?.payer?.payer_id;
    const PayPayId = payPal?.purchase_units?.[0]?.payments?.captures?.[0]?.id;
    //shipping
    const address1 =
      payPal?.purchase_units?.[0]?.shipping?.address?.address_line_1;
    const address2 = "";
    const country =
      payPal?.purchase_units?.[0]?.shipping?.address?.country_code;
    const city = payPal?.purchase_units?.[0]?.shipping?.address?.admin_area_2;
    const province =
      payPal?.purchase_units?.[0]?.shipping?.address?.admin_area_1;
    const postalCode =
      payPal?.purchase_units?.[0]?.shipping?.address?.postal_code;
    const obj = {
      orderId: orderId,
      paymentType: "ORDER_PAYMENT",
      amount: amount,
      currencyCode: currencyCode,
      payerName: payerName,
      payerEmail: payerEmail,
      payerPayPalId: payerPayPalId,
      PayPalId: PayPayId,
      shipping: {
        address1: address1,
        address2: address2,
        country: country,
        city: city,
        province: province,
        postalCode: postalCode,
      },
    };
    console.log(orderId);
    const status = await submitPayment(obj);
    if (!status) {
    }
  };
  return (
    <>
      {isLoading ? (
        <ScreenLoader />
      ) : (
        <div className="w-full px-6 lg:px-0 md:w-5/6 lg:w-9/12 mx-auto">
          <div className="my-4">
            <BreadCrumb crumbs={crumbs} />
          </div>
          {cart?.items?.length ? (
            <form>
              <div className="">
                {/* order summary */}
                <div className=" pb-8">
                  <h3 className="font-bold my-6">1. YOUR ORDER SUMMARY</h3>
                  <table class="table-fixed">
                    <thead className="">
                      <tr className="border-y-.5 border-borderGrey uppercase ">
                        <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                          S/N
                        </th>
                        <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                          Image
                        </th>
                        <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                          Item
                        </th>
                        <th className=" text-center text-xs font-normal mb-4 md:w-1/5 md:text-base">
                          Category
                        </th>
                        <th className=" text-center font-normal py-5 w-1/12">
                          Description
                        </th>
                        <th className=" text-center font-normal py-5 w-2/12">
                          Unit Price
                        </th>

                        {/* <th className=" text-center font-normal py-5 w-2/12">Tax</th> */}
                        {/* <th className=" text-center font-normal py-5 w-2/12">
                    Duties
                  </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {cart?.items?.length
                        ? cart.items.map((singleItem, index) => (
                            <tr
                              className="border-b-.5 border-borderGrey text-center align-top text-xs"
                              key={index}
                            >
                              <td className="p-2 text-center ">{index + 1}</td>
                              <td className="p-2 text-center">
                                <div className="w-full h-full ">
                                  <img
                                    src={`${imageurl}${singleItem?.postAdImages?.[0]?.url}`}
                                    alt=""
                                    className="rounded-xl h-full"
                                  />
                                </div>
                              </td>
                              <td className="p-2 text-center">
                                <p className="uppercase font-semibold  mb-4">
                                  {singleItem?.title}
                                </p>
                              </td>
                              <td className="p-2 text-center">
                                <p className="uppercase font-semibold  mb-4">
                                  {singleItem?.category?.categoryName}
                                </p>
                              </td>

                              <td className="p-2 text-center">
                                <p className="text-xs ">
                                  {singleItem?.description}
                                </p>
                              </td>

                              {/* <td className="py-4 text-center text-lg ">
                      {cart.quantity}
                    </td> */}
                              <td className="py-4 text-center ">
                                ${singleItem?.amount?.toLocaleString()}
                              </td>
                              {/* <td className="py-4 text-center ">${cart.tax}</td> */}
                              {/* <td className="py-4 text-center ">&#163;0</td>
                    <td className="py-4 text-center ">
                      &#163;{data.itemDuties.toLocaleString()}
                    </td> */}
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                  <div className=" ml-auto border-b-.5 border-borderGrey  text-end mb-5 ">
                    <div className="border-b-.5 border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
                      <span className="uppercase text-xs underline">
                        ADD A GIFT CARD OR PROMOTION CODE
                      </span>
                      <div>
                        <span className="mr-15 font-semibold">TOTAL</span>
                        <span className="font-semibold text-lg">
                          ${cart?.total}
                        </span>
                        <span> (with taxes)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery method */}
                {/* <div className="pb-8">
              <h3 className="font-bold my-6">3. DELIVERY METHOD</h3>
              <div className="border-y-.5 border-borderGrey  ">
                <div className="flex justify-between">
                  <div className="text-sm p-4">
                    <h6>EXPRESS DELIVERY(Free)</h6>
                    <p className="text-sm my-6">
                      Delivered in 3-4 business days
                    </p>
                  </div>
                  <div className="text-sm p-4 ">
                    <h6>PACKAGING OPTIONS</h6>
                    <p className="text-sm my-6">Calibre Premium Packaging</p>
                  </div>
                </div>
                <div className="flex justify-end p-4 py-5"></div>
              </div>
            </div> */}
                {/* Payment  */}
                <div>
                  <h3 className="font-bold my-6">2. PAYMENT METHOD</h3>
                  <div className="border-y-.5 border-borderGrey  ">
                    <div className="text-sm p-4 ">
                      <div className="mb-3">
                        <PayPal
                          amount={1}
                          reference_id={orderId}
                          onApproved={onApproved}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="text-end mt-10">
            <button
              className="bg-yellow py-4 px-15 rounded font-semibold text-sm "
              type="submit"
            >
              COMPLETE PURCHASE
            </button>
          </div> */}
            </form>
          ) : (
            <div className="w-full text-center mt-12 py-5">
              <p className="my-8 ">No item found in the cart</p>
              <Link to="/categories/pets" className="bg-yellow p-4">
                Go back to shop
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Billing;
