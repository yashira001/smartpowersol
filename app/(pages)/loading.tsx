import Image from "next/image";
import styles from "./load.module.scss";
export default function Loading() {
  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <Image src={"/assets/loading.gif"} alt="" fill />
      </div>
    </div>
  );
}
