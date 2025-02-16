import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const taskModes = [
  {
    name: "Work",
    icon: "💼",
    example: "Still browsing Reddit? Your productivity is lower than your standards!"
  },
  {
    name: "Study",
    icon: "📚",
    example: "Your brain cells called, they're tired of being unemployed. Open those books!"
  },
  {
    name: "Fitness",
    icon: "💪",
    example: "Your couch is not a gym equipment! Get up and move those muscles!"
  }
];

export default function HowItWorks() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-pilowlava mb-6">
            How MotivHater Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Because sometimes you need a digital villain to push you towards success.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h2 className="text-xl font-semibold mb-4">Start Your Villain Arc</h2>
            <p className="text-muted-foreground">
              Set your goals and choose your nemesis mode. Our AI will make sure you
              stay on track, whether you like it or not.
            </p>
          </Card>

          <Card className="p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h2 className="text-xl font-semibold mb-4">Face Your Laziness</h2>
            <p className="text-muted-foreground">
              Receive brutal honesty and sarcastic motivation. Our AI doesn't care
              about your excuses - only results.
            </p>
          </Card>

          <Card className="p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h2 className="text-xl font-semibold mb-4">Embrace the Hate</h2>
            <p className="text-muted-foreground">
              Turn that sass into success. Every roast brings you closer to your goals.
            </p>
          </Card>
        </div>

        {/* Interactive Demo */}
        <Card className="p-8 mb-16">
          <h2 className="text-2xl font-pilowlava mb-6">Preview Your Pain</h2>
          <Tabs defaultValue="Work" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {taskModes.map((mode) => (
                <TabsTrigger key={mode.name} value={mode.name} className="text-lg">
                  <span className="mr-2">{mode.icon}</span>
                  {mode.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {taskModes.map((mode) => (
              <TabsContent key={mode.name} value={mode.name}>
                <div className="bg-slate-100 p-6 rounded-lg">
                  <p className="text-lg mb-4">Your Daily Dose of Hate:</p>
                  <p className="italic text-xl">{mode.example}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-pilowlava mb-6">
            Stop Being Lazy. Start Now.
          </h2>
          <Link href="/download">
            <Button className="cta-button">Get Started Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}