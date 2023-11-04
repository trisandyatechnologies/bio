import React, { useContext } from "react";
import { Avatar, List, Space } from "antd";
import { UserContext } from "../App";
import { useSelector } from "react-redux";

const Place = () => {
  const userPlace = useSelector((state) => state.user.place);
  return <h2>{userPlace}</h2>;
};
const Profile = () => {
  //const user = useContext(UserContext);
  const userName = useSelector((state) => state.user.name);
  return (
    <div>
      <h1>
        Hello <span style={{ color: "purple" }}>{userName ?? "--"}</span>
      </h1>
      <Place />
      <p>Using Redux</p>
    </div>
  );
};

export default Profile;
