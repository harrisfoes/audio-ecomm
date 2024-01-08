import React from "react";
import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div
        onClick={goBack}
        className="cursor-pointer opacity-50 hover:text-creamy-900"
      >
        Go Back
      </div>
    </>
  );
}

export default GoBack;
