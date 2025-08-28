
const ContactForm = () => (
  <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded shadow text-center">
    <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
    <p className="mb-6 text-gray-700 dark:text-gray-300">Click the button below to fill out my contact form. Your message will be sent directly to me via Google Forms.</p>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSckZ30A1ELfjncEffJdaChDMusxOXAGQDpTc6UzUah0ZbtcEw/viewform?usp=sf_link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-all duration-200 text-lg"
    >
      Open Contact Form
    </a>
  </div>
);

export default ContactForm;
