import Image from "next/image";
import Slider from "./component/slider";
import Sliderprojects from "./component/sliderprjects";
import Gridimage from "./component/gridimage";

export default function Home() {
  return (
    <main>
      <section className="h-screen">
        <Slider />
      </section>
      <section className="">
        <div className="pt-32">
          <h1 className="text-center text-4xl mb-20">Categorias</h1>
          <Sliderprojects />
        </div>
      </section>
      <section className="">
        <div className="pt-32 px-10">
          <h1 className="text-center text-4xl mb-20">Proyectos</h1>
          <Gridimage />
        </div>
      </section>
      <footer className="bg-zinc-900 px-14 py-10 mt-10 grid grid-cols-3 items-center">
        <div className="lg:col-span-1 col-span-3  p-6">
          <h1 className="font-bold mb-3 text-xl text-center">Parasoles Montagut</h1>
          <p className="text-sm">Mejoramos continuamente con un equipo competente y altos estándares de calidad en diseño, elaboración e instalación de parasoles. Promovemos las mejores prácticas y garantizamos el cumplimiento de especificaciones de calidad.</p>
        </div>
        <div className="lg:col-span-1 col-span-3  p-6">
          <h1 className="font-bold mb-3 text-xl text-center">Contacto</h1>
          <p className="text-sm text-center">
            <strong>Email:</strong> ofertas@parasolesmontagut.com <br />
            <strong>Telefono:</strong> (+57) 318-615-3078 – (+57) 316-375-6868 – (+607) 6563250
          </p>
        </div>
        <div className="lg:col-span-1 col-span-3 p-6">
          <h1 className="font-bold mb-3 text-xl text-center">Ubicación</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3960.2460093509617!2d-73.05092824385567!3d6.980271500000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6847b11c0fcf3b%3A0xf466ab3ac38c4ab!2sParasoles%20Montagut!5e0!3m2!1ses-419!2sco!4v1722289428569!5m2!1ses-419!2sco"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </main>
  );
}
