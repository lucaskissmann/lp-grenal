import Image from "next/image";

export default function Gremio() {
  return (
    <main className="text-white">

      <section className="min-h-screen flex items-center px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

          <div>
            <h1 className="text-5xl font-bold text-blue-400 mb-6">
              Imortal Tricolor
            </h1>

            <p className="text-neutral-400 mb-6">
              Um produto feito para quem carrega o orgulho gremista em cada detalhe.
            </p>

            <ul className="space-y-2 mb-6">
              <li>✔ Proteção antirreflexo</li>
              <li>✔ Design exclusivo Grêmio</li>
              <li>✔ Conforto e estilo</li>
            </ul>

            <button className="px-6 py-3 bg-blue-500 rounded-lg hover:scale-105 transition">
              Ver produto
            </button>
          </div>

          <Image
            src="/GREMIO SOBRE ARBELLA.png"
            alt="Produto Grêmio"
            width={400}
            height={400}
            className="rounded-xl"
          />

        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <Image
          src="/GREMIO FAMILIA.png"
          alt="Torcida Grêmio"
          width={800}
          height={500}
          className="mx-auto rounded-xl"
        />
      </section>

    </main>
  );
}