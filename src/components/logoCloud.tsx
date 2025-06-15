import Image from "next/image";

const logos = [
    { src: "/logos/unifi.svg", alt: "UniFi" },
    { src: "/logos/netgear.svg", alt: "Netgear" },
    { src: "/logos/epson.svg", alt: "Epson" },
    { src: "/logos/shure.svg", alt: "Shure" },
    { src: "/logos/logitech.svg", alt: "Logitech" },
];

export default function LogoCloud() {
    return (
        <section className="py-16 border-t mt-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">Brands We Work With</p>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {logos.map((logo, index) => (
                        <div 
                            key={index} 
                            className="group relative h-16 w-32 flex items-center justify-center cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-lg p-3 transition-all duration-300 ease-in-out transform group-hover:scale-150 group-hover:bg-white/5">
                                <Image 
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    width={100}
                                    height={50}
                                    className="object-contain grayscale opacity-60 transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}