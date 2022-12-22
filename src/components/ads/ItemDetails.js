import React, { useContext } from "react";
import { AdContext } from "../../pages/ads/PostAd";
import { GoPlusSmall } from "react-icons/go";
import { useForm, Controller } from "react-hook-form";
import {
  Input,
  ErrorMessage,
  SelectInput,
  Loader,
} from "../../components/shared";
import { sex, breed } from "../../data";
import DatePicker from "react-datepicker";
import { PatternFormat } from "react-number-format";

const ItemDetails = () => {
  const { updateStep2, pet, isLoading, prevStep } = useContext(AdContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  //   {
  //   defaultValues: { dateOfBirth: "", maleParentDob: "", femaleParentDob: "" },
  // }

  // function to submit form
  const onSubmit = (data) => {
    updateStep2(data);
    // nextStep();
  };
  const onerror = (error) => {
    console.log(error);
  };
  return (
    <div>
      <div className="md:w-5/6 lg:w-4/6 mx-auto py-3">
        <h5 className="mb-4">Enter Ad Details</h5>
        <form onSubmit={handleSubmit(onSubmit, onerror)}>
          {/* <div>
            <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
              <Input
                border="border-0"
                placeholder={"Dog's Registered Name"}
                {...register("dogsRegisteredName", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              />
            </div>
            {errors.dogsRegisteredName && (
              <ErrorMessage message={errors.dogsRegisteredName?.message} />
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
            <div>
              <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
                <Controller
                  name="dateOfBirth"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <DatePicker
                      dateFormat="MM-dd-yyyy"
                      placeholderText="Date of Birth"
                      selected={value}
                      onChange={onChange}
                      closeOnScroll={false}
                      showYearDropdown
                      dropdownMode="select"
                      className="border-0 focus:outline-none placeholder:text-dark text-sm px-3 w-full"
                      maxDate={new Date()}
                    />
                  )}
                />
              </div>
              {errors.dateOfBirth && (
                <ErrorMessage message={errors.dateOfBirth?.message} />
              )}
            </div>
            <div>
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <SelectInput
                  border="border-0"
                  options={sex}
                  defaultOption="Sex"
                  {...register("sex", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
              </div>
              {errors.sex && <ErrorMessage message={errors.sex?.message} />}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
            <div>
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  border="border-0"
                  placeholder={"Dog owner's First Name"}
                  {...register("dogOwnersFirstName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
              </div>
              {errors.dogOwnersFirstName && (
                <ErrorMessage message={errors.dogOwnersFirstName?.message} />
              )}
            </div>
            <div>
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  border="border-0"
                  placeholder={"Dog owner's Last Name"}
                  {...register("dogOwnersLastName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
              </div>
              {errors.dogOwnersLastName && (
                <ErrorMessage message={errors.dogOwnersLastName?.message} />
              )}
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
            <div>
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  border="border-0"
                  placeholder={"Price"}
                  {...register("Amount", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
              </div>
              {errors.price && <ErrorMessage message={errors.price?.message} />}
            </div>
            <div>
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Controller
                  name="Telephone"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <PatternFormat
                      format="(###)###-####"
                      onChange={onChange}
                      value={value}
                      // allowEmptyFormatting
                      // mask=""
                      className="w-full py-2 px-3 focus:outline-none placeholder:text-dark text-sm"
                      placeholder="Telephone"
                    />
                  )}
                />
              </div>{" "}
              {errors.telephone && (
                <ErrorMessage message={errors.telephone?.message} />
              )}
            </div>
          </div>
          <div>
            <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
              <Input
                border="border-0"
                placeholder={"Address"}
                {...register("Address", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              />
            </div>
            {errors.address && (
              <ErrorMessage message={errors.address?.message} />
            )}
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-3 md: gap-4">
            <div>
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  border="border-0"
                  placeholder={"City"}
                  {...register("city", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
              </div>
              {errors.city && <ErrorMessage message={errors.city?.message} />}
            </div>
            <div>
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  border="border-0"
                  placeholder={"State"}
                  {...register("state", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
              </div>
              {errors.state && <ErrorMessage message={errors.state?.message} />}
            </div>
            <div>
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit col-span-2 md:col-span-1">
                <Input
                  border="border-0"
                  placeholder={"Zip"}
                  {...register("zip", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
              </div>
              {errors.zip && <ErrorMessage message={errors.zip?.message} />}
            </div>
          </div> */}

          <div>
            <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
              <textarea
                className="border-0 w-full text-sm py-2 p-3 resize-none focus:outline-none  placeholder:text-sm placeholder:text-dark"
                placeholder={"Description"}
                {...register("Description", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              ></textarea>
            </div>
            {errors.description && (
              <ErrorMessage message={errors.description?.message} />
            )}
          </div>

          <div className="text-center my-5 flex justify-evenly">
            <button
              className="bg-yellow py-4 px-15 rounded font-semibold text-sm "
              onClick={prevStep}
            >
              BACK
            </button>
            <button
              className="bg-yellow py-4 px-15 rounded font-semibold text-sm "
              type="submit"
            >
              {isLoading ? <Loader /> : "NEXT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemDetails;
