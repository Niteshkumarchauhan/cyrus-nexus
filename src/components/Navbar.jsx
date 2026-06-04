// This component shows the top navigation bar.
// It links to all main pages and shows cart and wishlist counts.

import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";
import CyrusNexusLogo from "../assets/CyrusNexusLogo";

function Navbar({ theme, toggleTheme }) {
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const closeMenu = () => setIsMenuOpen(false);

  const logout = () => {
    dispatch(logoutUser());
    closeMenu();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-(--border) bg-(--surface-strong)/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-sm text-(--text) md:px-6">
        <NavLink to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="hidden md:block">
            <CyrusNexusLogo variant="horizontal" />
          </span>
          <span className="md:hidden">
            <CyrusNexusLogo variant="icon" className="h-10 w-10" />
          </span>
        </NavLink>

        <div className="hidden gap-4 md:flex">
          <NavLink to="/" className="hover:text-(--accent) theme-muted">
            Home
          </NavLink>
          <NavLink to="/shop" className="hover:text-(--accent) theme-muted">
            Shop
          </NavLink>
          <NavLink to="/wishlist" className="hover:text-(--accent) theme-muted">
            Wishlist ({wishlistItems.length})
          </NavLink>
          <NavLink to="/orders" className="hover:text-(--accent) theme-muted">
            Orders
          </NavLink>
          {user ? (
            <NavLink
              to="/profile"
              className="hover:text-(--accent) theme-muted"
            >
              Profile
            </NavLink>
          ) : null}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden theme-pill rounded-full px-3 py-2 md:inline-flex"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
          <NavLink
            to="/cart"
            className="theme-pill rounded-full px-3 py-2"
            onClick={closeMenu}
          >
            Cart ({totalQty})
          </NavLink>
          {user ? (
            <button
              onClick={logout}
              className="theme-pill rounded-full px-3 py-2 text-pink-600 dark:text-pink-400"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="theme-button-primary rounded-full px-3 py-2"
              onClick={closeMenu}
            >
              Login
            </NavLink>
          )}

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--surface)/90 text-xl text-(--text) transition hover:bg-(--surface-strong) md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden border-t border-(--border) bg-(--surface-strong)/98 shadow-lg backdrop-blur transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-sm text-(--text)">
          <NavLink
            to="/"
            className="rounded-xl px-3 py-3 hover:bg-(--surface)"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="rounded-xl px-3 py-3 hover:bg-(--surface)"
            onClick={closeMenu}
          >
            Shop
          </NavLink>
          <NavLink
            to="/wishlist"
            className="rounded-xl px-3 py-3 hover:bg-(--surface)"
            onClick={closeMenu}
          >
            Wishlist ({wishlistItems.length})
          </NavLink>
          <NavLink
            to="/orders"
            className="rounded-xl px-3 py-3 hover:bg-(--surface)"
            onClick={closeMenu}
          >
            Orders
          </NavLink>
          <NavLink
            to="/cart"
            className="rounded-xl px-3 py-3 hover:bg-(--surface)"
            onClick={closeMenu}
          >
            Cart ({totalQty})
          </NavLink>
          {user ? (
            <NavLink
              to="/profile"
              className="rounded-xl px-3 py-3 hover:bg-(--surface)"
              onClick={closeMenu}
            >
              Profile
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="rounded-xl px-3 py-3 hover:bg-(--surface)"
              onClick={closeMenu}
            >
              Login
            </NavLink>
          )}
          <button
            type="button"
            onClick={() => {
              toggleTheme();
              closeMenu();
            }}
            className="rounded-xl border border-(--border) bg-(--surface) px-3 py-3 text-left"
          >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
