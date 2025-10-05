import { Metadata } from "next";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Work — Olivia",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
