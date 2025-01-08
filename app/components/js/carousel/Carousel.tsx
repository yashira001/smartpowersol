"use client";
import Image from "next/image";

import styles from "./Carousel.module.scss";

import Link from "next/link";
import { COMPANYNAME, TEL } from "../config";

import { FaAngleDoubleRight } from "react-icons/fa";

const Carousel: React.FC = () => {
  return (
    <div className={styles.sliders}>
      <div className={styles.box} id="boxparent">
        <div className={styles.carousel} id="caro">
          <div className={styles.img}>
            <div className={styles.image}>
              <Image src={"/assets/banner.png"} fill alt={`${COMPANYNAME}`} />
            </div>
          </div>

          <div className={styles.text}>
            <h1>
              Unleash the Power of the Sun
              <br />
              <span>{`24/7 Power Supply at Lower Costs.`}</span>
            </h1>

            <p
              className={styles.smText}
            >{`Imagine uninterrupted power, day and night, powered by the sun's limitless energy. At Smart Tech & Power Solutions, we make it a reality. Our expert solar solutions provide reliable, sustainable power for your home, significantly reducing your electricity bills and providing peace of mind. Explore our solar options and start saving today.`}</p>
            <div className={styles.actions}>
              <Link href={`tel:${TEL}`} className={"action"}>
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface TopperType {
  img: string;
  title: string;
  text: string[];
  link: { name: string; url: string };
}
interface TopperProp {
  data: TopperType;
}
export const Topper: React.FC<TopperProp> = ({ data }) => {
  return (
    <div className={`${styles.holder} ${styles.topper}`}>
      <div className={`${styles.carousel} ${styles.scrolled} `} id="caro">
        <div className={styles.img}>
          <Image src={data.img} fill alt={COMPANYNAME} />
        </div>

        <div className={styles.text}>
          <h1>{data.title}</h1>

          {data.text.map((e, i) => (
            <p className={styles.smText} key={i}>
              {e}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.lbg}>
        <FaAngleDoubleRight className={styles.icon} />
        <Link href={"/"}>Home</Link>
        <span>{"|"}</span>
        <Link href={data.link.url}>{data.link.name}</Link>
      </div>
    </div>
  );
};

export default Carousel;
