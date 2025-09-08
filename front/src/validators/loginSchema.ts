import * as Yup from "yup";

export interface LoginType {
  email: string;
  password: string;
}

export const loginInitialValues: LoginType = {
  email: "",
  password: "",
};

export const loginValidation = Yup.object({
  email: Yup.string().email("Invalid email adress").required("Email required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Must be longer than 8 characters")
    .max(25, "Must be shorter than 25 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character"
    ),
});
