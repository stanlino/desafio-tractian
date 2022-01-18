import React from "react";

export default function CloseMenuButton({ onClickFunction }) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="bg-blueGray-200 rounded-md inline-flex items-center justify-center text-gray-600"
        onClick={onClickFunction}
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
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
}
