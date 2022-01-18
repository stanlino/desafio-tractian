import React from "react";

export default function SanduichMenuButton({ onClickFunction }) {
  return (
    <div className="lg:hidden flex items-center">
      <button
        onClick={onClickFunction}
        className="border rounded-md mr-2 p-2 items-center justify-center text-gray-50"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  );
}
