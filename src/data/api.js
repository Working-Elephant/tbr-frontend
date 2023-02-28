import Doggo1 from "../assets/images/doggo1.jpeg";
import Doggo2 from "../assets/images/doggo2.jpeg";
import Doggo3 from "../assets/images/doggo3.jpeg";
import Doggo7 from "../assets/images/doggo7.jpeg";
import AdDoggo1 from "../assets/images/AdDoggo1@2x.jpg";
import AdDoggo2 from "../assets/images/AdDoggo2@2x.jpg";
import AdDoggo3 from "../assets/images/AdDoggo3@2x.jpg";
import AdDoggo4 from "../assets/images/AdDoggo4@2x.jpg";
import AdDoggo5 from "../assets/images/AdDoggo5@2x.jpg";
import Trophy from "../assets/images/trophy.jpeg";
import People from "../assets/images/peopleTalking.jpeg";
import janeAvatar from "../assets/images/avatar1.jpeg";
import User from "../assets/images/avatar2.jpeg";

import sc1 from "../assets/images/sc1.png";
import sc2 from "../assets/images/sc2.png";
import sc3 from "../assets/images/sc3.png";
// categories images
import Category1 from "../assets/images/category1.jpeg";
import Category2 from "../assets/images/category2.jpeg";
import Category3 from "../assets/images/category3.jpeg";
import Category4 from "../assets/images/category4.jpeg";
import Category5 from "../assets/images/category5.jpg";
import Category6 from "../assets/images/category6.jpg";
import PetFood from "../assets/images/petfood.jpg";
import Random from "../assets/images/random.jpg";

// dashboard menu icons
import AdsIcon from "../assets/images/adsIcon.svg";
import MessagesIcon from "../assets/images/mesaages.svg";
import MembershipIcon from "../assets/images/membership.svg";
import FavouritesIcon from "../assets/images/favourites.svg";
import OrdersIcon from "../assets/images/orders.svg";
import CustomerCareIcon from "../assets/images/customer_care.svg";

export const CartData = [
  {
    itemImage: Doggo1,
    itemCategory: "Bull Dog",
    itemDescription:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    itemQuantity: 1,
    unitPrice: 2750,
    itemDuties: 140,
  },
];

export const dashboardMenu = [
  {
    icon: MembershipIcon,
    name: "Home",
    link: "/dashboard/home",
  },
  {
    icon: AdsIcon,
    name: "Your Ads",
    link: "/dashboard/ads",
  },
  {
    icon: AdsIcon,
    name: "Bully Registration",
    link: "/dashboard/bully-registration",
  },
  {
    icon: MessagesIcon,
    name: "Messages",
    link: "/dashboard/messages",
  },
  {
    icon: FavouritesIcon,
    name: "Favorites",
    link: "/dashboard/favorites",
  },
  {
    icon: OrdersIcon,
    name: "My Orders",
    link: "/dashboard/orders",
  },
  // {
  //   icon: OrdersIcon,
  //   name: "Documents",
  //   link: "/dashboard/orders",
  // },
];
export const adsData = [
  {
    id: 1,
    name: "Cane Corso",
    location: "New York",
    image: Doggo1,
    price: 800,
  },
  {
    id: 2,
    name: "Pitbull",
    location: "New Jersey",
    image: Doggo2,
    price: 1000,
  },
  {
    id: 3,
    name: "Bull Dog",
    location: "California",
    image: Doggo3,
    price: 600,
  },
  {
    id: 4,
    name: "German Shepherd",
    location: "Texas",
    image: Doggo3,
    price: 800,
  },
  {
    id: 5,
    name: "Pitbull",
    location: "Texas",
    image: Doggo1,
    price: 1000,
  },
  {
    id: 6,
    name: "Cane Corso",
    location: "Brooklyn",
    image: Doggo2,
    price: 1000,
  },
  {
    id: 7,
    name: "Cane Corso",
    location: "Brooklyn",
    image: Doggo2,
    price: 1000,
  },
  {
    id: 8,
    name: "Cane Corso",
    location: "Brooklyn",
    image: Doggo3,
    price: 700,
  },
];

