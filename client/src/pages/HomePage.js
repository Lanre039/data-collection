import React, { useState } from "react";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
import axios from "../utils/axiosConfig";
import "./styles.css";
import countDown from "../components/Modal";

function HomePage(props) {
  const [image, setImage] = useState(null);

  const prepareDataToBeSubmitted = async (formData) => {
    const {
      firstName,
      lastName,
      city,
      state,
      zipCode,
      email,
      dateOfBirth,
      products,
    } = formData;

    const data = new FormData();
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("city", city);
    data.append("state", state);
    data.append("zipCode", zipCode);
    data.append("email", email);
    data.append("dateOfBirth", dateOfBirth);
    data.append("image", image);
    data.append("products", JSON.stringify(products));

    data.forEach((item) => console.log(item));

    return data;
  };

  const handleSubmit = async (data) => {
    const dataToSubmit = await prepareDataToBeSubmitted(data);

    try {
      const res = await axios.post("/user/register", dataToSubmit);
      console.log("res", res);
      countDown("User account succesfully created!");
    } catch (error) {
      console.log("err", error);
      countDown(
        "Error while storing data, check the input field and try again"
      );
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="my-5 mx-auto shadow page">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 test">
            <LeftContent onSubmit={setImage} />
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <RightContent onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
