import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "I never thought I'd appreciate getting roasted, but this app makes productivity hilarious and effective!"
  },
  {
    name: "Mike R.",
    role: "Student",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "The AI's sass keeps me motivated. My study habits have improved drastically!"
  },
  {
    name: "Emma L.",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "Finally, an app that understands my procrastination and helps me overcome it with humor."
  },
  {
    name: "James W.",
    role: "Fitness Trainer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote: "The gamification aspect is brilliant. My clients love competing with each other!"
  }
];

const beforeAfterMetrics = [
  {
    metric: "Productivity",
    before: "2 hours/day",
    after: "6 hours/day",
    improvement: "+200%"
  },
  {
    metric: "Task Completion",
    before: "40%",
    after: "85%",
    improvement: "+112.5%"
  },
  {
    metric: "Focus Time",
    before: "25 min",
    after: "50 min",
    improvement: "+100%"
  }
];

export default function Testimonials() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-pilowlava mb-6">
            What Our Users Are Saying
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real users who transformed their productivity.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className="max-w-4xl mx-auto mb-16">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-lg italic">{testimonial.quote}</p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-pilowlava text-center mb-8">
            The Results Speak for Themselves
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfterMetrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="font-semibold mb-4">{metric.metric}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Before</p>
                    <p className="text-xl font-semibold">{metric.before}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">After</p>
                    <p className="text-xl font-semibold text-primary">{metric.after}</p>
                  </div>
                </div>
                <p className="text-green-500 font-semibold mt-4">{metric.improvement}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <h2 className="text-3xl font-pilowlava mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Over 10,000+ users are already achieving their goals with our app.
          </p>
        </div>
      </div>
    </div>
  );
}
