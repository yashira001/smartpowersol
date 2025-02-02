"use client";
import Image from "next/image";
import styles from "./styles.module.scss";

import { useBg, useSlider } from "../useslider";

export default function Services() {
  const services: { title: string; text: string; image: string }[] = [
    {
      title: "Solar Panel Installation",
      text: "Professional installation of high-efficiency solar panels for homes, businesses, and industrial facilities, ensuring maximum energy output.",
      image: "panel.jpeg",
    },
    {
      title: "Energy Storage Solutions",
      text: "Advanced energy storage systems, including Lithium-ion, Lead-acid, and Tubular batteries, to keep your home or business powered 24/7.",
      image: "storage.jpeg",
    },
    {
      title: "Solar Street Lights",
      text: "Tailored solar street lighting solutions to provide efficient and sustainable outdoor illumination.",
      image: "custom.jpeg",
    },
    {
      title: "High Voltage Battery",
      text: "Installation of advanced high-voltage battery systems for enhanced energy storage and reliability.",
      image: "electrical.jpeg",
    },
    {
      title: "Electrical Piping of a Storey Building with a Penthouse",
      text: "Comprehensive electrical piping services for multi-level buildings, ensuring safety and adherence to standards.",
      image: "repair.jpeg",
    },
    {
      title: "High-Voltage & Smart Home Solutions",
      text: "Innovative high-voltage systems and smart home technologies to enhance energy efficiency and convenience.",
      image: "voltage.jpeg",
    },
    {
      title: "Security Surveillance Systems",
      text: "Installation of cutting-edge security cameras and AI-driven surveillance systems for enhanced safety and remote monitoring.",
      image: "cctv.avif",
    },
    {
      title: "Sustainable Energy Consulting",
      text: "Expert consulting services to guide clients toward affordable, efficient, and sustainable energy solutions.",
      image: "consultation.jpeg",
    },
    {
      title: "CO2 Emission Reduction Initiatives",
      text: "Contributing to environmental sustainability through energy-efficient solutions that help reduce carbon emissions.",
      image: "initiative.jpg",
    },
  ];

  useSlider(["services"]);
  useBg("imgcont");
  return (
    <div className={styles.main}>
      <div className={styles.left} id="imgcont">
        <div className={styles.image}>
          <Image src={"/assets/roof.jpg"} alt="" fill />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.heading}>Our Services</h1>
        <div className={styles.grid} id="services">
          {services.map((e, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.image}>
                <Image src={`/assets/${e.image}`} alt={e.title} fill />
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
