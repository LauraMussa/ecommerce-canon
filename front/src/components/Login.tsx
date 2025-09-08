"use client";
//Formik
import { useFormik } from "formik";
import {
  LoginType,
  loginInitialValues,
  loginValidation,
} from "@/validators/loginSchema";

//Next / React
import { useContext, useState } from "react";
import Link from "next/link";

//Icons
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const formik = useFormik<LoginType>({
    initialValues: loginInitialValues,
    validationSchema: loginValidation,
    onSubmit: async () => {
      try {
        await login(formik.values);
        router.push("/");
      } catch (err: any) {
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

      <div className="flex flex-col  h-screen">
        <h2 className="text-2xl text-blue-50 text-center mb-4">Sign in</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col  text-blue-50  h-fit p-5 mt-15 md:mt-30 rounded-2xl"
        >
          <div className="py-2 text-left flex w-full max-w-md mx-auto flex-col">
            <label htmlFor="email" className="text-gray-400">
              Email adress
            </label>
            <input
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              id="email"
              name="email"
              className="input"
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-500 flex justify-center mt-2">
                {formik.errors.email}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                id="password"
                name="password"
                value={formik.values.password}
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

          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className={" w-full max-w-xs mx-auto mt-4 button-blue"}
          >
            Login
          </button>

          <p className="mx-auto text-blue-50 mt-4">
            First time?{" "}
            <Link
              href="/register"
              className="text-blue-400 hover:underline hover:text-blue-300"
            >
              Create account!
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
