/* eslint-disable @next/next/no-img-element */
const heroImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80";

const galleryTop = [
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
];

const galleryBottom = [
  "https://images.unsplash.com/photo-1521737604893-ff8c1df43f6f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
];

const facilities = [
  "Wi-Fi rápido",
  "Sala de reuniões",
  "Cabines para chamadas",
  "Cozinha equipada",
  "Cacifos",
  "Impressão",
  "Receção de encomendas",
  "Acesso seguro",
];

const valueHighlights = [
  { title: "Planos de Membership", desc: "Opções flexíveis para equipas e freelancers." },
  { title: "Escritórios dedicados", desc: "Privacidade com acesso à comunidade Gaia." },
];

const commute = [
  { label: "Metro", desc: "Liga rapidamente ao Porto" },
  { label: "Estacionamento", desc: "Parques e ruas próximas" },
  { label: "Cafés", desc: "Restaurantes e coffee spots" },
  { label: "Acessos", desc: "Ponte do Infante e A1" },
];

function IconBullet() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 shadow-soft">
      <svg
        aria-hidden
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <div className="bg-[#F7F7F5] text-[#1A1A1A] min-h-screen">
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="blur-blob bg-blue-600/20 left-[-10%] top-[-10%]" />
          <div className="blur-blob bg-purple-600/15 right-[-12%] top-[20%]" />
          <div className="blur-blob bg-white/40 right-[10%] bottom-[-20%]" />
        </div>

        <section
          className="relative isolate overflow-hidden rounded-b-[48px] bg-[#0F0F0F] text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.55)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-5 py-16 lg:py-24">
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Vila Nova de Gaia · Metro do Porto
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                Coworking em Vila Nova de Gaia
              </h1>
              <p className="text-lg lg:text-xl text-white/80 max-w-2xl">
                A minutos do Porto, com ambiente moderno, equipa dedicada e uma comunidade
                profissional pronta para te receber.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#reservar"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:shadow-xl transition-shadow"
                >
                  Reservar Tour
                </a>
                <a
                  href="#day-pass"
                  className="inline-flex items-center justify-center rounded-full border border-blue-400 bg-white/5 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-white/10 transition-colors"
                >
                  Day Pass
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-5 py-12 lg:py-16" id="espacos">
          <div className="grid gap-4 rounded-[32px] bg-white p-4 shadow-soft lg:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {galleryTop.map((src, idx) => (
                <div key={src} className="overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={src}
                    alt={idx === 0 ? "Open space Gaia Coworking" : "Sala de reuniões Gaia"}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryBottom.map((src, idx) => (
                <div key={src} className="overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={src}
                    alt={`Gaia Coworking ambiente ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-5 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="rounded-[28px] overflow-hidden shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-ff8c1df43f6f?auto=format&fit=crop&w=1400&q=80"
                  alt="Lounge Gaia Coworking"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-8 hidden md:block w-2/3 rounded-[28px] overflow-hidden shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                  alt="Comunidade a trabalhar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:p-10 shadow-soft text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-3">
                  Produtividade e comunidade
                </p>
                <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-5">
                  Espaço para aumentar a tua produtividade
                </h2>
                <p className="text-base lg:text-lg font-medium text-white/80 leading-relaxed">
                  Ambiente luminoso, lugares confortáveis, networking diário e equipa presente para
                  garantir que o teu trabalho flui com tranquilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-5 py-12 lg:py-16" id="precos">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Facilities
              </p>
              <h3 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                Instalações para um melhor ambiente de trabalho
              </h3>
              <p className="text-base lg:text-lg text-black/70">
                Tudo o que precisas para trabalhar sem distrações, perto do Porto e com a tranquilidade
                de Gaia.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {facilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft"
                  >
                    <IconBullet />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80"
                  alt="Lounge e trabalho em Gaia"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute left-6 bottom-6 max-w-xs rounded-3xl bg-white/90 backdrop-blur p-5 shadow-xl border border-white/70">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50 mb-2">
                  Tudo o que precisas
                </p>
                <p className="text-sm font-medium text-black/80">
                  Suporte presencial, comunidade acolhedora e um espaço calmo para entregar o teu
                  melhor trabalho.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-5 py-12 lg:py-16" id="day-pass">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1400&q=80"
                  alt="Espaço de trabalho em Gaia"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-6 left-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-soft">
                Preços flexíveis · Planos diários e mensais
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Valor e planos
              </p>
              <h3 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                O coworking ideal para quem trabalha entre Gaia e Porto
              </h3>
              <p className="text-base lg:text-lg text-black/70">
                Escolhe o plano certo: day pass para mobilidade total, lugares fixos para rotina
                consistente ou escritórios dedicados para equipas focadas.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {valueHighlights.map((item) => (
                  <div key={item.title} className="flex gap-3 rounded-2xl bg-white p-4 shadow-soft">
                    <IconBullet />
                    <div className="space-y-1">
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="text-sm text-black/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#precos"
                className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-5 py-3 text-sm font-semibold text-blue-700 shadow-soft hover:bg-blue-50 transition-colors"
              >
                Consultar Preços
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-5 py-12 lg:py-16" id="contacto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center rounded-[32px] bg-white p-8 shadow-soft">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                Localização
              </p>
              <h3 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                Em Vila Nova de Gaia, ligado ao Porto
              </h3>
              <p className="text-base lg:text-lg text-black/70">
                Próximo do metro e ligações rápidas ao Porto. Perto de serviços, restauração e vistas
                do Douro para uma pausa inspiradora.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {commute.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 rounded-2xl bg-[#F7F7F5] p-3">
                    <IconBullet />
                    <div>
                      <p className="text-sm font-bold">{item.label}</p>
                      <p className="text-sm text-black/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[28px] bg-[#0F0F0F] text-white shadow-soft">
                <div className="h-64 w-full bg-gradient-to-br from-[#1F1F1F] to-[#111] relative">
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-white/70">
                    Mapa e direções (placeholder)
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                    Endereço
                  </p>
                  <p className="text-lg font-bold">Gaia Coworking</p>
                  <p className="text-sm text-white/80">
                    Vila Nova de Gaia · Área Metropolitana do Porto, Portugal
                  </p>
                  <p className="text-sm text-white/70">Perto de Estação General Torres e metro.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-5 pb-16" id="reservar">
          <div className="container mx-auto">
            <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-600 to-purple-600 shadow-soft">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
              <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
              <div className="relative px-8 py-12 lg:px-12 lg:py-16 text-white">
                <h3 className="text-3xl lg:text-4xl font-extrabold mb-4">
                  Marca uma visita e conhece o espaço
                </h3>
                <p className="text-base lg:text-lg text-white/80 mb-6 max-w-2xl">
                  Agenda um tour personalizado, experimenta um day pass e descobre como a nossa
                  comunidade pode impulsionar o teu trabalho.
                </p>
                <a
                  href="mailto:hello@gaiacoworking.pt"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-soft hover:shadow-md transition-shadow"
                >
                  Agendar visita
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/351000000000"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-black/20 hover:translate-y-[-2px] transition"
        target="_blank"
        rel="noreferrer"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a9.93 9.93 0 00-9.95 9.93 9.86 9.86 0 001.35 5l-1.4 5.12 5.2-1.36a10 10 0 004.8 1.23h.02A9.93 9.93 0 1012 2zm5.64 14.48c-.24.67-1.4 1.27-1.93 1.33-.5.05-1.1.05-1.77-.11a8.28 8.28 0 01-3.63-1.94 9.56 9.56 0 01-1.86-2.3 4.17 4.17 0 01-.87-2.3c0-.67.33-1.1.47-1.27.13-.16.29-.2.39-.2h.28c.09 0 .21 0 .32.25.11.24.36.84.39.9.03.07.05.14.01.22-.16.33-.34.45-.25.67.33.82 1.53 1.96 2.33 2.34.16.08.26.07.36-.04.1-.12.43-.51.55-.69.13-.17.23-.14.39-.08.16.05 1.02.48 1.2.57.18.09.29.14.33.22.04.08.04.74-.2 1.41z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
