import './faqs.css';
import { useState } from 'react';
import Faq from '../ui/Faq/Faq';
const Faqs = () => {

    const [faqs, setFaqs] = useState([
        {
            question: 'Do you keep your movie collection updated?',
            answer: 'We call to the TMDB API. This means whenever they add a new movie it can be displayed on this site.',
            open: true,
        },
        {
            question: 'Do the summary of the movies contain spoilers?',
            answer: 'We get out data from TMDB and they make sure summary does not spoil.',
            open: false,
        },
        {
            question: 'How might I get in touch with you if I have more questions?',
            answer: 'Shoot us an email by filling out the form on this page!',
            open: false,
        },
    ])

    const toggleFAQ = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        })
        )
    }
    return (
        <div id="Faq">
            <div className="faq__row">
                <div className="faq__container">
                    <div className="faqs">
                        <h1 className="faq__heading--title">
                            FAQ
                        </h1>
                        <div className="faq__card">
                            {faqs.map((faq, index) => (
                                <Faq faq={faq} index={index} toggleFAQ={toggleFAQ} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs