import "./App.css";
import { createContext, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
  display: "flex",
  gap: 16,
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

export const UserContext = createContext({ name: "", place: "" });

const setColorActive = (location, path) => {
  if (location.pathname === path) return { color: "white" };
};

function App() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Layout>
          <Header style={headerStyle}>
            {!user.name && (
              <Link to="/login" style={setColorActive(location, "/login")}>
                Login
              </Link>
            )}

            {user.name && (
              <Link to="/context" style={setColorActive(location, "/context")}>
                Profile (Context)
              </Link>
            )}

            {user.name && (
              <Link to="/redux" style={setColorActive(location, "/redux")}>
                Profile (Redux)
              </Link>
            )}

            {user.name && (
              <button
                onClick={() => {
                  dispatch(logout());
                  navigate("/login");
                  setUser({});
                }}
                style={{ marginLeft: "auto" }}
              >
                Logout ({user.name})
              </button>
            )}
          </Header>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/context" element={<Home />} />
              <Route path="login" element={<Login handleLogin={setUser} />} />

              <Route
                path="redux"
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
