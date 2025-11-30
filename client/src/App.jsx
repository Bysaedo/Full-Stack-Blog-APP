import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import "./App.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;

    const stored = localStorage.getItem("isDark");
    if (stored !== null) return stored === "true";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("isDark", isDark.toString());
  }, [isDark]);
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header
            isDark={isDark}
            setIsDark={setIsDark}
          />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/posts/:id"
              element={<PostDetail />}
            />
            <Route
              path="/register"
              element={<RegisterPage />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/posts/create"
              element={
                <ProtectedRoute>
                  <CreatePost />
                </ProtectedRoute>
              }
            />
            <Route
              path="/posts/:id/edit"
              element={
                <ProtectedRoute>
                  <EditPost />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster
            position="top-center"
            reverseOrder={false}
            containerClassName="toast-container"
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
