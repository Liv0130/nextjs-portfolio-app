import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About — Olivia",
};
export default async function AboutPage() {
  return <AboutPageClient />;
}
