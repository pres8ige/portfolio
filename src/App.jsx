import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const storageKey = "portfolio-theme";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem(storageKey);
    return savedTheme || "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 lg:flex-row lg:px-8">
        <Sidebar />

        <div className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[2rem] border border-[var(--border-soft)] bg-[var(--panel)] shadow-2xl shadow-black/20 backdrop-blur xl:ml-[21rem]">
          <Navbar
            theme={theme}
            onToggleTheme={() =>
              setTheme((currentTheme) =>
                currentTheme === "dark" ? "light" : "dark"
              )
            }
          />

          <main className="flex-1 px-5 pb-6 pt-2 sm:px-8 sm:pb-8">
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
