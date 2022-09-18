import React, { useState } from "react";
import { Step1, Step2, Step3, Progress } from "../../components/ads/Index";
import { createContext } from "react";
import { useDispatch } from "react-redux";
import { createPostsSlice } from "../../store/features/productSlice";
// import { isResponseSuccess } from "../../utils";
import { toast, Slide } from "react-toastify";

export const AdContext = createContext();

const PostAd = () => {
  const dispatch = useDispatch();
  const [adData, setadData] = useState({
    postAddId: 0,
    categoryId: 0,
    breedId: 0,
    pictureUrl: "",
    dogsRegisteredName: "",
    dateofBirth: "",
    sex: "",
    dogsOwnerName: "",
    address: "",
    city: "",
    // country: "",
    state: "",
    zip: "",
    telephone: "",
    maleParentName: "",
    maleParentDob: "",
    maleBreedId: 0,
    femaleParentName: "",
    femaleParentDob: "",
    femaleBreedId: 0,
    signUpId: 0,
  });
  const [step, setStep] = useState(1);
  const [pet, setPet] = useState(false);

  const checkCategory = (e) => {
    console.log("ran")
    console.log(e.target.value)
    if (e.target.value === "1") {
      setPet(true);
    } else{
      setPet(false)
    }
  };



  const updateStep1 = (data) => {
    setadData((adData) => ({
      ...adData,
      categoryId: parseInt(data.category),
      breedId: parseInt(data.breed),
      pictureUrl: data.pictureUrl,
    }));
    setStep(step + 1);
  };
  const updateStep2 = (data) => {
    // console.log(data);
    setadData((adData) => ({
      ...adData,
      dogsRegisteredName: data.dogsRegisteredName,
      dateofBirth: data.dateOfBirth,
      sex: data.sex,
      dogsOwnerName: data.dogsOwnerName,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      telephone: data.telephone,
      maleParentName: data.maleParentName,
      maleParentDob: data.maleParentDob,
      maleBreedId: data.maleBreedId,
      femaleParentName: data.femaleParentName,
      femaleParentDob: data.femaleParentDob,
      femaleBreedId: data.femaleBreedId,
      signUpId: 0,
    }));
    dispatch(createPostsSlice(adData))
      .then((res) => {
        if (res.payload.status >= 200 && res.payload.status <= 300) {
          nextStep();
        }
        throw new Error("error submitting form");
      })
      .catch((err) => {
        return toast.error(`${err.message}`, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 3000,
        });
      });
  };
  const nextStep = () => {
    if (step >= 3) {
      return;
    } else {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step <= 1) {
      return;
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div>
      <AdContext.Provider
        value={{ step, adData,pet, checkCategory, nextStep, prevStep, updateStep1, updateStep2 }}
      >
        <div className="w-full p-5 ">
          <div className="w-full border p-4 border-borderGrey md:w-11/12 lg:w-4/6 md:mx-auto md:my-5  ">
            <h4 className="text-center my-4 font-normal text-lg">Post Ad</h4>
            <Progress/>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
          </div>
        </div>
      </AdContext.Provider>
    </div>
  );
};

export default PostAd;
