// import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./components/sideBar/Sidebar.jsx";
// import { useCurrentUser } from "./hooks/auth.hook.js";
// import { setUser } from "./features/authSlice";
// import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo.jsx";

function App() {
  // const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true);
  // const { data: userData, isFetching, error } = useCurrentUser();
  // const user = useSelector((state) => state.auth.userData);

  // useEffect(() => {
  //   if (!isFetching) {
  //     if (userData && !user) {
  //       dispatch(setUser(userData));
  //     }
  //     setIsLoading(false);
  //   }
  // }, [userData, isFetching, dispatch, user]);

  // if (isLoading || isFetching) {
  //   return null; // Render nothing while loading
  // }

  // if (error) {
  //   // Handle error state
  //   console.error("Error fetching user data:", error);
  //   // You might want to render an error component here
  // }

  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <Logo />
      
        {/* <Outlet /> */}
        <div className="flex bg-black h-32 w-36">hiii</div>
      </div>
  );
}

export default App;
