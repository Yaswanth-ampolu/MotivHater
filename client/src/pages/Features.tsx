import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Shuffle } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useState } from "react";

const roastModes = {
  office: {
    title: "The Office Mode",
    icon: "🏢",
    description: "Michael Scott would be proud (or concerned)",
    roasts: {
      10: "That's what she said... about your productivity",
      20: "Your work ethic is making Creed look professional",
      30: "You're procrastinating harder than Kevin does math",
      40: "Your todo list is messier than Michael's relationships",
      50: "Even Stanley is more enthusiastic about work than you",
      60: "Dwight would be ashamed of your weak performance",
      70: "Your efficiency is lower than the branch's first-quarter sales",
      80: "Jim's pranks are more productive than your workday",
      90: "Identity theft is not a joke, but your work ethic is",
      100: "Your productivity is so bad, even Toby feels good about himself"
    }
  },
  himym: {
    title: "Barney's Playbook",
    icon: "👔",
    description: "Wait for it... you're not being LEGENDARY",
    roasts: {
      10: "Have you met productivity? Because you haven't.",
      20: "Your work ethic is like Ted's love life - desperately seeking success",
      30: "Challenge accepted! Oh wait, you never accept challenges",
      40: "You're making Marshall's bar exam prep look efficient",
      50: "Even Patrice is disappointed in you... NOBODY ASKED YOU PATRICE!",
      60: "Your procrastination skills are LEGENDARY... wait for it... DARY disappointing",
      70: "You're performing worse than The Naked Man (works 2 out of 3 times)",
      80: "Not cool, bro. The Bro Code demands better performance",
      90: "You've been LawyeredTM by your own laziness",
      100: "True story: you're the biggest disappointment since the GoT finale"
    }
  },
  brainrot: {
    title: "BrainRot™ Mode",
    icon: "🧠",
    description: "For chronically online individuals",
    roasts: {
      10: "Bro really said 'productivity arc' while watching Skibidi Toilet compilations 💀",
      20: "Not you pretending to work while being stuck in your flop era",
      30: "The gyatt is strong with this procrastination fr fr",
      40: "Stuck in a TikTok backroom longer than your attention span fr fr",
      50: "Your productivity is giving major NPC energy rn",
      60: "Ain't no way bro's still scrolling 💀",
      70: "Rizz level: -100 with these deadlines",
      80: "My guy's got more lore with procrastination than the entire MCU",
      90: "Your work ethic is more mid than a Discord mod's sleep schedule",
      100: "Even the Skibidi toilet would flush your career at this point ngl"
    }
  },
  doomscroller: {
    title: "Doom Scroller Elite",
    icon: "📱",
    description: "Touch grass? Never heard of it",
    roasts: {
      10: "Another day of horizontal phone time?",
      20: "Your screen time is higher than your productivity score",
      30: "You've scrolled so far you've reached the backrooms of procrastination",
      40: "Your thumb has more miles on it than your brain today",
      50: "Breaking: Local person discovers life exists outside Reddit",
      60: "Your feed refresh count > your task completion count",
      70: "You've reached the end of Instagram... twice... today",
      80: "Your battery is dying faster than your career prospects",
      90: "Achievement Unlocked: Professional Time Waster",
      100: "You've scrolled so far, you've found your old MySpace account"
    }
  },
  memelord: {
    title: "Meme Lord Supreme",
    icon: "🎭",
    description: "When regular motivation isn't dank enough",
    roasts: {
      10: "POV: You're looking at memes instead of working",
      20: "Nobody:\nAbsolutely nobody:\nYou: Let me check Reddit one more time",
      30: "Your task list be like 'I'm in danger' *chuckles*",
      40: "*Meanwhile, your deadlines* Am I a joke to you?",
      50: "Your productivity: Gone, reduced to atoms",
      60: "Task failed successfully: Professional procrastinator",
      70: "You're not just a clown, you're the entire circus",
      80: "Top 10 Anime Betrayals: You vs Your Responsibilities",
      90: "This isn't even my final form of procrastination",
      100: "*Boss music intensifies* Deadline approaches"
    }
  }
};

export default function Features() {
  const [currentMode, setCurrentMode] = useState("office");
  const [intensity, setIntensity] = useState(10);

  const handleRandomMode = () => {
    const modes = Object.keys(roastModes);
    const randomMode = modes[Math.floor(Math.random() * modes.length)];
    setCurrentMode(randomMode);
  };

  const getCurrentRoast = (mode: string, intensity: number) => {
    const roundedIntensity = Math.floor(intensity / 10) * 10;
    return roastModes[mode as keyof typeof roastModes].roasts[roundedIntensity as keyof typeof roastModes[keyof typeof roastModes]["roasts"]];
  };

  return (
    <div className="py-16 min-h-screen bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-nighty mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 animate-pulse">
            Select Your Roast Mode
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Because sometimes you need a reality check from your favorite shows
          </p>
        </div>

        {/* Random Mode Button */}
        <div className="flex justify-center mb-8">
          <Button 
            onClick={handleRandomMode}
            className="group flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary"
          >
            <Shuffle className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            Randomize Mode
          </Button>
        </div>

        {/* Mode Selector */}
        <div className="max-w-4xl mx-auto">
          <Tabs value={currentMode} onValueChange={setCurrentMode}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 p-2 gap-2">
              {Object.entries(roastModes).map(([key, mode]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative overflow-hidden group py-6"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">{mode.icon}</span>
                    <span className="font-semibold text-sm">{mode.title}</span>
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
                        step={10}
                        className="mb-8"
                      />
                      <div className="bg-slate-100 p-6 rounded-lg transform transition-all hover:scale-105 hover:rotate-1">
                        <p className="text-lg font-medium">
                          {getCurrentRoast(key, intensity)}
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
        <div className="text-center mt-16">
          <Button className="cta-button text-lg group relative overflow-hidden">
            <span className="relative z-10">Start Your Villain Arc</span>
            <div className="absolute inset-0 bg-primary/20 transform translate-y-full transition-transform group-hover:translate-y-0" />
          </Button>
        </div>
      </div>
    </div>
  );
}