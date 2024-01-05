// RadioButton.js

import React, { useState } from "react";

const RadioButton = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className={`rounded-full bg-creamy-300 p-2 ${
          selectedAnswer === "option1" ? "bg-neutral-000" : ""
        }`}
      >
        <label className="text-white cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="option1"
            checked={selectedAnswer === "option1"}
            onChange={() => handleAnswerChange("option1")}
            className="hidden"
          />
          Dummy Option 1
        </label>
      </div>

      <div
        className={`rounded-full bg-creamy-300 p-2 ${
          selectedAnswer === "option2" ? "bg-neutral-000" : ""
        }`}
      >
        <label className="text-white cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="option2"
            checked={selectedAnswer === "option2"}
            onChange={() => handleAnswerChange("option2")}
            className="hidden"
          />
          Dummy Option 2
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
