import Image from "next/image";
import { RiArrowDownWideFill } from "react-icons/ri";

export default function Slider() {
    
    return (
        <div className="relative w-full h-full ">
            <Image
                src="/imagenes/parasol-enrollable_01.jpg"
                alt="Parasol Enrollable"
                fill
                className="object-cover" 
                priority               
            />
            <div className="absolute lg:bottom-1/4 bottom-1/4 lg:left-28 left-10 max-w-[35rem]">
                <h1 className="lg:text-5xl text-4xl font-bold opacity-0 mb-2 animate-show-content  animation-delay-75">Parasol Enrollables</h1>
                <p className="animate-show-content opacity-0 animation-delay-400">Nuestros parasoles, disponibles en varios diseños, tamaños y colores, se adaptan a cualquier estilo. Fabricados con materiales de alta calidad, garantizan durabilidad y protección a largo plazo.</p>
            </div>
            <RiArrowDownWideFill className="text-6xl  absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 cursor-pointer hover:scale-150 transition-all"/> 
        </div>
    )
}