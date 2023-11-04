import React, { useContext } from "react";
import { UserContext } from "../App";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <div style={{ minHeight: "90vh" }}>
      <h1>
        Hello{" "}
        <span style={{ color: "purple" }}>
          {user.name} ({user.place})
        </span>
      </h1>
      <p>Using React Context</p>
    </div>
  );
};
export default Home;
