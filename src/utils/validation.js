export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])[^\s]{8,}$/;

export const getPasswordChecks = (password) => [
  { label: "At least 8 characters", passed: password.length >= 8 },
  { label: "One uppercase letter", passed: /[A-Z]/.test(password) },
  { label: "One lowercase letter", passed: /[a-z]/.test(password) },
  { label: "One number", passed: /\d/.test(password) },
  {
    label: "One special character",
    passed: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/.test(password),
  },
  { label: "No spaces allowed", passed: !/\s/.test(password) },
];

export const getPasswordStrength = (password) => {
  const checks = getPasswordChecks(password);
  const score = checks.filter((item) => item.passed).length;

  if (!password) {
    return { label: "Enter a password", score, color: "text-slate-700 dark:text-slate-300" };
  }

  if (score <= 2) {
    return { label: "Weak", score, color: "text-rose-700 dark:text-rose-300" };
  }

  if (score === 3 || score === 4) {
    return { label: "Medium", score, color: "text-amber-700 dark:text-amber-300" };
  }

  if (score === 5) {
    return { label: "Strong", score, color: "text-cyan-700 dark:text-cyan-300" };
  }

  return { label: "Very Strong", score, color: "text-emerald-700 dark:text-emerald-300" };
};
