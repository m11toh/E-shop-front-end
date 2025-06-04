import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <Testimonial />
    </main>
  );
}
