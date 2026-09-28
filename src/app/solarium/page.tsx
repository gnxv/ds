import {
  ContactStub,
  PlaceholderSection,
} from "@/components/landings/LandingBlocks";
import { SiteFooter, SiteHeader } from "@/components/layout/SiteChrome";
import { BackgroundVideo } from "@/components/r-sleek/Media";
import { services } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Солярий",
  description: services.solarium.lead,
};

export default function SolariumPage() {
  const s = services.solarium;

  return (
    <div className="min-h-dvh bg-[#160e09] text-[#f4e6c8]">
      <SiteHeader
        tone="sun"
        current="solarium"
        sections={services.solarium.nav}
      />

      <section className="relative isolate min-h-[92dvh] overflow-hidden">
        <BackgroundVideo
          src="/media/solarium/hero.mp4"
          poster="/media/solarium/hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#160e09]/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160e09] via-transparent to-black/30" />
        <div className="relative mx-auto flex min-h-[92dvh] max-w-6xl flex-col justify-end px-5 pb-16 pt-24 md:px-6 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.38em] text-[#e0b06a]">
            Солярий · Fiolet
          </p>
          <h1 className="font-serif mt-4 max-w-4xl text-4xl leading-[0.96] sm:text-6xl md:text-7xl">
            Цвет кожи,
            <br />
            который выглядит своим.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#f4e6c8]/82 md:text-[17px]">
            Короткий сеанс света — и тон ровный, без границы купальника и без
            истории «я неделю жила на пляже».
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#e0b06a] px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#160e09]"
            >
              Записаться
            </a>
            <a
              href="#about"
              className="rounded-full border border-[#e0b06a]/40 px-5 py-3 text-[11px] uppercase tracking-[0.2em]"
            >
              О кабинете
            </a>
          </div>
        </div>
      </section>
      <PlaceholderSection
        id="about"
        tone="sun"
        label="Кабинет"
        title="Свет, который не выдаёт кабину"
        note="Здесь будет тип установки, сколько минут занимает ровный тон и как не сжечь кожу в первый визит."
        cards={[
          "Оборудование и тип ламп / коллариума",
          "Как проходит визит от входа до выхода",
          "Уход до и после загара",
        ]}
      />
      <PlaceholderSection
        id="offer"
        tone="sun"
        label="Форматы"
        title="Минуты и абонементы"
        note="Таблица цен, пакеты, подарочные сертификаты — отдельным блоком."
        cards={["Разовое посещение", "Абонемент", "Сертификат"]}
      />
      <PlaceholderSection
        id="faq"
        tone="sun"
        label="FAQ"
        title="Коротко о главном"
        note="Противопоказания, первый сеанс, загар перед отпуском."
        cards={["Безопасность", "Первый визит", "Результат"]}
      />
      <ContactStub tone="sun" />
      <SiteFooter tone="sun" />
    </div>
  );
}
