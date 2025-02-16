import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const roastIntensityExamples = {
  mild: "Bro really thinks he's in his productivity arc while doom scrolling 💀",
  medium: "Your productivity is giving major NPC energy. Even skibidi toilets are more active than you!",
  savage: "My guy's been stuck in a TikTok backroom longer than your last productive day. Even Rick would call you a Jerry for this level of procrastination!"
};

export default function Features() {
  const [intensity, setIntensity] = useState(50);

  const getIntensityLevel = () => {
    if (intensity < 33) return "mild";
    if (intensity < 66) return "medium";
    return "savage";
  };

  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-nighty mb-6">
            No More Excuses, Just Results
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get absolutely roasted by AI that's more savage than your group chat.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6">
            <h2 className="text-2xl font-nighty mb-4">AI-Powered Reality Checks</h2>
            <p className="text-muted-foreground mb-6">
              Our AI has watched every sitcom and knows every meme. It's here to call you out like your most brutally honest friend.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Adjust Reality Check Intensity</p>
                <Slider
                  value={[intensity]}
                  onValueChange={(value) => setIntensity(value[0])}
                  max={100}
                  step={1}
                  className="mb-4"
                />
                <div className="bg-slate-100 p-4 rounded-lg">
                  <p className="italic text-lg">{roastIntensityExamples[getIntensityLevel() as keyof typeof roastIntensityExamples]}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-nighty mb-4">Procrastination Prevention</h2>
            <p className="text-muted-foreground mb-6">
              Turn your productivity from "Rick's Garage Sale" into "Pickle Rick" level efficiency.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="font-bold text-xl">🧪</div>
                <p className="text-sm">Anti-Morty</p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="font-bold text-xl">⚡</div>
                <p className="text-sm">Focus Mode</p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="font-bold text-xl">🌀</div>
                <p className="text-sm">Portal Time</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Real-Time Reality Checks</h3>
            <p className="text-muted-foreground">
              Get called out faster than you can say "wubba lubba dub dub"
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
            <p className="text-muted-foreground">
              Watch your productivity go from Jerry to Rick levels
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Social Features</h3>
            <p className="text-muted-foreground">
              Get roasted with friends - misery loves company!
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button className="cta-button">Start Your Character Development Arc</Button>
        </div>
      </div>
    </div>
  );
}