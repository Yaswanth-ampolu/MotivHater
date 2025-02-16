import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, AlertCircle, Send } from "lucide-react";

export default function Download() {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-nighty mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Coming Soon™
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The developer is probably procrastinating... again.
          </p>
        </div>

        {/* Platforms */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl mb-4 font-nighty">Windows</h3>
            <p className="text-muted-foreground mb-4">
              Coming soon... or whenever the developer finishes binge-watching The Office.
            </p>
            <Button disabled className="w-full bg-primary/20">
              <Clock className="mr-2 h-4 w-4" /> In Development
            </Button>
          </Card>

          <Card className="p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl mb-4 font-nighty">iOS</h3>
            <p className="text-muted-foreground mb-4">
              Currently stuck in development hell, just like our developer's motivation.
            </p>
            <Button disabled className="w-full bg-primary/20">
              <Clock className="mr-2 h-4 w-4" /> In Development
            </Button>
          </Card>

          <Card className="p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl mb-4 font-nighty">Android</h3>
            <p className="text-muted-foreground mb-4">
              The developer is still learning Android... and life in general.
            </p>
            <Button disabled className="w-full bg-primary/20">
              <Clock className="mr-2 h-4 w-4" /> In Development
            </Button>
          </Card>
        </div>

        {/* Developer Roast */}
        <Card className="max-w-4xl mx-auto p-8 mb-16 bg-yellow-50/50">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                Developer Status Update
              </h3>
              <p className="text-muted-foreground italic">
                "Our developer is currently stuck in a loop of watching coding tutorials
                and procrastinating. Their productivity level is somewhere between
                'sleeping koala' and 'Internet Explorer trying to load Google Chrome'.
                We've tried motivating them with coffee, but they just added 'make coffee'
                to their todo list and never did it."
              </p>
            </div>
          </div>
        </Card>

        {/* Notify Me Form */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-nighty mb-6">Get Notified When We Launch</h2>
          <p className="text-muted-foreground mb-8">
            Or when our developer finally decides to stop watching "just one more episode".
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="flex-shrink-0">
              <Send className="mr-2 h-4 w-4" /> Notify Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
