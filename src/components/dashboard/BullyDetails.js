import React, { useContext, useState } from "react";
import { BullyRegistrationContext } from "./BullyRegistration";
import { GoPlus, GoDash } from "react-icons/go";
import { useForm, Controller } from "react-hook-form";
import { Input, ErrorMessage, SelectInput } from "../../components/shared";
import { sex, breed } from "../../data";
import DatePicker from "react-datepicker";
import { PatternFormat } from "react-number-format";

const BullyDetails = () => {
  const { updateStep2, prevStep } = useContext(BullyRegistrationContext);
  const [PedigreeArray, setPedigreeArray] = useState([{}]);
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
    console.log(data, "submit data");
    //updateStep2(data);
  };
  const addPedigree = () => {
    let newfield = {};
    if (PedigreeArray.length === 3) return;
    setPedigreeArray([...PedigreeArray, newfield]);
  };
  const removePedigree = (key) => {
    if (PedigreeArray.length === 1) return;
    const filteredList = PedigreeArray.filter((item, index) => index !== key);
    setPedigreeArray(filteredList);
  };
  return (
    <div>
      <div className=" lg:w-5/6 xl:w-4/6 mx-auto py-3">
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
                      dateFormat="dd-MM-yyyy"
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
                placeholder={"Price"}
                {...register("price", {
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
                  {...register("city", { required: true })}
                />
              </div>
              {errors.city && <ErrorMessage message={errors.city?.message} />}
            </div>
            <div>
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  border="border-0"
                  placeholder={"State"}
                  {...register("state", { required: true })}
                />
              </div>
              {errors.state && <ErrorMessage message={errors.state?.message} />}
            </div>
            <div>
              <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit col-span-2 md:col-span-1">
                <Input
                  border="border-0"
                  placeholder={"Zip"}
                  {...register("zip", { required: true })}
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
                    onChange={onChange}
                    value={value}
                    // allowEmptyFormatting
                    // mask=""
                    className="w-full py-2 px-3 focus:outline-none placeholder:text-dark text-sm"
                    placeholder="Telephone"
                  />
                )}
              />
            </div>
            {errors.telephone && (
              <ErrorMessage message={errors.telephone?.message} />
            )}
          </div>

          {/* Pedigree */}
          <>
            {PedigreeArray.map((item, index) => (
              <div className="bg-[#ECECEC63] p-5" key={index}>
                <div className="flex items-center justify-between text-dark">
                  <h5 className="text-sm">Add Pedigree Information</h5>
                  <div className="flex justify-evenly">
                    <i
                      className="text-md bg-yellow p-[2px] rounded-full"
                      onClick={addPedigree}
                    >
                      <GoPlus />
                    </i>
                    <i
                      className="text-md bg-yellow p-[2px] rounded-full"
                      onClick={() => removePedigree(index)}
                    >
                      <GoDash />
                    </i>
                  </div>
                </div>
                <p className="text-blue text-sm my-3">Sire</p>
                <div>
                  <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                    <Input
                      border="border-0"
                      placeholder={"Sire's Registered Name"}
                      {...register("maleParentName", { required: true })}
                    />
                  </div>
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
                    </div>
                    {errors.maleParentDob && (
                      <ErrorMessage message={errors.maleParentDob?.message} />
                    )}
                  </div>
                  <div>
                    <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                      <Input
                        border="border-0"
                        placeholder={"Breed"}
                        {...register("maleBreed", { required: true })}
                      />
                    </div>
                    {errors.maleBreedId && (
                      <ErrorMessage>{errors.maleBreedId?.message}</ErrorMessage>
                    )}
                  </div>
                  <div>
                    <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                      <SelectInput
                        border="border-0"
                        options={breed}
                        defaultOption="Breed Type"
                        {...register("maleBreedId", { required: true })}
                      />
                    </div>
                    {errors.maleBreedId && (
                      <ErrorMessage>{errors.maleBreedId?.message}</ErrorMessage>
                    )}
                  </div>
                  <div>
                    <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                      <Input
                        disabled
                        border="border-0"
                        placeholder={`Generation ${index + 1}`}
                        {...register("maleBreed", { required: true })}
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
                      placeholder={"Dame's Registered Name"}
                      {...register("femaleParentName", { required: true })}
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
                    </div>
                    {errors.femaleParentDob && (
                      <ErrorMessage>
                        {errors.femaleParentDob?.message}
                      </ErrorMessage>
                    )}
                  </div>
                  <div>
                    <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                      <Input
                        border="border-0"
                        placeholder={"Breed"}
                        {...register("maleBreed", { required: true })}
                      />
                    </div>
                    {errors.maleBreedId && (
                      <ErrorMessage>{errors.maleBreedId?.message}</ErrorMessage>
                    )}
                  </div>
                  <div>
                    <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                      <SelectInput
                        border="border-0"
                        options={breed}
                        defaultOption="Breed Type"
                        {...register("femaleBreedId", { required: true })}
                      />
                    </div>
                    {errors.femaleBreedId && (
                      <ErrorMessage>
                        {errors.femaleBreedId?.message}
                      </ErrorMessage>
                    )}
                  </div>
                  <div>
                    <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                      <Input
                        disabled
                        border="border-0"
                        placeholder={`Generation ${index + 1}`}
                        {...register("maleBreed", { required: true })}
                      />
                    </div>
                    {errors.maleBreedId && (
                      <ErrorMessage>{errors.maleBreedId?.message}</ErrorMessage>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
          <div className="text-center my-5 flex justify-evenly">
            <button
              className="bg-yellow py-4 px-15 rounded font-semibold text-sm "
              type="submit"
              onClick={prevStep}
            >
              BACK
            </button>
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

export default BullyDetails;
