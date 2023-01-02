import React from "react";
import { MdLocationOn } from "react-icons/md";
import useFetchBullies from "../../hooks/useFectchBullies";
const PetCard = ({ item }) => {
  const imageurl = import.meta.env.VITE_IMAGE_URL;

  const { getSingleBully } = useFetchBullies();

  const viewAd = (id) => {
    getSingleBully(id);
  };

  // address
  // :
  // "Ewet Housing"
  // breed
  // :
  // "warewolf"
  // breedTypeId
  // :
  // 4
  // bullyImages
  // :
  // // (4) [{…}, {…}, {…}, {…}]
  // bullyPedigrees
  // :
  // null
  // bullyRegId
  // :
  // "She-S-00000000"
  // bullyType
  // :
  // {id: 4, breedTypeName: 'Shepherd'}
  // city
  // :
  // "Uyo"
  // color
  // :
  // "#ffff"
  // createdAt
  // :
  // "12/30/2022 22:43:33"
  // description
  // :
  // "bingo"
  // dob
  // :
  // "Wed Nov 30 2022 00:00:00 GMT+0100 (West Africa Standard Time)"
  // dogOwnerName
  // :
  // "lkmlkmlkm"
  // dogRegisterName
  // :
  // "bingoddd"
  // id
  // :
  // 1
  // price
  // :
  // "10000"
  // sex
  // :
  // "Male"
  // state
  // :
  // "Akwa Ibom"
  // status
  // :
  // "PENDING"
  // telephone
  // :
  // "(074)383-4959"
  // userId
  // :
  // 2
  // zip
  // :
  // "1234"
  return (
    <div
      className="p-2 flex flex-col  cursor-pointer relative"
      onClick={() => viewAd(item?.id)}
    >
      <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold   rounded-full">
        {item.status === "PENDING" ? (
          // <svg
          //   aria-hidden="true"
          //   class="w-3 h-3"
          //   fill="currentColor"
          //   viewBox="0 0 20 20"
          //   xmlns="http://www.w3.org/2000/svg"
          // >
          //   <path
          //     fill-rule="evenodd"
          //     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          //     clip-rule="evenodd"
          //   ></path>
          // </svg>
          // <svg
          //   aria-hidden="true"
          //   class="w-3.5 h-3.5"
          //   fill="currentColor"
          //   viewBox="0 0 20 20"
          //   xmlns="http://www.w3.org/2000/svg"
          // >
          //   <path
          //     fill-rule="evenodd"
          //     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          //     clip-rule="evenodd"
          //   ></path>
          // </svg>
          <span class="bg-yellow  text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
            Pending
          </span>
        ) : (
          <span class="bg-success  text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 ">
            Registered
          </span>
        )}
      </div>
      <div className="w-full">
        <img
          src={`${imageurl}${item?.bullyImages?.[0]?.url}`}
          alt=""
          className="w-full h-36 rounded-2xl"
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-xs mr-8">
          <p className="mb-1">{item?.breed}</p>
          <div className="flex items-center text-grey ">
            <i className="mr-2">
              <MdLocationOn />
            </i>
            <p>{item?.city}</p>
          </div>
          {/* {seller ? (
            <div className="flex text-grey">
              {sellerAvatar ? (
                <img
                  src={sellerAvatar}
                  alt=""
                  className="w-3 h-3 rounded-2xl mr-2"
                />
              ) : (
                ""
              )}
              {seller}
            </div>
          ) : null} */}
        </div>
        <div className="my-2">
          <span className="bg-black px-3 py-1 rounded-xl text-xs text-white">
            ${item?.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
