import React, { useContext } from "react";
import { AdContext } from "../../pages/ads/PostAd";
import { GoPlusSmall } from "react-icons/go";
import { useForm } from "react-hook-form";
import { Input, ErrorMessage, SelectInput } from "../../components/shared";
import { sex, breed } from "../../data";

const ItemDetails = () => {
  const { nextStep, updateStep2 } = useContext(AdContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // function to submit form
  const onSubmit = (data) => {
    console.log(data);
    updateStep2(data)
    nextStep();
  };
  return (
    <div>
      <div className="md:w-4/6 mx-auto py-3">
        <h5 className="mb-4">Enter Bully Details</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mb-4 w-full">
            <Input
              placeholder={"Dog's Registered Name"}
              {...register("dogsRegisteredName", { required: true })}
            />
            {errors.dogsRegisteredName && (
              <ErrorMessage>{errors.dogsRegisteredName?.message}</ErrorMessage>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
             <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full ">
              <option>Date of Birth</option>
              <option>Male</option>
              <option>Female</option>
            </select>
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
            <div className=" mb-4 w-full">
              <SelectInput
                options={sex}
                defaultOption="Sex"
                {...register("sex", { required: true })}
              />
              {errors.sex && <ErrorMessage>{errors.sex?.message}</ErrorMessage>}
            </div>
          </div>

          <div className=" mb-4 w-full">
            <Input
              placeholder={"Dog owner's Name"}
              {...register("dogsOwnerName", { required: true })}
            />
            {errors.dogsOwnerName && (
              <ErrorMessage>{errors.dogsOwnerName?.message}</ErrorMessage>
            )}
          </div>
          <div className=" mb-4 w-full">
            <Input
              placeholder={"Address"}
              {...register("address", { required: true })}
            />
            {errors.address && (
              <ErrorMessage>{errors.address?.message}</ErrorMessage>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md: gap-4">
            <div className=" mb-4 w-full">
              <Input
                placeholder={"City"}
                {...register("city", { required: true })}
              />
              {errors.city && (
                <ErrorMessage>{errors.city?.message}</ErrorMessage>
              )}
            </div>
            <div className=" mb-4 w-full">
              <Input
                placeholder={"State"}
                {...register("state", { required: true })}
              />
              {errors.state && (
                <ErrorMessage>{errors.state?.message}</ErrorMessage>
              )}
            </div>
            <div className=" mb-4 w-full">
              <Input
                placeholder={"Zip"}
                {...register("zip", { required: true })}
              />
              {errors.zip && <ErrorMessage>{errors.zip?.message}</ErrorMessage>}
            </div>
          </div>
          <div className=" mb-4 w-full">
            <Input
              placeholder={"Telephone"}
              {...register("telephone", { required: true })}
            />
            {errors.telephone && (
              <ErrorMessage>{errors.telephone?.message}</ErrorMessage>
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
            <div className=" mb-4 w-full">
              <Input
                placeholder={"Dog's Registered Name"}
                {...register("maleParentName", { required: true })}
              />
              {errors.maleParentName && (
                <ErrorMessage>{errors.maleParentName?.message}</ErrorMessage>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
              <select className="border-.5 border-borderGrey mb-4 py-2 px-3 text-sm focus:outline-none w-full  ">
                <option>Date of Birth</option>
                <option>Nigeria</option>
              </select>
              {/* <select className="border-.5 border-borderGrey mb-4 py-2 px-3 text-sm focus:outline-none w-full ">
                <option>Breed</option>
                <option>Male</option>
                <option>Female</option>
              </select> */}
              <div className=" mb-4 w-full">
                <SelectInput
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
            <div className=" mb-4 w-full">
              <Input
                placeholder={"Dog's Registered Name"}
                {...register("femaleParentName", { required: true })}
              />
              {errors.femaleParentName && (
                <ErrorMessage>{errors.femaleParentName?.message}</ErrorMessage>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
              <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full  ">
                <option>Date of Birth</option>
                <option>Nigeria</option>
              </select>
              {/* <select className="border-.5 border-borderGrey mb-8 py-2 px-3 text-sm focus:outline-none w-full ">
                <option>Breed</option>
                <option>Male</option>
                <option>Female</option>
              </select> */}
              <div className=" mb-4 w-full">
                <SelectInput
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
