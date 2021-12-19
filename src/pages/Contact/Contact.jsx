import './contact.css';
import Nav from '../../components/Nav/Nav';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const contact = (event) => {
        event.preventDefault();
        
        emailjs
            .sendForm(
                'service_cbf58to',
                'template_kt71hbl',
                form.current,
                'user_kIMIfbJhdf4ZjlDLVDNqv'
            ).then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            });
    };
    return (
        <>
            <Nav />
            <section id="contact">
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
                    <div className="modal__overlay modal__overlay--loading">
                        <FontAwesomeIcon icon="spinner" className="modal__overlay--spinner" />
                    </div>
                    <div className="modal__overlay modal__overlay--success">
                        Thanks for the message! Looking forward to speaking to you soon.
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
