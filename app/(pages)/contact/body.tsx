"use client";

import styles from "./styles.module.scss";
import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import { EMAIL, EMAIL2, TEL } from "@/app/components/js/config";
import Image from "next/image";

export default function Body() {
  const data: TopperType = {
    title: "Contact Us",
    img: "/assets/contact.jpg",
    text: [
      `We're eager to hear from you. Contact us today to discuss your energy and security requirements or to schedule a consultation.`,
    ],
    link: {
      name: "Contact Us",
      url: "/contact",
    },
  };

  return (
    <>
      <Topper data={data} />

      <div className={`${styles.main}`}>
        <div className={styles.left}>
          <Image src={"/assets/consultation.jpeg"} alt="" fill />
        </div>
        <div className={styles.right}>
          <h1>How to Reach Us</h1>
          <h3>{`Headquarters:`}</h3>
          <p>{`46, Olabode Street, Governor's Road, Ikotun, Lagos, Nigeria`}</p>
          <h3>{`Email Us:`}</h3>
          <ul>
            <li>
              General Inquiries: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              Technical Support: <a href={`mailto:${EMAIL2}`}>{EMAIL2}</a>
            </li>
          </ul>
          <h3>{`Call Us:`}</h3>
          <p>{TEL}</p>
          <h1>Office Hours</h1>
          <ul>
            <li>
              <b>{`Monday to Friday: `}</b>
              <span>{`9:00 AM – 5:00 PM`}</span>
            </li>
            <li>
              <b>{`Saturday: `}</b>
              <span>{`9:00 AM – 4:00 PM`}</span>
            </li>
            <li>
              <b>{`Sunday: `}</b>
              <span>{`Closed`}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
