import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/julia")({
  head: () => ({
    meta: [
      { title: "Julia ♥" },
      { name: "description", content: "Um coração feito do seu nome." },
    ],
  }),
  component: JuliaPage,
});

const N = 64;
const POINTS = Array.from({ length: N }, (_, i) => {
  const t = (i / N) * Math.PI * 2;
  const x = 16 * Math.sin(t) ** 3;
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  // tangent angle for rotation
  const dx = 3 * 16 * Math.sin(t) ** 2 * Math.cos(t);
  const dy = -(-13 * Math.sin(t) + 10 * Math.sin(2 * t) + 6 * Math.sin(3 * t) + 4 * Math.sin(4 * t));
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  return { x, y, angle, t };
});

function JuliaPage() {
  // heart bounds: x in [-16,16], y in [-17,12] roughly
  const SCALE = 1.4; // vmin units per heart-unit baseline... we'll use calc
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[#c084fc]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ position: "relative", width: "min(90vw, 90vh)", height: "min(90vw, 90vh)" }}
        >
          {POINTS.map((p, i) => {
            const left = 50 + (p.x / 18) * 45;
            const top = 50 + (p.y / 18) * 45;
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 1.2, delay: (i / N) * 1.2 }}
                style={{
                  position: "absolute",
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: `translate(-50%, -50%) rotate(${p.angle + 90}deg)`,
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 3.2vmin, 36px)",
                  letterSpacing: "0.12em",
                  color: "#c084fc",
                  textShadow:
                    "0 0 8px rgba(192,132,252,0.9), 0 0 18px rgba(168,85,247,0.7), 0 0 32px rgba(126,34,206,0.6)",
                  whiteSpace: "nowrap",
                }}
              >
                JULIA
              </motion.span>
            );
          })}
        </motion.div>
      </div>

      <Link
        to="/"
        className="fixed left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-[#c084fc]/30 bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.3em] text-[#c084fc]/80 backdrop-blur transition-colors hover:border-[#c084fc]/70 hover:text-[#c084fc]"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        voltar
      </Link>
    </main>
  );
}
