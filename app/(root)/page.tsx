import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Planejar, Organizar, Celebrar: Seus eventos em nossa plataforma!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Descubra a maneira mais fácil e eficiente de planejar, organizar e
              aproveitar seus eventos. Venha fazer parte desta experiência!
            </p>

            <Button
              asChild
              className="button w-full sm:w-full uppercase"
              size="lg"
            >
              <Link href="#events">Ver todos os Eventos!</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="Pessoas celebrando"
            width={1200}
            height={1200}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex  flex-col gap-8 md:gap-12"
      >
        <h2 className="text-3xl">
          Confira alguns <span className="h2-bold">Eventos</span> <br /> em
          nossa plataforma!
        </h2>

        <div className="flex w-full flex-col  gap-5 md:flex-row">
          Procurar FiltroCategoria
        </div>
      </section>
    </>
  );
}
