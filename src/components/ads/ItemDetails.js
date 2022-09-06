import React, { useContext } from "react";
import { AdContext } from "../../pages/ads/PostAd";
import { GoPlusSmall } from "react-icons/go";
import { useForm, Controller } from "react-hook-form";
import { Input, ErrorMessage, SelectInput } from "../../components/shared";
import { sex, breed } from "../../data";
import DatePicker from "react-datepicker";

const ItemDetails = () => {
  const { updateStep2 } = useContext(AdContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { dateOfBirth: "", maleParentDob: "", femaleParentDob: "" },
  });

  // function to submit form
  const onSubmit = (data) => {
    console.log(data);
    updateStep2(data);
    // nextStep();
  };
  return (
    <div>
      <div className="md:w-4/6 mx-auto py-3">
        <h5 className="mb-4">Enter Bully Details</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
            <Input
              border="border-0"
              placeholder={"Dog's Registered Name"}
              {...register("dogsRegisteredName", { required: {
                value: true,
                message: "This field is required",
              }, })}
            />
            {errors.dogsRegisteredName && (
              <ErrorMessage message={errors.dogsRegisteredName?.message} />
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
            {/* <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full ">
              <option>Date of Birth</option>
              <option>Male</option>
              <option>Female</option>
            </select> */}
            <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
              <Controller
                name="dateOfBirth"
                control={control}
                rules={{ required: {
                  value: true,
                  message: "This field is required",
                }, }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <DatePicker
                    dateFormat="dd-MM-yyyy"
                    placeholderText="Date of Birth"
                    // onBlur={onBlur}
                    selected={value}
                    // selected={dob}
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
              {errors.dateOfBirth && (
                <ErrorMessage message={errors.dateOfBirth?.message} />
              )}
            </div>

            {/* <div className=" mb-4 w-full">
              <SelectInput
                options={sex}
                defaultOption="Select Date"
                {...register("dateofBirth", { required: true })}
              />
              {errors.dateofBirth && (
                <ErrorMessage>{errors.dateofBirth?.message}</ErrorMessage>
              )}
            </div> */}
            <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
              <SelectInput
                border="border-0"
                options={sex}
                defaultOption="Sex"
                {...register("sex", { required: true })}
              />
              {errors.sex && <ErrorMessage message={errors.sex?.message} />}
            </div>
          </div>

          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
            <Input
              border="border-0"
              placeholder={"Dog owner's Name"}
              {...register("dogsOwnerName", { required: true })}
            />
            {errors.dogsOwnerName && (
              <ErrorMessage message={errors.dogsOwnerName?.message} />
            )}
          </div>
          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
            <Input
              border="border-0"
              placeholder={"Address"}
              {...register("address", { required: true })}
            />
            {errors.address && (
              <ErrorMessage message={errors.address?.message} />
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md: gap-4">
            <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
              <Input
                border="border-0"
                placeholder={"City"}
                {...register("city", { required: true })}
              />
              {errors.city && <ErrorMessage message={errors.city?.message} />}
            </div>
            <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
              <Input
                border="border-0"
                placeholder={"State"}
                {...register("state", { required: true })}
              />
              {errors.state && <ErrorMessage message={errors.state?.message} />}
            </div>
            <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
              <Input
                border="border-0"
                placeholder={"Zip"}
                {...register("zip", { required: true })}
              />
              {errors.zip && <ErrorMessage message={errors.zip?.message} />}
            </div>
          </div>
          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
            <Input
              border="border-0"
              placeholder={"Telephone"}
              {...register("telephone", { required: true })}
            />
            {errors.telephone && (
              <ErrorMessage message={errors.telephone?.message} />
            )}
          </div>

          <div className="bg-[#ECECEC63] p-5">
            <div className="flex items-center justify-between text-dark">
              <h5 className="text-sm">Add Pedigree Information</h5>
              <i className="text-xs">
                <GoPlusSmall />
              </i>
            </div>
            <p className="text-blue text-sm my-3">Male Parent</p>
            <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
              <Input
                border="border-0"
                placeholder={"Dog's Registered Name"}
                {...register("maleParentName", { required: true })}
              />
              {errors.maleParentName && (
                <ErrorMessage message={errors.maleParentName?.message} />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
              {/* <select className="border-.5 border-borderGrey mb-4 py-2 px-3 text-sm focus:outline-none w-full  ">
                <option>Date of Birth</option>
                <option>Nigeria</option>
              </select> */}
              <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
                <Controller
                  name="maleParentDob"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <DatePicker
                      dateFormat="dd-MM-yyyy"
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
                {errors.maleParentDob && (
                  <ErrorMessage message={errors.maleParentDob?.message} />
                )}
              </div>
              {/* <select className="border-.5 border-borderGrey mb-4 py-2 px-3 text-sm focus:outline-none w-full ">
                <option>Breed</option>
                <option>Male</option>
                <option>Female</option>
              </select> */}
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <SelectInput
                  border="border-0"
                  options={breed}
                  defaultOption="Breed"
                  {...register("maleBreedId", { required: true })}
                />
                {errors.maleBreedId && (
                  <ErrorMessage>{errors.maleBreedId?.message}</ErrorMessage>
                )}
              </div>
            </div>
            <p className="text-blue text-sm my-3">Female Parent</p>
            <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
              <Input
                border="border-0"
                placeholder={"Dog's Registered Name"}
                {...register("femaleParentName", { required: true })}
              />
              {errors.femaleParentName && (
                <ErrorMessage>{errors.femaleParentName?.message}</ErrorMessage>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
              {/* <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full  ">
                <option>Date of Birth</option>
                <option>Nigeria</option>
              </select> */}{" "}
              <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
                <Controller
                  name="femaleParentDob"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <DatePicker
                      dateFormat="dd-MM-yyyy"
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
                />{" "}
                {errors.femaleParentDob && (
                  <ErrorMessage>{errors.femaleParentDob?.message}</ErrorMessage>
                )}{" "}
              </div>
              {/* <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full ">
                <option>Breed</option>
                <option>Male</option>
                <option>Female</option>
              </select> */}
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <SelectInput
                  border="border-0"
                  options={breed}
                  defaultOption="Breed"
                  {...register("femaleBreedId", { required: true })}
                />
                {errors.femaleBreedId && (
                  <ErrorMessage>{errors.femaleBreedId?.message}</ErrorMessage>
                )}
              </div>
            </div>
          </div>
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
