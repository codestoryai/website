import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'
import React from 'react'

export default async function Pricing() {
  return (
    <div className="min-h-screen flex justify-center p-8 md:p-12 pt-20 md:pt-24 bg-noise bg-background">
      <div className="max-w-screen-xl m-auto">
        <div className="my-24 flex flex-col items-center">
          <h3 className="text-xl text-primary text-center">Pricing</h3>
          <h2 className="pt-4 text-3xl md:text-5xl font-bold text-center">
            Aide works for you and your team.
          </h2>
          <div className="pt-16 md:pt-32 grid grid-cols-12 gap-2">
            <Card className="col-span-full md:col-span-4 rounded-2xl p-6 pb-8 md:pr-16">
              <CardHeader>
                <CardTitle className="font-semibold text-2xl md:text-3xl">Starter</CardTitle>
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
                  <div className="col-span-11 pl-2">
                    Unlimited access to Claude Sonnet for chat
                  </div>
                  <div className="col-span-1">
                    <Check className="pr-2 stroke-green-600" size={28} />
                  </div>
                  <div className="col-span-11 pl-2">
                    Unlimited access to CodeLllama 7B for tab-autocomplete
                  </div>
                  <div className="col-span-1">
                    <Check className="pr-2 stroke-green-600" size={28} />
                  </div>
                  <div className="col-span-11 pl-2">
                    Bring your own API key and connect to any provider
                  </div>
                  <div className="col-span-1">
                    <Check className="pr-2 stroke-green-600" size={28} />
                  </div>
                  <div className="col-span-11 pl-2">Up-to-date with VSCode releases</div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-full md:col-span-4 rounded-2xl p-6 md:transform md:scale-125">
              <CardHeader>
                <CardTitle className="font-semibold text-2xl">Professional</CardTitle>
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
                  <div className="col-span-11 pl-2">
                    Access Claude Opus for chat (500 queries/month)
                  </div>
                  <div className="col-span-1">
                    <Check className="pr-2 md:pr-1 stroke-green-600" size={28} />
                  </div>
                  <div className="col-span-11 pl-2">
                    Unlimited access to DeepSeek Coder 33B for tab-autocomplete
                  </div>
                  <div className="col-span-1">
                    <Check className="pr-2 md:pr-1 stroke-green-600" size={28} />
                  </div>
                  <div className="col-span-11 pl-2">
                    Free, no fuss upgrades to new state-of-the-art models
                  </div>
                  <div className="col-span-1">
                    <Check className="pr-2 md:pr-1 stroke-green-600" size={28} />
                  </div>
                  <div className="col-span-11 pl-2">
                    Weekly office hours with the engineering team
                  </div>
                  <div className="col-span-1">
                    <Check className="pr-2 md:pr-1 stroke-green-600" size={28} />
                  </div>
                  <div className="col-span-11 pl-2">24/7 customer support via Discord</div>
                </div>
              </CardContent>
              <CardFooter className="mt-4 flex flex-col justify-center">
                <p className="text-xs text-center">
                  We&apos;re in the process of integrating with our payment partner. In the
                  meanwhile, if you&apos;re interested, we&apos;d love to personally onboard you
                  and understand your workflows & feature requests.
                </p>
                <Button className="mt-4" size="default" variant="outline">
                  <a
                    href="https://calendly.com/founders-codestory/onboarding-to-aide-for-professional"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center">
                      <p className="text-2xl">
                        Speak with us{' '}
                        <span aria-label="waving hand" aria-labelledby="waving hand" role="img">
                          👋
                        </span>
                      </p>
                    </div>
                  </a>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </div>
    </div>
  )
}
