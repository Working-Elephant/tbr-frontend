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
import PedigreePage from "./PedigreePage";

export const BullyRegistrationContext = createContext();

const BullyRegistration = () => {
  const { userId } = useSelector((state) => state.auth.user);

  const { isLoading = false, registerBully } = useFetchBullies();
  const [adData, setadData] = useState({});
  const [step, setStep] = useState(1);

  const updateStep1 = (data) => {
    setadData(data);
    nextStep();
  };

  const updateStep2 = (data) => {
    const obj = { ...adData, ...data };
    setadData(obj);
    nextStep();
  };

  const updateStep3 = async (data) => {
    console.log(adData, "adData");
    const obj = { ...adData, ...data };
    console.log(obj, "obj");
    const formdata = new FormData();
    for (var i = 0; i < obj.images.length; i++) {
      formdata.append("Images", obj.images[i]);
    }

    formdata.append("BreedTypeId", obj.BreedTypeId);
    formdata.append("Breed", obj.Breed);
    formdata.append("DogRegisterName", obj.DogRegisterName);
    formdata.append("Dob", obj.Dob.toString());

    formdata.append("Sex", obj.Sex);
    formdata.append("DogOwnerName", obj.DogOwnerName);
    formdata.append("Price", obj.Price);
    formdata.append("City", obj.City);
    formdata.append("Color", obj.Color);
    formdata.append("State", obj.State);
    formdata.append("Zip", obj.Zip);
    formdata.append("Address", obj.Address);
    formdata.append("DogClass", obj.DogClass);

    formdata.append("Description", obj.Description);
    formdata.append("Telephone", obj.Telephone);
    const tim = [
      {
        femaleParentBreed: "xffghdf",
        femaleParentColor: "xghgfdhf",
        femaleParentDob:
          "Mon Jan 02 2023 00:00:00 GMT+0100 (West Africa Standard Time) {}",
        femaleParentGender: "Male",
        femaleParentName: "bdcb",
        maleParentBreed: "xbfbdf",
        maleParentColor: "fdfvds",
        maleParentDob:
          "Mon Jan 02 2023 00:00:00 GMT+0100 (West Africa Standard Time) {}",
        maleParentGender: "Male",
        maleParentName: "ngfghfg",
        pedigreeGeneration: "1",
      },
      {
        femaleParentBreed: "xffghdf",
        femaleParentColor: "xghgfdhf",
        femaleParentDob:
          "Mon Jan 02 2023 00:00:00 GMT+0100 (West Africa Standard Time) {}",
        femaleParentGender: "Male",
        femaleParentName: "bdcb",
        maleParentBreed: "xbfbdf",
        maleParentColor: "fdfvds",
        maleParentDob:
          "Mon Jan 02 2023 00:00:00 GMT+0100 (West Africa Standard Time) {}",
        maleParentGender: "Male",
        maleParentName: "ngfghfg",
        pedigreeGeneration: "1",
      },
    ];

    formdata.append("Pedigrees", JSON.stringify(obj.Pedigree));
    // Display the key/value pairs
    // for (var pair of formdata.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    const status = await registerBully(formdata);

    if (status === false) {
      setStep(4);
    }
  };

  const nextStep = () => {
    if (step >= 4) {
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
        value={{
          step,
          adData,
          isLoading,
          setadData,
          nextStep,
          prevStep,
          updateStep1,
          updateStep2,
          updateStep3,
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
            {step === 3 && <PedigreePage />}
            {step === 4 && <AdConfirm />}
          </div>
        </div>
      </BullyRegistrationContext.Provider>
    </div>
  );
};

export default BullyRegistration;
