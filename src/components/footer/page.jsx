import Image from "next/image";
import styles from "./page.module.css";
import fb from "public/fb.png";
import insta from "public/insta.png";
import twitter from "public/twitter.png";
import yt from "public/yt.png";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        @2023 <p className={styles.title}>Rehabify.</p> All right reserved.
      </div>
      <div className={styles.iconContainer}>
        <Link
          href="https://facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
          passHref
        >
          <Image
            priority={true}
            as="icon"
            className={styles.icon}
            src={fb}
            alt=""
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://instagram.com/"
          rel="noopener noreferrer"
          target="_blank"
          passHref
        >
          <Image
            priority={true}
            as="icon"
            className={styles.icon}
            src={insta}
            alt=""
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://twitter.com/"
          rel="noopener noreferrer"
          target="_blank"
          passHref
        >
          <Image
            priority={true}
            as="icon"
            className={styles.icon}
            src={twitter}
            alt=""
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://youtube.com/"
          rel="noopener noreferrer"
          target="_blank"
          passHref
        >
          <Image
            priority={true}
            as="icon"
            className={styles.icon}
            src={yt}
            alt=""
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
