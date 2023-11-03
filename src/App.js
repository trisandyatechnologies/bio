import "./App.css";
import { createContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Layout, Space } from "antd";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
import { logout } from "./redux/userSlice";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

export const UserContext = createContext({ name: "", place: "" });

function App() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Layout>
          <Header style={headerStyle}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/users/ganesh">Profile</Link>
            <button
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </button>
          </Header>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login setUser={setUser} />} />
              <Route path="users" element={<Home />} />

              <Route
                path="users/:id"
                element={
                  <UserContext.Provider value={{ name: "Ganesh" }}>
                    <Profile />{" "}
                  </UserContext.Provider>
                }
              />
            </Routes>
          </Content>
        </Layout>
      </UserContext.Provider>
    </div>
  );
}

export default App;
