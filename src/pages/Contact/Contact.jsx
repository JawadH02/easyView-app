import './contact.css';
import Nav from '../../components/Nav/Nav';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import Faqs from '../../components/Faqs/Faqs';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const contact = (event) => {
        event.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(
                'service_cbf58to',
                'template_kt71hbl',
                form.current,
                'user_kIMIfbJhdf4ZjlDLVDNqv'
            ).then((result) => {
                setLoading(false);
                setSuccess(true);
                console.log(result.text)
            }, (error) => {
                setSuccess(false);
                console.log(error.text)
            });
    };
    return (
        <>
            <Nav />
            <section id="contact">
                <div className="contact__container">
                    <div className="contact__row">
                        <div className="contact">
                            <h2 className="contact__heading--title">
                                Contact Us
                            </h2>
                            <form id="contact__form" onSubmit={contact} ref={form}>
                                <div className="form__item">
                                    <input type="text" className="input" name="user_name" required></input>
                                    <label className="form__item--label">Name</label>
                                </div>
                                <div className="form__item">
                                    <input type="email" className="input" name="user_email" required></input>
                                    <label className="form__item--label">Email</label>
                                </div>
                                <div className="form__item">
                                    <textarea type="text" className="input" name="message" required rows={10} cols={30}></textarea>
                                    <label className="form__item--label">Message</label>
                                </div>
                                <button className="button" type="submit" value="Send">
                                    <span className="button--span"></span>
                                    <span className="button--span"></span>
                                    <span className="button--span"></span>
                                    <span className="button--span"></span>
                                    Submit
                                </button>
                            </form>
                            <div className={`modal__overlay modal__overlay--loading ${loading && "modal__overlay--visible"}`}>
                                <FontAwesomeIcon icon="spinner" className="modal__overlay--spinner" />
                            </div>
                            <div className={`modal__overlay modal__overlay--success ${success && "modal__overlay--visible"}`}>
                                <div className="wrapper"> <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                </svg>
                                </div>
                            </div>
                        </div>
                        <div className="contact__faq">
                            <Faqs />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
