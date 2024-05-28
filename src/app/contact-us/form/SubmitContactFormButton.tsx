import React from "react";
import { useFormStatus } from "react-dom";

function SubmitContactFormButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="primary-button" disabled={!pending}>
      Submit
    </button>
  );
}

export default SubmitContactFormButton;
