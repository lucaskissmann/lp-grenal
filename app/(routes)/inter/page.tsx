import Image from "next/image";

export default function Inter() {
  return (
    <main className="text-white">

      <section className="min-h-screen flex items-center px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

          <div>
            <h1 className="text-5xl font-bold text-red-500 mb-6">
              Colorado
            </h1>

            <p className="text-neutral-400 mb-6">
              Para quem vive a paixão colorada dentro e fora dos estádios.
            </p>

            <ul className="space-y-2 mb-6">
              <li>✔ Alta tecnologia antirreflexo</li>
              <li>✔ Estilo marcante</li>
              <li>✔ Identidade colorada</li>
            </ul>

            <button className="px-6 py-3 bg-red-500 rounded-lg hover:scale-105 transition">
              Ver produto
            </button>
          </div>

          <Image
            src="/INTER_SOBRE_ARBELLA_2.png"
            alt="Produto Inter"
            width={400}
            height={400}
            className="rounded-xl"
          />

        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <Image
          src="/INTER TORCEDOR.png"
          alt="Torcida Inter"
          width={800}
          height={500}
          className="mx-auto rounded-xl"
        />
      </section>
    </main>
  );
}