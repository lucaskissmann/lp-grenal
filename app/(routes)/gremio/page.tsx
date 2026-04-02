// app/gremio/page.tsx
import Image from "next/image";
import { ProductSpecs } from "@/components/product-specs";

export default function Gremio() {
  return (
    <main className="text-white">

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto w-full">

          <div>
            <span className="text-sm tracking-widest uppercase text-blue-400/60 mb-3 block">
              Linha Licenciada
            </span>

            {/* MOBILE: emblema acima, tudo numa linha */}
            <div className="flex flex-col items-start gap-y-3 mb-4">
              <div className="flex gap-x-3 items-end">
                <Image
                  src="/Gremio_logo.svg"
                  height={60}
                  width={60}
                  alt="Escudo do Grêmio."
                />
                <h1
                  style={{ fontFamily: "'Trump Soft Pro', sans-serif" }}
                  className="flex items-end gap-x-2 text-[3rem] sm:text-[4rem] font-medium text-blue-400 leading-none whitespace-nowrap"
                >
                  <span
                    style={{ fontFamily: "'Segoe UI', sans-serif" }}
                    className="text-[3.5rem] sm:text-7xl xs:text-xl font-bold italic text-white leading-none"
                  >
                    AR
                  </span>
                  IMORTAL TRICOLOR
                </h1>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-400 mb-10 leading-relaxed">
              Um produto feito para quem carrega o orgulho gremista em cada detalhe.
              Tecnologia de ponta com a identidade do seu clube.
            </p>

            <ProductSpecs
              accentColor="text-blue-400"
              badgeBorderColor="border-blue-400/30"
              badgeBgColor="bg-blue-500/30"
              badgeTextColor="text-blue-300"
              pillBorderColor="border-blue-400/50"
              pillBgColor="bg-blue-500/30"
              pillTextColor="text-blue-300"
              residualLabel="Residual Azul Inovador"
            />

            <button className="mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500 hover:bg-blue-400 rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base tracking-wide">
              Saiba Mais
            </button>
          </div>

          <div className="relative">
            <Image
              src="/GREMIO_SOBRE_ARBELLA.png"
              alt="Produto Grêmio"
              width={500}
              height={500}
              className="rounded-2xl w-full"
            />
          </div>

        </div>
      </section>

      {/* ── IMAGEM FAMÍLIA ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/gremio-familia.png"
            alt="Família Grêmio"
            width={1000}
            height={600}
            className="w-full object-cover"
          />
        </div>
      </section>

    </main>
  );
}