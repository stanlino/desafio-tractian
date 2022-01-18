import React from "react";
import presentationData from "./presentationData.json";

export default function Topic({ topicFocused, setTopicFocused }) {
  return Object.keys(presentationData).map((item) => {
    const focused = item == topicFocused;

    return (
      <div
        key={item}
        onClick={() => setTopicFocused(item)}
        className={`flex items-center cursor-pointer hover:text-gray-600 font-semibold text-xl my-4 ${
          focused ? "pl-1 text-black" : "text-gray-400"
        }`}
      >
        <h3 className={focused ? "text-blue-600" : null}>{item}</h3>
        <h3 className="pl-2">{presentationData[item].title}</h3>
      </div>
    );
  });
}
