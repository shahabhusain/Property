export const isLoggedIn = () => {
    if (typeof window === "undefined") return;
    return !!localStorage.getItem("token");
  };
  
  export const logout = () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("token");
    window.location.reload();
  };
  
  export const getToken = () => {
    if (typeof window === "undefined") return;
    return localStorage.getItem("token");
  };