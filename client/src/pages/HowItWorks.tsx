import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    example: "Time to close those 27 browser tabs and actually do some work!"
  },
  {
    name: "Study",
    icon: "📚",
    example: "Netflix won't help you pass that exam. Let's hit the books!"
  },
  {
    name: "Fitness",
    icon: "💪",
    example: "Your gym membership is crying from neglect. Time to move!"
  }
];

export default function HowItWorks() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-pilowlava mb-6">
            How Our AI Keeps You Productive
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple yet powerful system designed to keep you motivated and on track.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h2 className="text-xl font-semibold mb-4">Set Your Tasks</h2>
            <p className="text-muted-foreground">
              Input your daily goals and choose your preferred task categories.
              Our AI will help you stay accountable.
            </p>
          </Card>

          <Card className="p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h2 className="text-xl font-semibold mb-4">Get AI Feedback</h2>
            <p className="text-muted-foreground">
              Receive personalized motivation and friendly roasts based on your progress.
              The AI adapts to your style and needs.
            </p>
          </Card>

          <Card className="p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h2 className="text-xl font-semibold mb-4">Earn & Progress</h2>
            <p className="text-muted-foreground">
              Build streaks, earn badges, and climb the leaderboards as you
              accomplish your goals.
            </p>
          </Card>
        </div>

        {/* Interactive Demo */}
        <Card className="p-8 mb-16">
          <h2 className="text-2xl font-pilowlava mb-6">Try Different Task Modes</h2>
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
                  <p className="text-lg mb-4">AI Response for {mode.name} Mode:</p>
                  <p className="italic text-xl">{mode.example}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-pilowlava mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <Button className="cta-button">Get Started Now</Button>
        </div>
      </div>
    </div>
  );
}
