import Link from "next/link";
import React from "react";
import style from "./button.module.css";
const Button = ({ url, className, text }) => {
  return (
    <Link href={url} className={style.button}>
      {text}
    </Link>
  );
};

export default Button;
