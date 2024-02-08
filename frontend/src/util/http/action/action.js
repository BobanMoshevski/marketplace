import { json, redirect } from "react-router-dom";
import { getAuthToken } from "../loader/loader";

// Login authenticate
export const authenticateUserAction = ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode!" }, { status: 422 });
  }

  return request.formData().then((formData) => {
    const authData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    return fetch("http://localhost:8080/" + mode, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authData),
    })
      .then((response) => {
        if (response.status === 422 || response.status === 401) {
          return response;
        }

        if (!response.ok) {
          throw json(
            { message: "Could not authenticate user!" },
            { status: 500 }
          );
        }

        return response.json();
      })
      .then((response) => {
        const token = response.token;
        if (token !== undefined) {
          localStorage.setItem("token", token);
          const expiration = new Date();
          expiration.setHours(expiration.getHours() + 1);
          localStorage.setItem("expiration", expiration.toISOString());
          localStorage.setItem("user", JSON.stringify(formData.get("email")));
          return redirect("/");
        }
        return redirect("/auth?mode=login");
      });
  });
};

// Logout
export const logoutAction = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  localStorage.removeItem("cardProducts");
  localStorage.removeItem("user");
  return redirect("/");
};

// Delete product or add comment
export const deleteProductOrAddCommentAction = async ({ params, request }) => {
  const token = getAuthToken();
  const data = await request.formData();
  const productId = params.productId;
  const user = localStorage.getItem("user");

  const comments = { email: JSON.parse(user), text: data.get("message") };

  if (request.method === "POST") {
    return fetch("http://localhost:8080/products/" + productId + "/comments", {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(comments),
    }).then((response) => {
      if (response.status === 422) {
        return response;
      }

      if (!response.ok) {
        throw json({ message: "Could not save product." }, { status: 500 });
      }

      return redirect("/products/" + productId);
    });
  }

  if (request.method === "DELETE") {
    return fetch("http://localhost:8080/products/" + productId, {
      method: request.method,
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      if (!response.ok) {
        throw json({ message: "Could not delete product." }, { status: 500 });
      }

      return redirect("/products");
    });
  }
};

// Manipulate product
export const manipulateProductAction = async ({ request, params }) => {
  const method = request.method;
  const token = getAuthToken();
  const data = await request.formData();
  let url = "http://localhost:8080/products";

  const newProduct = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
    cost: data.get("cost"),
    rating: data.get("rating"),
    comments: [],
  };

  if (method === "PATCH") {
    const productId = params.productId;
    url = "http://localhost:8080/products/" + productId;
  }

  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(newProduct),
  }).then((response) => {
    if (response.status === 422) {
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not save product." }, { status: 500 });
    }

    return redirect("/products");
  });
};
