import {
  github,
  linkedin,
  shieldTick,
  support,
  truckFast,
  twitter,
  dev,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imageURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "₹ 8 295.00",
    rating: 4,
  },
  {
    imageURL: shoe5,
    name: "Air Jordan 2",
    price: "₹ 19 695.00",
    rating: 4.2,
  },
  {
    imageURL: shoe6,
    name: "Nike Air Jordan-13 Retro",
    price: "₹19,295",
    rating: 4.5,
  },
  {
    imageURL: shoe7,
    name: "Nike Air Jordan 1 Next Chapter",
    price: "₹ 25 395.00",
    rating: 5,
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Mahendra Singh Dhoni",
    rating: 4.5,
    feedback:
      "When it comes to stepping onto the field, I've always been meticulous about choosing my gear. After all, cricket isn't just a game; it's a way of life. So when I was introduced to Nike's latest line of sports shoes, it felt like destiny had handed me a new set of tools to conquer the cricketing world.",
  },
  {
    imgURL: customer2,
    customerName: "Lionel Messi",
    rating: 4.8,
    feedback:
      "As a footballer, I've always sought perfection in every aspect of my game, from my dribbling to my finishing. The right footwear is a crucial part of that equation, and I've had the privilege of experiencing Nike's incredible range of shoes. These shoes have truly elevated my performance and comfort on the pitch, and I'm excited to share my thoughts.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "harshitaditya27@gmail.com",
        link: "mailto:harshitaditya27@gmail.com",
      },
      { name: "+123456789", link: "#" },
    ],
  },
];

export const socialMedia = [
  {
    src: github,
    alt: "github logo",
    href: "https://github.com/HarshitAditya27",
  },
  {
    src: twitter,
    alt: "twitter logo",
    href: "https://twitter.com/HarshitAditya1",
  },
  {
    src: linkedin,
    alt: "linkedin logo",
    href: "https://www.linkedin.com/in/harshitaditya/",
  },
  {
    src: dev,
    alt: "dev logo",
    href: "https://dev.to/harshitaditya1",
  },
];
