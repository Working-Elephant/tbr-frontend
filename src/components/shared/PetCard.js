import React from "react";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useFetchAds from "../../hooks/useFetchAds";

const PetCard = ({ item }) => {
  const imageurl = process.env.REACT_APP_IMAGE_URL;
  const { getSingleAd } = useFetchAds();
  const viewAd = (id) => {
    console.log(id, "id");
    getSingleAd(id);
  };
  //   {
  // address
  // :
  //  navigate(`/ad/view/${id}`);
  // "timbet alley"
  // amount
  // :
  // "123"
  // bullyId
  // :
  // null
  // category
  // :
  // null
  // categoryId
  // :
  // 2
  // city
  // :
  // "Uyo"
  // createdAt
  // :
  // "12/19/2022 20:06:36"
  // description
  // :
  // "sfvs"
  // featured
  // :
  // false
  // id
  // :
  // 1
  // postAdImages
  // :
  // [{id: 1, postAdId: 1,…}, {id: 2, postAdId: 1,…}]
  // 0
  // :
  // {id: 1, postAdId: 1,…}
  // 1
  // :
  // {id: 2, postAdId: 1,…}
  // state
  // :
  // "Akwa Ibom"
  // status
  // :
  // "ACTIVE"
  // telephone
  // :
  // "(123)456-7890"
  // title
  // :
  // "timbet toy"
  // userId
  // :
  // 2
  // zip
  // :
  // "1234"
  // }
  const { title, city, amount, postAdImages, seller, sellerAvatar, id } = item;
  return (
    <div
      className="p-2 flex flex-col  cursor-pointer"
      onClick={() => viewAd(id)}
    >
      <div className="w-full">
        <img
          src={`${imageurl}/Uploads/Images/${postAdImages?.[0].url}`}
          alt=""
          className="w-full h-36 rounded-2xl"
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-xs mr-8">
          <p className="mb-1">{title}</p>
          <div className="flex items-center text-grey ">
            <i className="mr-2">
              <MdLocationOn />
            </i>
            <p>{city}</p>
          </div>
          {seller ? (
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
          ) : null}
        </div>
        <div className="my-2">
          <span className="bg-black px-3 py-1 rounded-xl text-xs text-white">
            &#x24;{amount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
