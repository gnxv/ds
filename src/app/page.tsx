import type { Metadata } from "next";
import { SplitGateway } from "@/components/home/SplitGateway";

export const metadata: Metadata = {
  title: {
    absolute: "Fiolet · Коррекция фигуры R-Sleek и Солярий",
  },
  description: "Fiolet · Коррекция фигуры R-Sleek и Солярий.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fiolet · Коррекция фигуры R-Sleek и Солярий",
    description: "Fiolet · Коррекция фигуры R-Sleek и Солярий.",
    url: "https://fiolet-gel.ru",
  },
};

export default function HomePage() {
  return <SplitGateway />;
}
