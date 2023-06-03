import styles from "./page.module.css";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Reveal from "@/components/Reveal";
const location = () => {
  const infos = [
    {
      text: "At Rehabify, we cater to individuals of all genders and age groups, providing a diverse range of services and activities to support those struggling with drug, alcohol, and behavioral addictions.",
    },
    {
      text: "Our state-of-the-art, drug- and alcohol-free facility is purposefully designed to create a therapeutic atmosphere from day one until the completion of your program and beyond. By eliminating distractions and temptations, our environment allows you to fully concentrate on your recovery journey.",
    },
    {
      text: "Rehabify maintains impeccably well-maintained facilities that meet the highest standards. This ensures a clean and sober environment, minimizing triggers associated with dependencies and fostering an optimal setting for your healing and progress.",
    },
    {
      text: "Our location equips you with all the tools you need to live a clean, healthy, positive, and sober life. Rehabify offers comprehensive resources, programs, and support systems that empower you to build a strong foundation for sustainable recovery.",
    },
    {
      text: "At Rehabify, we operate seven days a week to ensure that you receive the unwavering support and assistance you need throughout your rehabilitation journey. Our dedicated team of resident physicians, nurses, rehabilitation specialists, and security personnel work together to provide top-notch rehabilitation services, ensuring your well-being every step of the way.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Our Location</h1>
        <div className={styles.prevlink}>
          <Link href="/">Home</Link>
          <p>/ Our Location</p>
        </div>
        <div className={styles.address}>
          <h1 className={styles.name}>
            Roads and Bridges to Recovery - Pasig City
          </h1>
          <p className={styles.desc}>
            Address: <br /> 520 Ebden Bldg, Dr. Sixto Antonio Avenue, Maybunga,
            Pasig Metro Manila Philippines
          </p>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1182.7726281557193!2d121.0833302053849!3d14.582324500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7e3996bfedd%3A0x2fb3dd4254bd1073!2sMetro%20Psych%20Facility%20(Metro%20Psychiatry%20Inc)!5e1!3m2!1sen!2sph!4v1683669302781!5m2!1sen!2sph"
            height="600"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.texts}>
          <p className={styles.desc}>
            When you're ready to embark on your transformative journey to
            recovery, Rehabify is the ideal rehabilitation destination for you.
            Here's why:
          </p>
          {infos.map((info, index) => (
            <Reveal key={index} className={styles.text}>
              <FaStar className={styles.logo} />
              <p className={styles.desc}>{info.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default location;
