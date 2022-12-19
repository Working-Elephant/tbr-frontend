import React, { useEffect, useState } from "react";
import { Step1, Step2, Step3, Progress } from "../../components/ads/Index";
import { createContext } from "react";
import { useSelector } from "react-redux";
import useFetchAds from "../../hooks/useFetchAds";

export const AdContext = createContext();

const PostAd = () => {
  // const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth.user);
  const [adData, setadData] = useState({});
  const [step, setStep] = useState(1);
  const [pet, setPet] = useState(false);
  const { isLoading, postAd, getCategories } = useFetchAds();

  useEffect(() => {
    getCategories();
  }, []);

  const checkCategory = (e) => {
    if (e.target.value === "1") {
      setPet(true);
    } else {
      setPet(false);
    }
  };
  const updateStep1 = (data) => {
    setadData((adData) => ({
      ...adData,
      CategoryId: data.CategoryId,
      images: data.images,
      City: data.City,
      State: data.State,
      Zip: data.Zip,
      Title: data.Title,
    }));
    nextStep();
  };
  const updateStep2 = async (data) => {
    const obj = { ...adData, ...data };
    // formData.Amount = Number(formData.Amount);
    // formData.CategoryId = Number(formData.CategoryId);
    const formdata = new FormData();
    formdata.append("CategoryId", obj.CategoryId);
    formdata.append("images", obj.images);
    formdata.append("City", obj.City);
    formdata.append("State", obj.State);
    formdata.append("Zip", obj.Zip);
    formdata.append("Title", obj.Title);
    formdata.append("Address", obj.Address);
    formdata.append("Amount", obj.Amount);
    formdata.append("Description", obj.Description);
    formdata.append("Telephone", obj.Telephone);
    const status = await postAd(formdata);
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
          // isLoading,
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
