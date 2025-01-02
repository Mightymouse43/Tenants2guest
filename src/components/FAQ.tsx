import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How do you ensure my home is clean and well-maintained?",
      answer: "We have a team of professional cleaners and maintenance staff who will keep your home in top condition. We also conduct regular inspections to ensure everything is in working order and address any issues as quickly as possible."
    },
    {
      question: "Is there additional work on my end when partnering with you?",
      answer: "No. In fact it'll be even less work than being a traditional landlord. Think of us like a property management company that pays you to handle your tenants and fix minor maintanence issues :)"
    },
    {
      question: "How do you screen your clients to avoid bad guests?",
      answer: <>We have a 3 step compliance protocol in place that everyone has to go through before receiving any check in instructions. <Link to="/compliance" className="text-blue-600 hover:text-blue-800 underline">Check it out here</Link>.</>
    },
    {
      question: "Do you also manage other peoples listings?",
      answer: "Although we focus mainly on our personal portfolio we will  manage your listing if it fits our criteria. Our management fee is 20%"
    },
    {
      question: "How do you find clients?",
      answer: "Aside from marketing directly to local companies, we use a variety of 3rd party marketing channels to promote our listings. Channels such as, corporatehousing.com, Airbnb, Furnished Finder, booking.com etc. to fill up our space during slow seasons. "
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}