import Image from "next/image";

export default function HomePrincipal() {
  return (
    <main className="flex flex-col text-white">

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center min-h-[60vh] overflow-hidden">
        {/* Escudos desfocados ao fundo */}
        <div className="absolute inset-0 flex">
          <div className="relative w-1/2 h-full flex items-center justify-start pl-24 opacity-10">
            <Image
              src="/Gremio_logo.svg"
							height={250}
              width={250}
              alt=""
              className="object-contain scale-150 blur-sm"
            />
          </div>
          <div className="relative w-1/2 h-full flex items-center justify-end pr-24 opacity-10">
            <Image
              src="/inter-logo.png"
							height={300}
              width={300}
              alt=""
              className="object-contain scale-150 blur-sm"
            />
          </div>
        </div>

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
          <div className="flex justify-center gap-8 mt-10 items-center">
            <Image
              className="opacity-80"
              src="/Gremio_logo.svg"
              height={70}
              width={70}
              alt="Escudo do Grêmio"
            />
            <div className="w-px h-10 bg-white/20" />
            <Image
              className="opacity-80"
              src="/inter-logo.png"
              height={88}
              width={88}
              alt="Escudo do Internacional"
            />
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 1: Introdução + modelo ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#A8884A] tracking-widest text-xs uppercase">
              Inovação no Varejo Óptico
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 leading-tight">
              Forla & Brum Signature inovam com Lentes Licenciadas da Dupla Grenal
            </h2>
            <p className="text-white/60 leading-relaxed">
              O mercado óptico brasileiro ganha um novo vetor de crescimento focado na
              hiperpersonalização e no marketing ideológico. O laboratório Forla & Brum
              anuncia o lançamento da sua linha exclusiva de lentes oftalmológicas
              licenciadas da dupla Grenal — desenvolvidas para gerar alto valor agregado
              e forte apelo emocional.
            </p>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/GREMIO_SOBRE_ARBELLA.png"
              fill
              alt="Modelo usando lentes Grenal"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2: Duas imagens lado a lado ── */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-24">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/GREMIO_SOBRE_ARBELLA_2.png"
              fill
              alt="Modelo lentes Grêmio"
              className="object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <span className="text-[#0093DD] text-xs tracking-widest uppercase font-semibold">
                Imortal Tricolor
              </span>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/INTER_SOBRE_ARBELLA.png"
              fill
              alt="Modelo lentes Inter"
              className="object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <span className="text-[#B61918] text-xs tracking-widest uppercase font-semibold">
                Colorado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3: Tecnologia + modelo esquerda ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden order-2 md:order-1">
            <Image
              src="/lente-neutra.png"
              fill
              alt="Detalhe lente com marca d'água"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-[#A8884A] tracking-widest text-xs uppercase">
              Tecnologia Exclusiva
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 leading-tight">
              Marca d'água ativada por vapor
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Ao entrar em contato com a respiração ou vapor d'água, a lente revela o
              escudo do clube escolhido pelo paciente — um poderoso argumento de vendas
              no balcão.
            </p>
            <p className="text-white/60 leading-relaxed">
              O portfólio conta ainda com 15 camadas de antirreflexo com cor residual
              representativa de cada time, proteção contra a luz azul nociva, tratamento
              hidrofóbico e proteção UVA/UVB, entregando performance visual premium
              aliada à identidade do torcedor.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4: Oportunidade + modelo direita ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#A8884A] tracking-widest text-xs uppercase">
              Oportunidade de Negócios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 leading-tight">
              Política Comercial Exclusiva para Lojas Autorizadas
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Para proteger a margem de lucro do varejista e garantir o posicionamento
              premium das lentes, a Forla & Brum estruturaram uma política comercial
              disruptiva baseada em certificação de canais.
            </p>
            <p className="text-white/60 leading-relaxed">
              O produto é restrito a uma rede de Lojas Autorizadas. A taxa de
              habilitação de R$ 799,00 contempla material de PDV imersivo,
              direcionamento de tráfego pelo site oficial e capacitação técnica
              obrigatória via Forla Academy.
            </p>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/gremio-torcedor.png"
              fill
              alt="Modelo lentes premium"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 5: Grade de 3 imagens ── */}
      <section className="px-6 max-w-6xl mx-auto w-full pb-24">
        <div className="grid grid-cols-3 gap-4">
          {["/gremio-familia.png", "/inter-torcedor.png", "/inter-familia.png"].map((src, i) => (
            <div key={i} className="relative h-[360px] rounded-2xl overflow-hidden">
              <Image
                src={src}
                fill
                alt={`Modelo ${i + 6}`}
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* ── SEÇÃO 6: Texto final centralizado ── */}
      <section className="py-24 px-6 max-w-3xl mx-auto w-full text-center">
        <span className="text-[#A8884A] tracking-widest text-xs uppercase">
          Forla Academy
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 leading-tight">
          Certificação que garante excelência no atendimento
        </h2>
        <p className="text-white/60 leading-relaxed mb-4">
          O modelo exige que pelo menos 50% da equipe de vendas da loja seja treinada e
          aprovada com nota mínima 8 na plataforma Forla Academy — garantindo que o
          argumento de venda seja padronizado e focado nos benefícios reais da lente.
        </p>
        <p className="text-white/60 leading-relaxed">
          Em alinhamento às tendências de responsabilidade corporativa, parte da receita
          de cada par de lentes vendido é revertida diretamente aos clubes, fortalecendo
          o marketing de comunidade.
        </p>
      </section>

      {/* ── VÍDEO ── */}
      <section className="py-24 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          O lançamento que une paixão e tecnologia
        </h2>
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/10 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/7RerhgMmSFA?rel=0&modestbranding=1"
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