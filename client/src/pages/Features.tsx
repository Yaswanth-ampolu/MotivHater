import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useState } from "react";

// Different modes with their roasts
const roastModes = {
  brainrot: {
    title: "BrainRot™ Mode",
    icon: "🧠",
    description: "For chronically online individuals",
    roasts: {
      mild: "Bro really said 'productivity arc' while watching Skibidi Toilet compilations 💀",
      medium: "Stuck in a TikTok backroom longer than your attention span fr fr",
      savage: "My guy's got more rizz with procrastination than with his deadlines no cap"
    }
  },
  sitcom: {
    title: "Sitcom Savage",
    icon: "📺",
    description: "Getting roasted by your favorite shows",
    roasts: {
      mild: "Your productivity is lower than Jerry's self-esteem",
      medium: "Not even Dr. Strange could find a timeline where you finish your tasks",
      savage: "You've got more unfinished projects than Rick has abandoned timelines"
    }
  },
  gym: {
    title: "Gym Bro Energy",
    icon: "💪",
    description: "For those who skip leg day AND work day",
    roasts: {
      mild: "Your excuses are getting more reps than your tasks bro",
      medium: "The only sets you're completing are sets of notifications",
      savage: "Your task list looking like your protein shake - chunky and neglected"
    }
  },
  doomscroller: {
    title: "Doom Scroller Elite",
    icon: "📱",
    description: "Touch grass? Never heard of it",
    roasts: {
      mild: "Another day of horizontal phone time?",
      medium: "Your screen time is higher than your productivity score",
      savage: "You've scrolled so far you've reached the backrooms of procrastination"
    }
  },
  memelord: {
    title: "Meme Lord Supreme",
    icon: "🎭",
    description: "When regular motivation isn't dank enough",
    roasts: {
      mild: "POV: You're looking at memes instead of working",
      medium: "Nobody:\nAbsolutely nobody:\nYou: Let me check Reddit one more time",
      savage: "Your task list be like 'I'm in danger' *chuckles*"
    }
  }
};

export default function Features() {
  const [currentMode, setCurrentMode] = useState("brainrot");
  const [intensity, setIntensity] = useState(50);

  const getIntensityLevel = () => {
    if (intensity < 33) return "mild";
    if (intensity < 66) return "medium";
    return "savage";
  };

  return (
    <div className="py-16 bg-gradient-to-b from-background to-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-nighty mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 animate-pulse">
            Choose Your Pain
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your preferred method of psychological damage
          </p>
        </div>

        {/* Mode Selector */}
        <div className="max-w-4xl mx-auto mb-16">
          <Tabs value={currentMode} onValueChange={setCurrentMode}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 p-2 gap-2">
              {Object.entries(roastModes).map(([key, mode]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative overflow-hidden group py-6"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">{mode.icon}</span>
                    <span className="font-semibold">{mode.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(roastModes).map(([key, mode]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <Card className="p-8 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-3xl font-nighty mb-4 flex items-center gap-3">
                    {mode.icon} {mode.title}
                  </h3>
                  <p className="text-muted-foreground mb-8">{mode.description}</p>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between mb-4">
                        <span className="text-sm font-medium">Emotional Damage Level</span>
                        <span className="text-sm text-primary font-medium">{intensity}%</span>
                      </div>
                      <Slider
                        value={[intensity]}
                        onValueChange={(value) => setIntensity(value[0])}
                        max={100}
                        step={1}
                        className="mb-8"
                      />
                      <div className="bg-slate-100 p-6 rounded-lg transform transition-transform hover:scale-105">
                        <p className="text-lg font-medium">
                          {mode.roasts[getIntensityLevel() as keyof typeof mode.roasts]}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="cta-button text-lg group relative overflow-hidden">
            <span className="relative z-10">Start Your Villain Arc</span>
            <div className="absolute inset-0 bg-primary/20 transform translate-y-full transition-transform group-hover:translate-y-0" />
          </Button>
        </div>
      </div>
    </div>
  );
}