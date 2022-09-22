import React, { useState } from "react";
import { Step1, Step2, Step3, Progress } from "../../components/ads/Index";
import { createContext } from "react";
import { useSelector } from "react-redux";
import useFetchAds from "../../hooks/useFetchAds";
import isResponseSuccess from "../../utils/successResponse";

export const AdContext = createContext();

const PostAd = () => {
  // const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth.user);
  const [adData, setadData] = useState({
    postAddId: 0,
    categoryId: 0,
    breedId: 0,
    pictureUrl: "",
    // address: "",
    city: "",
    state: "",
    zip: "",
    // telephone: "",
    signUpId: 0,
  });
  const [step, setStep] = useState(1);
  const [pet, setPet] = useState(false);
  const { isLoading, postAd } = useFetchAds();

  const checkCategory = (e) => {
    console.log("ran");
    console.log(e.target.value);
    if (e.target.value === "1") {
      setPet(true);
    } else {
      setPet(false);
    }
  };
  const updateStep1 = (data) => {
    setadData((adData) => ({
      ...adData,
      categoryId: data.category,
      // color: data.color,
      // breedId: data.breed,
      pictureUrl: data.pictureUrl,
      city: data.city,
      state: data.state,
      zip: data.zip,
    }));
    nextStep();
  };
  const updateStep2 = async (data) => {
    const formData = { ...adData, ...data };
    formData.price = Number(formData.price);
    formData.categoryId = Number(formData.categoryId);
    // formData.breedId = Number(formData.breedId);
    console.log(formData, "form");

    const status = await postAd(formData);
    if (isResponseSuccess(status)) {
      nextStep();
    }
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
        value={{
          step,
          adData,
          pet,
          isLoading,
          checkCategory,
          nextStep,
          prevStep,
          updateStep1,
          updateStep2,
        }}
      >
        <div className="w-full p-5 ">
          <div className="w-full border p-4 border-borderGrey md:w-11/12 lg:w-4/6 md:mx-auto md:my-5  ">
            <h4 className="text-center my-4 font-normal text-lg">Post Ad</h4>
            <Progress />
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
