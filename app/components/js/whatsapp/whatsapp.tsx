import { BsWhatsapp } from "react-icons/bs";
import styles from "./whatsapp.module.scss";
import { WHATSAPPLINK } from "../config";

export default function Whatsapp() {
  return (
    <a
      className={styles.whatsapp}
      href={WHATSAPPLINK}
      target={"_blank"}
      rel="noreferrer noopener"
    >
      <BsWhatsapp />
    </a>
  );
}
