import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, ArrowLeft } from "lucide-react";
import bg from "@/assets/romantic-bg.jpg";
import juliaAsset from "@/assets/julia.jpeg.asset.json";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Feliz Dia dos Namorados ❤️" },
      { name: "description", content: "Uma carta pra você, com todo meu amor." },
    ],
  }),
  component: CartaPage,
});

const serif = { fontFamily: "'Playfair Display', Georgia, serif" } as const;

const POLAROIDS = [
  { emoji: "🌅", legenda: "Nosso primeiro pôr do sol", data: "Verão" },
  { emoji: "🍦", legenda: "Sorvete às 23h", data: "Aquela noite" },
  { emoji: "🎡", legenda: "Risada que não acabava", data: "Domingo" },
  { emoji: "🌧️", legenda: "Chuva e a gente", data: "Inverno" },
];

function Memorias() {
  const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3"];
  return (
    <section className="mt-14">
      <h2 className="mb-8 text-center font-serif text-2xl sm:text-3xl" style={serif}>
        Nossas memórias favoritas
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {POLAROIDS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.04, rotate: 0 }}
            className={`${rotations[i % rotations.length]} bg-foreground/95 p-3 pb-5 shadow-2xl shadow-primary/30`}
          >
            <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-primary/30 to-primary/10 text-5xl">
              {p.emoji}
            </div>
            <p className="mt-3 text-center text-sm text-background" style={serif}>{p.legenda}</p>
            <p className="text-center text-[10px] uppercase tracking-widest text-background/60">{p.data}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CartaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <img
        src={bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

      <div className="relative mx-auto max-w-2xl px-5 py-12 sm:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          voltar
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-10 flex flex-col items-center text-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-full bg-primary/30 blur-2xl" />
            <div
              role="img"
              aria-label="Julia"
              className="h-44 w-44 rounded-full border-4 border-primary/50 shadow-2xl shadow-primary/30 sm:h-56 sm:w-56"
              style={{
                backgroundImage: `url(${juliaAsset.url})`,
                backgroundSize: "190%",
                backgroundPosition: "center 22%",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>

          <p className="mt-6 max-w-md text-sm italic text-foreground/80 sm:text-base" style={serif}>
            Eu poderia escrever mil cartas, mas ainda me perco olhando esses olhos.
          </p>

          <Heart fill="currentColor" className="mt-6 h-8 w-8 text-primary" />
          <h1
            className="mt-3 font-serif text-3xl leading-tight sm:text-5xl"
            style={serif}
          >
            Feliz Dia dos Namorados <span className="text-primary">❤️</span>
          </h1>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-primary/30 bg-background/60 p-6 shadow-2xl shadow-primary/20 backdrop-blur-md sm:p-10"
        >
          <div
            className="space-y-5 text-base leading-relaxed text-foreground/90 sm:text-lg"
            style={serif}
          >
            {/* ===== INSIRA O TEXTO DA CARTA AQUI ===== */}
            <p>
              {/* Cole aqui o texto da sua carta. */}
            </p>
            {/* ======================================== */}
          </div>

          <div className="mt-12 border-t border-primary/20 pt-6 text-right" style={serif}>
            <p className="text-sm italic text-foreground/70">Da sua namorada bobona,</p>
            <p className="mt-1 font-serif text-2xl text-primary">Yasmim ❤️</p>
          </div>

          <Memorias />
        </motion.article>

        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-5 py-2 text-xs uppercase tracking-[0.3em] text-foreground/70 backdrop-blur-md transition-colors hover:border-primary/70 hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            voltar ao site
          </Link>
        </div>
      </div>
    </main>
  );
}