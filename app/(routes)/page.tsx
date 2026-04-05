import Background from "@/components/background";
import NavbarTeste from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Background variant="grenal" />
      <NavbarTeste variant="grenal" />
      <main className="flex flex-col text-white">

        {/* HERO */}
        <section className="flex items-center px-8 lg:px-12 pt-24 pb-16">
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 px-8 items-center max-w-screen-2xl w-full mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-[#A8884A] tracking-widest text-sm mb-4">
                TRATAMENTO ANTIRREFLEXO EXCLUSIVO
              </h3>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Lentes que carregam a{" "}
                <span className="text-[#B61918] drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]">
                  paixão colorada
                </span>{" "}
                e o{" "}
                <span className="text-[#0093DD] drop-shadow-[0_0_15px_rgba(0,147,221,0.6)]">
                  orgulho imortal tricolor
                </span>
              </h1>
              <p className="text-neutral-400 mt-8 text-base sm:text-xl sm:w-xl">
                Tecnologia premium de antirreflexo desenvolvida especialmente para os torcedores gaúchos. Uma lente para cada coração.
              </p>
            </div>
            <div className="flex flex-row items-start justify-center gap-3 md:gap-6 mt-8 md:mt-0">
              <Image
                src="/gremio-familia.png"
                alt="Familia com Óculos Grêmio"
                width={260}
                height={260}
                className="rounded-3xl drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] w-[150px] md:w-[250px]"
              />
              <Image
                src="/inter-familia.png"
                alt="Familia com Óculos Inter"
                width={260}
                height={260}
                className="rounded-3xl drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] w-[150px] md:w-[250px] mt-10 md:mt-16"
              />
            </div>
          </div>
        </section>

        {/* ── SEÇÃO 1: imagem esquerda, texto direita ── */}
        <section className="py-16 md:py-28 px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center max-w-screen-2xl mx-auto w-full">

            {/* imagem — aparece abaixo do texto no mobile */}
            <div className="relative h-[320px] md:h-[540px] lg:h-[620px] rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/inter-torcedor.png"
                fill
                alt="Modelo usando lentes Grenal"
                className="object-cover object-[center_31%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* texto — aparece acima no mobile */}
            <div className="order-1 md:order-2">
              <span className="text-[#A8884A] tracking-widest text-sm uppercase">
                Inovação no Varejo Óptico
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
                Forla & Brum Signature inovam com Lentes Licenciadas da Dupla Grenal
              </h2>
              <p className="text-white/60 leading-relaxed text-base lg:text-xl">
                O mercado óptico brasileiro ganha um novo vetor de crescimento focado na
                hiperpersonalização e no marketing ideológico. O laboratório Forla & Brum
                anuncia o lançamento da sua linha exclusiva de lentes oftalmológicas
                licenciadas da dupla Grenal — desenvolvidas para gerar alto valor agregado
                e forte apelo emocional.
              </p>
            </div>

          </div>
        </section>

        {/* ── SEÇÃO 3: texto esquerda, imagem direita ── */}
        <section className="py-16 md:py-28 px-8 lg:px-12 max-w-screen-2xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* texto — aparece acima no mobile */}
            <div>
              <span className="text-[#A8884A] tracking-widest text-sm uppercase">
                Tecnologia Exclusiva
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
                Marca d'água ativada por vapor
              </h2>
              <p className="text-white/60 leading-relaxed text-base lg:text-xl mb-4">
                Ao entrar em contato com a respiração ou vapor d'água, a lente revela o
                escudo do clube escolhido pelo paciente — um poderoso argumento de vendas
                no balcão.
              </p>
              <p className="text-white/60 leading-relaxed text-base lg:text-xl">
                O portfólio conta ainda com 15 camadas de antirreflexo com cor residual
                representativa de cada time, proteção contra a luz azul nociva, tratamento
                hidrofóbico e proteção UVA/UVB, entregando performance visual premium
                aliada à identidade do torcedor.
              </p>
            </div>

            {/* imagem — aparece abaixo do texto no mobile */}
            <div className="relative h-[320px] md:h-[540px] lg:h-[620px] rounded-2xl overflow-hidden">
              <Image
                src="/lentes-grenal.png"
                fill
                alt="Detalhe lente com marca d'água"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

          </div>
        </section>

        {/* ── SEÇÃO 4: imagem esquerda, texto direita ── */}
        <section className="py-16 md:py-28 px-8 lg:px-12 max-w-screen-2xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* imagem — aparece abaixo do texto no mobile */}
            <div className="relative h-[320px] md:h-[540px] lg:h-[620px] rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/gremio-torcedor.png"
                fill
                alt="Modelo lentes premium"
                className="object-cover object-[center_31%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* texto — aparece acima no mobile */}
            <div className="order-1 md:order-2">
              <span className="text-[#A8884A] tracking-widest text-sm uppercase">
                Oportunidade de Negócios
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
                Política Comercial Exclusiva para Lojas Autorizadas
              </h2>
              <p className="text-white/60 leading-relaxed text-base lg:text-xl mb-4">
                Para proteger a margem de lucro do varejista e garantir o posicionamento
                premium das lentes, a Forla & Brum estruturaram uma política comercial
                disruptiva baseada em certificação de canais.
              </p>
              <p className="text-white/60 leading-relaxed text-base lg:text-xl">
                O produto é restrito a uma rede de Lojas Autorizadas. A taxa de
                habilitação de R$ 799,00 contempla material de PDV imersivo,
                direcionamento de tráfego pelo site oficial e capacitação técnica
                obrigatória via Forla Academy.
              </p>
            </div>

          </div>
        </section>

        {/* ── SEÇÃO 6: Texto final centralizado ── */}
        <section className="py-16 md:py-28 px-8 lg:px-12 max-w-7xl mx-auto w-full text-center">
          <span className="text-[#A8884A] tracking-widest text-sm uppercase">
            Forla Academy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
            Certificação que garante excelência no atendimento
          </h2>
          <p className="text-white/60 leading-relaxed text-base lg:text-xl mb-4">
            O modelo exige que pelo menos 50% da equipe de vendas da loja seja treinada e
            aprovada com nota mínima 8 na plataforma Forla Academy — garantindo que o
            argumento de venda seja padronizado e focado nos benefícios reais da lente.
          </p>
          <p className="text-white/60 leading-relaxed text-base lg:text-xl">
            Em alinhamento às tendências de responsabilidade corporativa, parte da receita
            de cada par de lentes vendido é revertida diretamente aos clubes, fortalecendo
            o marketing de comunidade.
          </p>
        </section>

        {/* ── VÍDEO ── */}
        <section className="py-16 md:py-28 text-center px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
            O lançamento que une paixão e tecnologia
          </h2>
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/10 aspect-video">
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
    </>
  );
}