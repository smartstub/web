import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl p-4 bg-gray-100 shadow-md text-left w-full">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="font-semibold text-[#005100]">{title}</h3>
        {isOpen ? <MinusCircle size={24} className="text-green-500" /> : <PlusCircle size={24} className="text-green-500" />}
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{content}</p>}
    </div>
  );
};

const Accordion = () => {
  const items = [
    { title: "Lorem Ipsum is simply dummy text", content: "This is the content for item 1." },
    { title: "Lorem Ipsum is simply dummy text", content: "This is the content for item 2." },
    { title: "Lorem Ipsum is simply dummy text", content: "This is the content for item 3." },
    { title: "Lorem Ipsum is simply dummy text", content: "This is the content for item 4." },
    { title: "Item 5", content: "This is the content for item 5." },
    { title: "Item 6", content: "This is the content for item 6." },
    { title: "Item 7", content: "This is the content for item 7." },
    { title: "Item 8", content: "This is the content for item 8." },
    { title: "Item 9", content: "This is the content for item 9." },
    { title: "Item 10", content: "This is the content for item 10." },
  ];

  return (
    <div className="w-full space-y-4 text-left">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
