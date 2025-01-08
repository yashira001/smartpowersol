"use client";
import styles from "./Nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import {
  COMPANYNAME,
  EMAIL,
  HQ,
  TEL,
  WHATSAPPLINK,
} from "@/app/components/js/config";

import { FaLocationCrosshairs, FaPhone } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

interface LinkType {
  text: string;
  link: string;
}

const Nav: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const [scrolled, setScrolled] = useState<boolean>(false);

  const centerLinks: LinkType[] = [
    {
      link: `/`,
      text: `Home`,
    },

    {
      link: `/about`,
      text: `About us`,
    },
    {
      link: `/#services`,
      text: `Our Services`,
    },
    {
      link: `/gallery`,
      text: `Gallery`,
    },
    {
      link: `/contact`,
      text: `Contact Us`,
    },
  ];

  useEffect(() => {
    const toggleShow = () => {
      const anchor = document.querySelectorAll("a");
      anchor.forEach((a) => {
        a.addEventListener("click", () => {
          setShow(false);
        });
      });
    };
    return toggleShow();
  }, []);
  useEffect(() => {
    const handler = () => {
      const body = document.querySelector("body");
      const top = body?.getBoundingClientRect().top || 0;
      if (top < -300) setScrolled(true);
      else {
        setScrolled(false);
      }
    };
    const scroller = document.addEventListener("scroll", () => handler());
    return document.removeEventListener("scroll", () => scroller);
  }, []);

  return (
    <div className={styles.box}>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.top}>
          <div>
            <FaPhone className={styles.icon} />
            <span>{TEL}</span>
          </div>
          <div>
            <MdOutlineAlternateEmail className={styles.icon} />
            <span>{EMAIL}</span>
          </div>
          <div>
            <FaLocationCrosshairs className={styles.icon} />
            <span>{HQ}</span>
          </div>
        </div>

        <div className={styles.mb}>
          <div className={styles.left}>
            <Link href={"/"}>
              <div className={styles.logo}>
                <Image src={"/logo.png"} fill alt={COMPANYNAME} />
              </div>
              <span className={styles.text}>{COMPANYNAME}</span>
            </Link>
            <div className={styles.menuIcon} onClick={() => setShow(!show)}>
              {show ? (
                <AiOutlineClose className={styles.icon} />
              ) : (
                <HiMenuAlt3 className={styles.icon} />
              )}
            </div>
          </div>
          <div
            className={
              show
                ? `${styles.right} ${styles.show}`
                : `${styles.right} ${styles.hide}`
            }
          >
            <div className={styles.top}>
              <div>
                <FaPhone className={styles.icon} />
                <Link
                  href={WHATSAPPLINK}
                  target={"_blank"}
                  rel="noreferrer noopener"
                >
                  <span>{TEL}</span>
                </Link>
              </div>
              <div>
                <MdOutlineAlternateEmail className={styles.icon} />

                <Link href={`mailto:${EMAIL}`}>
                  {" "}
                  <span>{EMAIL}</span>
                </Link>
              </div>
              <div>
                <FaLocationCrosshairs className={styles.icon} />
                <span>{HQ}</span>
              </div>
            </div>{" "}
            <div className={styles.bottom}>
              {centerLinks.map((e, i) => (
                <Link href={e.link} className={styles.title} key={i}>
                  {e.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
