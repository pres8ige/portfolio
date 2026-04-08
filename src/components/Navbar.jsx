import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const tabs = [
  { label: "About", to: "/about" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-20 rounded-t-[2rem] border-b border-[var(--border-soft)] bg-[color:var(--panel-strong)]/90 px-5 py-4 backdrop-blur sm:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap gap-2 sm:gap-3"
        >
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) =>
                [
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "border-blue-400 bg-blue-500/15 text-blue-300"
                    : "border-[var(--border-soft)] bg-[var(--surface-soft)] text-[var(--text-secondary)] hover:border-blue-400/40 hover:text-[var(--text-primary)]",
                ].join(" ")
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={onToggleTheme}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] text-lg text-[var(--text-secondary)] transition hover:border-blue-400/50 hover:text-blue-300"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <HiMiniSun /> : <HiMiniMoon />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
