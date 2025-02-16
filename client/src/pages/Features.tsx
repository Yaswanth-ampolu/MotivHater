import { Card } from "@/components/ui/card";
import { MemeLord, HypeGoblin, StreamTroll, CloutFiend, DankWizard, VibeBot } from "@/components/Characters";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Shuffle } from "lucide-react";
import { useState } from "react";

const roastModes = {
  office: {
    title: "The Office Mode",
    icon: "https://media.giphy.com/media/IjJ8FVe4HVk66yvlV2/giphy.gif",
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
    icon: "https://media.giphy.com/media/MbAd0DqqFU6XYKtORp/giphy.gif",
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
  b99: {
    title: "Brooklyn 99",
    icon: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzVhcjI1enQ5dGRyMm03ZnNoMHMzaWVwM215emJiOW5idW9oNGxmaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o8doT5DaMjfH3paHC/giphy.gif",
    description: "Cool cool cool cool cool... not your productivity though",
    roasts: {
      10: "Your productivity is lower than Hitchcock and Scully combined",
      20: "Even Gina pays more attention to work than you (when she's not on her phone)",
      30: "Title of your productivity tape: The Disappointment",
      40: "Your work ethic makes Charles question his loyalty",
      50: "Not even Terry's yogurt can fuel your productivity",
      60: "Jake's solving cases faster than you're completing tasks",
      70: "Amy would need a whole new binder system for your excuses",
      80: "Your performance review is looking worse than the Jimmy Jab Games",
      90: "Captain Holt would find your efficiency... disappointing",
      100: "PAIN. That's what your productivity brings to the workplace."
    }
  },
  friends: {
    title: "F.R.I.E.N.D.S",
    icon: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczcyZ3A3czVzYjRsOTd1eXJqNnBiYXE1YXptcDJodnM5Mm5xa3cyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/njSItrBaoW9fa/giphy.gif",
    description: "Could your productivity BE any lower?",
    roasts: {
      10: "Your work ethic is like Ross's marriages - brief and unsuccessful",
      20: "Even Joey's acting career is more productive than you",
      30: "You're taking more breaks than Central Perk's couch",
      40: "Not even Phoebe's songs are as chaotic as your workflow",
      50: "Monica would have a breakdown seeing your organization skills",
      60: "Your excuses are longer than Ross's 'We were on a break!' saga",
      70: "Chandler's job was less confusing than your productivity strategy",
      80: "Rachel was better at serving coffee than you are at your tasks",
      90: "Your work schedule is messier than Joey's eating habits",
      100: "PIVOT! Because your current strategy clearly isn't working"
    }
  },
  brainrot: {
    title: "BrainRot™ Mode",
    icon: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWRraG5kdW5kdmJpOHhudmVwMnR2dm50N3RxZjd0eHJvNXNlbHA4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ml1fIFlQgC9gHejiwL/giphy.gif",
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
    icon: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanBsZ3M2ZmlqMDM3Y20zc2VmbGt2NHEzdWxhemNhZGJzMmhhc2g2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d8Q9w4dgnnrB3VmOl9/giphy.gif",
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
  rickmorty: {
    title: "Rick & Morty",
    icon: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3EzOWNtajVjMHJ0b2Y0Y3J2aGIwc3lnanA4aGJ3bmVvZTBrem9qaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41JU9pUyosHzWyuQ/giphy.gif",
    description: "Wubba Lubba Procrastination",
    roasts: {
      10: "Your productivity is lower than Jerry's self-esteem",
      20: "Even Morty's math grades are better than your focus stats",
      30: "You've got more excuses than Rick has portal fluid",
      40: "Your work ethic makes Jerry look like a genius",
      50: "Not even interdimensional cable can distract from your laziness",
      60: "Your productivity is like a Meeseeks - painful to watch",
      70: "Even the Council of Ricks wouldn't approve your methods",
      80: "Your efficiency is lower than Morty's chances of graduation",
      90: "Not even Rick's portal gun can find a dimension where you're productive",
      100: "Your work ethic is making the Galactic Federation look organized"
    }
  },
  gym: {
    title: "Gym Bro",
    icon: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExazZ4dmlxdmp0cXkzMTdmbjB1bW9uMGowZ3U2NHQzcTI0OXY0dWg4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fdNE70u9SqFAPXWKPe/giphy.gif",
    description: "Do you even lift (your productivity)?",
    roasts: {
      10: "Bro, your excuses are getting more reps than your tasks",
      20: "You're skipping more tasks than leg days",
      30: "Your productivity is weaker than your first gym selfie",
      40: "Taking longer breaks than between super sets",
      50: "Your task list needs more protein",
      60: "Stop scrolling gym TikToks and start your productivity sets",
      70: "Your focus is shakier than post-leg day",
      80: "Failing more tasks than PR attempts",
      90: "Your productivity routine needs a personal trainer",
      100: "Even your pre-workout can't save this performance"
    }
  }
};

export default function Features() {
  const [currentMode, setCurrentMode] = useState(Object.keys(roastModes)[0]);
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

  const currentModeData = roastModes[currentMode as keyof typeof roastModes];

  return (
    <div className="py-16 min-h-screen bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl md:text-6xl font-nighty mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 animate-pulse">
            Get Roasted in Style
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Randomize your reality check from your favorite shows
          </p>
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <Button 
              onClick={handleRandomMode}
              className="group flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Shuffle className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
              <span className="text-lg font-medium">Switch Roast Mode</span>
            </Button>
          </div>
        </div>

        {/* Current Mode Display */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-4 mb-6">
              <img 
                src={currentModeData.icon} 
                alt={currentModeData.title}
                className="w-16 h-16 object-cover rounded-lg shadow-md"
              />
              <div>
                <h2 className="text-3xl font-nighty">{currentModeData.title}</h2>
                <p className="text-muted-foreground">{currentModeData.description}</p>
              </div>
            </div>

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
                    {getCurrentRoast(currentMode, intensity)}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Character Showcase */}
<div className="max-w-4xl mx-auto mt-16">
  <h2 className="text-2xl font-semibold text-center mb-8">Meet Your Productivity Frenemies</h2>
  <div className="flex flex-wrap justify-center gap-8">
    <MemeLord />
    <HypeGoblin />
    <StreamTroll />
    <CloutFiend />
    <DankWizard />
    <VibeBot />
  </div>
  <p className="text-center text-muted-foreground mt-4">
    These characters will guide (and roast) you on your productivity journey
  </p>
</div>

{/* Gamification Stats */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <h3 className="text-2xl font-bold text-primary">7</h3>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="text-2xl font-bold text-primary">23</h3>
              <p className="text-sm text-muted-foreground">Tasks Completed</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="text-2xl font-bold text-primary">5</h3>
              <p className="text-sm text-muted-foreground">Achievement Unlocked</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="text-2xl font-bold text-primary">#4</h3>
              <p className="text-sm text-muted-foreground">Leaderboard Rank</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}