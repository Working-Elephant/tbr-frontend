import React from "react";
import Image from "../assets/images/about-image.svg";
import fletchers from "../assets/images/bryanFletcher.jpeg";
import andre from "../assets/images/AndreJasmin Fletcher.jpeg";
import tank from "../assets/images/Tank.jpg";
const Founders = () => {
  const data = [
    {
      image: andre,
      description: `Andre’ is a founding member of TBR and serves as Board of Director for the Registry. He has been a pet and dog owner his entire life. Andre’ began breeding American Pitbulls at age of 9 and has always been an advocate of the breed. He has watched the breed evolve into the more family oriented and docile American Bully. Andre’ felt that with there being so many bullies born, raised, and bred in Texas; it was only right to create Texans their own Bully registry. Moreover, he is also a graduate of Texas Southern University with a Bachelor of Science degree in Biology and double minor in history and sociology. Andre’ continued to excel, while at Texas Southern University, Andre’ was a member of the Veterinarian’s club, also obtained the National Dean’s List award and the University Honor Roll a number of times throughout his academic career. He was also a stellar collegiate athlete, winning two  SWAC Conference Champions in NCAA Division I men’s triple jump. After graduating from college, Andre’ went on to work for various Top Fortune 100 companies including, MD Anderson Cancer Center in the veterinarian and surgery department and Amgen as a research and development lead analyst. After years of corporate and entrepreneur business ventures, Andre’ decided to return back to school to obtain a degree in law. Andre’ has now partnered with his wife, Nurse Jasmine Fletcher and other likeminded and animal loving individuals to launch the Texas Bully Registry.
        
        Jasmine, wife of Andre’ Fletcher and founding member, was born in Houston and raised on a farm in small town Brookshire, Texas. There, she gained hands on experience along with vast knowledge and understanding of a variety of animals. Jasmine has had pets from the moment she began to walk. In her younger years, she aspired to be a veterinarian and a photographer. However, her love for caring for animals led her to becoming a Registered Nurse, which she has been passionately committed to for 14 years. Jasmine has done it when it comes to nursing, from labor & delivery, operating room, medical- surgical, rehab to currently being an elementary school nurse, in Houston, Texas.  Jasmine plans to use her knowledge and skillset to contribute to Texas Bully Registry’s overall success and efficiency. She is also an avid bully breed supporter and owners`,
    },
    // {
    //   image: Image,
    //   description:
    //     "Jasmine, wife of Andre’ Fletcher and founding member, was born in Houston and raised on a farm in small town Brookshire, Texas. There, she gained hands on experience along with vast knowledge and understanding of a variety of animals. Jasmine has had pets from the moment she began to walk. In her younger years, she aspired to be a veterinarian and a photographer. However, her love for caring for animals led her to becoming a Registered Nurse, which she has been passionately committed to for 14 years. Jasmine has done it when it comes to nursing, from labor & delivery, operating room, medical- surgical, rehab to currently being an elementary school nurse, in Houston, Texas.  Jasmine plans to use her knowledge and skillset to contribute to Texas Bully Registry’s overall success and efficiency. She is also an avid bully breed supporter and owner.  ",
    // },
    {
      image: fletchers,
      description:
        "Bryan studied Aviation and Aeronautics at Texas Southern University. Bryan also has experience in the mechanical engineering, welding, raising and handling of large & small farm animals, with an expertise in dog training. Bryan has also been a member of FFA organization since high school. He plans to bring all of his knowledge, education and life skills to Texas Bully Registry and help propel us into the future. ",
    },
    {
      image: Image,
      description:
        "James Duplessis III, a long time dog owner, a lifetime Texan and co-founder of the Texas Bully Registry. James is a social innovator who has been attached to the American Bully beginning in 2008. Since, that time James has had the pleasure and ability to provide Texans with knowledge and showmanship of the American Bully as well as the English bulldog and the French bulldog. At the age of 17, James graduated from Lamar High School and went on to become a collegiate athlete who would later graduate from the University of Houston. After graduating James put his skills to work immediately co- founding the non-profit organization Mens Generations. Most recently, James' leadership can be seen throughout his many works; In particular, with The Robinhood Foundation, The Best Mfn Bully Show and many of Life ",
    },
    {
      image: Image,
      description:
        "Kedrick Lyons was born and raised in Houston, TX within the Hiram Clarke community. Kedrick has been with the City of Houston as a Sr. Plan Analysis for eight years. Along with ten plus years in the technology field as a Sr. CAD designer, Kedrick has worked with some of the best in the tech business including developers, designers, project managers, and top architects. Mr. Lyons has been with Texas Bully Registry for two years as a technology advisor. Kedrick love of dog’s spans for years, as he helped breed Doberman Pinschers with family as a young adult. Kedrick is a powerful force in the community and uses his positive attitude and tireless energy to encourage others to work hard and succeed. Kedrick is inspired daily by his wife and daughter. In his free time, Kedrick likes to golf, and spending time with family and friends. ",
    },
  ];
  return (
    <div className="p-5">
      <h1 className="text-center font-bold text-lg">Founders</h1>
      {data.map((item) => (
        <>
          <div className="mt-5 mb-5 h-full ">
            <div className="mb-5">
              <div class="px-4 w-full flex justify-center">
                <img
                  src={item.image}
                  alt="..."
                  class=" max-w-full h-auto  border-none"
                />
              </div>
            </div>

            <div className="w-full mt-5 px-4  ">
              <p className="font-bold text-sm text-justify whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
          {/* <div className="absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-900">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-700 dark:text-gray-300"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
          </div> */}
        </>
      ))}
    </div>
  );
};

export default Founders;
