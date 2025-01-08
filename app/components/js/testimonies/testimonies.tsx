"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import useCarousel from "../usecarousel";

export default function Testimonies() {
  const testimonies: { name: string; text: string; image: string }[] = [
    {
      name: "Paul Ndubuisi",
      text: "I'm really impressed with the solar panel installation. The team was professional, and my energy bills have gone down significantly since the installation. It was a worthwhile investment.",
      image: "paul.jpeg",
    },
    {
      name: "Ngozi Adebayo",
      text: "The solar street lights in our neighborhood have made a huge difference. It’s safer at night, and we’ve noticed a drop in electricity costs. I highly recommend this service!",
      image: "ngozi.jpg",
    },
    {
      name: "Tunde Balogun",
      text: "The high-voltage battery system installed at our office is working perfectly. We now have a reliable backup power source, and our energy costs have been significantly reduced.",
      image: "tunde.jpeg",
    },
    {
      name: "David Ubabuike",
      text: "The electrical piping work for my building was done with excellent attention to detail. The team was prompt, professional, and completed the job ahead of schedule. Great work!",
      image: "david.jpg",
    },
    {
      name: "Bolaji Afolabi",
      text: "The consulting service helped us redesign our energy infrastructure. Not only did we save money, but we also created a more sustainable and future-proof system. The advice was practical and easy to implement.",
      image: "bolaji.jpg",
    },
    {
      name: "Mustapha Adeyemi",
      text: "When our electrical system malfunctioned, the repair team was exceptional. They diagnosed the issue quickly and ensured everything was up to standard. We didn’t have to worry about a thing throughout the process.",
      image: "mustapha.jpg",
    },

    {
      name: "Vivian Williams",
      text: "I can’t recommend their services enough. Their work on our solar energy system has been a game changer. We’re saving money, and the whole system is more efficient than we expected.",
      image: "vivian.jpg",
    },
  ];

  useCarousel({ parentId: "testimonies", indicatorId: "indicators" });

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <h2 className={styles.heading}>What Our Clients Say</h2>
        <p>{`Our clients' satisfaction is at the heart of everything we do. Over the years, we’ve helped individuals, businesses, and communities achieve energy independence, reduce costs, and enhance security. But don’t just take our word for it—hear directly from those who’ve experienced the impact of our solutions firsthand.`}</p>
      </div>
      <div className={styles.box}>
        <div className={styles.testimonies} id="testimonies">
          {testimonies.map((e, i) => (
            <div key={i} className={styles.testimony}>
              <div className={styles.image}>
                <Image src={`/assets/testimonies/${e.image}`} alt="" fill />
              </div>
              <div className={styles.text}>
                <p className={styles.title}>{e.name}</p>
                <p>{e.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.indicators} id="indicators">
          {testimonies.map((e, i) => (
            <span key={i}></span>
          ))}
        </div>
      </div>
    </div>
  );
}
