import React, { useState } from "react";
import { Step1, Step2, Step3 } from "../../components/ads/Index";
import { createContext } from "react";
import { FaCheckCircle } from "react-icons/fa";

export const AdContext = createContext();

const PostAd = () => {
  const [state, setState] = useState({
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

  const updateStep2 = (data) => {
    setState((state) => ({
      ...state,
      dogsRegisteredName: data.dogsRegisteredName,
      // postAddId: 0,
      // categoryId: 0,
      // breedId: 0,
      // pictureUrl: "",
      dateofBirth: "",
      sex: data.sex,
      dogsOwnerName: data.dogsOwnerName,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      telephone: data.telephone,
      maleParentName: data.maleParentName,
      maleParentDob: "",
      maleBreedId: data.maleBreedId,
      femaleParentName: data.femaleParentName,
      femaleParentDob: "",
      femaleBreedId: data.femaleBreedId,
      signUpId: 0,
    }));
    setStep(step + 1);
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
      <AdContext.Provider value={{ step, nextStep, prevStep, updateStep2 }}>
        <div className="w-full p-5 ">
          <div className="w-full border p-4 border-borderGrey md:w-4/6 md:mx-auto md:my-5  ">
            <h4 className="text-center my-4 font-normal text-lg">Post Ad</h4>
            <div className="flex items-center justify-center">
              <div
                className={`text-sm rounded-3xl py-2 px-10 flex items-center ${
                  step > 1 ? "bg-borderGrey" : "bg-yellow"
                }`}
              >
                <span className="flex items-center">
                  About Item
                  {step > 1 ? (
                    <i className="pl-3 text-end">
                      <FaCheckCircle />
                    </i>
                  ) : null}
                </span>
              </div>
              <hr className="w-20 h-2 text-borderGrey mt-2" />
              <div
                className={`text-sm rounded-3xl py-2 px-10 flex items-center ${
                  step > 1 && step < 3 ? "bg-yellow" : "bg-borderGrey"
                }
           `}
              >
                <span className="flex items-center">
                  Details
                  {step > 2 ? (
                    <i className="pl-3 text-end">
                      <FaCheckCircle />
                    </i>
                  ) : null}
                </span>
              </div>
              <hr className="w-20 h-2 text-borderGrey mt-2" />
              <div
                className={`bg-borderGrey text-sm rounded-3xl py-2 px-10 ${
                  step >= 3 ? "bg-yellow" : "border-borderGrey"
                }`}
              >
                <span className="flex items-center">Post Ad</span>
              </div>
            </div>
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
