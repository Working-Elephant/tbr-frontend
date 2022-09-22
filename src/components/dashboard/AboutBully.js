import React, { useContext, useState } from "react";
import { BullyRegistrationContext } from "./BullyRegistration";
import { FaPlus } from "react-icons/fa";
import { SelectInput, Input, ErrorMessage } from "../shared";
import { selectCategories, breed } from "../../data";
import { useForm } from "react-hook-form";

const AboutBully = () => {
  const [images, setImages] = useState("");
  const { updateStep1 } = useContext(BullyRegistrationContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // function to submit form
  const onSubmit = (data) => {
    let submitData = {
      ...data,
      pictureUrl: images,
    };
    console.log(submitData);
    updateStep1(submitData);
    // nextStep();
  };
  const productImageRegister = register("pictureUrl", {
    required: {
      value: true,
      message: " This field is required",
    },
  });
  const getBase64 = (file) => {
    return new Promise((resolve) => {
      //   let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      //   console.log(fileInfo);
    });
  };
  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      let uploadedimage = e.target.files[0];
      // formDataImage.append("file", uploadedimage);
      getBase64(uploadedimage)
        .then((result) => {
          uploadedimage["base64"] = result;
          setImages(uploadedimage.base64);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:w-9/12 xl:w-8/12 mx-auto py-3">
          <div className="  flex  items-center my-2">
            {/* <p className="text-sm">Enter Item Category and Location</p> */}
          </div>
          <div className="grid grid-cols-2 gap-4 lg:gap-6  my-3">
            <div>
              <div className="w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <SelectInput
                  border="border-0"
                  options={selectCategories}
                  defaultOption="Category"
                  {...register("category", {
                    required: {
                      value: true,
                      message: " This field is required",
                    },
                  })}
                />
              </div>
              {errors.category && (
                <ErrorMessage message={errors.category?.message} />
              )}
            </div>
            <div>
              <div className="w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <SelectInput
                  border="border-0"
                  options={breed}
                  defaultOption="Breed"
                  {...register("breed", {
                    required: {
                      value: true,
                      message: " This field is required",
                    },
                  })}
                />
              </div>
              {errors.breed && <ErrorMessage message={errors.breed?.message} />}
            </div>
            <div>
              <div className="w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <SelectInput
                  border="border-0"
                  options={breed}
                  defaultOption="Breed Type"
                  {...register("breedType", {
                    required: {
                      value: true,
                      message: " This field is required",
                    },
                  })}
                />
              </div>
              {errors.breedType && (
                <ErrorMessage message={errors.breedType?.message} />
              )}
            </div>
            <div>
              <div className=" w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  border="border-0"
                  placeholder={"Height"}
                  {...register("height", { required: true })}
                />
              </div>
              {errors.height && (
                <ErrorMessage message={errors.height?.message} />
              )}
            </div>
            <div>
              <div className=" w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  border="border-0"
                  placeholder={"Color"}
                  {...register("color", { required: true })}
                />
              </div>
              {errors.color && <ErrorMessage message={errors.color?.message} />}
            </div>
            <div>
              <div className=" w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  border="border-0"
                  placeholder={"Weight"}
                  {...register("weight", { required: true })}
                />
              </div>
              {errors.weight && (
                <ErrorMessage message={errors.weight?.message} />
              )}
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <h5 className="text-center mb-4">Add Photos</h5>
          <div className="overflow-auto flex items-center justify-center">
            <label
              htmlFor="AdImageInput"
              className="p-10 bg-grey rounded-xl inline-block cursor-pointer"
            >
              <i className="text-white text-2xl">
                <FaPlus />
              </i>
              <input
                id="AdImageInput"
                className="hidden "
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                {...productImageRegister}
                onChange={(e) => {
                  productImageRegister.onChange(e);
                  handleImageUpload(e);
                }}
              />
            </label>
            {images ? (
              <div className=" mx-3 h-20 w-22 bg-success">
                <img src={images} alt="" className="w-full h-full" />
              </div>
            ) : null}
          </div>
          {errors.pictureUrl && (
            <ErrorMessage message={errors.pictureUrl?.message} />
          )}
        </div>
        <div className="text-center my-5">
          <button
            className="bg-yellow py-4 px-15 rounded font-semibold text-sm "
            type="submit"
            // onClick={nextStep}
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutBully;
