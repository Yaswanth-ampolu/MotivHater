import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import InteractiveMascot from "@/components/mascot/InteractiveMascot";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const features = gsap.utils.toArray('.feature-item');
    features.forEach((feature: any) => {
      gsap.from(feature, {
        scrollTrigger: {
          trigger: feature,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-pilowlava leading-tight">
              Stay Productive.<br />
              Get Roasted.<br />
              Win the Game.
            </h1>
            <p className="text-xl text-muted-foreground">
              AI-driven motivation that pushes you to succeed, with a little extra burn to keep you on track.
            </p>
            <Button className="cta-button">Join the Movement</Button>
          </div>
          <div className="flex justify-center">
            <InteractiveMascot />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-pilowlava text-center mb-16">
            Features that Make You Better
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-item feature-card">
              <div className="h-12 w-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Motivation</h3>
              <p className="text-muted-foreground">Get personalized roasts and motivation to keep you on track.</p>
            </div>
            <div className="feature-item feature-card">
              <div className="h-12 w-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gamification</h3>
              <p className="text-muted-foreground">Earn streaks, badges, and climb the leaderboards.</p>
            </div>
            <div className="feature-item feature-card">
              <div className="h-12 w-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Tracking</h3>
              <p className="text-muted-foreground">Monitor your progress with intelligent analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-pilowlava mb-6">
            Ready to Level Up Your Productivity?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already crushing their goals with our AI-powered motivation.
          </p>
          <Button className="cta-button">Start Now</Button>
        </div>
      </section>
    </div>
  );
}
