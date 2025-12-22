/* eslint-disable @next/next/no-img-element */
"use client";

const services = [
  {
    name: "Day Pass",
    price: "20€ / dia (+ IVA)",
    details: [
      "Acesso a áreas comuns e open space.",
      "Wi-Fi de alta velocidade.",
      "Zonas lounge e cozinha com café/água.",
      "1x uso de phone booth (mediante disponibilidade).",
      "Suporte da equipa na receção.",
      "Impressões básicas (fair use).",
      "Ideal para freelancers e remote workers a minutos do Porto.",
    ],
    excludes: ["Sem cacifo.", "Sem sala de reuniões dedicada.", "Sem receção de correio/encomendas."],
    conditions: [
      "Horário: 09h-19h, dias úteis.",
      "Lugar rotativo em zona partilhada.",
      "Não requer caução.",
      "Chamadas em phone booth ou zonas indicadas.",
    ],
  },
  {
    name: "Week Pass",
    price: "75€ / semana (+ IVA)",
    details: [
      "Lugar rotativo 5 dias seguidos em mesa partilhada.",
      "Wi-Fi rápido e zonas lounge.",
      "Cozinha com café/água incluídos.",
      "Até 2x reservas de phone booth curtas/dia (sujeito a disponibilidade).",
      "Suporte da equipa na receção.",
      "Impressões básicas (fair use).",
      "Perfeito para trabalhar em Gaia com ligações rápidas ao Porto.",
    ],
    excludes: ["Sem sala de reuniões formal.", "Sem cacifo dedicado.", "Sem receção de correio."],
    conditions: [
      "Horário: 09h-19h, dias úteis.",
      "Sem caução.",
      "Não acumulável com outras semanas.",
      "Chamadas em zonas indicadas.",
    ],
  },
  {
    name: "Half-Day Flex (Manhã/Tarde)",
    price: "12€ / meio-dia (+ IVA)",
    details: [
      "Lugar rotativo em zona partilhada.",
      "Wi-Fi rápido e zonas lounge.",
      "Cozinha com café/água.",
      "Suporte da equipa.",
      "Ideal para passagens rápidas entre Gaia e Porto.",
    ],
    excludes: [
      "Sem sala de reuniões.",
      "Sem phone booth reservado.",
      "Sem impressões.",
      "Sem cacifo; sem correio.",
    ],
    conditions: [
      "Manhã 09h-13h ou tarde 14h-19h.",
      "Dias úteis.",
      "Uso silencioso em open space.",
      "Sem caução.",
    ],
  },
  {
    name: "Flex Desk (Mesa Partilhada) · Mensal",
    price: "160€ / mês (+ IVA)",
    details: [
      "Acesso dias úteis 09h-19h.",
      "Lugar rotativo em open space.",
      "Wi-Fi rápido, lounge e cozinha com café/água.",
      "4h/mês sala de reuniões (reserva).",
      "5h/mês phone booth.",
      "Impressões básicas (fair use).",
      "Suporte da equipa.",
    ],
    excludes: ["Sem cacifo dedicado.", "Sem receção de correio/encomendas (opção extra).", "Sem acesso 24/7."],
    conditions: [
      "Permanência mínima 1 mês.",
      "Sem caução para particulares (pode ser solicitada para empresas).",
      "Uso responsável de reuniões/phone booth.",
    ],
  },
  {
    name: "Fixed Desk (Mesa Dedicada) · Mensal",
    price: "220€ / mês (+ IVA)",
    details: [
      "Posto dedicado com cadeira ergonómica.",
      "Acesso 24/7.",
      "Wi-Fi rápido; lounge; cozinha café/água.",
      "Cacifo incluído.",
      "6h/mês sala de reuniões (reserva).",
      "8h/mês phone booth.",
      "Impressões básicas (fair use) e receção de correio/encomendas.",
      "Suporte da equipa.",
    ],
    excludes: ["Horas extra de sala de reuniões (custo adicional).", "Parking não incluído."],
    conditions: [
      "Permanência mínima 1 mês.",
      "Caução de 1 mês.",
      "Regras de silêncio e chamadas em áreas definidas.",
    ],
  },
  {
    name: "Escritório Virtual · Mensal",
    price: "45€ / mês (+ IVA)",
    details: [
      "Morada fiscal e comercial em Vila Nova de Gaia.",
      "Receção de correio/encomendas e notificação por email.",
      "2h/mês sala de reuniões em dias úteis (reserva).",
      "Apoio da equipa na receção.",
    ],
    excludes: [
      "Sem lugar de trabalho diário.",
      "Sem acesso ao open space.",
      "Sem phone booth ou impressões incluídas.",
    ],
    conditions: [
      "Permanência mínima 1 mês.",
      "Caução de 1 mês.",
      "Recolha de correio em 09h-19h.",
    ],
  },
  {
    name: "Sala de Reuniões",
    price: "18€ / 1h (+ IVA) · 32€ / 2h (+ IVA)",
    details: [
      "Sala equipada (ecrã/TV ou projeção) com Wi-Fi rápido.",
      "Água/café incluídos.",
      "Apoio da equipa; climatização.",
      "Ideal para equipas locais ou clientes que vêm do Porto.",
    ],
    excludes: ["Sem catering (opcional).", "Sem impressão de grandes volumes."],
    conditions: [
      "Reserva antecipada; dias úteis 09h-19h.",
      "Excedentes faturados por hora.",
      "Cumprir horários e capacidade indicada.",
    ],
  },
];

const notes = [
  "Horário: dias úteis 09h-19h (24/7 apenas mesas dedicadas).",
  "Silêncio/chamadas: phone booths para chamadas; open space silencioso; reuniões em salas dedicadas.",
  "Cancelamentos: passes não reembolsáveis; salas podem ser remarcadas com 24h; planos mensais renovam salvo aviso de 30 dias.",
  "Faturação: emitimos fatura com NIF; valores acrescem IVA à taxa legal em Portugal.",
  "Reservas/adesão: email/telefone/WhatsApp; visitas e tours mediante marcação; disponibilidade limitada.",
];

export default function PrecosPage() {
  return (
    <div className="bg-[#F7F7F5] min-h-screen text-[#1A1A1A]">
      <section className="container mx-auto px-5 py-12 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50 mb-3">Preços</p>
          <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">Planos Gaia Coworking</h1>
          <p className="text-lg text-black/70">
            A minutos do Porto, com opções pensadas para freelancers, equipas pequenas e remote workers
            que querem flexibilidade e um espaço moderno em Vila Nova de Gaia.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-5 pb-12 lg:pb-16 space-y-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="rounded-[28px] bg-white shadow-soft border border-black/5 p-6 lg:p-8 space-y-4"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-extrabold">{service.name}</h2>
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-soft">
                {service.price}
              </span>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Inclui</p>
                <ul className="space-y-2 text-sm text-black/80">
                  {service.details.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Não inclui</p>
                <ul className="space-y-2 text-sm text-black/80">
                  {service.excludes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-black/25" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Condições</p>
                <ul className="space-y-2 text-sm text-black/80">
                  {service.conditions.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-5 pb-16">
        <div className="rounded-[24px] bg-blue-50 border border-blue-200 p-6 lg:p-8 shadow-soft space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Notas gerais</p>
          <ul className="space-y-2 text-sm text-black/80">
            {notes.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#D7B34A]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

