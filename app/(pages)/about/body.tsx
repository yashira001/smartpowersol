"use client";
import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useSlideUp } from "@/app/components/js/useslider";

export default function Body() {
  const data: TopperType = {
    title: "About Us",
    img: "/assets/sun.webp",
    text: [
      `Smart Tech & Power Solutions Nig Ltd was founded on the belief that access to reliable energy and robust security is essential for progress. Established in 2019 and based in Lagos, we are driven by our commitment to make a positive impact on Nigerian communities by providing sustainable power solutions and enhancing safety for homes and businesses.`,
    ],
    link: {
      name: "About Us",
      url: "/about",
    },
  };
  const services: { title: string; text: string; img: string }[] = [
    {
      title: `Solar Energy Solutions`,
      text: `We empower homes and businesses to generate their own clean energy, reducing reliance on the grid and lowering energy costs. Our on-grid, off-grid, and hybrid systems are designed to meet diverse needs and budgets.`,
      img: "yellow.jpeg",
    },
    {
      title: `Electrical Systems`,
      text: `Our expert electricians ensure safe and efficient electrical installations, repairs, and maintenance, minimizing disruptions and maximizing reliability.`,
      img: "blue.jpeg",
    },
    {
      title: `Security Surveillance Solutions`,
      text: `We provide advanced security systems to protect homes, businesses, and communities, contributing to a safer environment for all.`,
      img: "cctv.avif",
    },
  ];
  const keys: { title: string; text: string }[] = [
    {
      title: "Expertise You Can Trust",
      text: "With years of experience in renewable energy, electrical systems, and security technologies, we deliver solutions that meet the highest standards.",
    },
    {
      title: "Innovative Technologies",
      text: "We use the latest advancements in solar energy, battery storage, and AI-enabled security systems to provide you with top-tier solutions.",
    },
    {
      title: "Affordable Solutions",
      text: "Our services are designed to be cost-effective, ensuring you save money while enjoying high-quality products and services.",
    },
    {
      title: "Commitment to Sustainability",
      text: "We are passionate about reducing carbon footprints and promoting a cleaner, greener Nigeria.",
    },
    {
      title: "Customer-Centric Approach",
      text: "Your satisfaction is our priority. We work closely with you to design and deliver solutions that exceed your expectations.",
    },
  ];
  const certifications: string[] = [
    "Solar Installation Bootcamp",
    "OSHA 30 Certified",
    "Industrial Energy Audit & Management Certification",
    "Mini-grid Designer Certification",
    "Nigerian Electricity Management Services Agency (NEMSA Certified Member)",
  ];
  const staff: {
    name: string;
    position: string;
    img: string;
    texts: string[];
  }[] = [
    {
      name: "Sunday Oladiti",
      position: "MD/CEO",
      img: "sunday.jpeg", // Placeholder for image
      texts: [
        "Sunday Oladiti is a dedicated and dynamic Electrical and Electronic Engineer with extensive skills and expertise in delivering innovative solutions in the field of engineering.",
        "A passionate Renewable Energy enthusiast, he is equipped with exceptional knowledge of industry best practices, specializing in the design, installation, and maintenance of centralized and decentralized power systems. With a proven track record spanning over seven years, Sunday has consistently delivered excellence and impactful results in the renewable energy sector.",
        "As the Managing Director and CEO of Smart Tech & Power Solutions Nig Ltd, his leadership is driven by a commitment to sustainability, innovation, and exceptional service delivery in the engineering and renewable energy industries.",
      ],
    },
    {
      name: "Adewale Joel",
      position: "Lead Engineer",
      img: "adewale.jpeg", // Placeholder for image
      texts: [
        "Expertise in renewable energy management, security surveillance, and electrical systems.",
        "Over 8 years of experience in delivering innovative energy and security solutions.",
        "Known for his strategic approach and leadership in project execution.",
      ],
    },
    {
      name: "Adeleye Uthman",
      position: "Technician Lead",
      img: "adeleye.jpeg", // Placeholder for image
      texts: [
        "Over 6 years of hands-on experience in electrical and renewable energy systems.",
        "Renowned for his commitment to quality and his extensive knowledge in installation and maintenance.",
      ],
    },
    {
      name: "Owoseni Oyindamola",
      position: "Customer Experience Manager",
      img: "owoseseni.jpeg", // Placeholder for image
      texts: [
        "Over 5 years of proven experience in customer experience and management.",
        "A track record of delivering exceptional customer service and fostering strong client relationships.",
        "Dedicated to ensuring client satisfaction and improving service delivery.",
      ],
    },
  ];

  useSlideUp(["serv", "staff"]);
  return (
    <div>
      <Topper data={data} />
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.left}>
            <p>{`We understand the challenges faced by many Nigerians due to inconsistent power supply and security concerns. That's why we offer a comprehensive range of services designed to address these critical needs:`}</p>
            <div className={styles.grid} id="serv">
              {services.map((e, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.image}>
                    <Image src={`/assets/${e.img}`} alt={e.title} fill />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.title}>{e.title}</p>
                    <p>{e.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.gr}>
              <h2>Our Mission</h2>
              <p>{`Our mission is to power households, commercial, and industrial entities that are underserved or unserved across the nation.

`}</p>
            </div>
            <div className={styles.gr}>
              <h2>Our Vision</h2>
              <p>{`To become the leading energy and power provider while ensuring maximum security for households and businesses to help reduce the crime rate in society.

`}</p>
            </div>
            <div className={styles.gr}>
              <h2>{`Certifications and Professional Memberships`}</h2>
              <ul>
                {certifications.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.keys}>
          <h1 className={styles.heading}>{`Why Choose Us?`}</h1>
          <div className={styles.grid}>
            {keys.map((e, i) => (
              <div key={i} className={styles.item}>
                <p className={styles.title}>{e.title}</p>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.staffGroup}>
          <div className={styles.intro}>
            <h1 className={styles.heading}>{`Meet the Team`}</h1>
            <p>{`The success of Smart Tech & Power Solutions is built upon the knowledge and experience of our highly skilled team. We are proud to introduce the individuals who are passionate about delivering exceptional service and exceeding client expectations.`}</p>
          </div>
          <div className={styles.grid} id="staff">
            {staff.map((e, i) => (
              <div key={i} className={styles.staff}>
                <div className={styles.image}>
                  <Image src={`/assets/${e.img}`} fill alt={e.name} />
                </div>
                <div className={styles.right}>
                  <div className={styles.name}>
                    <h3>{e.name}</h3>
                    <p className={styles.position}>{e.position}</p>
                  </div>
                  <div className={styles.text}>
                    {e.texts.map((e, i) => (
                      <p key={i}>{e}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
