import Doggo1 from '../assets/images/doggo1.jpeg'
import Doggo2 from '../assets/images/doggo2.jpeg'
import Doggo3 from '../assets/images/doggo3.jpeg'
import Doggo7 from '../assets/images/doggo7.jpeg'
import AdDoggo1 from '../assets/images/AdDoggo1@2x.jpg'
import AdDoggo2 from '../assets/images/AdDoggo2@2x.jpg'
import AdDoggo3 from '../assets/images/AdDoggo3@2x.jpg'
import AdDoggo4 from '../assets/images/AdDoggo4@2x.jpg'
import AdDoggo5 from '../assets/images/AdDoggo5@2x.jpg'
import Trophy from '../assets/images/trophy.jpeg'
import People from '../assets/images/peopleTalking.jpeg'
import janeAvatar from '../assets/images/avatar1.jpeg';

export const CartData = [
    {
        itemImage: Doggo1,
        itemCategory: "Bull Dog",
        itemDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        itemQuantity: 1,
        unitPrice: 2750,
        itemDuties: 140
    }
]

export const dashboardMenu = [
    {
        icon: "",
        name: "Your Ads",
        link: "/dashboard",
    },
    {
        icon: "",
        name: "Memberships",
        link: "/memberships",
    },
    {
        icon: "",
        name: "Favourites",
        link: "/favourites",
    },
    {
        icon: "",
        name: "Your Orders",
        link: "/orders",
    },
    {
        icon: "",
        name: "Customer Care",
        link: "/customer-care",
    },
];
export const adsData = [
    {
        id: 1,
        name: "Cane Corso",
        location: "New York",
        image: Doggo1,
        price: 800
    },
    {
        id: 2,
        name: "Pitbull",
        location: "New Jersey",
        image: Doggo2,
        price: 1000
    },
    {
        id: 3,
        name: "Bull Dog",
        location: "California",
        image: Doggo3,
        price: 600
    },
    {
        id: 4,
        name: "German Shepherd",
        location: "Texas",
        image: Doggo3,
        price: 800
    },
    {
        id: 5,
        name: "Pitbull",
        location: "Texas",
        image: Doggo1,
        price: 1000
    },
    {
        id: 6,
        name: "Cane Corso",
        location: "Brooklyn",
        image: Doggo2,
        price: 1000
    },
    {
        id: 7,
        name: "Cane Corso",
        location: "Brooklyn",
        image: Doggo2,
        price: 1000
    },
    {
        id: 8,
        name: "Cane Corso",
        location: "Brooklyn",
        image: Doggo3,
        price: 700
    },
]

export const featuredAdsData = [
    {
        id: 1,
        name: "Cane Corso",
        location: "New York",
        image: AdDoggo3,
        price: 800,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 2,
        name: "Pitbull",
        location: "New Jersey",
        image: AdDoggo2,
        price: 1000,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 3,
        name: "Bull Dog",
        location: "California",
        image: AdDoggo4,
        price: 600,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 4,
        name: "German Shepherd",
        location: "Texas",
        image: AdDoggo5,
        price: 800,
        seller: 'Jane May',
        sellerAvatar: janeAvatar
    },
    {
        id: 5,
        name: "Pitbull",
        location: "Texas",
        image: Doggo7,
        price: 1000,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 6,
        name: "Cane Corso",
        location: "Brooklyn",
        image: AdDoggo3,
        price: 1000,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 7,
        name: "Cane Corso",
        location: "Brooklyn",
        image: AdDoggo4,
        price: 1000,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 8,
        name: "Cane Corso",
        location: "Brooklyn",
        image: AdDoggo2,
        price: 700,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 9,
        name: "Cane Corso",
        location: "Brooklyn",
        image: AdDoggo4,
        price: 1000,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 10,
        name: "Pitbull",
        location: "Texas",
        image: Doggo7,
        price: 1000,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 11,
        name: "Cane Corso",
        location: "New York",
        image: AdDoggo3,
        price: 800,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 12,
        name: "Cane Corso",
        location: "New York",
        image: AdDoggo2,
        price: 800,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 13,
        name: "Cane Corso",
        location: "New York",
        image: AdDoggo3,
        price: 800,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
    {
        id: 14,
        name: "Cane Corso",
        location: "New York",
        image: AdDoggo1,
        price: 800,
        seller: 'Jane Doe',
        sellerAvatar: janeAvatar
    },
]

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

export const categoriesData = [
    {
        id: 1,
        img: AdDoggo1,
        name: "Pets",
        link: '/pets'
    },
    {
        id: 2,
        img: AdDoggo2,
        name: "Pet Toys",
        link: '/pets'
    },
    {
        id: 3,
        img: AdDoggo1,
        name: "Electronics",
        link: '/pets'
    },
    {
        id: 4,
        img: AdDoggo5,
        name: "Equipments",
        link: '/pets'
    },
    {
        id: 5,
        img: AdDoggo3,
        name: "Pets",
        link: '/pets'
    },
    {
        id: 6,
        img: AdDoggo4,
        name: "Pets",
        link: '/pets'
    },
]

export const bullyNewsData = [
    {
        id: 1,
        title: "Our Latest Shows",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
        image: Trophy,
        link: ""
    },
    {
        id: 2,
        title: "Bully News",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
        image: People,
        link: ""
    }
]

export const testimonialData = [
    {
        id: 1,
        image: Doggo1,
        name: "Caviar Scent",
        status: 'Customer',
        testimony: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'
    },
    {
        id: 2,
        image: janeAvatar,
        name: "Benny Cave",
        status: 'Customer',
        testimony: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'
    },
    {
        id: 3,
        image: Doggo3,
        name: "Caviar Tory",
        status: 'Customer',
        testimony: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'
    },
    {
        id: 4,
        image: Doggo2,
        name: "Globus Tania",
        status: 'Customer',
        testimony: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'
    },
    {
        id: 5,
        image: janeAvatar,
        name: "Globus Tania",
        status: 'Customer',
        testimony: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'
    },
    {
        id: 6,
        image: AdDoggo1,
        name: "Verizon Tania",
        status: 'Customer',
        testimony: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'
    },
    {
        id: 7,
        image: AdDoggo3,
        name: "Jane Doe",
        status: 'Customer',
        testimony: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'
    },
    {
        id: 8,
        image: Doggo1,
        name: "Jane Doe",
        status: 'Customer',
        testimony: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'
    },
]