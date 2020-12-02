import React, { useRef, useState } from "react";
import "./styles.css";

function ImageUpload({ onSubmit }) {
  const [imagePreview, setImagePreview] = useState();
  let [imagesToUpload, setImages] = useState([]);
  const image1 = useRef();

  const triggerFileClick = ({ target: { id } }) => {
    if (id === "image1") {
      image1.current.click();
    }
  };

  const highZIndex = {
    zIndex: "1000",
  };

  const readAndPreviewImages = (images, name) => {
    setImages(images);
    // console.log(images);
    onSubmit(images);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(images);
    fileReader.onload = (event) => {
      const preview = event.target.result;
      if (name === "photo") {
        setImagePreview(preview);
      }
    };
  };

  const uploadImage = ({ target: { files, name } }) => {
    const uploadedImages = files;
    setImages(uploadedImages);

    Array.from(uploadedImages).forEach((image) =>
      readAndPreviewImages(image, name)
    );
  };

  return (
    <div>
      <div className="form-group">
        <div className="user-profile-container primary-grey d-flex  align-items-center justify-content-center mt-3">
          <i
            className="fa fa-plus fa-3x  text-grey-light absolute pointer"
            id="image1"
            style={highZIndex}
            onClick={triggerFileClick}
          ></i>
          <input
            type="file"
            ref={image1}
            name="photo"
            accept="image/*"
            className="invisible absolute"
            onChange={uploadImage}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              className="absolute  img-preview"
              alt="HeaderPreview"
            />
          )}
        </div>
        <h5 className="text-center text-white mt-2 font-weight-bold">
          Profile picture
        </h5>
      </div>
    </div>
  );
}

export default ImageUpload;
