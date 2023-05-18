import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ label, to = null }) => {
  if (to) {
    return (
      <Link to={to} relative="path">
        <button className="rounded-md mt-6 py-3 px-6 font-semibold text-sm text-sky-50 bg-sky-700 shadow-sm hover:bg-sky-600 transition-all">
          {label}
        </button>
      </Link>
    );
  } else {
    return (
      <button className="rounded-md mt-6 py-3 px-6 font-semibold text-sm text-sky-50 bg-sky-700 shadow-sm hover:bg-sky-600 transition-all">
        {label}
      </button>
    );
  }
};

const SecondaryButton = ({ label, to = null }) => {
  if (to) {
    return (
      <Link to={to} relative="path">
        <button className="rounded-md mt-6 py-3 px-6 font-semibold text-sm text-sky-500 border border-sky-600 hover:border-sky-500 hover:text-sky-500 transition-all">
          {label}
        </button>
      </Link>
    );
  } else {
    return (
      <button className="rounded-md mt-6 py-3 px-6 font-semibold text-sm text-sky-500 border border-sky-600 hover:border-sky-500 hover:text-sky-500 transition-all">
        {label}
      </button>
    );
  }
};

export { PrimaryButton, SecondaryButton };
