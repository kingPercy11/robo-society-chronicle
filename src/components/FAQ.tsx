import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I join the Robotics Society?",
      answer: "You can join by attending our welcome meetings at the beginning of each semester or by contacting us through our website. No prior experience is required - we welcome beginners and experts alike!"
    },
    {
      question: "Do I need programming experience to participate?",
      answer: "Not at all! While programming knowledge is helpful, we provide workshops and mentorship for beginners. Many of our successful members started with zero programming experience."
    },
    {
      question: "What programming languages do you use?",
      answer: "We primarily use Python for AI and machine learning projects, C++ for embedded systems, and Arduino IDE for microcontroller programming. We also use ROS (Robot Operating System) for complex robotics projects."
    },
    {
      question: "What equipment and tools are available?",
      answer: "Our lab is equipped with 3D printers, soldering stations, various sensors, microcontrollers (Arduino, Raspberry Pi), motors, and basic hand tools. We also have access to advanced equipment for competition projects."
    },
    {
      question: "How much does it cost to participate?",
      answer: "Basic membership is free! For competition teams, there may be small fees for specialized components and travel expenses, but we actively seek sponsorships to minimize costs for students."
    },
    {
      question: "Can beginners participate in competitions?",
      answer: "Absolutely! We have events for all skill levels. Line Following Robot (LFR) is perfect for beginners, while Robot Wars and RoboSoccer are more suitable for intermediate to advanced participants. We also offer mixed teams for mentorship."
    },
    {
      question: "What is the time commitment expected?",
      answer: "It varies based on your involvement level. Casual members can attend weekly 2-hour meetings, while competition team members typically commit 8-12 hours per week during preparation periods."
    },
    {
      question: "Do you provide training and workshops?",
      answer: "Yes! We conduct regular workshops on electronics basics, programming, 3D modeling, and specialized topics like computer vision and machine learning. We also have mentorship programs pairing beginners with experienced members."
    },
    {
      question: "What career opportunities does robotics offer?",
      answer: "Robotics opens doors to careers in automation, AI, manufacturing, healthcare technology, autonomous vehicles, space exploration, and research. Our alumni work at leading tech companies and research institutions."
    },
    {
      question: "How are competition teams formed?",
      answer: "Teams are typically formed based on interest, skill level, and availability. We encourage diverse teams with members having different strengths (programming, mechanical design, electronics). Team formation usually happens 2-3 months before competitions."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-electric to-neon bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions about joining our robotics community? Find answers to the most common inquiries below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="gradient-card border-electric/20 rounded-lg px-6 py-2 hover:border-electric/40 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-electric hover:text-electric-bright transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 pb-2 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@robosociety.edu" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-electric/10 border border-electric/30 text-electric hover:bg-electric/20 transition-colors"
            >
              Email Us
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg gradient-primary text-background font-semibold hover:shadow-electric transition-all"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;