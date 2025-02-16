import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const roastIntensityExamples = {
  mild: "Hey, maybe we should focus on that task? Just saying!",
  medium: "Another day scrolling social media? Your to-do list is crying.",
  savage: "I've seen glaciers move faster than your productivity. Let's go!"
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
          <h1 className="text-4xl md:text-5xl font-pilowlava mb-6">
            Powerful AI. Engaging Gamification.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your productivity, reimagined with cutting-edge features designed to keep you motivated and on track.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6">
            <h2 className="text-2xl font-pilowlava mb-4">AI-Powered Roasts & Motivation</h2>
            <p className="text-muted-foreground mb-6">
              Our AI adapts to your behavior, delivering personalized motivation when you need it most.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Adjust Roast Intensity</p>
                <Slider
                  value={[intensity]}
                  onValueChange={(value) => setIntensity(value[0])}
                  max={100}
                  step={1}
                  className="mb-4"
                />
                <div className="bg-slate-100 p-4 rounded-lg">
                  <p className="italic">"{roastIntensityExamples[getIntensityLevel() as keyof typeof roastIntensityExamples]}"</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-pilowlava mb-4">Gamification Elements</h2>
            <p className="text-muted-foreground mb-6">
              Turn your productivity into a game with streaks, badges, and rewards.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="font-semibold text-2xl">🔥</div>
                <p className="text-sm">5 Day Streak</p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="font-semibold text-2xl">⭐</div>
                <p className="text-sm">Top Producer</p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="font-semibold text-2xl">🏆</div>
                <p className="text-sm">Champion</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Real-Time Feedback</h3>
            <p className="text-muted-foreground">
              Get instant feedback on your progress and suggestions for improvement.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
            <p className="text-muted-foreground">
              Visualize your productivity with detailed analytics and insights.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Social Features</h3>
            <p className="text-muted-foreground">
              Compete with friends and share your achievements.
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button className="cta-button">Try These Features Now</Button>
        </div>
      </div>
    </div>
  );
}
