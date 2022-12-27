import React from "react";
import Image from "../assets/images/about-image.svg";

const Founders = () => {
  const data = [
    {
      image: Image,
      description:
        "Andre’ is a founding member of TBR and serves as Board of Director for the Registry. He has been a pet and dog owner his entire life. Andre’ began breeding American Pitbulls at age of 9 and has always been an advocate of the breed. He has watched the breed evolve into the more family oriented and docile American Bully. Andre’ felt that with there being so many bullies born, raised, and bred in Texas; it was only right to create Texans their own Bully registry. Moreover, he is also a graduate of Texas Southern University with a Bachelor of Science degree in Biology and double minor in history and sociology. Andre’ continued to excel, while at Texas Southern University, Andre’ was a member of the Veterinarian’s club, also obtained the National Dean’s List award and the University Honor Roll a number of times throughout his academic career. He was also a stellar collegiate athlete, winning two  SWAC Conference Champions in NCAA Division I men’s triple jump. After graduating from college, Andre’ went on to work for various Top Fortune 100 companies including, MD Anderson Cancer Center in the veterinarian and surgery department and Amgen as a research and development lead analyst. After years of corporate and entrepreneur business ventures, Andre’ decided to return back to school to obtain a degree in law. Andre’ has now partnered with his wife, Nurse Jasmine Fletcher and other likeminded and animal loving individuals to launch the Texas Bully Registry.",
    },
    {
      image: Image,
      description:
        "Jasmine, wife of Andre’ Fletcher and founding member, was born in Houston and raised on a farm in small town Brookshire, Texas. There, she gained hands on experience along with vast knowledge and understanding of a variety of animals. Jasmine has had pets from the moment she began to walk. In her younger years, she aspired to be a veterinarian and a photographer. However, her love for caring for animals led her to becoming a Registered Nurse, which she has been passionately committed to for 14 years. Jasmine has done it when it comes to nursing, from labor & delivery, operating room, medical- surgical, rehab to currently being an elementary school nurse, in Houston, Texas.  Jasmine plans to use her knowledge and skillset to contribute to Texas Bully Registry’s overall success and efficiency. She is also an avid bully breed supporter and owner.  ",
    },
    {
      image: Image,
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
      {data.map((item) => (
        <div className="flex items-center justify-end mt-4">
          <div className="hidden md:block md:w-1/2">
            <div>
              <img src={item.image} alt="" className="" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="xl:w-4/6">
              <p className="font-light text-sm">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Founders;
