import http from "../http-common";

export const setAuthTokenToAxios = (token: string) => {
  if (token) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete http.defaults.headers.common["Authorization"];
  }
};

export const removeAuthTokenToAxios = () => {
  delete http.defaults.headers.common["Authorization"];
};

// export const setAuthTokenToCookie = (
//   name: string,
//   value: string,
//   days: number
// ) => {
//   const date = new Date();
//   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//   const expires = `expires=${date.toUTCString()}`;
//   document.cookie = `${name}=${value};${expires};path=/;HttpOnly`;
// };

// export const removeCookie = (name: string) => {
//   document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
// };

// const isTokenExpired = (token: string) => {
//   const decodedToken = jwt_decode<JwtPayload>(token);
//   const currentTime = Date.now() / 1000;

//   if (decodedToken?.exp && decodedToken.exp > currentTime) {
//     return false;
//   } else {
//     return true;
//   }
// };

// export const useAuth = () => {
//   let token = document.cookie
//     .split(";")
//     .find((cookie) => cookie.trim().startsWith("token="));

//   if (token) {
//     token = token.split("=")[1];
//     if (isTokenExpired(token)) {
//       removeCookie("token");
//       return false;
//     } else {
//       return true;
//     }
//   }
//   return false;
// };

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  removeAuthTokenToAxios();
};
