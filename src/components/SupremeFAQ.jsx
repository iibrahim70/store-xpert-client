import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faq from "/src/assets/others/supreme-faq.svg";

const faqs = [
  {
    _id: "1",
    ques: "StoreXpert কি?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis amet voluptatem quibusdam officiis voluptatibus in iusto iure Fdolore, quidem sunt aliquam quisquam assumenda!",
  },
  {
    _id: "2",
    ques: "আপনাদের ওয়েবসাইট গুলো কি মার্কেটিং ফ্রেন্ডলি?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis amet voluptatem quibusdam officiis voluptatibus in iusto iure Fdolore, quidem sunt aliquam quisquam assumenda!",
  },
  {
    _id: "3",
    ques: "আপনাদের দিকে সাপোর্ট কিভাবে পাব?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis amet voluptatem quibusdam officiis voluptatibus in iusto iure Fdolore, quidem sunt aliquam quisquam assumenda!",
  },
  {
    _id: "4",
    ques: "আমিতো ননটেক পার্সন আমি কি ওয়েবসাইট মেনটেন করতে পারবো?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis amet voluptatem quibusdam officiis voluptatibus in iusto iure Fdolore, quidem sunt aliquam quisquam assumenda!",
  },
  {
    _id: "5",
    ques: "StoreXpert এর উৎপত্তি কিভাবে?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis amet voluptatem quibusdam officiis voluptatibus in iusto iure Fdolore, quidem sunt aliquam quisquam assumenda!",
  },
];

const SupremeFAQ = () => {
  return (
    <section className="container lg:mt-28 mt-24 ">
      <div className="border rounded-lg p-3 grid lg:grid-cols-2 grid-cols-1 items-center">
        <img className="max-w-96 mx-auto" src={faq} alt="laptop img" />
        <Accordion type="single" collapsible>
          {faqs?.map((faq) => (
            <AccordionItem key={faq?._id} value={faq?._id}>
              <AccordionTrigger>{faq?.ques}</AccordionTrigger>
              <AccordionContent>{faq?.ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SupremeFAQ;
