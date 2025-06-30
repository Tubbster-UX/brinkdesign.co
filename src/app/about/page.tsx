import Image from 'next/image';
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <main className="prose mx-auto py-8">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <h1 className="mt-6 text-4xl font-bold">About Brink Design</h1>
                <p className="mt-2 text-xl">
                    <strong>Turning Ideas Into Innovative Solutions</strong>
                    <br />
                    <strong>Low Voltage Done Right</strong>
                </p>
            </section>

            {/* Our Story */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Image
                        src="/images/about/rack.png"
                        alt="Then & now: a small church sanctuary and Alexavier installing speakers"
                        width={600}
                        height={400}
                        className="rounded-lg shadow"
                    />
                    <p>
                        Skytab Innovations has been serving South Dakota for over a decade. In 2023,
                        Alexavier Brink took over the family LLC and launched <strong>Brink Design</strong>
                        to help smaller churches get professional AV installs—without the big-firm price
                        tag. He continued taking on web and logo work on the side, but by early 2025 made
                        the full pivot: Brink Design is now 100% focused on low-voltage and AV systems
                        that just work.
                    </p>
                </div>
            </section>

            {/* Our Mission */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-6">
                    <p>
                        To empower churches, businesses, ranchers, and homeowners across western
                        South Dakota (and into Wyoming and Nebraska) with smart, scalable technology—
                        installed right the first time.
                    </p>
                </div>
            </section>

            {/* What We Do */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                        <div>
                            <h3 className="text-2xl font-medium">Network & Cabling</h3>
                            <p>
                                Structured cabling, rack builds, patch panels, PoE deployments, fiber runs—
                                your backbone for performance.
                            </p>
                        </div>
                        <Image
                            src="/images/about/network.webp"
                            alt="Cleanly labeled Cat6 cables bundled into a patch panel"
                            width={600}
                            height={400}
                            className="rounded-lg shadow"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <Image
                            src="/images/about/Unifi-Protect-Dashboard.jpg"
                            alt="Wall-mounted NVR with multiple camera feeds visible on a monitor"
                            width={600}
                            height={400}
                            className="rounded-lg shadow"
                        />
                        <div>
                            <h3 className="text-2xl font-medium">Security Systems</h3>
                            <p>
                                Surveillance cameras, access control, motion sensors, remote monitoring,
                                and alarm integrations—keeping an eye on what matters.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                        <div>
                            <h3 className="text-2xl font-medium">Audio/Video</h3>
                            <p>
                                Worship-space packages, conference-room installs, sound reinforcement,
                                projection, livestream setups, and digital signage.
                            </p>
                        </div>
                        <Image
                            src="/images/about/stage.jpg"
                            alt="Church stage with line-array speakers, stage lighting, and a projection screen active"
                            width={600}
                            height={400}
                            className="rounded-lg shadow"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <Image
                            src="/images/about/smarthome.jpeg"
                            alt="Tablet displaying a home-automation dashboard controlling lights, locks, and thermostat"
                            width={600}
                            height={400}
                            className="rounded-lg shadow"
                        />
                        <div>
                            <h3 className="text-2xl font-medium">Smart Home & Automation</h3>
                            <p>
                                Lighting control, thermostats, door locks, whole-house audio,
                                voice-control integrations—and all the gadgets that make life easier.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div>
                            <h3 className="text-2xl font-medium">Maintenance & Support</h3>
                            <p>
                                Firmware updates, system health checks, expansions, and remote diagnostics—
                                plus emergency/after-hours service. Give us a call at{' '}
                                <a href="tel:6053818290" className="text-blue-600">605-381-8290</a> and we’ll be there!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Why Choose Brink Design</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <Image
                            src="/images/about/clean-installs.png"
                            alt="Icon for Clean Installs"
                            width={100}
                            height={100}
                            className="mx-auto mb-4"
                        />
                        <h4 className="font-medium">Clean Installs</h4>
                        <p>Neat cable management and professional finishes.</p>
                    </div>

                    <div className="text-center">
                        <Image
                            src="/images/about/honest-advice.png"
                            alt="Icon for Honest Advice"
                            width={100}
                            height={100}
                            className="mx-auto mb-4"
                        />
                        <h4 className="font-medium">Honest Advice</h4>
                        <p>Vendor-neutral recommendations to fit your needs.</p>
                    </div>

                    <div className="text-center">
                        <Image
                            src="/images/about/built-to-last.png"
                            alt="Icon for Built to Last"
                            width={100}
                            height={100}
                            className="mx-auto mb-4"
                        />
                        <h4 className="font-medium">Built to Last</h4>
                        <p>Enterprise-grade hardware and best practices.</p>
                    </div>

                    <div className="text-center">
                        <img
                            src="/images/about/local-expertise.png"
                            alt="Icon for Local Expertise"
                            className="mx-auto mb-4"
                        />
                        <h4 className="font-medium">Local Expertise</h4>
                        <p>Optimized for South Dakota’s unique environments.</p>
                    </div>
                </div>
            </section>

            {/* Service Area */}
            <section className="mb-12 text-center">
                <h2 className="text-3xl font-semibold mb-4">Service Area</h2>
                <Image
                    src="/images/about/Service Area.png"
                    alt="Map highlighting western South Dakota, Wyoming, and Nebraska"
                    width={800}
                    height={400}
                    className="rounded-lg shadow mx-auto"
                />
                <p className="mt-4">Proudly serving western South Dakota, plus select projects in Wyoming and Nebraska.</p>
            </section>

            {/* Timelines */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Typical Project Timelines</h2>

                {/* Full Church AV Package */}
                <div className="mb-8">
                    <h3 className="text-2xl font-medium mb-2">Full Church AV Package</h3>
                    <ol className="list-decimal list-inside">
                        <li>Week 1: Initial consultation & site survey</li>
                        <li>Week 2: System design, equipment selection & quote</li>
                        <li>Weeks 3–4: Procurement & staging</li>
                        <li>Week 5: Installation of cabling, speakers, cameras, projectors</li>
                        <li>Week 6: Programming, calibration, staff training & hand-off</li>
                    </ol>
                </div>

                {/* Office Network */}
                <div className="mb-8">
                    <h3 className="text-2xl font-medium mb-2">Office Network</h3>
                    <ol className="list-decimal list-inside">
                        <li>Week 1: Site survey & network architecture plan</li>
                        <li>Week 2: Structured cabling & rack setup</li>
                        <li>Week 3: Switch, firewall & wireless AP configuration</li>
                        <li>Week 4: Testing, documentation & user onboarding</li>
                    </ol>
                </div>

                {/* Ranch Wi-Fi */}
                <div>
                    <h3 className="text-2xl font-medium mb-2">Ranch Wi-Fi</h3>
                    <ol className="list-decimal list-inside">
                        <li>Week 1: Coverage assessment & equipment recommendation</li>
                        <li>Week 2: Quote approval & gear procurement</li>
                        <li>Weeks 3–4: Antenna mounting, cabling & AP deployment</li>
                        <li>Week 5: Signal optimization, range testing & training</li>
                    </ol>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
