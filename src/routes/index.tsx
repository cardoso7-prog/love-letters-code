import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import bg from "@/assets/romantic-bg.jpg";

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

// TROQUE AQUI: nomes, data de início e mensagens
const NOME_DELA = "Meu Amor";
const NOME_DELE = "Seu Nome";
const INICIO = new Date("2023-01-01T00:00:00");

const MOMENTOS = [
  { titulo: "O primeiro olhar", texto: "Quando te vi pela primeira vez, o tempo parou." },
  { titulo: "Nosso primeiro beijo", texto: "Foi como se o mundo todo fizesse sentido." },
  { titulo: "Hoje", texto: "Cada dia ao seu lado é meu lugar favorito." },
];

function useTempoJuntos() {
  const [t, setT] = useState(() => calc());
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  return t;
}
function calc() {
  const ms = Date.now() - INICIO.getTime();
  const s = Math.floor(ms / 1000);
  const dias = Math.floor(s / 86400);
  const horas = Math.floor((s % 86400) / 3600);
  const min = Math.floor((s % 3600) / 60);
  const seg = s % 60;
  return { dias, horas, min, seg };
}

function Coracoes() {
  const items = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {items.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const dur = 8 + Math.random() * 8;
        const size = 12 + Math.random() * 20;
        return (
          <motion.div
            key={i}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "linear" }}
            style={{ left: `${left}%`, position: "absolute" }}
          >
            <Heart fill="currentColor" className="text-primary/70" style={{ width: size, height: size }} />
          </motion.div>
        );
      })}
    </div>
  );
}

function Index() {
  const t = useTempoJuntos();
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <img
        src={bg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <Coracoes />

      <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-primary"
        >
          {NOME_DELE} &nbsp;♡&nbsp; {NOME_DELA}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-serif text-5xl leading-tight md:text-7xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Você é a melhor coisa<br/>
          <span className="italic text-primary">que já me aconteceu.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 max-w-xl text-lg text-foreground/80"
        >
          Cada segundo com você vale mais do que toda uma vida sem. Este cantinho é só meu para te dizer o quanto te amo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-14 grid grid-cols-4 gap-3 rounded-2xl border border-primary/20 bg-background/40 px-6 py-5 backdrop-blur-md"
        >
          {[
            ["Dias", t.dias],
            ["Horas", t.horas],
            ["Min", t.min],
            ["Seg", t.seg],
          ].map(([l, v]) => (
            <div key={l as string} className="min-w-16">
              <div className="font-serif text-3xl text-primary md:text-4xl">{String(v).padStart(2, "0")}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">{l}</div>
            </div>
          ))}
        </motion.div>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-foreground/50">juntos e contando</p>
      </section>

      <section className="relative mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-16 text-center font-serif text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Nossos momentos
        </h2>
        <div className="space-y-10">
          {MOMENTOS.map((m, i) => (
            <motion.article
              key={m.titulo}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="rounded-2xl border border-primary/20 bg-background/40 p-8 backdrop-blur-md"
            >
              <div className="mb-2 flex items-center gap-2 text-primary">
                <Heart fill="currentColor" className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.3em]">Capítulo {i + 1}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{m.titulo}</h3>
              <p className="mt-3 text-foreground/80">{m.texto}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-2xl px-6 pb-24 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Heart fill="currentColor" className="mx-auto h-16 w-16 text-primary" />
          <p className="mt-8 font-serif text-2xl italic md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            "Te amo hoje, amanhã e em todas as versões da gente."
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.4em] text-foreground/60">— com todo meu coração</p>
        </motion.div>
      </section>
    </main>
  );
}
