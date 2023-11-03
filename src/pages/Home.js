import React, { useContext } from "react";
import { UserContext } from "../App";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <h1>
      {user.name} ({user.place})
    </h1>
  );
};
export default Home;
