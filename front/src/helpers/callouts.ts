import {
  CameraIcon,
  FingerPrintIcon,
  SpeakerWaveIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import {
  TruckIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
export const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
];

export const navigationUser = [
  { name: "Shop", href: "/shop" },
  { name: "My Cart", href: "/cart" },
  { name: "Dashboard", href: "/dashboard" },
];
export const categories = [
  {
    name: "Cameras",
    description: "Shop now",
    imageSrc: "/images/Cameras.png",
    imageAlt: "Cameras Category",
    href: "/categories/1",
  },

  {
    name: "Printers",
    description: "Shop now",
    imageSrc: "/images/printer(4).png",
    imageAlt: "Printers Category",
    href: "/categories/3",
  },
  {
    name: "Camcorders",
    description: "Shop now",
    imageSrc: "/images/camcorderNew.png",
    imageAlt: "Camcordes Category",
    href: "/categories/2",
  },
  {
    name: "Accessories",
    description: "Shop Now",
    imageSrc: "/images/accessoriesNew.png",
    imageAlt: "Accessories Category",
    href: "/categories/4",
  },
  {
    name: "Objectives",
    description: "Shop Now",
    imageSrc: "/images/objectives(5).png",
    imageAlt: "Objetives Category",
    href: "/categories/5",
  },
];

export const aboutUsSections = [
  {
    title: "The Evolution of Canon",
    text: "Follow the timeline to learn more about milestone dates in Canon U.S.A.'s history and corporate and product-related achievements.",
    img: "/images/CanonEvolution.png",
    reverse: false,
  },
  {
    title: "Sustainability",
    text: "Sustainability is fundamental to our mission of using imaging to transform our world. Learn more about how we achieve this through our social and environmental initiatives.",
    img: "/images/SostenibilidadCanon.png",
    reverse: true,
  },
  {
    title: "About Canon",
    text: "Learn about Canon's global company, Canon Europe, and the Canon Group companies.",
    img: "/images/aboutCanon.png",
    reverse: false,
  },
  {
    title: "Celebrating Creativity",
    text: "Join our community of photographers and discover new ways to push the boundaries of visual storytelling with Canon.",
    img: "/images/PressRoom.png",
    reverse: true,
  },
  {
    title: "Inspiring a Changing World",
    text: "From fields and cities to oceans and space, we are always ready to face tomorrow. Discover how Canon is inspiring a changing world.",
    img: "/images/ChangingWorld.png",
    reverse: false,
  },
];

export const aboutUsCards = [
  {
    title: "Kyosei",
    label: "OUR PHILOSOPHY",
    text: "Canon is proud of its long and unwavering tradition of protecting and preserving our most precious of resources - the world we share.",
    img: "/images/OurPhilosophy.png",
  },
  {
    title: "Canon U.S.A., Inc.",
    label: "INVESTOR RELATIONS",
    text: "Shares of Canon Inc. are listed at the following stock exchanges: Tokyo, Nagoya, Fukuoka, Sapporo and New York.",
    img: "/images/InvestorRelations.png",
  },
  {
    title: "Innovation",
    label: "OUR CULTURE",
    text: "Since the first New York office opened in 1955, we have been at the forefront of innovation.",
    img: "/images/Innovation.png",
  },
  {
    title: "Latest Press Releases",
    label: "NEWSROOM",
    text: "Keep up to date with all things Canon. Subscribe or follow us for all our latest information.",
    img: "/images/NewsRoom.png",
  },
];

export const deliveryMethods = [
  {
    name: "fedex",
    label: "Free Delivery - FedEx",
    description: "Get it by Friday, 13 Dec 2025",
    id: 1,
  },
  {
    name: "dhl",
    label: "$15 - DHL Fast Delivery",
    description: "Get it by Tomorrow",
    id: 2,
  },
  {
    name: "express",
    label: "$49 - Express Delivery",
    description: "Get it today",
    id: 3,
  },
];

export const paymentMethods = [
  {
    id: "credit-card",
    label: "Credit Card",
    description: "Pay with your credit card",
  },
  {
    id: "paypal",
    label: "Paypal account",
    description: "Connect to your account",
  },
  {
    id: "pay-on-delivery",
    label: "Payment on delivery",
    description: "+$15 payment processing fee",
  },
];

export const advantages = [
  {
    title: "Intelligent Autofocus",
    description:
      "Dual Pixel AF recognizes various types of subjects quickly and accurately.",
    icon: FingerPrintIcon,
  },
  {
    title: "Compact, Lightweight, and Practical Body",
    icon: CameraIcon,
  },
  {
    title: "Silent Shooting",
    description: "Capture photos without disturbing your subject.",
    icon: SpeakerWaveIcon,
  },
  {
    title: "Intuitive and Ergonomic Design",
    description:
      "Controls are within easy reach, familiar to anyone who has used an interchangeable-lens camera, and intuitive for newcomers.",
    icon: HandRaisedIcon,
  },
];

export const recentStories = [
  {
    title: "From a Dormitory Town to the Coral Reef",
    description:
      "Hidden away in a warehouse, a remarkable team is bringing coral to life,  literally and in the hearts and minds of people everywhere.",
    imageSrc: "/images/HistoriasReciente(2).png",
    imageAlt: "sea photo",
    href: "",
    createdAt: "June 21, 2025",
  },
  {
    title: "Creating a Shot with Jean-Baptiste Liautard",
    description:
      "The extreme sports photographer takes us behind the scenes of a Canon EOS R5 shoot to show us how he creates his dramatic images.",
    imageSrc: "/images/HistoriasRecientes(4).png",
    imageAlt: "bike photo",
    href: "",
    createdAt: "July 03, 2025",
  },
  {
    title:
      "Akeem Olaosun: How a Man and His Camera Brought Out the Best of the Internet",
    description:
      "An unusual moment in front of the camera turned Akeem Olaosun into a viral star, celebrated for his talent, dedication, and his beloved Canon camera.",
    imageSrc: "/images/HistoriasRecientes(5).png",
    imageAlt: "akeem",
    href: "",
    createdAt: "July 30, 2025",
  },
  {
    title:
      "Boosting the Beat: How Homemade Videos Are Helping Afrobeats Go Global",
    description:
      "Although Afrobeats has already gained widespread popularity, it's still difficult for many talented artists to be discovered. That’s why Tore Oriase decided to share his skills and help nurture the stars of tomorrow.",
    imageSrc: "/images/HistoriasRecientes(3).png",
    imageAlt: "studio photo",
    href: "",
    createdAt: "July 23, 2025",
  },
];
export const trustUs = [
  {
    title: "Fast Shipping",
    description:
      "Get your order delivered to your doorstep in just a few days.",
    extra:
      "Enjoy 48–72 hour delivery nationwide with real-time tracking and secure packaging to ensure your camera arrives safely.",
    icon: TruckIcon,
  },
  {
    title: "Quality Guarantee",
    description: "All our products come with a 100% quality guarantee.",
    extra:
      "Every camera includes a 12-month warranty. If any defects appear, we provide hassle-free repair or replacement.",
    icon: CheckBadgeIcon,
  },
  {
    title: "Personalized Support",
    description: "Expert advice to help you choose the perfect camera.",
    extra:
      "Get free guidance on lenses, accessories, and setup, perfect for beginners and professionals alike.",
    icon: ChatBubbleLeftRightIcon,
  },
];

export const whatsNew = [
  {
    title: "Canon Club Collage Challenge",
    description:
      "Share your story through a photo, print it, and showcase it on the Canon Club wall for a chance to win the SELPHY CP1500",
    image: "/images/Collage.png",
  },
  {
    title: "Sustainability at Our Core",
    description:
      "Responsibility and sustainability are in our DNA. Discover how Canon is driving change through innovative sustainability initiatives.",
    image: "/images/Sustainability2.png",
  },
  {
    title: "Exclusive Offers",
    description:
      "Don't miss out, explore our latest deals and past promotions all in one place.",
    image: "/images/Offers.png",
  },
  {
    title: "Professional Imaging",
    description:
      "Stay inspired with the latest news, stories, gear, and expert tips from world-renowned photographers and filmmakers.",
    image: "/images/Imaging.png",
  },
];

export const inspirations = [
  {
    subject: "MACRO PHOTOGRAPHY",
    title: "PROFESSIONAL TOOLS",
    text: `The Canon Macro Twin Lite MT-26EX-RT, flash heads provide greater
              creative control for stunning macro shots.`,
    image: "/images/inspiration2.png",
    reverse: false,
  },
  {
    subject: "INSPIRATION",
    title: "SHUTTER STORIES",
    text: `The Canon Macro Twin Lite MT-26EX-RT, flash heads provide greater
              creative control for stunning macro shots.`,
    image: "/images/inspiration1.png",
    reverse: true,
  },
  {
    subject: "CINEMATIC VISION",
    title: "CAPTURE LIFE AS IT HAPPENS",
    text: `Canon's video cameras are built to follow every story, every movement, with authentic visual impact.`,
    image: "/images/inspiration5.png",
    reverse: false,
  },
];
