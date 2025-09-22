import { toastError, toastSuccess } from "@/helpers/toast";
import { LoginType } from "@/validators/loginSchema";
import { RegisterType } from "@/validators/registerSchema";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = async (values: LoginType) => {
  try {
    const res = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

    if (!res.ok) {
      toastError(data.message);
      throw new Error(data.message);
    }
    toastSuccess("Logged In!");

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const registerUser = async (values: RegisterType) => {
  try {
    const res = await fetch(`${apiUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

    if (!res.ok) {
      toastError(data.message);
      throw new Error(data.message || "Error signin in");
    }
    toastSuccess("Account created!");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