export const featuredAdsData = [
  {
    id: 1,
    name: "Cane Corso",
    location: "New York",
    image: AdDoggo3,
    price: 800,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
    description:
      "cqvghbvkjuwodbihvgfydh jvb yfcbdhjf yeqgvwdachjkbjhvdgwqajs cfyvg hfdbvkjbefcgu vcbhivdcuvgwhbyeh qudwvytguqwrybi hgvudwabcsvtug wcaug hbwvcwiyda vguwcag byvctgucygdwa",
  },
  {
    id: 2,
    name: "Pitbull",
    location: "New Jersey",
    image: AdDoggo2,
    price: 1000,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
  {
    id: 3,
    name: "Bull Dog",
    location: "California",
    image: AdDoggo4,
    price: 600,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
  {
    id: 4,
    name: "German Shepherd",
    location: "Texas",
    image: AdDoggo5,
    price: 800,
    seller: "Jane May",
    sellerAvatar: janeAvatar,
  },
  {
    id: 5,
    name: "Pitbull",
    location: "Texas",
    image: Doggo7,
    price: 1000,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
  {
    id: 6,
    name: "Cane Corso",
    location: "Brooklyn",
    image: AdDoggo3,
    price: 1000,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
  {
    id: 7,
    name: "Cane Corso",
    location: "Brooklyn",
    image: AdDoggo4,
    price: 1000,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
  {
    id: 8,
    name: "Cane Corso",
    location: "Brooklyn",
    image: AdDoggo2,
    price: 700,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
  {
    id: 9,
    name: "Cane Corso",
    location: "Brooklyn",
    image: AdDoggo4,
    price: 1000,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
  {
    id: 10,
    name: "Pitbull",
    location: "Texas",
    image: Doggo7,
    price: 1000,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
  {
    id: 11,
    name: "Cane Corso",
    location: "New York",
    image: AdDoggo3,
    price: 800,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
  {
    id: 12,
    name: "Cane Corso",
    location: "New York",
    image: AdDoggo2,
    price: 800,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
  {
    id: 13,
    name: "Cane Corso",
    location: "New York",
    image: AdDoggo3,
    price: 800,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
  {
    id: 14,
    name: "Cane Corso",
    location: "New York",
    image: AdDoggo1,
    price: 800,
    seller: "Jane Doe",
    sellerAvatar: janeAvatar,
  },
];

export const carouselImages = [
  { id: 1, img: AdDoggo1 },
  { id: 2, img: AdDoggo2 },
  { id: 3, img: AdDoggo3 },
  { id: 4, img: AdDoggo4 },
  { id: 5, img: AdDoggo5 },
  { id: 6, img: AdDoggo3 },
  { id: 7, img: AdDoggo1 },
  { id: 8, img: AdDoggo4 },
  { id: 9, img: AdDoggo2 },
];

// export const categoriesData = [
//   {
//     id: 1,
//     img: Coin,
//     name: "Shop TBR",
//     externalLink: "https://texasbullyregistrystore.threadless.com/",
//   },
//   {
//     id: 2,
//     img: Pets,
//     name: "Bullys",
//     link: "/categories/pets",
//   },
//   {
//     id: 3,
//     img: PetToys,
//     name: "Toys",
//     link: "/categories/pets",
//   },
//   {
//     id: 4,
//     img: Electronics,
//     name: "Food",
//     link: "/categories/pets",
//   },
//   {
//     id: 5,
//     img: Equipments,
//     name: "Care",
//     link: "/categories/pets",
//   },
//   {
//     id: 6,
//     img: Pets2,
//     name: "Supplies",
//     link: "/categories/pets",
//   },

//   // {
//   //   id: 7,
//   //   img: PetFood,
//   //   name: "Misc",
//   //   link: "/categories/pets",
//   // },
//   // {
//   //   id: 8,
//   //   img: Random,
//   //   name: "Random",
//   //   link: "/categories/pets",
//   // },
// ];
export const videoData = [
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthebestmfnbullyshow%2Fvideos%2F679944213010522%2F&show_text=false&width=267&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthebestmfnbullyshow%2Fvideos%2F679944213010522%2F&show_text=false&width=267&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthebestmfnbullyshow%2Fvideos%2F679944213010522%2F&show_text=false&width=267&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthebestmfnbullyshow%2Fvideos%2F679944213010522%2F&show_text=false&width=267&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthebestmfnbullyshow%2Fvideos%2F679944213010522%2F&show_text=false&width=267&t=0",
  },
];
export const previewData = [
  {
    image: sc1,
    link: "https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Fthebestmfnbullyshow%2Fvideos%2F915745462641412%2F&show_text=false&width=267&t=0",
  },

  {
    image: sc2,
    link: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthebestmfnbullyshow%2Fvideos%2F1268869750255730%2F&show_text=false&width=267&t=0",
  },
  {
    image: sc3,
    link: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthebestmfnbullyshow%2Fvideos%2F679944213010522%2F&show_text=false&width=267&t=0",
  },
];

export const bullyNewsData = [
  {
    id: 1,
    title: "Our Latest Shows",
    text: "The #1 Bully Registry and Ecommerce website. Learn about our advanced technology, events, founders, and how we stand out from our competitors.",
    image: Trophy,
    link: "",
  },
  {
    id: 2,
    title: "Bully News",
    text: "Submit your application to join our dog shows and become a junior handler",
    image: People,
    link: "",
  },
];

export const testimonialData = [
  {
    id: 1,
    image: Doggo1,

    status: "Customer",
    testimony:
      " The best mfm bully show was lit bunch of bad azz dogs but ain't nobody like this boy Future Hndrx ",
  },

  {
    name: "Angelo Cerda",
    id: 2,
    image: Doggo2,

    status: "Customer",
    testimony:
      "I had a great time at The Best MF'N Bully Show, It was an honor to be a guest judge ......",
  },
  {
    name: "Texascutthroatbullies",
    id: 3,
    image: Doggo3,

    status: "Customer",
    testimony:
      "We want to thank Andre Fletcher for inviting us out and throwing a great first show ...... It was an honor to show case our pups infront of June Williams",
  },
];

export const userMessages = [
  {
    id: "f7fha",
    image: User,
    name: "Cory Jones",
    messages: [
      {
        sent: false,
        message:
          "The best mfm bully show was lit bunch of bad azz dogs but ain't nobody like this boy Future Hndrx ",
      },
    ],
  },
  {
    id: "f7fhb",
    image: User,
    name: "Angelo Cerda",
    messages: [
      {
        sent: true,
        message:
          "I had a great time at The Best MF'N Bully Show, It was an honor to be a guest judge ......",
      },
    ],
  },
  {
    id: "g7fhb",
    image: User,
    name: "Texascutthroatbullies",
    messages: [
      {
        sent: true,
        message:
          "We want to thank Andre Fletcher for inviting us out and throwing a great first show ...... It was an honor to show case our pups infront of June Williams",
      },
    ],
  },
];
