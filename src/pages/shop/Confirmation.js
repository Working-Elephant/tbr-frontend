import React from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";
import { CartData } from "../../mockData/mockData";

const Confirmation = () => {
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
    {
      name: "Confirmation",
      link: "cart/shipping/billing/confirmation",
    },
  ];
  return (
    <div className="w-full px-6 lg:px-0 md:w-5/6 lg:w-9/12 mx-auto">
      <div className="my-4">
        <BreadCrumb crumbs={crumbs} />
      </div>
      <div>
        <div className=" pb-8">
          <div>
            <h3 className="font-bold my-6">THANK YOU MR OLSON</h3>
            <p className="text-xs">
              Thank you for your order. Your order number is 347982. <br/>
              A confirmation email has also been sent to the email address
              provided.
            </p>
          </div>
          <div className="flex items-center justify-between my-4">
            <h3 className="font-bold my-6">ORDER CONFIRMATION</h3>
            <span className="uppercase text-xs underline">
              PRINT ORDER CONFIRMATION
            </span>
          </div>
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
            <div className="border-b-.5 border-borderGrey flex items-center justify-end text-xs py-5 pr-3">
              <div>
                <span className="mr-15 font-semibold">TOTAL</span>
                <span className="font-semibold text-lg">&#163;2,890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="pr-10">
        <h3 className="font-bold  mb-2">PAYMENT METHOD</h3>
        <div className="flex justify-between my-8 text-sm">
        <span>Credit Card Number</span> <span>**** **** **** 4748</span>
        </div>
        
        </div>
        <div className="border-l-.5 border-borderGrey pl-10">
        <h3 className="font-bold mb-2">SHIPPING DETAILS</h3>
        <p className="my-8 text-sm">Your will receive your order in 3-4 business days</p>
        <div className="my-1">
            <button className="uppercase border-.5 border-borderGrey text-sm px-8 py-3 rounded">
                Track Order
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
