import style from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Let&apos;s keep in touch</div>
      <div className={style.content}>
        <div className={style.imgContainer}>
          <Image
            priority={true}
            as="image"
            src="/bg3.png"
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill={true}
            className={style.image}
          />
        </div>
        <form className={style.form}>
          {/* NAME */}
          <div className={style.name}>
            <label htmlFor="name" className={style.label}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className={style.input}
            />
          </div>

          {/* Email */}
          <div className={style.email}>
            <label htmlFor="email" className={style.label}>
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              className={style.input}
            />
          </div>

          {/* Message */}
          <div className={style.message}>
            <label htmlFor="message" className={style.label}>
              Message:
            </label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="message"
              className={style.textArea}
            ></textarea>
          </div>

          {/* Button */}
          <Button url="/" text="send" className={style.button} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
