import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Heart, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import bg from "@/assets/romantic-bg.jpg";
import rapunzelAsset from "@/assets/rapunzel.jpg.asset.json";
import cinderelaAsset from "@/assets/cinderela.jpg.asset.json";
import bacoAsset from "@/assets/baco.jpg.asset.json";
import anaAsset from "@/assets/ana.jpg.asset.json";
import reggaeAsset from "@/assets/reggae.jpg.asset.json";
import felipeAsset from "@/assets/felipe.jpg.asset.json";
import stitchAsset from "@/assets/stitch.jpg.asset.json";
import buqueAsset from "@/assets/buque.avif.asset.json";

export const Route = createFileRoute("/lembrancas")({
  head: () => ({
    meta: [
      { title: "Coisas que me fazem lembrar você" },
      { name: "description", content: "Músicas, personagens e detalhes que sempre me levam até você." },
    ],
  }),
  component: LembrancasPage,
});

const serif = { fontFamily: "'Playfair Display', Georgia, serif" } as const;

type Item = {
  src?: string;
  emoji: string;
  titulo: string;
  citacao?: string;
  texto: string[];
};

const ITEMS: Item[] = [
  {
    src: rapunzelAsset.url,
    emoji: "🌸",
    titulo: "Rapunzel",
    citacao:
      "Eu estava olhando pela janela há dezoito anos, sonhando com o que sentiria quando visse as luzes subirem no céu. O que eu não sabia é que você seria a minha luz.",
    texto: [
      "Eu poderia trocar as luzes por qualquer outra coisa.",
      "Porque a verdade é que eu também não sabia que você seria a minha.",
      "E hoje, nos dias bons e nos dias difíceis, você continua iluminando a minha vida.",
    ],
  },
  {
    src: cinderelaAsset.url,
    emoji: "👠",
    titulo: "Cinderela",
    citacao:
      "Não importa a dor que o coração sinta, se você continuar acreditando, o sonho se tornará realidade.",
    texto: [
      "E eu continuo acreditando na nossa história.",
      "Em todos os planos que fazemos.",
      "Em todos os sonhos que ainda vamos realizar juntas.",
      "Porque você continua sendo o meu sonho favorito.",
    ],
  },
  {
    src: bacoAsset.url,
    emoji: "🎵",
    titulo: "Baco Exu do Blues",
    citacao: "Você fez morada onde ninguém conseguia ficar.",
    texto: [
      "Talvez seja por isso que eu lembre tanto de você quando escuto Baco.",
      "Porque, sem perceber, você virou lar para mim.",
      "Hoje, quando eu penso em paz, conforto e amor, eu penso em você.",
    ],
  },
  {
    src: anaAsset.url,
    emoji: "🎤",
    titulo: "Ana Vitória — Dói Sem Tanto",
    texto: [
      "Amar você me ensinou que algumas saudades existem porque existem pessoas que valem a pena sentir falta.",
      "E mesmo quando a distância aperta, eu continuo escolhendo você.",
      "Porque ter você na minha vida sempre vale qualquer espera.",
    ],
  },
  {
    src: reggaeAsset.url,
    emoji: "🎸",
    titulo: "Reggae",
    texto: [
      "Algumas músicas acalmam a mente.",
      "Você acalma a minha.",
      "É engraçado como um estilo musical inteiro consegue me lembrar de uma única pessoa.",
      "Mas quando o assunto é você, isso acontece o tempo todo.",
    ],
  },
  {
    src: felipeAsset.url,
    emoji: "🎥",
    titulo: "Felipe Neto",
    texto: [
      "Tem coisas que automaticamente me fazem lembrar você.",
      "E o Felipe Neto entrou nessa lista sem nem perceber.",
      "Toda vez que eu vejo alguma coisa relacionada a ele, eu lembro das nossas conversas e começo a sorrir igual boba.",
    ],
  },
  {
    src: stitchAsset.url,
    emoji: "💙",
    titulo: "Stitch",
    texto: [
      "Assim como a Lilo acolheu o Stitch, você me acolheu com todos os meus defeitos e me fez querer ser alguém melhor.",
    ],
  },
  {
    src: buqueAsset.url,
    emoji: "💐",
    titulo: "Buquê",
    texto: [
      "Assim como esse buquê de rosas brancas e lírios roxos, o que sinto por você é o amor mais puro, sincero e cheio de carinho que já existiu em mim.",
      "Cada rosa branca representa a certeza de um amor incondicional e para sempre, enquanto os lírios roxos representam toda a admiração que eu sinto por você e o quanto você é única na minha vida.",
      "Você é o meu recomeço, a minha paz e uma das melhores coisas que já me aconteceram.",
      "O meu maior sonho é um dia poder entregar um buquê exatamente assim nas suas mãos e ver o seu sorriso de perto.",
      "Enquanto esse dia não chega, guarde essa promessa no seu coração.",
      "Eu amo você.",
    ],
  },
  {
    emoji: "💌",
    titulo: "Sempre você",
    texto: [
      "Eu procurei você em músicas, filmes, personagens e frases bonitas.",
      "Mas a verdade é que nenhuma delas consegue explicar completamente o que eu sinto.",
      "Porque a minha parte favorita continua sendo você.",
      "Sempre você.",
    ],
  },
];

function Coracoes() {
  const [items, setItems] = useState<Array<{ left: number; delay: number; dur: number; size: number }>>([]);
  useEffect(() => {
    setItems(
      Array.from({ length: 14 }, () => ({
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

function LembrancasPage() {
  const router = useRouter();
  const voltar = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/" });
    }
  };
  const [i, setI] = useState(0);
  const total = ITEMS.length;
  const proxima = () => setI((p) => (p + 1) % total);
  const anterior = () => setI((p) => (p - 1 + total) % total);
  const item = ITEMS[i];

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/40" />
      <Coracoes />

      <div className="relative mx-auto max-w-2xl px-5 py-10">
        <Link
          to="/"
          onClick={voltar}
          className="inline-flex items-center gap-2 text-sm text-primary transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-primary">Uma coleção pra você</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl" style={serif}>
            Coisas que me fazem lembrar você
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm italic text-foreground/75 sm:text-base">
            Algumas músicas, personagens e detalhes sempre acabam me levando até você.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-md">
          <div className="overflow-hidden rounded-2xl border border-primary/30 bg-background/50 shadow-2xl shadow-primary/20 backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
              >
                {item.src && (
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-primary/30 to-primary/10">
                    <img src={item.src} alt={item.titulo} className="h-full w-full object-cover" />
                  </div>
                )}
                <div className="space-y-3 p-5 text-center">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <span className="text-lg">{item.emoji}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em]">{item.titulo}</span>
                  </div>
                  {item.citacao && (
                    <p className="text-base italic text-foreground/90 sm:text-lg" style={serif}>
                      "{item.citacao}"
                    </p>
                  )}
                  <div className="space-y-2 pt-2">
                    {item.texto.map((p, idx) => (
                      <p key={idx} className="text-sm text-foreground/80 sm:text-base">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex flex-col items-center gap-3">
            <div className="flex gap-1.5">
              {ITEMS.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-primary" : "w-1.5 bg-primary/30"}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={anterior}
                aria-label="Anterior"
                className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/30 active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </button>
              <button
                onClick={proxima}
                aria-label="Próxima"
                className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/30 active:scale-95"
              >
                Próxima
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}