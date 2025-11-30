import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FAQs = () => {
  const faqs = [
    {
      question: "How do I apply for a loan?",
      answer: "You call us, speak to us, and we come to you. It's that simple.",
    },
    {
      question: "Who is eligible for a loan?",
      answer: "Any Ghanaian aged 18 and above with a valid Ghana Card and a legitimate source of income or business can apply.",
    },
    {
      question: "Do I need to visit a branch?",
      answer: "No. Our system is entirely branchless. We bring the service to your doorstep.",
    },
    {
      question: "Is Bills Microcredit available outside Accra?",
      answer: "Yes. We have footprints all over the country. You can apply from anywhere in Ghana.",
    },
    {
      question: "How much can I apply for?",
      answer: "We offer loan amounts from GHS 1,000 to GHS 150,000, based on your eligibility.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">FAQ</span>
          </div> */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Got questions? We've got answers
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 px-6 overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <span className="text-primary font-bold group-hover:text-white">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6 pl-12 text-base leading-relaxed">
                  <div className="border-l-2 border-primary/30 pl-4">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
              Still have questions?
            </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Us
          </a>
          </div>
      </div>
    </section>
  );
};

export default FAQs;
