import Link from "next/link";

export default function HomeContent() {
    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                    Low-Voltage Installation for Rapid City &amp; the Black Hills
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                    <p>
                        Brink Design Co. is a local low-voltage contractor based in Rapid City, South
                        Dakota. We design, install, and support the systems your building depends on
                        every day — security cameras, business WiFi, structured cabling, audio-video,
                        and smart home automation. One team handles the walkthrough, the wiring, the
                        equipment, and the training, so you always know who to call.
                    </p>

                    <h3 className="pt-2 text-xl font-semibold text-gray-900">
                        Security Cameras Without Monthly Fees
                    </h3>
                    <p>
                        We install commercial-grade{" "}
                        <Link href="/commercial-security-cameras-rapid-city" className="font-medium text-primary underline underline-offset-2">
                            security camera systems
                        </Link>{" "}
                        with local recording, so your footage stays on-site and there&rsquo;s no
                        subscription bill. View live and recorded video from your phone, get motion
                        alerts that matter, and expand the system as your property grows.
                    </p>

                    <h3 className="pt-2 text-xl font-semibold text-gray-900">
                        Business WiFi &amp; Structured Cabling That Just Works
                    </h3>
                    <p>
                        Dropped video calls, dead zones, and guest WiFi complaints usually trace back
                        to consumer gear in a commercial building. We engineer{" "}
                        <Link href="/business-wifi-networks-rapid-city" className="font-medium text-primary underline underline-offset-2">
                            business WiFi networks
                        </Link>{" "}
                        and clean, labeled structured cabling for offices, shops, warehouses, and
                        ranches — tested and documented before we leave.
                    </p>

                    <h3 className="pt-2 text-xl font-semibold text-gray-900">
                        AV for Churches, Businesses &amp; Homes
                    </h3>
                    <p>
                        From sanctuary sound and{" "}
                        <Link href="/church-av-installation-south-dakota" className="font-medium text-primary underline underline-offset-2">
                            church livestreaming
                        </Link>{" "}
                        to conference rooms and{" "}
                        <Link href="/smart-home-automation-black-hills" className="font-medium text-primary underline underline-offset-2">
                            whole-home automation
                        </Link>
                        , we build AV systems that volunteers and staff can actually run. We&rsquo;ve
                        upgraded streaming and projection for churches in Gillette and Rapid City,
                        replaced failing camera systems for restaurants, and brought reliable WiFi to
                        working ranches — see the details on our{" "}
                        <Link href="/projects" className="font-medium text-primary underline underline-offset-2">
                            recent projects
                        </Link>{" "}
                        page.
                    </p>

                    <h3 className="pt-2 text-xl font-semibold text-gray-900">
                        Serving Western South Dakota, Wyoming &amp; Nebraska
                    </h3>
                    <p>
                        We&rsquo;re headquartered in Rapid City and work throughout the Black Hills —
                        Box Elder, Summerset, Sturgis, Spearfish, Hot Springs, and Custer — plus
                        eastern Wyoming and the Nebraska panhandle. If you&rsquo;re within a few hours
                        of the Hills, we&rsquo;ll come take a look. See the full{" "}
                        <Link href="/service-area" className="font-medium text-primary underline underline-offset-2">
                            service area
                        </Link>
                        , or{" "}
                        <Link href="/contact" className="font-medium text-primary underline underline-offset-2">
                            book a site visit
                        </Link>{" "}
                        and we&rsquo;ll walk the building with you, answer questions, and follow up
                        with a clear, itemized quote — usually within a couple of business days.
                    </p>
                </div>
            </div>
        </section>
    );
}
