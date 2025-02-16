import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, AlertCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export default function Download() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Missing email",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_auxls2i',
        'template_rkth4qn',
        {
          to_email: email,
          timestamp: new Date().toLocaleString('en-US', { 
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })
        },
        'HNeAVJpdHVr72MXu0'
      );

      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when we launch. Check your email!",
      });
      setEmail('');
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-16 min-h-screen bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-nighty mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Coming Soon...
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
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="flex-1 bg-background"
            />
            <Button type="submit" disabled={isLoading} className="flex-shrink-0">
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Notify Me
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
