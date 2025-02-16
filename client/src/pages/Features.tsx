import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useState } from "react";

// Different modes of roasts
const roastModes = {
  "brainrot": {
    title: "Brainrot Mode",
    description: "For when you're too deep in TikTok's trenches",
    roasts: [
      "Bro thinks he's in his productivity arc while watching Skibidi Toilet compilations 💀",
      "My guy's been stuck in a TikTok backroom longer than his attention span",
      "POV: You're procrastinating but in 'aesthetic' way ✨"
    ]
  },
  "sitcom": {
    title: "Sitcom Mode",
    description: "Getting roasted by your favorite shows",
    roasts: [
      "Your productivity is lower than Jerry's self-esteem",
      "Even Morty's math grades are better than your focus stats",
      "You've got more excuses than Rick has interdimensional cable channels"
    ]
  },
  "meme": {
    title: "Meme Lord Mode",
    description: "When regular motivation isn't dank enough",
    roasts: [
      "Your task list: 'I'm in danger' *chuckles*",
      "Your productivity graph 📉 'This is fine' 🔥",
      "Nobody: \nAbsolutely nobody: \nYou: 'Let me check social media one more time'"
    ]
  }
};

export default function Features() {
  const [currentMode, setCurrentMode] = useState("brainrot");

  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-nighty mb-6 animate-bounce">
            Choose Your Reality Check
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get roasted in your preferred flavor of internet culture
          </p>
        </div>

        {/* Interactive Mode Selector */}
        <div className="max-w-4xl mx-auto mb-16">
          <Tabs value={currentMode} onValueChange={setCurrentMode}>
            <TabsList className="grid w-full grid-cols-3">
              {Object.entries(roastModes).map(([key, mode]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="text-lg py-6 relative overflow-hidden group"
                >
                  <span className="relative z-10">{mode.title}</span>
                  <div className="absolute inset-0 bg-primary/10 transform translate-y-full transition-transform group-hover:translate-y-0" />
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(roastModes).map(([key, mode]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-nighty mb-4">{mode.title}</h3>
                  <p className="text-muted-foreground mb-6">{mode.description}</p>
                  <div className="space-y-4">
                    {mode.roasts.map((roast, index) => (
                      <div
                        key={index}
                        className="bg-slate-100 p-4 rounded-lg transform hover:scale-105 transition-transform"
                      >
                        <p className="text-lg">{roast}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Productivity Levels */}
        <div className="mb-16">
          <h2 className="text-3xl font-nighty text-center mb-8">
            Level Up Your Productivity Game
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 transform hover:rotate-2 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Jerry Level</h3>
              <p className="text-muted-foreground">
                Still using Internet Explorer to check your tasks? Let's fix that.
              </p>
            </Card>

            <Card className="p-6 transform hover:-rotate-2 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Morty Level</h3>
              <p className="text-muted-foreground">
                You're trying, but you're still getting carried by the AI.
              </p>
            </Card>

            <Card className="p-6 transform hover:rotate-2 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Rick Level</h3>
              <p className="text-muted-foreground">
                Peak efficiency. Even the AI is impressed.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button className="cta-button text-lg group">
            Start Your Character Development Arc
            <span className="inline-block ml-2 group-hover:rotate-12 transition-transform">
              🌀
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}