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

const Billing = () => {
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
    {
      name: "Shipping",
      link: "cart/shipping",
    },
    {
      name: "Billing",
      link: "cart/shipping/billing",
    },
  ];
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
  return (
    <div className="w-full px-6 lg:px-0 md:w-5/6 lg:w-9/12 mx-auto">
      <div className="my-4">
        <BreadCrumb crumbs={crumbs} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          {/* order summary */}
          <div className=" pb-8">
            <h3 className="font-bold my-6">1. YOUR ORDER SUMMARY</h3>
            <table class="table-fixed">
              <thead className="">
                <tr className="border-y-.5 border-borderGrey uppercase ">
                  <th className=" text-start font-normal py-5 w-4/12">Item</th>
                  <th className=" text-center font-normal py-5 w-1/12">
                    Quantity
                  </th>
                  <th className=" text-center font-normal py-5 w-2/12">
                    Unit Price
                  </th>
                  <th className=" text-center font-normal py-5 w-1/12">
                    Shipping
                  </th>
                  <th className=" text-center font-normal py-5 w-2/12">Tax</th>
                  <th className=" text-center font-normal py-5 w-2/12">
                    Duties
                  </th>
                </tr>
              </thead>
              <tbody>
                {CartData.map((data, i) => (
                  <tr
                    key={i}
                    className="border-b-.5 border-borderGrey text-center align-top text-xs"
                  >
                    <td className="py-4 text-start flex">
                      <div className="w-full h-full ">
                        <img
                          src={data.itemImage}
                          alt=""
                          className="rounded-xl h-full"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="uppercase font-semibold text-start mb-4">
                          {data.itemCategory}
                        </p>
                        <p className="text-xs text-justify">
                          {data.itemDescription}
                        </p>
                      </div>
                    </td>

                    <td className="py-4 text-center text-lg ">
                      {data.itemQuantity}
                    </td>
                    <td className="py-4 text-center ">
                      &#163;{data.unitPrice.toLocaleString()}
                    </td>
                    <td className="py-4 text-center ">&#163;0</td>
                    <td className="py-4 text-center ">&#163;0</td>
                    <td className="py-4 text-center ">
                      &#163;{data.itemDuties.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=" ml-auto border-b-.5 border-borderGrey  text-end mb-5 ">
              <div className="border-b-.5 border-borderGrey flex items-center justify-between text-xs py-5 pr-3">
                <span className="uppercase text-xs underline">
                  ADD A GIFT CARD OR PROMOTION CODE
                </span>
                <div>
                  <span className="mr-15 font-semibold">TOTAL</span>
                  <span className="font-semibold text-lg">&#163;2,890</span>
                </div>
              </div>
            </div>
          </div>
          {/* review shipping details */}
          <div className="pb-8">
            <h3 className="font-bold my-6">
              2. REVIEW SHIPPING AND BILLING ADDRESS
            </h3>
            <div className="border-y-.5 border-borderGrey  ">
              <div className="flex justify-between">
                <div className="text-sm p-4">
                  <h6>SHIPPING ADDRESS</h6>
                  <p className="text-sm my-6">
                    Mr. David Olson
                    <br />
                    4220 Raintree Boulevard
                    <br />
                    Montezuma
                    <br />
                    Indiana <br />
                    47862
                    <br />
                    USA
                  </p>
                </div>
                <div className="text-sm p-4 ">
                  <h6>BILLING ADDRESS</h6>
                  <p className="text-sm my-6">Same as Shipping Address</p>
                </div>
              </div>
              <div className="flex justify-between p-4 py-5">
                <span className=" uppercase text-xs underline">
                  CHANGE SHIPPING ADDRESS
                </span>
                <span className=" uppercase text-xs underline">
                  CHANGE BILLING ADDRESS
                </span>
              </div>
            </div>
          </div>
          {/* Delivery method */}
          <div className="pb-8">
            <h3 className="font-bold my-6">3. DELIVERY METHOD</h3>
            <div className="border-y-.5 border-borderGrey  ">
              <div className="flex justify-between">
                <div className="text-sm p-4">
                  <h6>EXPRESS DELIVERY(Free)</h6>
                  <p className="text-sm my-6">Delivered in 3-4 business days</p>
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
                <span className=" uppercase text-xs underline">
                  GIFT MESSAGE & PERSONALISED LABELS AVAILABLE
                </span>
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
                </div>
                <div className="flex flex-col md:w-2/3 lg:w-2/5">
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
                        </select> */}
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
                </div>
              </div>

              <div className="flex items-center justify-start p-4 py-5">
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
              </div>
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
    </div>
  );
};

export default Billing;
