import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import style from "./page.module.css";

const service = () => {
  const Acts = [
    {
      text: "Regular meetings and discussions for addressing and resolving personal challenges and evaluating behavior.",
    },
    {
      text: "Coping skills workshops that provide essential tools for managing triggers and are assessed for effectiveness.",
    },
    {
      text: "Community government framework that establishes a structured environment with collective decision-making for the community's greater good.",
    },
    {
      text: "Shared responsibility and community problem-solving, fostering accountability and teamwork.",
    },
    {
      text: "Open communication through dialogues and constructive confrontation to promote understanding and growth.",
    },
    {
      text: "Group therapy sessions focusing on identifying and understanding the connection between negative emotions and destructive behaviors, as well as developing resolutions.",
    },
    {
      text: "Regular feedback on individual behavior to ensure ongoing progress and support in the recovery journey.",
    },
  ];
  return (
    <div className={style.container}>
      {/* header */}
      <div className={style.header}>
        <h1 className={style.title}>Our Services</h1>
        <div className={style.prevlink}>
          <Link href="/">Home</Link>
          <p>/ Our Services</p>
        </div>
      </div>
      {/* main content */}
      <div className={style.content}>
        <p className={style.desc}>
          Rehabify primary objective is to facilitate successful reintegration
          of former substance abusers back into society, while adopting a
          holistic approach to rehabilitation. By incorporating medical,
          psychological, and social interventions, it empowers recovered
          individuals to become functional members of the wider community.
          <br />
          <br />
          Within this system, residents engage in a variety of therapeutic
          activities and services that foster growth and healing, including:
        </p>
        {Acts.map((act, index) => (
          <Reveal key={index} className={style.textContainer}>
            <FaStar as="icon" className={style.logo} />
            <p className={style.desc}>{act.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default service;
