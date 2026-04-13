import Background from "@/components/background";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Background variant="grenal" />
      <Navbar variant="grenal" />
      <main className="flex flex-col text-white">

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
              <p className="text-white/60 leading-relaxed text-sm lg:text-base mb-4">
                Já pensou em carregar o amor pelo seu clube estampado no seu olhar? A união perfeita entre a mais alta tecnologia visual e a paixão que move o Rio Grande do Sul acaba de chegar: conheça as Lentes Grenal.
              </p>
              <p className="text-white/60 leading-relaxed text-sm lg:text-base">
                Mais do que um item de saúde visual, estas lentes são um símbolo de identidade para quem vive e respira as cores do Grêmio ou do Internacional.
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
                O Segredo Revelado pelo Vapor
              </h2>
              <p className="text-white/60 leading-relaxed text-sm lg:text-base">
                O grande destaque é uma tecnologia surpreendente e exclusiva: a marca d'água inteligente. O escudo do seu time do coração fica invisível no dia a dia, mas basta o contato com o vapor d'água ou com a sua respiração para que o emblema do seu clube apareça magicamente na lente.
              </p>
              <p className="text-white/60 leading-relaxed text-sm lg:text-base">
                É o detalhe que faltava para mostrar que sua lealdade não tem limites.
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
                Tecnologia Premium para sua Visão
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-5 leading-tight">
                O melhor para a saúde dos seus olhos
              </h2>
              <p className="text-white/60 leading-relaxed text-sm lg:text-base">
                Além do orgulho de torcedor, você garante o que há de melhor para a saúde dos seus olhos:
              </p>
              <ul className="text-white/60 leading-relaxed text-sm lg:text-base space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#A8884A] mt-1">✦</span>
                  <span><span className="text-white font-medium">Identidade nas Cores:</span> 15 camadas de antirreflexo com o brilho residual que representa o seu time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A8884A] mt-1">✦</span>
                  <span><span className="text-white font-medium">Proteção Total:</span> Bloqueio contra a luz azul nociva (ideal para quem usa telas) e proteção completa contra raios UVA/UVB.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A8884A] mt-1">✦</span>
                  <span><span className="text-white font-medium">Conforto Visual:</span> Tratamento hidrofóbico que facilita a limpeza e mantém sua visão sempre nítida.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A8884A] mt-1">✦</span>
                  <span><span className="text-white font-medium">Produto Oficial:</span> Ao adquirir suas lentes, parte da receita é revertida diretamente para o seu clube, fortalecendo ainda mais o seu time.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SEÇÃO 6: Texto final centralizado ── */}
        <section className="py-14 md:py-24 px-6 lg:px-10 max-w-5xl mx-auto w-full text-center">
          <span className="text-[#A8884A] tracking-widest text-sm uppercase">
            Onde encontrar?
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-5 leading-tight">
            Confira onde você pode encontrar as Lentes Grenal
          </h2>
          <p className="text-white/60 leading-relaxed text-sm lg:text-base mb-4">
            Para garantir a exclusividade e a qualidade técnica, as Lentes Grenal não estão em qualquer lugar. Elas são encontradas apenas em Lojas Autorizadas, onde a equipe de vendas passou por um rigoroso treinamento técnico para oferecer a melhor experiência para você, torcedor.
          </p>
          <p className="text-white/60 leading-relaxed text-sm lg:text-base">
            Procure o selo de loja autorizada e leve a paixão pelo seu clube para o seu dia a dia com a tecnologia Forla
          </p>
          <Link href="/redirect">
            <button className="cursor-pointer mt-10 px-10 py-2.5 bg-[#222F3F] hover:bg-[#2e3f54] text-white/70 hover:text-white text-sm font-medium tracking-wide rounded-lg transition-colors duration-200">
              Saiba Mais
            </button>
          </Link>
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