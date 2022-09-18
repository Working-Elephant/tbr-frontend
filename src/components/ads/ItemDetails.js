import React, { useContext } from "react";
import { AdContext } from "../../pages/ads/PostAd";
import { GoPlusSmall } from "react-icons/go";
import { useForm, Controller } from "react-hook-form";
import { Input, ErrorMessage, SelectInput } from "../../components/shared";
import { sex, breed } from "../../data";
import DatePicker from "react-datepicker";
import PhoneInput from "react-phone-input-2";
import { PatternFormat } from "react-number-format";

const ItemDetails = () => {
  const { updateStep2, pet } = useContext(AdContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { dateOfBirth: "", maleParentDob: "", femaleParentDob: "" },
  });

  function formatPhoneNumber(value) {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;

    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, "");

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;

    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early

    if (phoneNumberLength < 4) return phoneNumber;

    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  // function to submit form
  const onSubmit = (data) => {
    console.log(data);
    updateStep2(data);
    // nextStep();
  };
  return (
    <div>
      <div className="md:w-5/6 lg:w-4/6 mx-auto py-3">
        <h5 className="mb-4">Enter Bully Details</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
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
          </div>

          <div>
            <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
              <Input
                border="border-0"
                placeholder={"Address"}
                {...register("address", {
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

          <div className="grid grid-cols-2 md:grid-cols-3 md: gap-4">
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
          </div>
          <div>
            <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
              <Controller
                name="telephone"
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
                    // allowEmptyFormatting
                    // mask=""
                    className="w-full py-2 focus:outline-none placeholder:text-dark text-sm"
                    placeholder="Telephone"
                  />
                )}
              />
            </div>{" "}
            {errors.telephone && (
              <ErrorMessage message={errors.telephone?.message} />
            )}
          </div>

          {pet && (
            <div className="bg-[#ECECEC63] p-5">
              <div className="flex items-center justify-between text-dark">
                <h5 className="text-sm">Add Pedigree Information</h5>
                <i className="text-xs">
                  <GoPlusSmall />
                </i>
              </div>
              <p className="text-blue text-sm my-3">Sire</p>
              <div>
                <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                  <Input
                    border="border-0"
                    placeholder={"Dog's Registered Name"}
                    {...register("maleParentName", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                </div>{" "}
                {errors.maleParentName && (
                  <ErrorMessage message={errors.maleParentName?.message} />
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
                <div>
                  <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
                    <Controller
                      name="maleParentDob"
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
                          // showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          className="border-0 focus:outline-none placeholder:text-dark text-sm px-3 w-full"
                          maxDate={new Date()}
                          // {...field}
                        />
                      )}
                    />
                  </div>
                  {errors.maleParentDob && (
                    <ErrorMessage message={errors.maleParentDob?.message} />
                  )}
                </div>
                <div>
                  <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                    <SelectInput
                      border="border-0"
                      options={breed}
                      defaultOption="Breed"
                      {...register("maleBreedId", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                    />
                  </div>
                  {errors.maleBreedId && (
                    <ErrorMessage>{errors.maleBreedId?.message}</ErrorMessage>
                  )}
                </div>
              </div>
              <p className="text-blue text-sm my-3">Dame</p>
              <div>
                <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                  <Input
                    border="border-0"
                    placeholder={"Dog's Registered Name"}
                    {...register("femaleParentName", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                </div>
                {errors.femaleParentName && (
                  <ErrorMessage>
                    {errors.femaleParentName?.message}
                  </ErrorMessage>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
                <div>
                  <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
                    <Controller
                      name="femaleParentDob"
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
                          // showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          className="border-0 focus:outline-none placeholder:text-dark text-sm px-3 w-full"
                          maxDate={new Date()}
                          // {...field}
                        />
                      )}
                    />
                  </div>
                  {errors.femaleParentDob && (
                    <ErrorMessage>
                      {errors.femaleParentDob?.message}
                    </ErrorMessage>
                  )}
                </div>
                <div>
                  <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                    <SelectInput
                      border="border-0"
                      options={breed}
                      defaultOption="Breed"
                      {...register("femaleBreedId", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                    />
                  </div>
                  {errors.femaleBreedId && (
                    <ErrorMessage>{errors.femaleBreedId?.message}</ErrorMessage>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="text-center my-5">
            <button
              className="bg-yellow py-4 px-15 rounded font-semibold text-sm "
              type="submit"
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemDetails;
