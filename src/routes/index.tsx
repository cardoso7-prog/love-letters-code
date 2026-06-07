import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Heart, Music, Gift, Check, Sparkles, Calendar, MapPin } from "lucide-react";
import bg from "@/assets/romantic-bg.jpg";
import { Pedido } from "@/components/Pedido";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Para o meu amor" },
      { name: "description", content: "Uma carta de amor feita só para você." },
      { property: "og:title", content: "Para o meu amor" },
      { property: "og:description", content: "Uma carta de amor feita só para você." },
    ],
  }),
  component: Index,
});

const NOME_DELA = "Julia";
const NOME_DELE = "Yasmim";
const INICIO = new Date("2025-05-27T00:00:00");
const SPOTIFY_TRACK_ID = "5JAgqLhhRqo5M1Xu7vrLD6";

const TIMELINE = [
  { data: "27/05/2025", titulo: "A gente se conheceu", desc: "O começo de tudo. Eu não sabia, mas minha vida já tinha mudado.", emoji: "✨" },
  { data: "02/06/2025", titulo: "Nossa primeira conversa pessoalmente", desc: "O dia em que eu te vi de perto e tudo começou a ficar ainda mais especial.", emoji: "💌" },
  { data: "26/10/2025", titulo: "Primeiro 'eu te amo'", desc: "Saiu do coração, porque eu já não conseguia guardar só pra mim.", emoji: "💋" },
  { data: "17/12/2025", titulo: "Nosso primeiro beijo", desc: "Um momento que eu nunca vou esquecer.", emoji: "💋" },
  { data: "Hoje", titulo: "A gente, sempre", desc: "Cada dia escolhendo você de novo.", emoji: "💞" },
];

const MOTIVOS = [
  "Pelo seu sorriso que ilumina qualquer dia ruim.",
  "Pelo jeito que você diz meu nome.",
  "Pela paz que eu sinto nos seus braços.",
  "Pela sua coragem de me amar todos os dias.",
  "Por você rir das minhas piadas ruins.",
  "Pelos planos pequenos que viram os mais especiais.",
  "Por ser meu lar mesmo longe.",
  "Por me fazer querer ser melhor sem pedir.",
  "Pelo cheirinho do seu pescoço.",
  "Por simplesmente existir e ser você.",
];

const SURPRESA = {
  mensagem: "Se você tá lendo isso, é porque eu te amo demais. Obrigado(a) por ser meu pedacinho favorito do mundo. ❤️",
  assinatura: "— Pra sempre seu(sua)",
};

const SONHOS = [
  { texto: "Viajar juntas", feito: false },
  { texto: "Fazer uma noite de filmes e séries", feito: false },
  { texto: "Tirar fotos combinando", feito: false },
  { texto: "Sair só nós duas", feito: false },
  { texto: "Construir nossa casa", feito: false },
  { texto: "Ter uma noite só nossa", feito: false },
  { texto: "Fazer uma viagem dos sonhos", feito: false },
  { texto: "Criar mais memórias juntas", feito: false },
];

const CURIOSIDADES = [
  { icone: "🎵", titulo: "Música nova", desc: "Hoje tem músicas que eu só escuto porque me lembram você." },
  { icone: "💬", titulo: "Jeito de falar", desc: "Peguei suas manias, suas palavras e até seu jeitinho." },
  { icone: "🧘", titulo: "Minha mente tranquila", desc: "Você tem o dom de acalmar a minha mente quando ela faz barulho demais." },
  { icone: "🌙", titulo: "Rotina nova", desc: "Bom dia e boa noite viraram parte favorita do meu dia." },
  { icone: "💌", titulo: "Saudade", desc: "Aprendi que sentir saudade também é uma forma bonita de amar." },
  { icone: "❤️", titulo: "Amor de verdade", desc: "Com você, eu entendi que amor é cuidado, escolha e presença." },
  { icone: "🏠", titulo: "Planos", desc: "Antes eu pensava só no agora. Com você, comecei a imaginar o futuro." },
  { icone: "✨", titulo: "Meu melhor lado", desc: "Você despertou uma versão mais carinhosa, boba e feliz de mim." },
];
// ===================================================

