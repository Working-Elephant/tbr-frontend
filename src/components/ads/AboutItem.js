import React, { useContext, useState, useEffect } from "react";
import { AdContext } from "../../pages/ads/PostAd";
import { FaPlus } from "react-icons/fa";
import { SelectInput, ErrorMessage, Loader } from "../shared";
import { selectCategories, breed } from "../../data";
import { useForm } from "react-hook-form";
import useFetchBullies from "../../hooks/useFectchBullies";

const AboutItem = () => {
  const [images, setImages] = useState("");
  const { isLoading, bullies, getRegisteredBullies } = useFetchBullies();
  // const [pet, setPet] = useState(false);
  const { updateStep1, pet, checkCategory } = useContext(AdContext);
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
  useEffect(() => {
    getRegisteredBullies();
  }, []);

  // const checkCategory = (e) => {
  //   console.log("ran")
  //   console.log(e.target.value)
  //   if (e.target.value === "1") {
  //     setPet(true);
  //   } else{
  //     setPet(false)
  //   }
  // };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:w-4/6 mx-auto py-3">
          <div className="  flex  items-center my-2">
            <p className="text-sm">Enter Item Category and Location</p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:gap-8 my-3">
            <div className={`${pet ? "col-span-1" : "col-span-2"}`}>
              <div className="w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <SelectInput
                  border="border-0"
                  options={selectCategories}
                  defaultOption="Category"
                  additionalFunc={checkCategory}
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
            {pet && (
              <div>
                {isLoading ? <Loader/> : (
                <div className="w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                  <select
                    className="border-0 w-full py-2 px-3 text-sm focus:outline-none placeholder:text-sm placeholder:text-dark"
                    {...register("breed", {
                      required: {
                        value: true,
                        message: " This field is required",
                      },
                    })}
                  >
                    <option>Breed</option>
                    {bullies.map((item, i) => (
                      <option key={i} value={item.registerBullyId}>
                        {item.dogsRegisteredName}
                      </option>
                    ))}
                  </select>
                  {/* <SelectInput
                    border="border-0"
                    options={bullies}
                    defaultOption="Breed"
                    {...register("breed", {
                      required: {
                        value: true,
                        message: " This field is required",
                      },
                    })}
                  /> */}
                </div>
                // {errors.breed && (
                //   <ErrorMessage message={errors.breed?.message} />
                // )}
                )}
              </div>
            )}
            {/* <div>
                <div className="w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                  <SelectInput
                    border="border-0"
                    options={breed}
                    defaultOption="Color"
                    {...register("color", {
                      required: {
                        value: true,
                        message: " This field is required",
                      },
                    })}
                  />
                </div>
                {errors.color && (
                  <ErrorMessage message={errors.color?.message} />
                )}
              </div> */}

            <div className="col-span-2 flex items-center justify-between">
              <div className="grow">
                <div className="w-full bg-[#FEFCFC] px-3 rounded-l-lg border border-borderGrey border-r-0 h-fit">
                  <SelectInput
                    border="border-0"
                    options={breed}
                    defaultOption="City"
                    {...register("city", {
                      required: {
                        value: true,
                        message: " This field is required",
                      },
                    })}
                  />
                </div>
                {errors.city && <ErrorMessage message={errors.city?.message} />}
              </div>
              <div className="grow">
                <div className="w-full bg-[#FEFCFC] px-3  border-y border-y-borderGrey h-fit">
                  <SelectInput
                    border="border-0"
                    options={breed}
                    defaultOption="State"
                    {...register("state", {
                      required: {
                        value: true,
                        message: " This field is required",
                      },
                    })}
                  />
                </div>
                {errors.state && (
                  <ErrorMessage message={errors.state?.message} />
                )}
              </div>
              <div className="grow">
                <div className="w-full bg-[#FEFCFC] px-3 rounded-r-lg border border-borderGrey border-l-0 h-fit">
                  <SelectInput
                    border="border-0"
                    options={breed}
                    defaultOption="Zip"
                    {...register("zip", {
                      required: {
                        value: true,
                        message: " This field is required",
                      },
                    })}
                  />
                </div>
                {errors.zip && <ErrorMessage message={errors.zip?.message} />}
              </div>
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

export default AboutItem;
