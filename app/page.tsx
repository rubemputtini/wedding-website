"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Countdown from "@/components/Countdown";
import GuestName from "@/components/GuestName";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Story />
      <Countdown weddingDate="2025-04-03" />
      <GuestName />
      <Location />
      <Footer />
    </main>
  );
}
