import Background from "@/components/background";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Background variant="grenal" />
      <Navbar variant="grenal" />
      <main className="flex flex-col text-white">

        {/* HERO */}
        <section className="flex items-center px-6 pt-10 sm:pt-20 pb-12">
          <div className="grid md:grid-cols-[3fr_2fr] gap-6 lg:gap-10 items-center max-w-6xl w-full mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-[#A8884A] tracking-widest text-sm mb-3">
                TRATAMENTO ANTIRREFLEXO EXCLUSIVO
              </h3>
              <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Lentes que carregam a{" "}
                <span className="text-[#B61918] drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]">
                  paixão colorada
                </span>{" "}
                e o{" "}
                <span className="text-[#0093DD] drop-shadow-[0_0_15px_rgba(0,147,221,0.6)]">
                  orgulho imortal tricolor
                </span>
              </h1>
              <p className="text-neutral-400 mt-6 text-sm sm:text-base max-w-md mx-auto md:mx-0">
                Tecnologia premium de antirreflexo desenvolvida especialmente para os torcedores gaúchos. Uma lente para cada coração.
              </p>
            </div>
            <div className="flex flex-row items-start justify-center gap-3 lg:gap-6 mt-8 md:mt-0">
              <Image
                src="/gremio-familia.png"
                alt="Familia com Óculos Grêmio"
                width={260}
                height={260}
                className="rounded-3xl drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] w-[130px] md:w-[150px] lg:w-[210px]"
              />
              <Image
                src="/inter-familia.png"
                alt="Familia com Óculos Inter"
                width={260}
                height={260}
                className="rounded-3xl drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] w-[130px] md:w-[150px] lg:w-[210px] md:mt-10 lg:mt-16"
              />
            </div>
          </div>
        </section>

        {/* ── SEÇÃO 1: imagem esquerda, texto direita ── */}
        <section className="py-14 md:py-24 px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-14 items-center max-w-6xl mx-auto w-full">
            <div className="relative h-[260px] md:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/inter-torcedor.png"
                fill
                alt="Modelo usando lentes Grenal"
                className="object-cover object-[center_31%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-[#A8884A] tracking-widest text-sm uppercase">
                Inovação no Varejo Óptico
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-5 leading-tight">
                Forla & Brum Signature inovam com Lentes Licenciadas da Dupla Grenal
              </h2>
              <p className="text-white/60 leading-relaxed text-sm lg:text-base">
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
        <section className="py-14 md:py-24 px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-14 items-center max-w-6xl mx-auto w-full">
            <div>
              <span className="text-[#A8884A] tracking-widest text-sm uppercase">
                Tecnologia Exclusiva
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-5 leading-tight">
                Marca d'água ativada por vapor
              </h2>
              <p className="text-white/60 leading-relaxed text-sm lg:text-base mb-4">
                Ao entrar em contato com a respiração ou vapor d'água, a lente revela o
                escudo do clube escolhido pelo paciente — um poderoso argumento de vendas
                no balcão.
              </p>
              <p className="text-white/60 leading-relaxed text-sm lg:text-base">
                O portfólio conta ainda com 15 camadas de antirreflexo com cor residual
                representativa de cada time, proteção contra a luz azul nociva, tratamento
                hidrofóbico e proteção UVA/UVB, entregando performance visual premium
                aliada à identidade do torcedor.
              </p>
            </div>
            <div className="relative h-[260px] md:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden">
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
        <section className="py-14 md:py-24 px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-14 items-center max-w-6xl mx-auto w-full">
            <div className="relative h-[260px] md:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/gremio-torcedor.png"
                fill
                alt="Modelo lentes premium"
                className="object-cover object-[center_31%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-[#A8884A] tracking-widest text-sm uppercase">
                Oportunidade de Negócios
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-5 leading-tight">
                Política Comercial Exclusiva para Lojas Autorizadas
              </h2>
              <p className="text-white/60 leading-relaxed text-sm lg:text-base mb-4">
                Para proteger a margem de lucro do varejista e garantir o posicionamento
                premium das lentes, a Forla & Brum estruturaram uma política comercial
                disruptiva baseada em certificação de canais.
              </p>
              <p className="text-white/60 leading-relaxed text-sm lg:text-base">
                O produto é restrito a uma rede de Lojas Autorizadas. A taxa de
                habilitação de R$ 799,00 contempla material de PDV imersivo,
                direcionamento de tráfego pelo site oficial e capacitação técnica
                obrigatória via Forla Academy.
              </p>
            </div>
          </div>
        </section>

        {/* ── SEÇÃO 6: Texto final centralizado ── */}
        <section className="py-14 md:py-24 px-6 lg:px-10 max-w-5xl mx-auto w-full text-center">
          <span className="text-[#A8884A] tracking-widest text-sm uppercase">
            Forla Academy
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-5 leading-tight">
            Certificação que garante excelência no atendimento
          </h2>
          <p className="text-white/60 leading-relaxed text-sm lg:text-base mb-4">
            O modelo exige que pelo menos 50% da equipe de vendas da loja seja treinada e
            aprovada com nota mínima 8 na plataforma Forla Academy — garantindo que o
            argumento de venda seja padronizado e focado nos benefícios reais da lente.
          </p>
          <p className="text-white/60 leading-relaxed text-sm lg:text-base">
            Em alinhamento às tendências de responsabilidade corporativa, parte da receita
            de cada par de lentes vendido é revertida diretamente aos clubes, fortalecendo
            o marketing de comunidade.
          </p>
        </section>

        {/* ── VÍDEO ── */}
        <section className="py-14 md:py-24 text-center px-6 lg:px-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-10">
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
    </>
  );
}