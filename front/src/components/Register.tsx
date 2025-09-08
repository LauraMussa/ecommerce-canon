"use client";
//Axios
import axios from "axios";

//Formik
import {
  registerInitialValues,
  registerValidation,
} from "@/validators/registerSchema";
import { useFormik } from "formik";
import Link from "next/link";
import { useContext, useState } from "react";

//Icons
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserContext";

const Register = () => {
  const [show, setShow] = useState(false);
  const [showR, setShowR] = useState(false);
  const router = useRouter();
  const { register } = useContext(UserContext);

  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerValidation,
    onSubmit: async () => {
      try {
        await register(formik.values);
        router.push("/login");
      } catch (err) {
        console.log(err);
        throw err;
      } finally {
        formik.setSubmitting(false);
      }
    },
  });
  return (
    <>
      <Link href="/">
        <img
          alt=""
          src="/images/LogoLight.svg"
          className="ml-[3rem] pt-5.5 h-10.5"
        />
      </Link>

      <div className="flex flex-col h-screen">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center text-blue-50 h-fit mb-0 p-5 m-4 md:m-12 rounded-2xl"
        >
          <h2 className="text-2xl text-blue-50 text-center mb-4">
            Create new account
          </h2>

          <div className="py-2 text-left flex w-full max-w-md mx-auto flex-col">
            <label htmlFor="name" className="text-gray-400">
              Full name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="input"
            />
            {formik.errors.name && formik.touched.name ? (
              <p className="text-red-500 flex justify-center mt-2">
                {formik.errors.name}
              </p>
            ) : null}
          </div>

          <div className="py-2 text-left flex w-full max-w-md mx-auto flex-col">
            <label htmlFor="email" className="text-gray-400">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="input"
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-500 flex justify-center mt-2">
                {formik.errors.email}
              </p>
            ) : null}
          </div>

          <div className="py-2 text-left flex w-full max-w-md mx-auto flex-col">
            <label htmlFor="address" className="text-gray-400">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="input"
            />
            {formik.errors.address && formik.touched.address ? (
              <p className="text-red-500 flex justify-center mt-2">
                {formik.errors.address}
              </p>
            ) : null}
          </div>
          <div className="py-2 text-left flex w-full max-w-md mx-auto flex-col">
            <label htmlFor="phone" className="text-gray-400">
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="input"
            />
            {formik.errors.phone && formik.touched.phone ? (
              <p className="text-red-500 flex justify-center mt-2">
                {formik.errors.phone}
              </p>
            ) : null}
          </div>

          <div className="py-2 text-left flex w-full max-w-md mx-auto flex-col">
            <label htmlFor="password" className="text-gray-400">
              Password
            </label>
            <div className="flex input justify-between">
              <input
                type={show ? "text" : "password"}
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className="w-[90%] focus:outline-none bg-transparent"
              />

              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <p className="text-red-500 flex justify-center mt-2">
                {formik.errors.password}
              </p>
            ) : null}
          </div>

          <div className="py-2 text-left flex w-full max-w-md mx-auto flex-col">
            <label htmlFor="repeatPassword" className="text-gray-400">
              Repeat password
            </label>
            <div className="flex input justify-between">
              <input
                type={showR ? "text" : "password"}
                name="repeatPassword"
                id="repeatPassword"
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className="w-[90%] focus:outline-none bg-transparent"
              />

              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setShowR(!showR)}
              >
                {showR ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            {formik.errors.repeatPassword && formik.touched.repeatPassword ? (
              <p className="text-red-500 flex justify-center mt-2">
                {formik.errors.repeatPassword}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className="w-full max-w-xs mx-auto mt-4 button-blue"
          >
            Register
          </button>
        </form>

        <p className="mx-auto flex gap-2 text-blue-50">
          Got an account?
          <Link
            href="/login"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
