import Image from "next/image";

const logos = [
    { src: "/logos/unifi.svg", alt: "UniFi" },
    { src: "/logos/netgear.svg", alt: "Netgear" },
    { src: "/logos/Epson.svg", alt: "Epson" },
    { src: "/logos/shure.svg", alt: "Shure" },
    { src: "/logos/logitech.svg", alt: "Logitech" },
    { src: "/logos/BirdDog_LOGO.svg", alt: "BirdDog" },
];

export default function LogoCloud() {
    return (
        <section className="py-16 border-t bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-700">
                    Brands We Work With
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="group relative h-16 w-32 flex items-center justify-center cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-lg p-3 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={100}
                                    height={50}
                                    className="object-contain filter brightness-0 saturate-100 transition-all duration-300 ease-in-out group-hover:filter-none"
                                />
                            </div>
                            {/* Optional glow effect */}
                            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl -z-10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}