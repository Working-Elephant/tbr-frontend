import React, { useState } from "react";
import {
  Input,
  ErrorMessage,
  SelectInput,
  BreadCrumb,
  CustomCheckbox,
  success,
} from "../../components/shared";
import { useForm } from "react-hook-form";
import { months, year } from "../../data";
import { useSelector } from "react-redux";
import PayPal from "./PayPal";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchBullies from "../../hooks/useFectchBullies";
import usePayment from "../../hooks/usePayment";
import ScreenLoader from "../../components/shared/ScreenLoader";
import useFetchAds from "../../hooks/useFetchAds";
const FeaturedBilling = () => {
  //   const navigate = useNavigate();
  const { id } = useParams();
  const { getSingleAd } = useFetchAds();
  const { submitPayment } = usePayment();
  const [isLoading, setIsLoading] = useState(false);
  const crumbs = [
    {
      name: "Home",
      link: "",
    },

    {
      name: "Billing",
      link: "pet/billing",
    },
  ];
  const { cart } = useSelector((state) => state.product);
  useEffect(() => {
    if (!cart?.featured) {
      getSingleAd(id);
    }
  }, []);
  const imageurl = import.meta.env.VITE_IMAGE_URL;

  const onApproved = async (data) => {
    setIsLoading(true);
    let payPal = data;
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
      paymentType: "FEATURED_PAYMENT",
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
    const status = await submitPayment(obj);
    if (!status) {
      setIsLoading(false);
    }
  };
  console.log(cart.featured, "ft");
  return (
    <>
      {isLoading ? (
        <ScreenLoader />
      ) : (
        <div className="w-full px-6 lg:px-0 md:w-5/6 lg:w-9/12 mx-auto">
          <div className="my-4">
            <BreadCrumb crumbs={crumbs} />
          </div>
          {cart?.featured ? (
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
                      </tr>
                    </thead>
                    <tbody>
                      {cart?.featured ? (
                        <tr
                          className="border-b-.5 border-borderGrey text-center align-top text-xs"
                          key={cart?.featured?.id}
                        >
                          <td className="p-2 text-center ">{1}</td>
                          <td className="p-2 text-center">
                            <div className="w-full h-full ">
                              <img
                                src={`${imageurl}${cart?.featured?.postAdImages?.[0]?.url}`}
                                alt=""
                                className="rounded-xl h-full"
                              />
                            </div>
                          </td>
                          <td className="p-2 text-center">
                            <p className="uppercase font-semibold  mb-4">
                              {cart?.featured?.title}
                            </p>
                          </td>
                          <td className="p-2 text-center">
                            <p className="uppercase font-semibold  mb-4">
                              {cart?.featured?.category?.categoryName}
                            </p>
                          </td>

                          <td className="p-2 text-center">
                            <p className="text-xs ">
                              {cart?.featured?.description}
                            </p>
                          </td>

                          {/* <td className="py-4 text-center text-lg ">
                      {cart.quantity}
                    </td> */}
                          <td className="py-4 text-center ">
                            ${cart?.featured?.amount?.toLocaleString()}
                          </td>
                          {/* <td className="py-4 text-center ">${cart.tax}</td> */}
                          {/* <td className="py-4 text-center ">&#163;0</td>
                    <td className="py-4 text-center ">
                      &#163;{data.itemDuties.toLocaleString()}
                    </td> */}
                        </tr>
                      ) : null}
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

                {/* Payment  */}
                <div>
                  <h3 className="font-bold my-6">4. PAYMENT METHOD</h3>
                  <div className="border-y-.5 border-borderGrey  ">
                    <div className="text-sm p-4">
                      <div className=" mb-3">
                        <PayPal
                          amount={1}
                          reference_id={cart?.featured?.id}
                          onApproved={onApproved}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="w-full text-center mt-12 py-5">
              <p className="my-8 ">No Ad to Feature</p>
              <Link to="/" className="bg-yellow p-4">
                Go Home
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FeaturedBilling;
