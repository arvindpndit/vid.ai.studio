import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Props {
  faqList: { question: string; answer: string }[];
}

const FAQ = ({ faqList }: Props) => {
  return (
    <div>
      <h2 className="mb-4 mt-16 text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full px-2">
        {faqList.map((item) => {
          return (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQ;

