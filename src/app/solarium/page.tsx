import {
  ContactStub,
  LandingHero,
  PlaceholderSection,
} from "@/components/landings/LandingBlocks";
import { SiteFooter, SiteHeader } from "@/components/layout/SiteChrome";
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
      <SiteHeader tone="sun" current="solarium" />
      <LandingHero
        tone="sun"
        kicker={s.kicker}
        title={s.headline}
        lead={s.lead}
        cta="Записаться на сеанс"
      />
      <PlaceholderSection
        id="about"
        tone="sun"
        label="Кабинет"
        title="Свет, время, ритуал"
        note="Дальше заполним: тип кабины, минуты сеанса, подготовка кожи, кому подходит."
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
