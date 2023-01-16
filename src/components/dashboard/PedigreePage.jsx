import React, { useContext, useState } from "react";
import { BullyRegistrationContext } from "./BullyRegistration";
import { GoPlus, GoDash } from "react-icons/go";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  Input,
  ErrorMessage,
  SelectInput,
  errorToast,
  Loader,
} from "../shared";
import { sex } from "../../data";
import DatePicker from "react-datepicker";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
const PedigreePage = () => {
  const { updateStep3, prevStep, isLoading } = useContext(
    BullyRegistrationContext
  );
  const [showGeneration, setShowGeneration] = useState(1);
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first: [
        {
          pedigreeGeneration: "1",
          maleParentName: "",
          maleParentDob: "",
          maleBreed: "",
          maleParentGender: "",
          maleParentColor: "",
          femaleParentName: "",
          femaleParentDob: "",
          femaleBreed: "",
          femaleParentGender: "",
          femaleParentColor: "",
        },
      ],
      second: [
        {
          pedigreeGeneration: "2",
          maleParentName: "",
          maleParentDob: "",
          maleBreed: "",
          maleParentGender: "",
          maleParentColor: "",
          femaleParentName: "",
          femaleParentDob: "",
          femaleBreed: "",
          femaleParentGender: "",
          femaleParentColor: "",
        },
        {
          pedigreeGeneration: "2",
          maleParentName: "",
          maleParentDob: "",
          maleBreed: "",
          maleParentGender: "",
          maleParentColor: "",
          femaleParentName: "",
          femaleParentDob: "",
          femaleBreed: "",
          femaleParentGender: "",
          femaleParentColor: "",
        },
      ],
      third: [
        {
          pedigreeGeneration: "3",
          maleParentName: "",
          maleParentDob: "",
          maleBreed: "",
          maleParentGender: "",
          maleParentColor: "",
          femaleParentName: "",
          femaleParentDob: "",
          femaleBreed: "",
          femaleParentGender: "",
          femaleParentColor: "",
        },
        {
          pedigreeGeneration: "3",
          maleParentName: "",
          maleParentDob: "",
          maleBreed: "",
          maleParentGender: "",
          maleParentColor: "",
          femaleParentName: "",
          femaleParentDob: "",
          femaleBreed: "",
          femaleParentGender: "",
          femaleParentColor: "",
        },
        {
          pedigreeGeneration: "3",
          maleParentName: "",
          maleParentDob: "",
          maleBreed: "",
          maleParentGender: "",
          maleParentColor: "",
          femaleParentName: "",
          femaleParentDob: "",
          femaleBreed: "",
          femaleParentGender: "",
          femaleParentColor: "",
        },
        {
          pedigreeGeneration: "3",
          maleParentName: "",
          maleParentDob: "",
          maleBreed: "",
          maleParentGender: "",
          maleParentColor: "",
          femaleParentName: "",
          femaleParentDob: "",
          femaleBreed: "",
          femaleParentGender: "",
          femaleParentColor: "",
        },
      ],
    },
  });
  const { fields: firstArray } = useFieldArray({ control, name: "first" });
  const { fields: secondArray } = useFieldArray({ control, name: "second" });
  const { fields: thirdArray } = useFieldArray({ control, name: "third" });

  // function to submit form
  const onSubmit = (data) => {
    const { first, second, third } = data;
    const submitData = {
      Pedigree: [...first, ...second, ...third],
    };

    updateStep3(submitData);
  };

  // function to check error on form
  const onerror = (data) => {
    if (data.first.length) {
      errorToast("Some fields are Empty in the First Gen");
    } else if (data.second.length) {
      errorToast("Some fields are Empty in the Second Gen");
    } else if (data.third.length) {
      errorToast("Some fields are Empty in the Third Gen");
    } else {
      errorToast("All Fields are Required Kindly Recheck Inputs");
    }
  };
  const addPedigree = () => {
    if (showGeneration === 3) return;
    setShowGeneration((prev) => prev + 1);
    setExpanded(false);
  };
  const removePedigree = () => {
    if (showGeneration === 1) return;
    setShowGeneration((prev) => prev - 1);
    setExpanded(false);
  };
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));
  return (
    <div>
      <div className=" lg:w-5/6 xl:w-4/6 mx-auto py-3">
        <div className="flex justify-evenly">
          <i
            className="text-md bg-yellow p-[2px] rounded-full"
            onClick={addPedigree}
          >
            <GoPlus />
          </i>
          Add Generation
          <i
            className="text-md bg-yellow p-[2px] rounded-full"
            onClick={removePedigree}
          >
            <GoDash />
          </i>
          Remove Generation
        </div>

        {/* Pedigree */}
        <div className="mt-3">
          <form onSubmit={handleSubmit(onSubmit, onerror)}>
            {/* first gen */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Generation 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {firstArray.map((item, index) => (
                  <div
                    className="bg-[#ECECEC63] p-5 border-1 border-yellow"
                    key={index}
                  >
                    <div className="flex items-center justify-between text-dark">
                      <h5 className="text-sm">Add Pedigree Information</h5>
                    </div>
                    <p className="text-blue text-sm my-3">Sire</p>
                    <div>
                      <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                        <Input
                          border="border-0"
                          placeholder={"Sire's Registered Name"}
                          {...register(`first.${index}.maleParentName`, {
                            required: true,
                          })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
                      <div>
                        <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
                          <Controller
                            name={`first.${index}.maleParentDob`}
                            control={control}
                            //  rules={{ required: true }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <DatePicker
                                dateFormat="MM-dd-yyyy"
                                placeholderText="Date of Birth"
                                selected={value}
                                onChange={onChange}
                                closeOnScroll={false}
                                // showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                className="border-0 focus:outline-none placeholder:text-dark text-sm px-3 w-full"
                                maxDate={new Date()}
                                // {...field}
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                          <Input
                            border="border-0"
                            placeholder={"Breed"}
                            {...register(`first.${index}.maleBreed`, {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                          <SelectInput
                            border="border-0"
                            options={sex}
                            defaultOption="Sex"
                            {...register(`first.${index}.maleParentGender`, {
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            })}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                          <Input
                            border="border-0"
                            placeholder={"Color"}
                            {...register(`first.${index}.maleParentColor`, {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-blue text-sm my-3">Dame</p>
                    <div>
                      <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                        <Input
                          border="border-0"
                          placeholder={"Dame's Registered Name"}
                          {...register(`first.${index}.femaleParentName`, {
                            required: true,
                          })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
                      <div>
                        <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
                          <Controller
                            name={`first.${index}.femaleParentDob`}
                            control={control}
                            rules={{ required: true }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <DatePicker
                                dateFormat="MM-dd-yyyy"
                                placeholderText="Date of Birth"
                                selected={value}
                                onChange={onChange}
                                closeOnScroll={false}
                                // showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                className="border-0 focus:outline-none placeholder:text-dark text-sm px-3 w-full"
                                maxDate={new Date()}
                                // {...field}
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                          <Input
                            border="border-0"
                            placeholder={"Breed"}
                            {...register(`first.${index}.femaleBreed`, {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                          <SelectInput
                            border="border-0"
                            options={sex}
                            defaultOption="Sex"
                            {...register(`first.${index}.femaleParentGender`, {
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            })}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                          <Input
                            border="border-0"
                            placeholder={"Color"}
                            {...register(`first.${index}.femaleParentColor`, {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
            {/* first gen */}

            {/* second gen */}
            {showGeneration >= 2 && (
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Generation 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {secondArray.map((item, index) => (
                    <div
                      className="bg-[#ECECEC63] p-5 border-1 border-yellow"
                      key={index}
                    >
                      <div className="flex items-center justify-between text-dark">
                        <h5 className="text-sm">Add Pedigree Information</h5>
                      </div>
                      <p className="text-blue text-sm my-3">Sire</p>
                      <div>
                        <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                          <Input
                            border="border-0"
                            placeholder={"Sire's Registered Name"}
                            {...register(`second.${index}.maleParentName`, {
                              required: true,
                            })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
                        <div>
                          <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
                            <Controller
                              name={`second.${index}.maleParentDob`}
                              control={control}
                              //  rules={{ required: true }}
                              render={({
                                field: { onChange, onBlur, value },
                              }) => (
                                <DatePicker
                                  dateFormat="MM-dd-yyyy"
                                  placeholderText="Date of Birth"
                                  selected={value}
                                  onChange={onChange}
                                  closeOnScroll={false}
                                  // showMonthDropdown
                                  showYearDropdown
                                  dropdownMode="select"
                                  className="border-0 focus:outline-none placeholder:text-dark text-sm px-3 w-full"
                                  maxDate={new Date()}
                                  // {...field}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <Input
                              border="border-0"
                              placeholder={"Breed"}
                              {...register(`second.${index}.maleBreed`, {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <SelectInput
                              border="border-0"
                              options={sex}
                              defaultOption="Sex"
                              {...register(`second.${index}.maleParentGender`, {
                                required: {
                                  value: true,
                                  message: "This field is required",
                                },
                              })}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <Input
                              border="border-0"
                              placeholder={"Color"}
                              {...register(`second.${index}.maleParentColor`, {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-blue text-sm my-3">Dame</p>
                      <div>
                        <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                          <Input
                            border="border-0"
                            placeholder={"Dame's Registered Name"}
                            {...register(`second.${index}.femaleParentName`, {
                              required: true,
                            })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
                        <div>
                          <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
                            <Controller
                              name={`second.${index}.femaleParentDob`}
                              control={control}
                              rules={{ required: true }}
                              render={({
                                field: { onChange, onBlur, value },
                              }) => (
                                <DatePicker
                                  dateFormat="MM-dd-yyyy"
                                  placeholderText="Date of Birth"
                                  selected={value}
                                  onChange={onChange}
                                  closeOnScroll={false}
                                  // showMonthDropdown
                                  showYearDropdown
                                  dropdownMode="select"
                                  className="border-0 focus:outline-none placeholder:text-dark text-sm px-3 w-full"
                                  maxDate={new Date()}
                                  // {...field}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <Input
                              border="border-0"
                              placeholder={"Breed"}
                              {...register(`second.${index}.femaleBreed`, {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <SelectInput
                              border="border-0"
                              options={sex}
                              defaultOption="Sex"
                              {...register(
                                `second.${index}.femaleParentGender`,
                                {
                                  required: {
                                    value: true,
                                    message: "This field is required",
                                  },
                                }
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <Input
                              border="border-0"
                              placeholder={"Color"}
                              {...register(
                                `second.${index}.femaleParentColor`,
                                {
                                  required: true,
                                }
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            )}
            {/* second gen */}

            {/* third gen */}
            {showGeneration === 3 && (
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Generation 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {thirdArray.map((item, index) => (
                    <div
                      className="bg-[#ECECEC63] p-5 border-1 border-yellow"
                      key={index}
                    >
                      <div className="flex items-center justify-between text-dark">
                        <h5 className="text-sm">Add Pedigree Information</h5>
                      </div>
                      <p className="text-blue text-sm my-3">Sire</p>
                      <div>
                        <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                          <Input
                            border="border-0"
                            placeholder={"Sire's Registered Name"}
                            {...register(`third.${index}.maleParentName`, {
                              required: true,
                            })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
                        <div>
                          <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
                            <Controller
                              name={`third.${index}.maleParentDob`}
                              control={control}
                              //  rules={{ required: true }}
                              render={({
                                field: { onChange, onBlur, value },
                              }) => (
                                <DatePicker
                                  dateFormat="MM-dd-yyyy"
                                  placeholderText="Date of Birth"
                                  selected={value}
                                  onChange={onChange}
                                  closeOnScroll={false}
                                  // showMonthDropdown
                                  showYearDropdown
                                  dropdownMode="select"
                                  className="border-0 focus:outline-none placeholder:text-dark text-sm px-3 w-full"
                                  maxDate={new Date()}
                                  // {...field}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <Input
                              border="border-0"
                              placeholder={"Breed"}
                              {...register(`third.${index}.maleBreed`, {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <SelectInput
                              border="border-0"
                              options={sex}
                              defaultOption="Sex"
                              {...register(`third.${index}.maleParentGender`, {
                                required: {
                                  value: true,
                                  message: "This field is required",
                                },
                              })}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <Input
                              border="border-0"
                              placeholder={"Color"}
                              {...register(`third.${index}.maleParentColor`, {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-blue text-sm my-3">Dame</p>
                      <div>
                        <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                          <Input
                            border="border-0"
                            placeholder={"Dame's Registered Name"}
                            {...register(`third.${index}.femaleParentName`, {
                              required: true,
                            })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 md: gap-4">
                        <div>
                          <div className="bg-[#FEFCFC] px-3 py-2 rounded-lg border border-borderGrey w-full h-fit tex-sm">
                            <Controller
                              name={`third.${index}.femaleParentDob`}
                              control={control}
                              rules={{ required: true }}
                              render={({
                                field: { onChange, onBlur, value },
                              }) => (
                                <DatePicker
                                  dateFormat="MM-dd-yyyy"
                                  placeholderText="Date of Birth"
                                  selected={value}
                                  onChange={onChange}
                                  closeOnScroll={false}
                                  // showMonthDropdown
                                  showYearDropdown
                                  dropdownMode="select"
                                  className="border-0 focus:outline-none placeholder:text-dark text-sm px-3 w-full"
                                  maxDate={new Date()}
                                  // {...field}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <Input
                              border="border-0"
                              placeholder={"Breed"}
                              {...register(`third.${index}.femaleBreed`, {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <SelectInput
                              border="border-0"
                              options={sex}
                              defaultOption="Sex"
                              {...register(
                                `third.${index}.femaleParentGender`,
                                {
                                  required: {
                                    value: true,
                                    message: "This field is required",
                                  },
                                }
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="mb-4 w-full bg-[#FEFCFC] px-3 rounded-lg border border-borderGrey h-fit">
                            <Input
                              border="border-0"
                              placeholder={"Color"}
                              {...register(`third.${index}.femaleParentColor`, {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            )}
            {/* third gen */}
            <div className="text-center my-5 flex justify-evenly">
              <button
                className="bg-yellow py-4 px-15 rounded font-semibold text-sm "
                onClick={prevStep}
              >
                BACK
              </button>
              <button
                className="bg-yellow py-4 px-15 rounded font-semibold text-sm "
                type="submit"
              >
                {isLoading ? <Loader /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
        {/* Pedigree */}
      </div>
    </div>
  );
};

export default PedigreePage;
