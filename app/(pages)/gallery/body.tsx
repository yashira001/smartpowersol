"use client";

import styles from "./styles.module.scss";
import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import { useSlideUp } from "@/app/components/js/useslider";

import Image from "next/image";

export default function Body() {
  const data: TopperType = {
    title: "A Visual Showcase of Our Expertise",
    img: "/assets/gallery.webp",
    text: [
      `Explore our gallery to see the quality and craftsmanship that goes into every Smart Tech & Power Solutions project.`,
    ],
    link: {
      name: "Gallery",
      url: "/gallery",
    },
  };
  const images: string[] = [
    "1.jpeg",
    "blue.jpeg",
    "2.jpeg",
    "wall.jpeg",
    "storage.jpeg",
    "3.jpeg",
    "electrical.jpeg",
    "4.jpeg",
    "yellow.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "repair.jpeg",
  ];
  useSlideUp(["images"]);
  return (
    <>
      <Topper data={data} />

      <div className={`${styles.main}`} id="images">
        <video
          className={styles.image}
          src="/assets/video.mp4"
          autoPlay
          controls
          muted
          loop
          playsInline
        />

        {images.map((e, i) => (
          <div key={i} className={styles.image}>
            <Image src={`/assets/${e}`} alt="" fill />
          </div>
        ))}
      </div>
    </>
  );
}
