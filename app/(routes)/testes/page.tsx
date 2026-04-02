import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 mt-12">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">

          {/* TEXTO */}
          <div className="text-center md:text-left">
            <h3 className="text-[#A8884A] tracking-widest text-sm mb-4">
              TRATAMENTO ANTIRREFLEXO EXCLUSIVO
            </h3>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Lentes que carregam a{" "}
              <span className="text-[#B61918] drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]">
                paixão colorada
              </span>{" "}
              e o{" "}
              <span className="text-[#0093DD] drop-shadow-[0_0_15px_rgba(0,147,221,0.6)]">
                orgulho imortal tricolor
              </span>
            </h1>

            <p className="text-neutral-400 mt-4">
							Tecnologia premium de antirreflexo desenvolvida especialmente para os torcedores gaúchos. Uma lente para cada coração.
            </p>
          </div>

          {/* IMAGENS */}
          <div className="flex flex-col items-center gap-6 mt-10 md:mt-0">

            {/* imagem 1 */}
            <Image
              src="/GREMIO_SOBRE_ARBELLA_2.png"
              alt="Óculos Grêmio"
              width={220}
              height={220}
              className="rounded-3xl drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] md:self-start md:ml-10"
            />

            {/* imagem 2 */}
            <Image
              src="/INTER_SOBRE_ARBELLA.png"
              alt="Óculos Inter"
              width={220}
              height={220}
              className="rounded-3xl drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] md:self-end md:mr-10"
            />

          </div>

        </div>
      </section>

			<section className="py-24 text-center px-6">
				<p className="">
					O tratamento antirreflexo é essencial para quem usa óculos no dia a dia. Ele reduz reflexos indesejados, melhora a visão noturna e o conforto em frente a telas. Agora, a Forla une essa tecnologia de ponta à paixão pelo futebol gaúcho — com reflexos que identificam o seu clube do coração.
				</p>
			</section>

      {/* VÍDEO */}
			<section className="py-24 text-center px-6">
				<h2 className="text-2xl md:text-3xl font-bold mb-8">
					O lançamento que une paixão e tecnologia
				</h2>

				<div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/10 aspect-video">
					<iframe
						src="https://www.youtube.com/embed/7RerhgMmSFA"
						title="O lançamento que une paixão e tecnologia"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-full"
					/>
				</div>
			</section>

      {/* BENEFÍCIOS */}
      <section className="py-24 px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Antirreflexo premium",
            "Design exclusivo",
            "Identidade do seu clube"
          ].map((item) => (
            <div
              key={item}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center hover:scale-105 transition"
            >
              <p>{item}</p>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}