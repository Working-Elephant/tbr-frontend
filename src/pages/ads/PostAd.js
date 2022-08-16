import React, { useState } from "react";
import AdFormBody from "../../components/ads/AdFormBody";
import AboutItem from "../../components/ads/AboutItem";
import ItemDetails from "../../components/ads/ItemDetails";
import AdConfirm from "../../components/ads/AdConfirm";
import { createContext } from "react";

export const AdContext = createContext();

const PostAd = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
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
      <AdContext.Provider value={{step, nextStep, prevStep}} >
      <AdFormBody title="Post Ad">
        {step === 1 && <AboutItem />}
        {step === 2 && <ItemDetails />}
        {step === 3 && <AdConfirm />}
      </AdFormBody>
      </AdContext.Provider>
    </div>
  );
};

export default PostAd;
