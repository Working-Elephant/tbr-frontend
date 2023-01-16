import React, { useContext, useEffect, useState } from "react";
import { BullyRegistrationContext } from "./BullyRegistration";
import { FaPlus, FaTimes } from "react-icons/fa";
import { SelectInput, Input, ErrorMessage } from "../shared";
import { selectCategories, breed } from "../../data";
import { useForm } from "react-hook-form";
import useFetchBullies from "../../hooks/useFectchBullies";
import * as watermark from "watermarkjs";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { PopoverPicker } from "../shared/PopOverPicker";
const AboutBully = () => {
  const { getBreedType, breedType } = useFetchBullies();
  const [images, setImages] = useState("");
  const { updateStep1 } = useContext(BullyRegistrationContext);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState();
  const [color1, setColor1] = useState("#aabbcc");
  const [color2, setColor2] = useState("#aabbcc");
  const MAX_COUNT = 3;
  const {
    register,
    error,
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
      Color: `${color1},${color2}`,
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
  const onerror = (error) => {
    console.log(error);
  };
  const classList = [
    {
      label: "Pocket",
      value: "Pocket",
    },
    {
      label: "Standard",
      value: "Standard",
    },
    {
      label: "Classic",
      value: "Classic",
    },
    {
      label: "Extreme",
      value: "Extreme",
    },
    {
      label: "XL",
      value: "XL",
    },
  ];
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onerror)}>
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
                  options={breedType}
                  read={"BreedTypeId"}
                  defaultOption="Breed Type"
                  {...register("BreedTypeId", {
                    required: {
                      value: false,
                      message: " This field is required",
                    },
                  })}
                />
              </div>
              {errors.BreedType && (
                <ErrorMessage message={errors.BreedType?.message} />
              )}
            </div>
            <div>
              <div className=" w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <Input
                  type="text"
                  border="border-0"
                  placeholder={"Description"}
                  {...register("Description", {
                    required: {
                      value: true,
                      message: " This field is required",
                    },
                  })}
                />
              </div>
              {errors.Description && (
                <ErrorMessage message={errors.Description?.message} />
              )}
            </div>
            <div>
              <div className="w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                <SelectInput
                  border="border-0"
                  options={classList}
                  defaultOption="Dog Class"
                  {...register("DogClass", {
                    required: {
                      value: false,
                      message: " This field is required",
                    },
                  })}
                />
              </div>
              {errors.BreedType && (
                <ErrorMessage message={errors.BreedType?.message} />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" w-[50%] bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
            <div className="flex justify-evenly">
              <div className="flex items-center justify-between">
                <span className="text-xs mr-2">Dog Color 1</span>
                <PopoverPicker color={color1} onChange={setColor1} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs mr-2">Dog Color 2</span>
                <PopoverPicker color={color2} onChange={setColor2} />
              </div>
            </div>
          </div>
          {errors.Color && <ErrorMessage message={errors.Color?.message} />}
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
                  <div
                    className="flex justify-center cursor-pointer"
                    onClick={() => deleteImage(file)}
                  >
                    <FaTimes key={index} />
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
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutBully;
