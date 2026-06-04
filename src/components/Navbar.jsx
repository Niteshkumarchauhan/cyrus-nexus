// This component shows the top navigation bar.
// It links to all main pages and shows cart and wishlist counts.

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

  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-(--border) bg-(--surface-strong)/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-sm text-(--text) md:px-6">
        <NavLink to="/" className="flex items-center gap-3">
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
            <NavLink to="/profile" className="hover:text-(--accent) theme-muted">
              Profile
            </NavLink>
          ) : null}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-pill rounded-full px-3 py-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
          <NavLink to="/cart" className="theme-pill rounded-full px-3 py-2">
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
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
