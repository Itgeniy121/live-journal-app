"use client";
import "@/app/globals.css";
import Header from "@/components/Header";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
