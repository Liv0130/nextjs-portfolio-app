import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Olivia",
};

export default async function ContactPage() {
  return <ContactPageClient />;
}
