import React, { useState } from "react";
import AdConfirm from "./AdConfirm";
import AboutBully from "./AboutBully";
import BullyDetails from "./BullyDetails";
import { createContext } from "react";
import StepIndicator from "./StepIndicator";
import { useSelector } from "react-redux";
// import { createPostsSlice } from "../../store/features/productSlice";
// import { isResponseSuccess } from "../../utils";
// import { toast, Slide } from "react-toastify";
import useFetchBullies from "../../hooks/useFectchBullies";
import isResponseSuccess from "../../utils/successResponse";

export const BullyRegistrationContext = createContext();

const BullyRegistration = () => {
  const { userId } = useSelector((state) => state.auth.user);

  const { isLoading, registerBully } = useFetchBullies();
  const [adData, setadData] = useState({
    postAddId: 0,
    categoryId: 0,
    breedId: 0,
    registerBullyId:0,
    pictureUrl: "",
  });
  const [step, setStep] = useState(1);

  const updateStep1 = (data) => {
    setadData((adData) => ({
      ...adData,
      signUpId: parseInt(userId),
      categoryId: parseInt(data.category),
      breedId: parseInt(data.breed),
      pictureUrl: data.pictureUrl,
      color: data.color,
    }));
    nextStep();
  };
  const updateStep2 = async (data) => {
    const formData = { ...adData, ...data };
    formData.price = Number(formData.price);
    formData.maleBreedId = Number(formData.maleBreedId);
    formData.femaleBreedId = Number(formData.femaleBreedId);
    formData.dateOfBirth = formData.dateOfBirth.toISOString();
    formData.maleParentDob = formData.maleParentDob.toISOString();
    formData.femaleParentDob = formData.femaleParentDob.toISOString();
    console.log(formData, "form");

    const status = registerBully(formData);
    if (isResponseSuccess(status)) {
      nextStep();
    }
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

  // address: "string"
  // breedId: 0
  // categoryId: 0
  // city: "string"
  // color: "string"
  // dateofBirth: "2022-09-21T10:33:00.42"
  // dogsOwnerName: "string"
  // dogsRegisteredName: "string"
  // femaleBeedId: 0
  // femaleParentDob: "2022-09-21T10:33:00.42"
  // femaleParentName: "string"
  // maleBeedId: 0
  // maleParentDob: "2022-09-21T10:33:00.42"
  // maleParentName: "string"
  // pictureUrl: "string"
  // registerBullyId: 1
  // sex: "string"
  // signUpId: 0
  // state: "string"
  // telephone: "string"
  // zip: "string"
  

  return (
    <div>
      <BullyRegistrationContext.Provider
        value={{
          step,
          adData,
          setadData,
          nextStep,
          prevStep,
          updateStep1,
          updateStep2,
        }}
      >
        <div className="w-full p-4 md:w-5/6 xl:w-4/6 mx-auto">
          <div className="w-full border p-4 border-borderGrey mx-auto lg:w-11/12  md:my-5  ">
            <h4 className="text-center my-4 font-normal text-lg">
              Register Bully
            </h4>

            <StepIndicator />
            {step === 1 && <AboutBully />}
            {step === 2 && <BullyDetails />}
            {step === 3 && <AdConfirm />}
          </div>
        </div>
      </BullyRegistrationContext.Provider>
    </div>
  );
};

export default BullyRegistration;
