import React, { useContext, useState, useEffect } from "react";
import * as watermark from "watermarkjs";
import { AdContext } from "../../pages/ads/PostAd";
import { FaPlus, FaTimes } from "react-icons/fa";
import { SelectInput, ErrorMessage, Loader, Input } from "../shared";
import { selectCategories, breed } from "../../data";
import { useForm } from "react-hook-form";
import useFetchBullies from "../../hooks/useFectchBullies";
const AboutItem = () => {
  const [fileLimit, setFileLimit] = useState();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { updateStep1, pet, checkCategory, prevStep, categories } =
    useContext(AdContext);
  const filteredCat = categories.filter(
    (item) => item.categoryName !== "Pets" && item.categoryName !== "Shop Tbr"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const MAX_COUNT = 3;
  // function to submit form
  const onSubmit = (data) => {
    let submitData = {
      ...data,
      images: [...uploadedFiles],
    };

    updateStep1(submitData);
  };

  const productImageRegister = register("images", {
    required: {
      value: true,
      message: " This field is required",
    },
  });

  const fields = [
    { name: "City", value: "city" },
    { name: "State", value: "state" },
    { name: "Zip", value: "zip" },
  ];
  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    const waterImage = watermarkImage(uploaded);
    console.log(waterImage, "waterimage");
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);

        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };
  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };
  const previewImage = (file) => {
    const objectUrl = URL.createObjectURL(file);
    return objectUrl;
  };
  const watermarkImage = (upload) => {
    // load a url and file object

    watermark([upload, "../../assets/images/coin.png"])
      .image(watermark.image.lowerLeft(0.5))
      .then((img) => document.getElementById("container").appendChild(img));
  };
  const deleteImage = (image) => {
    const filteredList = uploadedFiles.filter((file) => file != image);
    setUploadedFiles(filteredList);
    if (uploadedFiles.length < MAX_COUNT) {
      setFileLimit(false);
    } else {
      setFileLimit(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:w-4/6 mx-auto py-3">
          <div className="  flex  items-center my-2">
            <p className="text-sm">Enter Fields Below</p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:gap-8 my-3">
            <div className="col-span-2">
              <div className="w-full bg-[#FEFCFC] px-3   h-fit">
                <Input
                  {...register("Title", {
                    required: {
                      value: true,
                      message: " This field is required",
                    },
                  })}
                  placeholder={"Item Name"}
                />
              </div>
              {errors.item?.value && (
                <ErrorMessage message={errors.item?.message} />
              )}
            </div>
            <div className={"col-span-2"}>
              <div className="w-full bg-[#FEFCFC] px-3  bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey  h-fit">
                <SelectInput
                  read="categoryName"
                  border="border-0"
                  options={filteredCat}
                  defaultOption="Category"
                  additionalFunc={checkCategory}
                  {...register("CategoryId", {
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

            <div className="col-span-2 flex items-center justify-between">
              {fields.map((item) => (
                <div className="grow">
                  <div className="w-full bg-[#FEFCFC] px-3 rounded-l-lg border-r-0 h-fit">
                    <Input
                      {...register(item.name, {
                        required: {
                          value: true,
                          message: " This field is required",
                        },
                      })}
                      placeholder={item.name}
                    />
                  </div>
                  {errors.item?.value && (
                    <ErrorMessage message={errors.item?.message} />
                  )}
                </div>
              ))}
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
                multiple
                accept="image/png, image/jpg, image/jpeg"
                {...productImageRegister}
                onChange={handleFileEvent}
                disabled={fileLimit}
              />
            </label>

            {uploadedFiles &&
              uploadedFiles.map((file, index) => (
                <div className=" mx-3 h-20 w-22 ">
                  {/* <img
                    src={previewImage(file)}
                    alt=""
                    className="w-full h-full"
                  /> */}
                  <div
                    className="flex justify-center cursor-pointer"
                    onClick={() => deleteImage(file)}
                  >
                    <FaTimes />
                  </div>
                  <img
                    key={index}
                    src={previewImage(file)}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              ))}
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
