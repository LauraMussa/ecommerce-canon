import { LoginType } from "@/validators/loginSchema";
import { RegisterType } from "@/validators/registerSchema";

export const loginUser = async (values: LoginType) => {
  try {
    const res = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      throw new Error(data.message || "Error al registrar usuario");
    }
    alert("Logged in!");

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const registerUser = async (values: RegisterType) => {
  try {
    const res = await fetch("http://localhost:3001/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      throw new Error(data.message || "Error al registrar usuario");
    }
    alert("Success!");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
