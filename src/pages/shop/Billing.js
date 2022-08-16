import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/shared/BreadCrumb";
import { CartData } from "../../mockData/mockData";
import { FaWallet, FaPaypal } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Billing = () => {
  return (
    <div className="w-full px-6 lg:px-0 md:w-5/6 lg:w-9/12 mx-auto">
      <div>
        <BreadCrumb />
      </div>
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
                <th className=" text-center font-normal py-5 w-2/12">Duties</th>
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
                    value=""
                    name="list-radio"
                    className="w-5 h-5 text-yellow bg-borderGrey border-borderGrey  focus:ring-yellow  "
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
                    value=""
                    name="list-radio"
                    className="w-5 h-5 text-yellow bg-borderGrey border-borderGrey  focus:ring-yellow "
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
                  <input
                    className="border-.5 border-borderGrey  mb-3 py-2 px-3 text-sm focus:outline-none "
                    id="name"
                  />
                </div>
                <div className="flex flex-col mb-6 ">
                  <span className="text-sm">CARD NUMBER</span>
                  <div className="flex flex-nowrap items-center justify-evenly">
                    <input className="border-.5 border-borderGrey  mr-2 py-2 px-3 text-sm focus:outline-none w-1/4" />
                    <input className="border-.5 border-borderGrey  mx-2 py-2 px-3 text-sm focus:outline-none w-1/4" />
                    <input className="border-.5 border-borderGrey  mx-2 py-2 px-3 text-sm focus:outline-none w-1/4" />
                    <input className="border-.5 border-borderGrey  mx-2 py-2 px-3 text-sm focus:outline-none w-1/4" />
                  </div>
                </div>
                <div className="flex ">
                  <div className="flex flex-col mr-3">
                    <label className="text-sm mb-3 flex" htmlFor="name">
                      EXPIRATION DATE
                    </label>
                    <div className="flex justify-between">
                      <select className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none mr-3">
                        <option>Month</option>
                      </select>
                      <select className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none ">
                        <option>Year</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm mb-3 flex" htmlFor="name">
                      CVV{" "}
                      <sup>
                        <BsFillQuestionCircleFill />
                      </sup>
                    </label>
                    <input
                      className="border-.5 border-borderGrey  mb-5 py-2 px-3 text-sm focus:outline-none "
                      id="name"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            <div className="flex items-center justify-start p-4 py-5">
              <input type="checkbox" className="mr-3" />
              <span className=" text-xs ">
                Securely store payment details for next purchase.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end mt-10"><Link to="/cart/shipping/billing/confirmation">
      <button className="bg-yellow py-4 px-15 rounded font-semibold text-sm ">COMPLETE PURCHASE</button></Link>
      </div>
    </div>
  );
};

export default Billing;
