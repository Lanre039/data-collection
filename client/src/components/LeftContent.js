import React, { useState, useEffect, useCallback } from "react";
import ImageUpload from "./ImageUpload";

function LeftContent({ onSubmit }) {
  const [image, setImage] = useState([]);

  const handleSubmit = useCallback(() => {
    onSubmit(image);
  }, [image, onSubmit]);

  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <ImageUpload onSubmit={setImage} />
    </div>
  );
}

export default LeftContent;
