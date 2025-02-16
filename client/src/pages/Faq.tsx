import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is MotivHater?",
    answer: "MotivHater is a unique productivity app that uses reverse psychology and humor to motivate you by playfully roasting your procrastination habits."
  },
  {
    question: "Can I customize the intensity of the roasts?",
    answer: "Yes! You can adjust the sass level from 'gentle nudge' to 'brutal honesty' in your settings. We want to motivate you, not traumatize you!"
  },
  {
    question: "Does it work for different types of goals?",
    answer: "Absolutely! Whether you're studying, working out, or trying to build a business empire, our AI adapts its approach to your specific goals and industry."
  },
  {
    question: "How does AI track my progress?",
    answer: "Our AI monitors your task completion, time spent on activities, and overall patterns to provide personalized feedback and adjusts its motivation strategy accordingly."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security seriously. All your information is encrypted and we never share your procrastination secrets with anyone!"
  },
  {
    question: "Can I use it with my team?",
    answer: "Yes! We offer team features where you can compete, collaborate, and get collectively roasted for missing deadlines. Team building through shared suffering!"
  },
  {
    question: "What if I don't like the roasts?",
    answer: "You can adjust the tone or turn them off completely - but where's the fun in that? Our users usually find the roasts motivating and entertaining!"
  }
];

export default function Faq() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-pilowlava mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about getting roasted by AI for better productivity.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        
      </div>
    </div>
  );
}
