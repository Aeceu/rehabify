import Image from "next/image";
import styles from "./page.module.css";
import pic1 from "public/bg4.jpg";
import Reveal from "@/components/Reveal";
import Link from "next/link";
const about = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headtitle}>About us</h1>
      <div className={styles.prevlink}>
        <Link href="/">Home</Link>
        <p>/ About us</p>
      </div>
      <div className={styles.imgContainer}>
        <Image
          priority={true}
          as="image"
          src={pic1}
          alt="image"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.text}>
            Let us at Rehabify help you throughout your addiction
          </h1>
        </div>
      </div>

      <div className={styles.textContainer}>
        <Reveal className={styles.item}>
          <h1 className={styles.title}>Who are we ?</h1>
          <Reveal className={styles.desc}>
            We are group 7, Composed of Fernando Jose Acebuche, Steven Glen
            Dalaygon, Renzybert Rotaquio, Justphine De Vera, and Czarina Mae
            Frias Señadan.
            <br />
            <br />
            We are second-year Computer Science students at EARIST (Eulogio
            &quot;Amang&quot; Rodriguez Institute of Science and Technology)
            currently taking up Computer Science.
            <br />
            <br />
            Our group shares a passion for technology and the endless
            possibilities it offers. With our combined skills in programming,
            design, and analysis, we aim to create innovative solutions to
            various problems.
          </Reveal>
        </Reveal>

        <Reveal className={styles.item}>
          <h1 className={styles.title}>Mission</h1>
          <Reveal className={styles.desc}>
            At Rehabify, our mission is to provide a comprehensive and
            personalized rehabilitation system that empowers individuals to take
            control of their physical, mental, and emotional well-being.
            <br />
            <br />
            Through our platform, we strive to offer support, guidance, and
            resources to those struggling with addiction, enabling them to
            overcome their challenges and achieve lasting recovery.
          </Reveal>
        </Reveal>

        <Reveal className={styles.item}>
          <h1 className={styles.title}>Vision</h1>
          <Reveal className={styles.desc}>
            We envision a world where all individuals, regardless of their
            circumstances, have access to quality rehabilitation services that
            promote independence, improve functionality, and enhance their
            overall quality of life.
            <br />
            <br />
            By leveraging technology and employing evidence-based approaches, we
            aim to break down barriers and create a supportive environment that
            fosters growth, healing, and lasting positive change.
          </Reveal>
        </Reveal>
      </div>
    </div>
  );
};

export default about;
