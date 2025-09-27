import { MdOutlinePhoneIphone, MdEmail, MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="pt-12 mt-20 font-light text-blue-50 bg-gray-900/70 w-full">
   
      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        <div className="text-gray-400 flex flex-col space-y-2">
          <h3 className="text-sm mb-1">INFORMATION</h3>
          <p className="font-bold cursor-pointer hover:underline">Contact Us</p>
          <p className="font-bold cursor-pointer hover:underline">Terms of services</p>
          <p className="font-bold cursor-pointer hover:underline">Privacy Policy</p>
        </div>

        <div className="text-gray-400 flex flex-col space-y-2">
          <h3 className="text-sm mb-1">HELPFUL LINKS</h3>
          <p className="font-bold cursor-pointer hover:underline">Contact</p>
          <p className="font-bold cursor-pointer hover:underline">FAQs</p>
          <p className="font-bold cursor-pointer hover:underline">Live Chat</p>
        </div>

        <div className="text-gray-400 flex flex-col space-y-2">
          <h3 className="text-sm mb-1">LEGAL</h3>
          <p className="font-bold cursor-pointer hover:underline">Accessibility</p>
          <p className="font-bold cursor-pointer hover:underline">Returns Policy</p>
          <p className="font-bold cursor-pointer hover:underline">Refund Policy</p>
        </div>

        <div className="text-gray-400 space-y-2">
          <h3 className="text-sm mb-1">NEW YORK</h3>
          <p>957 Hill Hills Suite 491, United States</p>
          <p className="flex items-center gap-1">
            <MdOutlinePhoneIphone className="relative -top-[2px]" />
            Office: +12(3) 456 7890 1234
          </p>
          <p className="flex items-center gap-1">
            <MdOutlineMailOutline className="relative -top-[1.5px]" />
            Support:{" "}
            <span className="hover:underline cursor-pointer">canon@gmail.com</span>
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-4 bg-gray-800 p-5 rounded-lg">
        <label htmlFor="newsletter" className="text-sm text-gray-400 whitespace-nowrap">
          Sign up to our newsletter
        </label>
        <div className="relative w-full flex">
          <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="newsletter"
            placeholder="Your Email"
            className="bg-gray-700/50 pl-10 pr-3 w-full h-9 border border-gray-400/50 rounded-l-lg focus:outline-none focus:bg-gray-700/70 hover:bg-gray-700/70"
          />
          <button className="bg-blue-800 px-4 rounded-r-lg hover:bg-blue-700 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-600/70 my-8"></div>

      <div className="text-center text-gray-400 text-sm px-4">
        © 2022-2025{" "}
        <a href="#" className="hover:underline">
          Canon™
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
