import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function About() {
  const handleEasterEgg = () => {
    const roasts = [
      "Wow, you found that. Now let's see if you can find your productivity too!",
      "Congratulations on clicking things! If only you were this active with your tasks.",
      "Oh look, someone's avoiding their real work by clicking random things!",
    ];
    alert(roasts[Math.floor(Math.random() * roasts.length)]);
  };

  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-pilowlava mb-6">
            About the Developer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The story behind the most sassily motivating productivity app.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Developer Team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-pilowlava mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              We wanted to build something that not only helps people get things
              done but also gives them a little nudge when they need it most.
              Sometimes that nudge comes with a side of sass!
            </p>
            <p className="text-lg text-muted-foreground">
              Our team combined expertise in AI, psychology, and software
              development to create a unique approach to productivity that actually
              works - and keeps you entertained while doing it.
            </p>
            <div 
              className="w-8 h-8 bg-primary/10 rounded-full cursor-pointer hidden md:block"
              onClick={handleEasterEgg}
              title="Maybe click me?"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-muted-foreground">
              We believe in pushing boundaries and creating new ways to motivate
              and inspire productivity.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Humor</h3>
            <p className="text-muted-foreground">
              Who says productivity can't be fun? We inject personality and humor
              into every interaction.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Results</h3>
            <p className="text-muted-foreground">
              At the end of the day, we're here to help you achieve your goals
              and become more productive.
            </p>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-pilowlava text-center mb-8">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-24 font-semibold">Jan 2025</div>
              <div>
                <h3 className="font-semibold">Project Launch</h3>
                <p className="text-muted-foreground">
                  The idea was born out of frustration with boring productivity apps.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 font-semibold">Coming Soon</div>
              <div>
                <h3 className="font-semibold">AI Integration</h3>
                <p className="text-muted-foreground">
                  Our upcoming AI-powered roasts and motivation system.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-pilowlava mb-6">
            Want to Join Our Journey?
          </h2>
          <Button className="cta-button">Get Started Now</Button>
        </div>
      </div>
    </div>
  );
}
