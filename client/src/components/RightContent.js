import React from "react";
import { Form, Input, DatePicker } from "antd";
import { UserOutlined, HomeOutlined, InboxOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import ProductForm from "../components/ProductForm";
import "./styles.css";

function RightContent({ onSubmit }) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    onSubmit(values);
  };
  return (
    <div className="form_head">
      <div>
        <h1 className="form_text_head">Create Account</h1>
      </div>
      <div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
            className="form_item"
          >
            <Input
              prefix={
                <UserOutlined
                  className="site-form-item-icon"
                  style={{ fontSize: "1.3rem" }}
                />
              }
              placeholder="First name"
              className="form_input"
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
            style={{ margin: ".5rem 0" }}
          >
            <Input
              prefix={
                <UserOutlined
                  className="site-form-item-icon"
                  style={{ fontSize: "1.3rem" }}
                />
              }
              placeholder="Last name"
              className="form_input"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
            style={{ margin: ".5rem 0" }}
          >
            <Input
              prefix={
                <InboxOutlined
                  className="site-form-item-icon"
                  style={{ fontSize: "1.3rem" }}
                />
              }
              type="email"
              placeholder="Email"
              className="form_input"
            />
          </Form.Item>
          <Form.Item
            name="city"
            rules={[
              {
                required: true,
                message: "Please input your city!",
              },
            ]}
            style={{ margin: ".5rem 0" }}
          >
            <Input
              prefix={
                <HomeOutlined
                  className="site-form-item-icon"
                  style={{ fontSize: "1.3rem" }}
                />
              }
              type="text"
              placeholder="City"
              className="form_input"
            />
          </Form.Item>
          <Form.Item
            name="state"
            rules={[
              {
                required: true,
                message: "Please input your state!",
              },
            ]}
            style={{ margin: ".5rem 0" }}
          >
            <Input
              prefix={
                <HomeOutlined
                  className="site-form-item-icon"
                  style={{ fontSize: "1.3rem" }}
                />
              }
              type="text"
              placeholder="State"
              className="form_input"
            />
          </Form.Item>
          <Form.Item
            name="zipCode"
            rules={[
              {
                required: true,
                message: "Please input your zip code!",
              },
            ]}
            style={{ margin: ".5rem 0" }}
          >
            <Input
              prefix={
                <HomeOutlined
                  className="site-form-item-icon"
                  style={{ fontSize: "1.3rem" }}
                />
              }
              type="text"
              placeholder="zip code"
              className="form_input"
            />
          </Form.Item>
          <Form.Item
            name="dateOfBirth"
            rules={[{ required: true }]}
            style={{ margin: ".5rem 0", backgroundColor: "#f8f9fa" }}
          >
            <DatePicker className="picker" placeholder="Date of birth" />
          </Form.Item>
          <ProductForm />

          <Form.Item>
            <div className="w-50 mx-auto">
              <button
                type="primary"
                // htmlType="submit"
                className="btn submit"
              >
                Submit
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default RightContent;
