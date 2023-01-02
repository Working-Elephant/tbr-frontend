import React, { useState } from "react";
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
    {
      name: "Shipping",
      link: "cart/shipping",
    },
    {
      name: "Billing",
      link: "cart/shipping/billing",
    },
  ];
  const { cart } = useSelector((state) => state.product);
  const [saveDetails, setSaveDetails] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      card: "true",
      // saveDetails: true,
    },
  });
  const toggleSaveDetails = () => {
    setSaveDetails(!saveDetails);
  };
  const onSubmit = (data) => {
    console.log(data);
    let submitData = {
      ...data,
      saveDetails: saveDetails,
    };
    console.log(submitData);
  };
  const imageurl = import.meta.env.VITE_IMAGE_URL;
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
  return (
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
            {/* review shipping details */}
            <div className="pb-8">
              <h3 className="font-bold my-6">
                2. REVIEW SHIPPING/BILLING ADDRESS
              </h3>
              {/* shippingAsBilling(pin):"true" title(pin):"Mr"
            firstName(pin):"TIMBET" lastName(pin):"EKANEM"
            country(pin):"Nigeria" address1(pin):"Ewet Housing"
            address2(pin):"12" city(pin):"Uyo" province(pin):"Akwa Ibom"
            zip(pin):"1234" telephone(pin):"07438349598"
            mobile(pin):"07438349598" */}
              <div className="border-y-.5 border-borderGrey  ">
                <div className="flex justify-between">
                  <div className="text-sm p-4">
                    <h6>SHIPPING ADDRESS</h6>
                    <p className="text-sm my-6">
                      {cart?.shippingInfo?.firstName}
                      {cart?.shippingInfo?.lastName}
                      <br />
                      {cart?.shippingInfo?.address1}
                      <br />
                      {cart?.shippingInfo?.city}
                      <br />
                      {cart?.shippingInfo?.province} <br />
                      {cart?.shippingInfo?.zip}
                      <br />
                      {cart?.shippingInfo?.country}
                    </p>
                  </div>
                  {/* <div className="text-sm p-4 ">
                  <h6>BILLING ADDRESS</h6>
                  <p className="text-sm my-6">Same as Shipping Address</p>
                </div> */}
                </div>
                {/* <div className="flex justify-between p-4 py-5">
                <span className=" uppercase text-xs underline">
                  CHANGE SHIPPING ADDRESS
                </span>
                <span className=" uppercase text-xs underline">
                  CHANGE BILLING ADDRESS
                </span>
              </div> */}
              </div>
            </div>
            {/* Delivery method */}
            <div className="pb-8">
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
                <div className="flex justify-end p-4 py-5">
                  {/* <span className=" uppercase text-xs underline">
                CHANGE SHIPPING ADDRESS
              </span> */}
                  {/* <span className=" uppercase text-xs underline">
                  GIFT MESSAGE & PERSONALISED LABELS AVAILABLE
                </span> */}
                </div>
              </div>
            </div>
            {/* Payment  */}
            <div>
              <h3 className="font-bold my-6">4. PAYMENT DETAILS</h3>
              <div className="border-y-.5 border-borderGrey  ">
                {/* <div className=""> */}
                <div className="text-sm p-4">
                  <h6>PAYMENT METHOD</h6>
                  <div className="flex mb-3">
                    <PayPal amount={1} />
                  </div>
                  {/* <div className="flex mb-3">
                  <div class="flex items-center pl-3">
                    <input
                      id="list-radio-address"
                      type="radio"
                      value="true"
                      name="list-radio"
                      className="w-5 h-5 text-yellow bg-borderGrey border-borderGrey  focus:ring-yellow  "
                      {...register("card")}
                    />
                    <label
                      for="list-radio-address"
                      className="py-3 ml-2 w-full text-xl font-medium text-dark"
                    >
                      <i>
                        <FaWallet />
                      </i>
                    </label>
                  </div>
                  <div class="flex items-center pl-3">
                    <input
                      id="list-radio-address"
                      type="radio"
                      value="false"
                      name="list-radio"
                      className="w-5 h-5 text-yellow bg-borderGrey border-borderGrey  focus:ring-yellow "
                      {...register("card")}
                    />
                    <label
                      for="list-radio-address"
                      className="py-3 ml-2 w-full text-xl font-medium  text-dark"
                    >
                      <i>
                        <FaPaypal />
                      </i>
                    </label>
                  </div>
                </div> */}
                  {/* <div className="flex flex-col md:w-2/3 lg:w-2/5">
                  <div className="flex flex-col mb-6">
                    <label className="text-sm mb-3" htmlFor="name">
                      CARDHOLDER NAME
                    </label>
                    <div className=" w-full">
                      <Input
                        {...register("cardHolderName", {
                          required: {
                            value: true,
                            message: "Card Holder's name is required",
                          },
                        })}
                      />
                      {errors.cardHolderName && (
                        <ErrorMessage
                          message={errors.cardHolderName?.message}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col mb-6 ">
                    <span className="text-sm mb-2">CARD NUMBER</span>
                    <div className="flex flex-nowrap items-center justify-evenly">
                      <div className=" w-1/4 mr-3">
                        <Input />
                      </div>
                      <div className=" w-1/4 mr-3">
                        <Input />
                      </div>
                      <div className=" w-1/4 mr-3">
                        <Input />
                      </div>
                      <div className=" w-1/4">
                        <Input />
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="flex flex-col mr-3">
                      <label className="text-sm mb-3 flex" htmlFor="name">
                        EXPIRATION DATE
                      </label>
                      <div className="flex justify-between">
                        {/* <select className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none mr-3">
                          <option>Month</option>
                        </select>
                        <select className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none ">
                          <option>Year</option>
                        </select> *
                        <SelectInput
                          options={months}
                          defaultOption="Month"
                          {...register("month", {
                            required: {
                              value: true,
                              message: "Month is required",
                            },
                          })}
                        />
                        {errors.month && (
                          <ErrorMessage message={errors.month?.message} />
                        )}
                        <SelectInput
                          options={year}
                          defaultOption="Year"
                          {...register("year", {
                            required: {
                              value: true,
                              message: "Year is required",
                            },
                          })}
                        />
                        {errors.year && (
                          <ErrorMessage message={errors.year?.message} />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm mb-3 flex" htmlFor="name">
                        CVV{" "}
                        <sup>
                          <BsFillQuestionCircleFill />
                        </sup>
                      </label>
                      <Input
                        {...register("cvv", {
                          required: {
                            value: true,
                            message: "CVV is required",
                          },
                          maxLength: {
                            value: 3,
                            message: "cvv cannot exceed 3",
                          },
                          minLength: {
                            value: 3,
                            message: "cvv cannot be less than 3",
                          },
                        })}
                      />
                      {errors.cvv && (
                        <ErrorMessage message={errors.cvv?.message} />
                      )}
                    </div>
                  </div>
                </div> */}
                </div>

                {/* <div className="flex items-center justify-start p-4 py-5">
                <CustomCheckbox
                  label="Securely store payment details for next purchase."
                  className="mr-3 text-xs"
                  bgColor="transparent"
                  checkColor="text-dark"
                  labelStyle={{ fontSize: "0.75rem" }}
                  name="saveDetails"
                  // {...register('saveDetails')}
                  checked={saveDetails}
                  handleChange={toggleSaveDetails}
                />
              </div> */}
              </div>
            </div>
          </div>
          <div className="text-end mt-10">
            <button
              className="bg-yellow py-4 px-15 rounded font-semibold text-sm "
              type="submit"
            >
              COMPLETE PURCHASE
            </button>
          </div>
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
  );
};

export default Billing;
