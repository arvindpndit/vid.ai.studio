import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TITLE_GEN_FAQS as faqsList } from '@/utils/constants';

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
        {faqsList.map((item) => {
          return (
            <AccordionItem value={item.question}>
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

