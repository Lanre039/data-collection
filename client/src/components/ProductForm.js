import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const ProductForm = () => {
  return (
    <div>
      <Form.List name="products">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space
                key={field.key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...field}
                  name={[field.name, "name"]}
                  fieldKey={[field.fieldKey, "name"]}
                  rules={[{ required: true, message: "Missing product name" }]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "price"]}
                  fieldKey={[field.fieldKey, "price"]}
                  rules={[{ required: true, message: "Missing price" }]}
                >
                  <Input placeholder="Price" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "currency"]}
                  fieldKey={[field.fieldKey, "currency"]}
                  rules={[{ required: true, message: "Missing currency" }]}
                >
                  <Input placeholder="Currency" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <div style={{ marginTop: "1rem" }}>
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add product
                </Button>
              </Form.Item>
            </div>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default ProductForm;
