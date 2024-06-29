import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Planejar, Organizar, Celebrar: Seus eventos em nossa plataforma!
            </h1>
            <p>
              Descubra a maneira mais fácil e eficiente de planejar, organizar e
              aproveitar seus eventos. Crie momentos inesquecíveis, celebre suas
              conquistas e comemora com quem você mais ama. Tudo isso em um só
              lugar, com a praticidade e segurança que você merece. Venha fazer
              parte desta experiência!
            </p>

            <Button className="rounded-full"> Todos os Eventos!</Button>
          </div>
        </div>
      </section>
    </>
  );
}
