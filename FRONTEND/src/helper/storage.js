export const setAuthUser = (data) => {
    // save object to the local storage
    // Stringify OBJECT TO TEXT
    localStorage.setItem("item", JSON.stringify(data));
  };
  
  export const getAuthUser = (data) => {
    if (localStorage.getItem("item")) {
      return JSON.parse(localStorage.getItem("item"));
    }
  };
  
  export const removeAuthUser = () => {
    if (localStorage.getItem("item")) localStorage.removeItem("item");
  };