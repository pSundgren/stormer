import React from "react";

const Button = (variant, label) => {
  const variants = {
    primary: (
      <button className="rounded-lg mt-6 py-3 px-6 font-semibold text-sm text-sky-50 bg-sky-700 shadow-sm hover:bg-sky-600 transition-all">
        {label}
      </button>
    ),
  };

  return variants.primary;
};

export default Button;
