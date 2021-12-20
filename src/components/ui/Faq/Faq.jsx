import './faq.css';

const Faq = ({ faq, toggleFAQ, index }) => {
    return (
        <div 
            className={"faq " + (faq.open ? 'open' : '')} 
            key={index}
            onClick={() => toggleFAQ(index)}>
            <div className="faq__question">
                {faq.question}
            </div>
            <div className="faq__answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default Faq
