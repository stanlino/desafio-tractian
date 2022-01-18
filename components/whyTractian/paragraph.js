import React from "react";

export default function Paragraph({ title, text}) {
  return (
    <div className="lg:py-8 py-4">
      <h1 className="text-blue-900 font-semibold pb-2 uppercase">
        {title}
      </h1>
      <p className="text-black">
        {text}
      </p>
    </div>
  );
}
