import { json, redirect } from "react-router-dom";

// Products list and product detail
export const productsLoader = async ({ request, params }) => {
  const eventId = params.productId;
  const checkEventId = params.productId === undefined;
  const url = "http://localhost:8080/products";

  if (checkEventId === true) {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw json({ message: "Could not fetch products" }, { status: 500 });
      } else {
        return response;
      }
    });
  } else {
    return fetch(url + "/" + eventId).then((response) => {
      if (!response.ok) {
        throw json(
          { message: "Could not fetch details for selected event." },
          { status: 500 }
        );
      }
      return response;
    });
  }
};

// token loader
export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  const tokenDuration = getTokenDuration();

  if (!token) {
    return null;
  }

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth?mode=login");
  }

  return token;
};
