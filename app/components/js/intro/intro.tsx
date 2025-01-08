"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useSlideUp } from "../useslider";
import { IconType } from "react-icons";
import {
  FaPowerOff,
  FaSun,
  FaMoneyBillWave,
  FaHome,
  FaPlug,
  FaTools,
  FaSolarPanel,
  FaLeaf,
  FaWrench,
} from "react-icons/fa";
import Link from "next/link";
import { WHATSAPPLINK } from "../config";

export default function Intro() {
  const advantages: { title: string; text: string; image: IconType }[] = [
    {
      title: "Reliable Power Supply",
      text: "Enjoy consistent power, reducing disruptions caused by frequent outages. A dependable solution for homes and businesses.",
      image: FaPowerOff,
    },
    {
      title: "Abundant Sunshine Advantage",
      text: "Nigeria enjoys abundant sunshine, making it an ideal location for solar energy. Smart Tech & Power Solutions helps you harness this natural resource for clean and affordable power.",
      image: FaSun,
    },
    {
      title: "Lower Energy Costs",
      text: "Reduce or even eliminate your monthly electricity bills, leading to significant long-term savings.",
      image: FaMoneyBillWave,
    },
    {
      title: "Increase Your Property Value",
      text: "Boost your property's market value with a modern, energy-efficient solar system.",
      image: FaHome,
    },
    {
      title: "Greater Energy Independence",
      text: "Generate your own electricity and reduce your dependence on the national grid, securing your own power supply.",
      image: FaPlug,
    },
    {
      title: "Minimal Maintenance",
      text: "Our systems are designed for minimal upkeep, reducing long-term operating costs and maximizing convenience.",
      image: FaTools,
    },
    {
      title: "Versatile Solar Solutions",
      text: "Whether you need power for your home, business, or industrial facility in Nigeria, Smart Tech & Power Solutions offers versatile solar solutions tailored to your specific needs.",
      image: FaSolarPanel,
    },
    {
      title: "Sustainable Energy Choice",
      text: "By choosing solar energy with Smart Tech & Power Solutions, you contribute to a cleaner environment and a more sustainable future for Nigeria.",
      image: FaLeaf,
    },
    {
      title: "Expert Installation & Support",
      text: "Smart Tech & Power Solutions provides expert installation and maintenance services for solar systems across Nigeria, ensuring optimal performance and reliability.",
      image: FaWrench,
    },
  ];

  useSlideUp(["keys", "texts"]);
  return (
    <div className={styles.main}>
      <div className={styles.left} id="texts">
        <div className={styles.image}>
          <Image
            src={"/assets/station.jpg"}
            alt="Order catfish from Sasa Fish Farm"
            fill
          />
        </div>
        <div className={styles.text}>
          <h2>{`Clean, Reliable, and Cost-Effective Solar Solutions`}</h2>
          <p>{`Nigeria faces persistent challenges with reliable electricity access. Frequent power outages and rising energy costs disrupt homes and businesses daily. Solar energy offers a powerful solution, harnessing the abundant Nigerian sunshine to generate clean, sustainable power. Smart Tech & Power Solutions specializes in bringing this solution to your doorstep, offering a range of solar systems to meet your specific needs. Whether you're looking for an on-grid system to supplement your existing power supply, an off-grid system for complete energy independence, or a hybrid system that combines the best of both worlds, we have you covered. We design, install, and maintain customized solar energy systems for residential, commercial, and industrial clients, empowering them to take control of their energy needs and enjoy uninterrupted power, reduced energy bills, and a smaller carbon footprint.`}</p>
          <Link
            href={WHATSAPPLINK}
            target={"_blank"}
            rel="noreferrer noopener"
            className="action"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.heading}>
          Powering the Future with Solar Energy
        </h1>
        <div className={styles.grid} id="keys">
          {advantages.map((e, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.image}>
                <e.image className={styles.icon} />
              </div>
              <div className={styles.text}>
                <p className={styles.title}>
                  <span> {e.title}</span>
                </p>
                <p>{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
