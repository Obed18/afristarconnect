import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    inquiry: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      tel: "",
      inquiry: "General Inquiry",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Reach out to AfriStar for all concerns.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper teal">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">info@afristar.com</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper green">
                  <Phone className="contact-icon" />
                </div>
                <div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">+233 XX XXX XXXX</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper yellow">
                  <MapPin className="contact-icon" />
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Accra, Ghana</div>
                </div>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127067.15513183!2d-0.2664!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Accra Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="tel">Phone Number</label>
                <input
                  id="tel"
                  type="tel"
                  required
                  value={formData.tel}
                  onChange={(e) =>
                    setFormData({ ...formData, tel: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="inquiry">Inquiry Type</label>
                <select
                  id="inquiry"
                  value={formData.inquiry}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiry: e.target.value })
                  }
                >
                  <option>General Inquiry</option>
                  <option>Partner with Us</option>
                  <option>Join Program</option>
                  <option>Hire Us</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                {submitted ? "Message Sent!" : "Send Message"}
                <Send className="send-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
