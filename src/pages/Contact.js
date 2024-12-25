import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-us-container">
            <div className="contact-form">
                <h2>Contact Us</h2>
                <p>
                Vous avez des questions, des préoccupations, ou besoin d’aide pour accéder à nos services de soutien en santé mentale ? Notre équipe est là pour vous accompagner. N’hésitez pas à nous contacter !
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="contactNumber"
                            placeholder="Enter your contact number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">Send a Message</button>
                </form>
            </div>

            <div className="contact-details">
            <h3>Bonjour ! Nous sommes toujours là pour vous aider.</h3>
            <p>Téléphone d'urgence : +212 5 22 345 678</p>
            <p>SMS / WhatsApp : +212 6 55 987 654</p>
            <p>Email : support@dwim3aya.com</p>


                <div className="social-links">
                    <ul>
                        <li><a href="https://www.facebook.com/Zalkmi">Facebook</a></li>
                        <li><a href="https://www.twitter.com/Zalkmi">Gmail</a></li>
                        <li><a href="https://www.instagram.com/Zalkmi">Instagram</a></li>
                    </ul>
                </div>

                <div className="map-container">
                <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.73625919905!2d-7.669393424990053!3d33.572260199460494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1733441367617!5m2!1sen!2sus"
        width="100%"
        height="200"
        frameBorder="0"
        style={{
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '0',
        }}
        allowFullScreen=""
        aria-hidden="false"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        tabIndex="0"
    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