function useTempoJuntos() {
  const [t, setT] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });
  useEffect(() => {
    setT(calc());
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  return t;
}
function calc() {
  const ms = Math.max(0, Date.now() - INICIO.getTime());
  const s = Math.floor(ms / 1000);
  return {
    dias: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    min: Math.floor((s % 3600) / 60),
    seg: s % 60,
  };
}

function Coracoes() {
  // Gera apenas no cliente p/ evitar mismatch de hidratação
  const [items, setItems] = useState<Array<{ left: number; delay: number; dur: number; size: number }>>([]);
  useEffect(() => {
    setItems(
      Array.from({ length: 18 }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        dur: 8 + Math.random() * 8,
        size: 12 + Math.random() * 20,
      })),
    );
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
          transition={{ duration: it.dur, delay: it.delay, repeat: Infinity, ease: "linear" }}
          style={{ left: `${it.left}%`, position: "absolute" }}
        >
          <Heart fill="currentColor" className="text-primary/70" style={{ width: it.size, height: it.size }} />
        </motion.div>
      ))}
    </div>
  );
}

const serif = { fontFamily: "'Playfair Display', Georgia, serif" } as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-10 text-center font-serif text-3xl sm:text-4xl md:text-5xl" style={serif}>
      {children}
    </h2>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-primary/30 bg-background/50 backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}

import julia2Asset from "@/assets/julia-2.png.asset.json";
import julia3Asset from "@/assets/julia-3.png.asset.json";
import julia4Asset from "@/assets/julia-4.png.asset.json";
import juliaOlhos2Asset from "@/assets/julia-olhos-2.jpeg.asset.json";

const FOTOS_JULIA: Array<{ src: string; legenda: string }> = [
  { src: julia2Asset.url, legenda: "Você consegue ser meu lugar favorito até através de uma tela." },
  { src: julia3Asset.url, legenda: "Eu poderia passar horas admirando cada detalhe seu e ainda não seria suficiente." },
  { src: julia4Asset.url, legenda: "E o mais incrível é que seu sorriso sempre consegue melhorar o meu dia." },
  { src: juliaOlhos2Asset.url, legenda: "Esses olhos ainda me fazem esquecer o que eu estava pensando." },
];

