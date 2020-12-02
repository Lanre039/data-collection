import { Modal } from "antd";

function countDown(message) {
  const modal = Modal.success({
    title: "Status",
    content: message,
  });
}

export default countDown;
