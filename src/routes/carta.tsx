import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, ArrowLeft } from "lucide-react";
import bg from "@/assets/romantic-bg.jpg";
import juliaAsset from "@/assets/julia-carta.jpeg.asset.json";

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
            <p>DIA DOS NAMORADOOOOSSS KKK</p>

            <p>Amor, desculpa, é que eu sou bobona (por você mais ainda), aí eu fico com esse humor bosta até nas cartas né? Pse, pse.</p>

            <p>Bom, Dia dos Namorados, então vamos falar sobre namoro e sobre essa pessoa incrível que eu namoro.</p>

            <p>Sabe, na minha cabeça, eu nunca namoraria, ou sla, deixava tudo acontecer. Nunca tive pressa pra isso, sempre na calma, porque eu queria encontrar o amor da minha vida e ter tido só ela.</p>

            <p>Mas também eu pensava: quem iria me querer pelo meu jeito difícil? Quem iria pela minha aparência? Quem me aceitaria pelo meu jeito?</p>

            <p>Enfim. Sempre pensei que não tinha essa capacidade toda também, de amar alguém, de saber valorizar alguém.</p>

            <p>Eu cresci em meio a uma confusão, na qual eu nem sei se existia ou se existe amor. Onde traições são normalizadas, onde não dar o mínimo é normalizado. E eu fico pensando: como alguém se submete a receber só isso?</p>

            <p>Enfim né, vai de cada pessoa.</p>

            <p>Eu não posso falar isso por mim, porque eu sou bem amada, e creio que você também se sinta assim.</p>

            <p>Eu quero te fazer a mulher mais feliz do mundo. Te dar flores ou presentes em dias aleatórios, surpresas e tudo mais.</p>

            <p>Não quero rotina, entende?</p>

            <p>Sempre fazendo de tudo pra ver esse sorrisinho no seu rosto, seus olhos lindos brilhando. (Eu fico boba só de lembrar.)</p>

            <p>Eu poderia dizer que eu te amo, mas é muito mais que isso. Eu nem sei como descrever, e talvez um dia você perceba.</p>

            <p>Mas amor, te conhecer foi algo tão bom. Mudou muito a minha perspectiva de tudo.</p>

            <p>Você acalma a minha mente barulhenta.</p>

            <p>Você é a única com quem eu quero estar em um dia no qual eu estou fodas para todos.</p>

            <p>Você é quem me tira sorrisos sinceros. Você é quem me faz feliz.</p>

            <p>Bom, para ser sincera… nunca imaginei que por agora estaria comemorando Dia dos Namorados (namoradas af 🙄). E sempre fiquei imaginando: tadinha da pessoa que namorar comigo né? Porque logo depois é meu aniversário 😛😛, nem amo KAKAKAKAK.</p>

            <p>Continuando…</p>

            <p>Bom, eu provavelmente vou estar longe de você, e por isso estou tendo que escrever esse texto. Mas o que eu mais queria era estar passando esse dia com você.</p>

            <p>Sei lá, a gente sair pra comer Mc, ver um cinema… sei lá. Nem que fosse pra ficar conversando até mais tarde na rua depois da sua escola, sabe?</p>

            <p>Complicado, amor. Mas não temos do que reclamar, poderia estar pior.</p>

            <p>Bom, vamos falar da minha namorada heheheh.</p>

            <p>Primeiro de muitos Dias dos Namorados.</p>

            <p>Amor, você é a melhor namorada do mundo. Você é tudo pra mim, minha princesa.</p>

            <p>O orgulho que eu tenho de você é indescritível.</p>

            <p>E desde o primeiro dia que eu te notei, fiquei encantada com a menina que você é. E cada dia que passava eu tinha mais certeza disso.</p>

            <p>Você tem um brilho que é só seu, único.</p>

            <p>Você é simplesmente a pessoa mais animada e com mais brilho que eu conheço, e eu amo isso.</p>

            <p>Minha família AMA você, então tira essas ideias tortas de que eles estão estranhos. Porque, se duvidar, amam mais você do que eu.</p>

            <p>E podemos dizer que, se hoje eu sou uma pessoa melhor, foi por você.</p>

            <p>Uma mulher mais responsável, que estuda mais por você e trabalha mais por você.</p>

            <p>Eu quero te fazer sentir a mais amada possível.</p>

            <p>Quero te amar tão alto ao ponto de você esquecer que já te machucaram.</p>

            <p>Quero te mostrar que é possível sim ser apaixonada e leal só por você.</p>

            <p>Te mostrar que você não merece só o mínimo, mas sim o mundo.</p>

            <p>E eu só não te dou o mundo porque, às vezes, ele é injusto com a gente.</p>

            <p>Você é aquele tipo de pessoa que me causa esperança no mundo. Esperança de que ainda existem pessoas boas.</p>

            <p>Amor, hoje eu senti sua falta o tempo todo.</p>

            <p>Na foryou estavam passando vídeos fofos de casais, e eu me imaginei com você.</p>

            <p>E o tanto que eu tô morrendo de saudade é surreal.</p>

            <p>Parece que 24 horas longe de você são como 365 dias.</p>

            <p>Meu corpo necessita do toque físico do seu.</p>

            <p>Minha cabeça tava a mil, e eu só queria estar com você.</p>

            <p>Eu só sei que eu te amo.</p>

            <p>Mas parece que falar "eu te amo" não é suficiente.</p>

            <p>Eu queria que existisse uma palavra maior, porque tudo o que eu sinto por você não cabe nessas três palavras.</p>

            <p>Você é a minha pessoa favorita.</p>

            <p>Meu lugar favorito.</p>

            <p>Meu pensamento favorito.</p>

            <p>E se eu pudesse escolher de novo, mil vezes, eu escolheria você em todas elas.</p>

            <p>Obrigada por me amar.</p>

            <p>Por cuidar de mim.</p>

            <p>Por ter entrado na minha vida e ter mudado tanta coisa sem nem perceber.</p>

            <p>Você é uma das melhores coisas que já me aconteceram.</p>

            <p>E eu espero passar muitos outros Dias dos Namorados ao seu lado.</p>

            <p>Feliz Dia dos Namorados, meu amor.</p>

            <p>Eu amo você.</p>
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