import React from "react";

export default function GreenButton({ text }) {
  return (
    <button
      className="cursor-pointer items-center justify-center px-6 py-2 rounded-md shadow-sm font-semibold tracking-wide
    text-white bg-gradient-to-tr from-green-600 via-green-500 to-green-500 hover:brightness-110"
      type="button"
    >
      {text}
    </button>
  );
}
