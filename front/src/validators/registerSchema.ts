import * as Yup from "yup";

export interface RegisterType {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  repeatPassword: string;
}

export const registerInitialValues = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
  phone: "",
  address: "",
};

export const registerValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must be longer than 8 characters")
    .max(25, "Must be shorter than 25 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character"
    ),

  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password"),
  phone: Yup.string()
    .min(10, "Invalid phone number")
    .required("Phone is required"),
  address: Yup.string().required("Address is required"),
});
