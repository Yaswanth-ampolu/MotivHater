import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "wouter";
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-background to-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-nighty leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Stay Productive.<br />
              Get Roasted.<br />
              Embrace the Hate.
            </h1>
            <p className="text-xl text-muted-foreground">
              The AI productivity app that doesn't care about your feelings - only your success.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.4,
                type: "spring",
                stiffness: 200
              }}
            >
              <Link href="/download">
                <Button 
                  className="cta-button"
                  asChild
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Villain Arc
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-nighty text-center mb-16">
            Features that Make You Better
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="h-12 w-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Hate</h3>
              <p className="text-muted-foreground">Get personalized roasts that actually make you work harder.</p>
            </div>
            <div className="feature-card">
              <div className="h-12 w-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Villain Points</h3>
              <p className="text-muted-foreground">Turn your productivity into power. Earn points through pure spite.</p>
            </div>
            <div className="feature-card">
              <div className="h-12 w-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground">Watch your transformation from lazy to legendary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Preview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-nighty">Level Up Your Life</h2>
              <p className="text-xl text-muted-foreground">
                Track your progress, earn achievements, and compete with friends in a fun, game-like environment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">7</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Tasks Done</div>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">#3</div>
                  <div className="text-sm text-muted-foreground">Leaderboard</div>
                </div>
              </div>
            </div>
            <div className="relative bg-slate-100 rounded-lg p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Recent Achievements</h3>
                <div className="h-[400px] overflow-y-auto space-y-4 pr-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">🔥</div>
                    <div>
                      <div className="font-semibold">Couch Escape Artist</div>
                      <div className="text-sm text-muted-foreground">Finally got up after 3 hours of "just 5 more minutes"</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">🧠</div>
                    <div>
                      <div className="font-semibold">Brain.exe Started</div>
                      <div className="text-sm text-muted-foreground">Used your brain before coffee - achievement unlocked!</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">📱</div>
                    <div>
                      <div className="font-semibold">Social Media Survivor</div>
                      <div className="text-sm text-muted-foreground">Went 2 hours without checking Instagram. Are you okay?</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">🎯</div>
                    <div>
                      <div className="font-semibold">Procrastination Pro</div>
                      <div className="text-sm text-muted-foreground">Completed a task that's been on your list for 3 months</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">⚡</div>
                    <div>
                      <div className="font-semibold">Speed Demon</div>
                      <div className="text-sm text-muted-foreground">Finished work in normal time instead of last minute</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">🦾</div>
                    <div>
                      <div className="font-semibold">Deadline Warrior</div>
                      <div className="text-sm text-muted-foreground">Submitted something early - who are you?</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">🎮</div>
                    <div>
                      <div className="font-semibold">Gaming Resistance</div>
                      <div className="text-sm text-muted-foreground">"Just one more game" was actually just one game</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">📚</div>
                    <div>
                      <div className="font-semibold">Reading Rainbow</div>
                      <div className="text-sm text-muted-foreground">Read documentation instead of random copying from Stack Overflow</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replace the final CTA with */}
      <div className="text-center mt-8">
        <Link href="/download">
          <Button className="cta-button">Download MotivHater</Button>
        </Link>
      </div>
    </div>
  );
}