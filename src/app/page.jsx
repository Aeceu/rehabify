import Image from "next/image";
import styles from "./page.module.css";
import bg from "/public/bg.png";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Image
          as="image"
          src={bg}
          className={styles.img}
          alt=""
          priority={true}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Rehabify</div>
        <div className={styles.desc}>
          Holistic Drug and Alcohol Rehabilitation and Improved Reintegration of
          Recovered Addicts in the Community
        </div>
        <div className={styles.btns}>
          <Button url="/about" text="about us" />
          <Button url="/contact" text="contact us" />
        </div>
      </div>
    </div>
  );
}
