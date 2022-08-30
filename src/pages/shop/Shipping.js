import React from "react";
import {
  Input,
  SelectInput,
  ErrorMessage,
  BreadCrumb,
} from "../../components/shared";
import { useForm } from "react-hook-form";
import { countries, titles } from "../../data";

const Shipping = () => {
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
  ];
  // const titles = ["Mr", "Mrs", "Miss", "Dr"];
  // const countries = ["Nigeria", "United States", "Algeria"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      shippingAsBilling: "true",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full lg:w-5/6 mx-auto my-5">
      <div>
        <BreadCrumb crumbs={crumbs} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1  mt-10 lg:grid-cols-2 lg:gap-6 ">
          <div className="grid grid-cols-1  gap-3 px-4 md:px-8 lg:px-4">
            <div className="col-span-1 ">
              <div className="flex items-center mb-6">
                <span className="">
                  TITLE<sup className="text-sm">*</sup>
                </span>
                <div className="w-4/6 ml-auto">
                  <div className="  w-full">
                    <SelectInput
                      options={titles}
                      defaultOption=""
                      {...register("title", {
                        required: {
                          value: true,
                          message: "Title is required",
                        },
                      })}
                    />
                    {errors.title && (
                      <ErrorMessage message={errors.title?.message} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="">
                  FIRST NAME<sup className="text-sm">*</sup>
                </span>
                <div className="w-4/6 ml-auto">
                  <div className="  w-full">
                    <Input
                      {...register("firstName", {
                        required: {
                          value: true,
                          message: "First Name is required",
                        },
                      })}
                    />
                    {errors.firstName && (
                      <ErrorMessage message={errors.firstName?.message} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="">
                  LAST NAME<sup className="text-sm">*</sup>
                </span>
                <div className="w-4/6 ml-auto">
                  <div className="  w-full">
                    <Input
                      {...register("lastName", {
                        required: {
                          value: true,
                          message: "Last Name is required",
                        },
                      })}
                    />
                    {errors.lastName && (
                      <ErrorMessage message={errors.lastName?.message} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="">
                  COUNTRY<sup className="text-sm">*</sup>
                </span>
                <div className="w-4/6 ml-auto">
                  <div className="  w-full">
                    <SelectInput
                      options={countries}
                      defaultOption="Select a country"
                      {...register("country", {
                        required: {
                          value: true,
                          message: "Country is required",
                        },
                      })}
                    />
                    {errors?.country && (
                      <ErrorMessage message={errors.country?.message} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="">
                  ADDRESS LINE 1<sup className="text-sm">*</sup>
                </span>
                <div className="w-4/6 ml-auto">
                  <div className="  w-full">
                    <Input
                      {...register("address1", {
                        required: {
                          value: true,
                          message: "Address is required",
                        },
                      })}
                    />
                    {errors.address1 && (
                      <ErrorMessage message={errors.address1?.message} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="">ADDRESS LINE 2</span>
                <div className="w-4/6 ml-auto">
                  <div className="  w-full">
                    <Input {...register("address2")} />
                    {/* {errors.address2 && (
                      <ErrorMessage>{errors.address2?.message}</ErrorMessage>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="">
                  CITY<sup className="text-sm">*</sup>
                </span>
                <div className="w-4/6 ml-auto">
                  <div className="  w-full">
                    <Input
                      {...register("city", {
                        required: {
                          value: true,
                          message: "City is required",
                        },
                      })}
                    />
                    {errors.city && (
                      <ErrorMessage message={errors.city?.message} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="">PROVINCE</span>
                <div className="w-4/6 ml-auto">
                  <div className="  w-full">
                    <Input {...register("province")} />
                    {/* {errors.province && (
                      <ErrorMessage>{errors.province?.message}</ErrorMessage>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="">
                  POSTCODE/ZIP<sup className="text-sm">*</sup>
                </span>
                <div className="w-4/6 ml-auto">
                  <div className="  w-full">
                    <Input
                      {...register("zip", {
                        required: {
                          value: true,
                          message: "Postcode is required",
                        },
                      })}
                    />
                    {errors.zip && (
                     <ErrorMessage message={errors.zip?.message} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="">
                  TELEPHONE<sup className="text-sm">*</sup>
                </span>
                <div className="w-4/6 ml-auto">
                  <div className="  w-full">
                    <Input
                      {...register("telephone", {
                        required: {
                          value: true,
                          message: "Phone Number is required",
                        },
                      })}
                    />
                    {errors.telephone && (
                      <ErrorMessage message={errors.telephone?.message} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="">MOBILE</span>
                <div className="w-4/6 ml-auto">
                  <div className="  w-full">
                    <Input {...register("mobile")} />
                    {errors.mobile && (
                      <ErrorMessage>{errors.mobile?.message}</ErrorMessage>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-4/6 ml-auto">
                  <div class="flex items-center pl-3">
                    <input
                      id="list-radio-address"
                      type="radio"
                      value="true"
                      name="list-radio"
                      className="w-5 h-5 text-yellow border border-borderGrey  focus:ring-yellow  "
                      {...register("shippingAsBilling")}
                    />
                    <label
                      for="list-radio-address"
                      className="py-3 ml-2 w-full text-sm font-medium text-dark"
                    >
                      Use shipping address as billing address
                    </label>
                  </div>
                  <div class="flex items-center pl-3">
                    <input
                      id="list-radio-address"
                      type="radio"
                      value="false"
                      name="list-radio"
                      className="w-5 h-5 text-yellow border border-borderGrey  focus:ring-yellow  "
                      {...register("shippingAsBilling")}
                    />
                    <label
                      for="list-radio-address"
                      className="py-3 ml-2 w-full text-sm font-medium  text-dark"
                    >
                      Enter seperate billing address
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center  mb-6">
                <span className="">
                  REQUIRED FIELDS<sup className="text-sm">*</sup>
                </span>
              </div>
            </div>
          </div>

          <div className="px-3 md:px-5 lg:px-0">
            <div className="bg-yellow  ">
              <div className="border-b border-black py-5">
                <h3 className=" text-center font-bold">
                  SHIPPING RESTRICTIONS AND DUTIES MAY APPLY
                </h3>
              </div>
              <div className="py-5">
                <p className="text-center leading-loose">
                  <span className="font-bold"> NEED HELP?</span> <br />
                  CALL US: +44 (0)10 2345 6789 <br />
                  EMAIL CUSTOMER CARE | SHIPPING INFORMATION <br />
                  RETURNS & EXCHANGES
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end">
          <button
            className="bg-yellow py-4 px-15 rounded font-semibold text-sm "
            type="submit"
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shipping;
