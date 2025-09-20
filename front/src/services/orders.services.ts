const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const createOrdes = async (token: string, productsId: number[]) => {
  try {
    const res = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ products: productsId }),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};

export const getOrders = async (token: string) => {
  try {
    const res = await fetch(`${apiUrl}/users/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};
