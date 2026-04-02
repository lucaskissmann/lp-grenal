import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex items-center justify-center">
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h3 className="text-[#A8884A] tracking-widest text-sm mb-4">
            TRATAMENTO ANTIRREFLEXO EXCLUSIVO
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Lentes que carregam a{" "}
            <span className="text-[#B61918] drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]">
              paixão colorada
            </span>{" "}
            e o{" "}
            <span className="text-[#0093DD] drop-shadow-[0_0_15px_rgba(0,147,221,0.6)]">
              orgulho imortal
            </span>
          </h1>
          <div className="flex justify-center gap-6 mt-8 items-center">
            <Image
              className="opacity-80"
              src="/inter-logo.png"
              height={60}
              width={87}
              alt="Escudo do Internacional"
            />
            <Image
              className="opacity-80"
              src="/Gremio_logo.svg"
              height={60}
              width={87}
              alt="Escudo do Grêmio"
            />
          </div>
        </div>
      </section>
      <section className="py-24 text-center px-6 text-white">
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
    </main>
  );
}
