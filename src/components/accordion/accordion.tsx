import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header flex justify-between items-center px-4 py-3 cursor-pointer bg-[#f5f5f6] mb-2 border-b"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-semibold text-[20px]">{item.title}</h3>
            <span className="text-xl text-[18px] font-semibold">
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
              )}
            </span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content p-4 bg-white">
              <p className="text-[16px]">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const accordionData: AccordionItem[] = [
    {
      title: "The Corporate Gear Advantage",
      content:
        "A good business always searches for a competitive edge. Branding is one of the primary ways to gain that advantage...",
    },
    {
      title:
        "A Wide Selection of Branded Embroidered Corporate Clothing and Swag",
      content: "We offer a wide selection of branded clothing and swag...",
    },
    {
      title:
        "Choosing Your Company's Custom Branded Promotional Clothing and Accessories",
      content:
        "Choose the perfect custom branded items to promote your business...",
    },
    {
      title:
        "Setting Your Business Apart with Quality Custom Embroidered Promotional Clothing and Gear",
      content: "Stand out with high-quality custom promotional items...",
    },
    {
      title:
        "High-Quality, Long-Lasting Branded Embroidered Corporate Clothing, and Accessories",
      content: "Our products are made to last with superior quality...",
    },
    {
      title:
        "Benefits of Custom Embroidered Clothing and Swag for Your Businesses",
      content:
        "Explore the benefits of custom swag and clothing for your business...",
    },
    {
      title: "Businesses Corporate Gear Serves",
      content:
        "Learn about the businesses we serve and how we help them succeed...",
    },
  ];

  return (
    <div className="w-full mx-auto mt-10">
      <Accordion items={accordionData} />
    </div>
  );
};

export default App;
