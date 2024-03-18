import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import AideDesktopSS from "@/public/aide-desktop.png";
import Image from "next/image";
import React from "react";

export default function Enterprise() {
    return (
        <React.Fragment>
            <Header />
            <div className="p-8 md:p-12 pt-48 bg-noise bg-background">
                <div className="w-full max-w-screen-xl m-auto">
                    <div className="grid grid-cols-12 overflow-hidden">
                        <div className="col-span-4 flex flex-col justify-center">
                            <p className="uppercase">Aide for enterprises.</p>
                            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Give your developers superpowers.</h2>
                            <p className="mt-6 text-xl leading-8">Empower them with the most secure and best AI-assisted coding experience today.</p>
                        </div>
                        <div className="col-start-6 col-span-7 scale-150 origin-top-left">
                            <Image
                                alt="Aide screenshot"
                                className="rounded-lg"
                                priority
                                src={AideDesktopSS}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