function ApaixonadaPorJulia() {
  const [i, setI] = useState(0);
  const proxima = () => setI((p) => (p + 1) % FOTOS_JULIA.length);
  const f = FOTOS_JULIA[i];
  return (
    <section className="relative mx-auto max-w-2xl px-5 pb-20">
      <SectionTitle>A mulher por quem eu sou apaixonada</SectionTitle>
      <div className="mx-auto max-w-md">
        <button
          type="button"
          onClick={proxima}
          aria-label="Próxima foto"
          className="group block w-full overflow-hidden rounded-2xl border border-primary/30 bg-background/50 text-left shadow-2xl shadow-primary/20 backdrop-blur-md transition-transform active:scale-[0.98]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-primary/30 to-primary/10">
                <img
                  src={f.src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-4 text-center text-sm italic text-foreground/85 sm:text-base" style={serif}>
                "{f.legenda}"
              </figcaption>
            </motion.div>
          </AnimatePresence>
        </button>
        <div className="mt-5 flex flex-col items-center gap-3">
          <div className="flex gap-1.5">
            {FOTOS_JULIA.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-primary" : "w-1.5 bg-primary/30"}`}
              />
            ))}
          </div>
          <button
            onClick={proxima}
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/30 active:scale-95"
          >
            <Heart fill="currentColor" className="h-4 w-4" />
            Próxima foto
          </button>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="relative mx-auto max-w-2xl px-5 pb-20">
      <SectionTitle>Nossa linha do tempo</SectionTitle>
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/40 to-transparent" />
        <div className="space-y-6">
          {TIMELINE.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-background text-base shadow-lg shadow-primary/20">
                {m.emoji}
              </div>
              <Card className="p-5">
                <div className="mb-1 flex items-center gap-2 text-primary">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="text-[10px] uppercase tracking-[0.3em]">{m.data}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl" style={serif}>{m.titulo}</h3>
                <p className="mt-2 text-sm text-foreground/80">{m.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CartaNamorados() {
  return (
    <section className="relative mx-auto max-w-2xl px-5 pb-20">
      <SectionTitle>Feliz Dia dos Namorados ❤️</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Link
          to="/carta"
          className="group relative block w-full overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background/60 to-background/40 p-8 text-left shadow-2xl shadow-primary/20 backdrop-blur-md transition-transform hover:-translate-y-1"
          style={serif}
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="rounded-full border border-primary/40 bg-primary/20 p-3">
              <Heart fill="currentColor" className="h-6 w-6 text-primary" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary">Uma carta pra você</p>
            <p className="text-2xl sm:text-3xl">Feliz Dia dos Namorados ❤️</p>
            <p className="text-xs text-foreground/60">Toque para abrir</p>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

function Motivos() {
  const [i, setI] = useState(0);
  const sortear = () => {
    let n = i;
    while (n === i) n = Math.floor(Math.random() * MOTIVOS.length);
    setI(n);
  };
  return (
    <section className="relative mx-auto max-w-2xl px-5 pb-20">
      <SectionTitle>Motivos pelos quais eu te amo</SectionTitle>
      <Card className="flex min-h-48 flex-col items-center justify-center gap-6 p-8 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-foreground/90 sm:text-2xl"
            style={serif}
          >
            "{MOTIVOS[i]}"
          </motion.p>
        </AnimatePresence>
        <button
          onClick={sortear}
          className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/30 active:scale-95"
        >
          <Sparkles className="h-4 w-4" />
          Outro motivo
        </button>
      </Card>
    </section>
  );
}

function CaixaSurpresa() {
  return (
    <section className="relative mx-auto max-w-2xl px-5 pb-20">
      <SectionTitle>Caixa surpresa</SectionTitle>
      <Card className="overflow-hidden p-6 sm:p-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Link
              to="/julia"
              className="relative flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/60 shadow-2xl shadow-primary/40 transition-transform hover:scale-105 active:scale-95"
            >
              <Gift className="h-14 w-14 text-primary-foreground" />
              <div className="absolute -inset-1 -z-10 rounded-2xl bg-primary/40 blur-xl" />
            </Link>
          </motion.div>
          <p className="mt-5 text-sm text-foreground/70">Toque para abrir o seu presentinho ✨</p>
        </div>
      </Card>
    </section>
  );
}

function Sonhos() {
  const [items, setItems] = useState(SONHOS);
  const toggle = (idx: number) =>
    setItems((arr) => arr.map((it, i) => (i === idx ? { ...it, feito: !it.feito } : it)));
  return (
    <section className="relative mx-auto max-w-2xl px-5 pb-20">
      <SectionTitle>Coisas que ainda vamos fazer</SectionTitle>
      <div className="space-y-3">
        {items.map((s, i) => (
          <motion.button
            key={i}
            onClick={() => toggle(i)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex w-full items-center gap-4 rounded-2xl border border-primary/30 bg-background/50 p-4 text-left backdrop-blur-md transition-colors hover:border-primary/60"
          >
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${
                s.feito ? "border-primary bg-primary text-primary-foreground" : "border-primary/40"
              }`}
            >
              {s.feito && <Check className="h-4 w-4" />}
            </span>
            <span className={`flex-1 text-sm sm:text-base ${s.feito ? "text-foreground/50 line-through" : "text-foreground/90"}`}>
              {s.texto}
            </span>
            <MapPin className="h-4 w-4 text-primary/60" />
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function Curiosidades() {
  return (
    <section className="relative mx-auto max-w-2xl px-5 pb-20">
      <SectionTitle>O que eu desenvolvi com você</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        {CURIOSIDADES.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Card className="h-full p-5">
              <div className="text-3xl">{c.icone}</div>
              <h3 className="mt-2 font-serif text-lg" style={serif}>{c.titulo}</h3>
              <p className="mt-1 text-sm text-foreground/75">{c.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Index() {
  const [entrou, setEntrou] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("aceitou") === "1";
  });
  const t = useTempoJuntos();
  const stats = useMemo(
    () => [
      ["Dias", t.dias],
      ["Horas", t.horas],
      ["Min", t.min],
      ["Seg", t.seg],
    ] as const,
    [t],
  );

  return (
    <>
      <AnimatePresence>
        {!entrou && (
          <Pedido
            onAceito={() => {
              sessionStorage.setItem("aceitou", "1");
              setEntrou(true);
            }}
          />
        )}
      </AnimatePresence>
      <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <img
        src={bg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <Coracoes />

      {/* HERO */}
      <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-5 py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-5 text-[11px] uppercase tracking-[0.4em] text-primary"
        >
          {NOME_DELE} &nbsp;♡&nbsp; {NOME_DELA}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-serif text-4xl leading-[1.1] sm:text-5xl md:text-7xl"
          style={serif}
        >
          Você é a melhor coisa<br />
          <span className="italic text-primary">que já me aconteceu.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 max-w-xl text-base text-foreground/80 sm:text-lg"
        >
          Cada segundo com você vale mais do que toda uma vida sem. Este cantinho é só meu para te dizer o quanto te amo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-12 grid w-full max-w-sm grid-cols-4 gap-2 rounded-2xl border border-primary/30 bg-background/50 px-3 py-4 backdrop-blur-md"
        >
          {stats.map(([l, v]) => (
            <div key={l}>
              <div className="font-serif text-2xl text-primary sm:text-3xl md:text-4xl">{String(v).padStart(2, "0")}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-foreground/60">{l}</div>
            </div>
          ))}
        </motion.div>
        <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-foreground/60">juntas e contando</p>
      </section>

      <Timeline />
      <CartaNamorados />
      <Motivos />
      <CaixaSurpresa />
      <Sonhos />
      <Curiosidades />

      {/* LEMBRANCAS */}
      <section className="relative mx-auto max-w-2xl px-5 pb-20">
        <SectionTitle>Coisas que me fazem lembrar você</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/lembrancas"
            className="group relative block w-full overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background/60 to-background/40 p-8 text-left shadow-2xl shadow-primary/20 backdrop-blur-md transition-transform hover:-translate-y-1"
            style={serif}
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="rounded-full border border-primary/40 bg-primary/20 p-3">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary">Uma coleção pra você</p>
              <p className="text-2xl sm:text-3xl">Coisas que me fazem lembrar você</p>
              <p className="max-w-md text-sm italic text-foreground/70">
                Algumas músicas, personagens e detalhes sempre acabam me levando até você.
              </p>
              <p className="text-xs text-foreground/60">Toque para abrir</p>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* APAIXONADA */}
      <ApaixonadaPorJulia />

      {/* MUSICA */}
      <section className="relative mx-auto max-w-2xl px-5 pb-20">
        <SectionTitle>A nossa música</SectionTitle>
        <Card className="p-5">
          <div className="mb-4 flex items-center justify-center gap-2 text-primary">
            <Music className="h-4 w-4" />
            <span className="text-[11px] uppercase tracking-[0.3em]">play</span>
          </div>
          <div className="overflow-hidden rounded-xl">
            <iframe
              title="Nossa música"
              src={`https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="152"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
          />
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 text-center">
            <p className="text-sm font-medium text-foreground/90" style={serif}>
              Outras músicas que me lembram você
            </p>
            <p className="max-w-xs text-xs text-foreground/60">
              Porque uma música só nunca seria suficiente.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/30 active:scale-95"
            >
              <Music className="h-4 w-4" />
              Abrir playlist ❤️
            </a>
          </div>
        </Card>
      </section>

      {/* FINAL */}
      <section className="relative mx-auto max-w-2xl px-5 pb-20 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Heart fill="currentColor" className="mx-auto h-14 w-14 text-primary" />
          <p className="mt-6 font-serif text-xl italic sm:text-2xl md:text-3xl" style={serif}>
            "Eu te amo hoje, amanhã e em todas as versões da gente."
          </p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.4em] text-foreground/60">— com todo meu coração</p>
        </motion.div>
      </section>
    </main>
    </>
  );
}
