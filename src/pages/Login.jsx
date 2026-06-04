// This page lets a user sign in.
// It uses simple local data stored in the browser.

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../store/authSlice";
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  getPasswordChecks,
  getPasswordStrength,
} from "../utils/validation";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const passwordChecks = getPasswordChecks(form.password);
  const passwordStrength = getPasswordStrength(form.password);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = form.email.trim();
    const password = form.password;

    if (!EMAIL_REGEX.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!PASSWORD_REGEX.test(password)) {
      alert(
        "Password must be at least 8 characters and include uppercase, lowercase, number, special character, and no spaces.",
      );
      return;
    }

    const savedUsers = JSON.parse(localStorage.getItem("gaming-users") || "[]");
    const user = savedUsers.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password,
    );

    if (user) {
      dispatch(loginUser(user));
      navigate("/profile");
    } else {
      alert("Wrong email or password. Try demo@example.com / Demo123!");
    }
  };

  return (
    <section className="theme-card mx-auto max-w-md rounded-3xl p-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Login</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Use the demo account or create a new one.
      </p>
      <form onSubmit={handleLogin} className="mt-5 space-y-4">
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="email"
          placeholder="Email"
          className="theme-input w-full rounded-2xl p-3"
        />
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <input
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="theme-input w-full rounded-2xl p-3"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="theme-pill rounded-full px-3 py-2 text-xs font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="theme-panel rounded-2xl p-3 text-sm">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-slate-600 dark:text-slate-300">Password strength</span>
              <span className={`font-semibold ${passwordStrength.color}`}>
                {passwordStrength.label}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-fuchsia-500 transition-all"
                style={{ width: `${(passwordStrength.score / 6) * 100}%` }}
              />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-300">
              {passwordChecks.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span
                    className={
                      item.passed ? "text-emerald-700 dark:text-emerald-300" : "text-slate-500 dark:text-slate-400"
                    }
                  >
                    {item.passed ? "✓" : "•"}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="theme-button-primary w-full rounded-full px-4 py-3 font-semibold text-white">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
        No account yet?{" "}
        <Link to="/register" className="text-cyan-700 dark:text-cyan-200">
          Register
        </Link>
      </p>
    </section>
  );
}

export default Login;
