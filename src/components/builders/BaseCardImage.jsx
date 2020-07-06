import React, { useState } from "react";
import EditModal from "./EditModal";
import styles from "./Card.module.css";

const BaseCardImage = ({
  id,
  nom,
  prix,
  descriptif,
  image,
  titre,
  sujet,
  date,
}) => {
  const [hover, setHover] = useState(false);

  const hoverModal = () => {
    setHover(!hover);
  };
  const key = [
    "id",
    "nom",
    "prix",
    "descriptif",
    "image",
    "titre",
    "sujet",
    "date",
  ];
  const value =
    id || nom || prix || descriptif || image || titre || sujet || date;
  return (
    <>
      <tr className={styles.tableLook}>
        <td lg="6">{key}</td>
        <td
          onMouseEnter={hoverModal}
          onMouseLeave={hoverModal}
          className={hover ? styles.edit : ""}
          lg="6"
        >
          {value}
        </td>
        <td>
          <EditModal />
        </td>
      </tr>
    </>
  );
};

export default BaseCardImage;
