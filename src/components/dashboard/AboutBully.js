import React, { useContext, useEffect, useState } from "react";
import { BullyRegistrationContext } from "./BullyRegistration";
import { FaPlus, FaTimes } from "react-icons/fa";
import { SelectInput, Input, ErrorMessage } from "../shared";
import { selectCategories, breed } from "../../data";
import { useForm } from "react-hook-form";
import useFetchBullies from "../../hooks/useFectchBullies";

const AboutBully = () => {
  const { getBreedType, breedType } = useFetchBullies();
  const [images, setImages] = useState("");
  const { updateStep1 } = useContext(BullyRegistrationContext);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState();
  const MAX_COUNT = 3;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    getBreedType();
  }, []);
  // function to submit form
  const onSubmit = (data) => {
    let submitData = {
      ...data,
      images: [...uploadedFiles],
    };
    console.log(submitData, "submit Data");
    updateStep1(submitData);
    // nextStep();
  };
  const productImageRegister = register("images", {
    required: {
      value: true,
      message: " This field is required",
    },
  });
  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
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
        <div className="lg:w-9/12 xl:w-8/12 mx-auto py-3">
          <div className="  flex  items-center my-2">
            {/* <p className="text-sm">Enter Item Category and Location</p> */}
          </div>
          <div className="grid grid-cols-2 gap-4 lg:gap-6  my-3">
            <div>
              <div className="w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  border="border-0"
                  {...register("Breed", {
                    required: {
                      value: true,
                      message: " This field is required",
                    },
                  })}
                  placeholder="Breed"
                />
              </div>
              {errors.Breed && <ErrorMessage message={errors.Breed?.message} />}
            </div>

            <div>
              <div className="w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <SelectInput
                  border="border-0"
                  options={breed}
                  defaultOption="Breed Type"
                  {...register("BreedType", {
                    required: {
                      value: true,
                      message: " This field is required",
                    },
                  })}
                />
              </div>
              {errors.BreedType && (
                <ErrorMessage message={errors.BreedType?.message} />
              )}
            </div>
            {/* <div>
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
            </div> */}
            <div>
              <div className=" w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  type="color"
                  border="border-0"
                  placeholder={"Color"}
                  {...register("Color", {
                    required: {
                      value: true,
                      message: " This field is required",
                    },
                  })}
                />
              </div>
              {errors.Color && <ErrorMessage message={errors.Color?.message} />}
            </div>
            {/* <div>
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
            </div> */}
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

export default AboutBully;
