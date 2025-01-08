"use client";
import Link from "next/link";
import styles from "./Footer.module.scss";

import { COMPANYNAME } from "@/app/components/js/config";
import Map from "@/app/components/js/map/map";
import Image from "next/image";
import { useSlideUp } from "@/app/components/js/useslider";
interface Link {
  name: string;
  link: string;
}
interface Row {
  main: string;
  links: Link[];
}
const Footer: React.FC = () => {
  const links: Row[] = [
    {
      main: "Main links",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About Us",
          link: "/about",
        },

        {
          name: "Our Services",
          link: "/#services",
        },
        {
          name: "Contact Us",
          link: "/contact",
        },
      ],
    },
  ];
  const services: { name: string; url: string }[] = [
    {
      name: `Renewable Energy Solutions`,
      url: `energy`,
    },
    {
      name: `Electrical Systems`,
      url: `electric`,
    },
    {
      name: `Security Surveillance Solutions`,
      url: `security`,
    },
    {
      name: `Consultation`,
      url: `security`,
    },
  ];
  const clients: { name: string; img: string }[] = [
    {
      name: `Bet9ja`,
      img: `/assets/bet9ja.png`,
    },
    {
      name: `Access Bank`,
      img: `/assets/access.png`,
    },
    {
      name: `Union Bank`,
      img: `/assets/union.png`,
    },
    {
      name: `MOTAB Hotels and Suites`,
      img: ``,
    },
  ];
  useSlideUp(["footer"]);
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.top}>
        <div className={styles.company}>
          <h3>{COMPANYNAME}</h3>

          <p>{`Smart Tech and Power Solutions is a forward-thinking company specializing in providing cutting-edge solutions in renewable energy, electrical systems, and security surveillance technologies. With a focus on sustainability, innovation, and reliability, the company aims to revolutionize energy and security infrastructure for residential, commercial, and industrial clients.`}</p>
        </div>
        <div className={styles.cBox}>
          <h3>Some of our clients</h3>
          <div className={styles.clients}>
            {clients.map((e, i) => (
              <div key={i} className={styles.client}>
                {e.img && (
                  <div key={i} className={styles.image}>
                    <Image src={e.img} alt={e.name} fill />
                  </div>
                )}
                <span className={styles.name}>{e.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.services}>
          <h3>Our Services</h3>
          <ul>
            {services.map((e, i) => (
              <li key={i}>
                <Link href={`#`}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {links.map((link, index) => {
          return (
            <div key={index} className={styles.links}>
              <h3>{link.main}</h3>
              <ul>
                {link.links.map((subLink, index) => {
                  return (
                    <li key={index}>
                      <Link href={subLink.link}>{subLink.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className={styles.map}>
        <Map />
      </div>
      <div className={styles.copy}>
        <p>
          &copy; {year} {COMPANYNAME}. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
