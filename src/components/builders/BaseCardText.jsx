import React, { useState } from "react";
import EditModal from "./EditModal";
import styles from "./Card.module.css";

const BaseCardText = ({ item, value, dataArray }) => {
  const checkImage = ({ dataArray }) => {
    for (let i = 0; i < Object.keys(dataArray[0]).length; i++) {
      if (item === "id") {
        return value;
      }
      if (item === "image") {
        return <img className={styles.tableImg} src={value} alt="product" />;
      }
      if (item !== "image" && item !== "id") {
        return value;
      }
    }
  };

  const [hover, setHover] = useState(false);

  const hoverModal = () => {
    setHover(!hover);
  };

  return (
    <>
      <tr className={styles.tableLook}>
        <td lg="6">{item}</td>
        <td
          onMouseEnter={hoverModal}
          onMouseLeave={hoverModal}
          className={hover ? styles.edit : ""}
          lg="6"
        >
          {checkImage({ dataArray })}
        </td>
        <td>
          <EditModal />
        </td>
      </tr>
    </>
  );
};

export default BaseCardText;
