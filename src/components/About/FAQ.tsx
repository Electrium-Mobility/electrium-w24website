import {useState} from 'react';

function FAQ() {
    const [selectedFaq, setSelectedFaq] = useState(null);

    // Array of FAQ objects
    const faqs = [
        { question: 'What does Electrium Mobility do?', answer: 'We are a student-led design team whose purpose is to help students learn how to build electric vehicles.' },
        { question: 'Are there any specific competitions the team participates in?', answer: "There aren't any external competitions at the moment, but we have an internal competition at the end of the term where you will race your electric vehicles against each other." },
        { question: 'What teams can I join?', answer: "We have 6 subteams: electrical, firmware, mechanical, web development, finance, and management/marketing. You can only join 1 subteam, but everyone is welcome to participate in other subteam's meetings and learning new skills!" },
        { question: 'What projects can I work on?', answer: "Currently, you can choose to work on 1 of 3 projects: an electric bike, electric skateboard, and a onewheel. At the end of the term, you will be able to race your electric vehicles against each other!" },
        { question: 'Is prior experience required to join the team?', answer: "Nope, all beginners are welcome! If you have no experience, will teach you as long as you are interested!" },
        { question: "Can I switch between sub-teams if I'm interested in multiple areas", answer: "Yes, you may switch between sub-teams." },
        // Add more FAQs as needed
    ];

    // Function to handle FAQ selection
    const handleFaqSelection = (index) => {
        setSelectedFaq(index === selectedFaq ? null : index);
    };

    return(
        <ul className="mx-auto lg:w-1/2 md:w-full" style={{ listStyleType: 'none', padding: 0 }}> 
            {faqs.map((faq, index) => (

            <li key={index} className="mt-8">
                {/* FAQ question */}
                <div onClick={() => handleFaqSelection(index)}>
                    <h2>
                        <button className="rounded-lg shadow-md border-none cursor-pointer bg-gray-100 dark:bg-zinc-800 focus:bg-gray-200 focus:text-green-600 dark:focus:bg-zinc-700 font-nunito flex text-base justify-between items-center p-5 w-full" aria-expanded="false">
                            <span>{faq.question}</span>
                            <svg data-accordion-icon className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </h2>
                </div>
                    {selectedFaq === index && <p className="bg-gray-100 dark:bg-zinc-700 p-4 rounded-lg">{faq.answer}</p>}
            </li>

            ))}
        </ul>
    );
}

export default FAQ;