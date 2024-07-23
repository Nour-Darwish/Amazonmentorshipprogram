import React from 'react';
import FAQItem from './FAQItem';
import './FAQs.css';
import Header from './Header';

const FAQs = () => {
  const faqData = [
    { question: "What is this website about?", answer: "This website is about helping people donate and receive food to reduce food waste." },
    { question: "How do I donate food?", answer: "To donate food, you need to sign up as a donor, fill out the donation form, and submit it. Your donation will be visible to recipients." },
    { question: "Who can receive food donations?", answer: "Anyone in need of food can sign up as a recipient and request food donations through our platform." },
    { question: "Is there a cost to use this service?", answer: "No, our service is completely free for both donors and recipients." },
    { question: "How do I know if my donation has been received?", answer: "You will receive a notification once your donation has been picked up by a recipient." },
    { question: "Can I donate cooked food?", answer: "Yes, you can donate both cooked and uncooked food. Please ensure that the food is safe for consumption." },
    // Add more FAQs here as needed
  ];

  return (
    <div className="main-container">
        <Header />
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
