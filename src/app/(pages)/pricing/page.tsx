import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Check } from "lucide-react";
import React from "react";

export default function Enterprise() {
  return (
    <React.Fragment>
      <Header />
      <div className="p-8 md:p-12 pt-20 md:pt-24 bg-noise bg-background">
        <div className="max-w-screen-xl m-auto">
          <div className="my-24 flex flex-col items-center">
            <h3 className="text-xl text-primary text-center">Pricing</h3>
            <h2 className="pt-4 text-3xl md:text-5xl font-bold text-center">Aide works for you and your team.</h2>
            <div className="pt-16 md:pt-32 grid grid-cols-12 gap-2">
              <Card className="col-span-full md:col-span-4 rounded-2xl p-6 pb-8 md:pr-16">
                <CardHeader>
                  <CardTitle className="font-semibold text-2xl md:text-3xl">
                    Starter
                  </CardTitle>
                  <CardDescription className="md:text-lg">
                    The essentials to provide your best work for clients.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end">
                    <span className="text-3xl font-bold">Free</span>
                  </div>
                  <div className="pt-6 grid grid-cols-12 gap-2 md:text-lg">
                    <div className="col-span-1">
                      <Check className="pr-2 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">Unlimited access to Claude Sonnet for chat</div>
                    <div className="col-span-1">
                      <Check className="pr-2 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">Unlimited access to CodeLllama 7B for tab-autocomplete</div>
                    <div className="col-span-1">
                      <Check className="pr-2 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">Bring your own API key and connect to any provider</div>
                    <div className="col-span-1">
                      <Check className="pr-2 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">Up-to-date with VSCode releases</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-full md:col-span-4 rounded-2xl p-6 md:transform md:scale-125">
                <CardHeader>
                  <CardTitle className="font-semibold text-2xl">
                    Professional
                  </CardTitle>
                  <CardDescription>
                    The essentials to provide your best work for clients.
                  </CardDescription>
                </CardHeader>
                <CardContent className="md:text-sm">
                  <div className="flex items-end">
                    <span className="text-3xl font-bold">$30</span>/month
                  </div>
                  <div className="pt-6 grid grid-cols-12 gap-2">
                    <div className="col-span-1">
                      <Check className="pr-2 md:pr-1 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">Everything included in Starter</div>
                    <div className="col-span-1">
                      <Check className="pr-2 md:pr-1 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">Access Claude Opus for chat (500 queries/month)</div>
                    <div className="col-span-1">
                      <Check className="pr-2 md:pr-1 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">Unlimited access to DeepSeek Coder 33B for tab-autocomplete</div>
                    <div className="col-span-1">
                      <Check className="pr-2 md:pr-1 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">Free, no fuss upgrades to new state-of-the-art models</div>
                    <div className="col-span-1">
                      <Check className="pr-2 md:pr-1 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">24/7 customer support via Discord</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-full md:col-span-4 rounded-2xl p-6 pb-8 md:pl-16">
                <CardHeader>
                  <CardTitle className="font-semibold text-2xl md:text-3xl">
                    Enterprise
                  </CardTitle>
                  <CardDescription className="md:text-lg">
                    The essentials to provide your best work for clients.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end">
                    <span className="text-3xl font-bold">Contact us</span>
                  </div>
                  <div className="pt-6 grid grid-cols-12 gap-2 md:text-lg">
                    <div className="col-span-1">
                      <Check className="pr-2 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">Everything included in Professional</div>
                    <div className="col-span-1">
                      <Check className="pr-2 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">Self-hosted models for complete privacy</div>
                    <div className="col-span-1">
                      <Check className="pr-2 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">Fine-tuned on your codebases for best performance</div>
                    <div className="col-span-1">
                      <Check className="pr-2 stroke-green-600" size={28} />
                    </div>
                    <div className="col-span-11 pl-2">24/7 personal customer support</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
