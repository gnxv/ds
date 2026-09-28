import {
  ContactStub,
  LandingHero,
  PlaceholderSection,
} from "@/components/landings/LandingBlocks";
import { SiteFooter, SiteHeader } from "@/components/layout/SiteChrome";
import { services } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R-Sleek",
  description: services.rsleek.lead,
};

export default function RSleekPage() {
  const s = services.rsleek;

  return (
    <div className="min-h-dvh bg-[#0b0e12] text-[#ece6da]">
      <SiteHeader tone="sculpt" current="rsleek" />
      <LandingHero
        tone="sculpt"
        kicker={s.kicker}
        title={s.headline}
        lead={s.lead}
        cta="Записаться на процедуру"
      />
      <PlaceholderSection
        id="method"
        tone="sculpt"
        label="Методика"
        title="Ротационная термокомпрессия"
        note="Роликовая манипула, компрессия и тепло. Без вакуума, без синяков, без восстановления."
        cards={[
          "Лимфодренаж и вывод жидкости",
          "Локальные объёмы и целлюлит",
          "Тонус кожи и микроциркуляция",
        ]}
      />
      <PlaceholderSection
        id="course"
        tone="sculpt"
        label="Курс"
        title="6–12 процедур"
        note="Длительность сеанса, частота, зоны: живот, бёдра, руки, спина. Цены добавим отдельно."
        cards={["Диагностика и замеры", "Зоны проработки", "Поддержка результата"]}
      />
      <PlaceholderSection
        id="faq"
        tone="sculpt"
        label="FAQ"
        title="Что обычно спрашивают"
        note="Больно ли, когда виден эффект, сочетание со спортом и питанием."
        cards={["Ощущения", "Срок результата", "Противопоказания"]}
      />
      <ContactStub tone="sculpt" />
      <SiteFooter tone="sculpt" />
    </div>
  );
}
