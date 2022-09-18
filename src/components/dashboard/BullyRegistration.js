import React, { useState } from "react";
// import { Step1, Step2, Step3 } from "../../components/ads/Index";
import AboutItem from "./AboutItem";
import ItemDetails from "./ItemDetails";
import AdConfirm from "./AdConfirm";
import { createContext } from "react";
import StepIndicator from "./StepIndicator";
// import { useDispatch } from "react-redux";
// import { createPostsSlice } from "../../store/features/productSlice";
// import { isResponseSuccess } from "../../utils";
// import { toast, Slide } from "react-toastify";

export const BullyRegistrationContext = createContext();

const BullyRegistration = () => {
  // const dispatch = useDispatch();
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
    nextStep();
    // dispatch(createPostsSlice(adData))
    //   .then((res) => {
    //     if (res.payload.status >= 200 && res.payload.status <= 300) {
    //       nextStep();
    //     }
    //     throw new Error("error submitting form");
    //   })
    //   .catch((err) => {
    //     return toast.error(`${err.message}`, {
    //       transition: Slide,
    //       hideProgressBar: true,
    //       autoClose: 3000,
    //     });
    //   });
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
      <BullyRegistrationContext.Provider
        value={{ step, adData, nextStep, prevStep, updateStep1, updateStep2 }}
      >
        <div className="w-full p-4 ">
          <div className="w-full border p-4 border-borderGrey  xl:w-11/12 md:mx-auto md:my-5  ">
            <h4 className="text-center my-4 font-normal text-lg">Register Bully</h4>
            
            <StepIndicator/>
            {step === 1 && <AboutItem />}
            {step === 2 && <ItemDetails />}
            {step === 3 && <AdConfirm />}
          </div>
        </div>
      </BullyRegistrationContext.Provider>
    </div>
  );
};

export default BullyRegistration;
