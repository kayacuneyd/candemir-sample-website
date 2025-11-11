
import React, { useState } from 'react';

const servicesOptions = [
  "Herrenhaarschnitt",
  "Bartpflege",
  "Nassrasur",
  "Kinder & Teen Schnitt",
  "Komplettpaket (Schnitt & Bart)"
];

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(servicesOptions[0]);
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) {
      setError('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
    }
    setError('');

    const message = `Neue Terminanfrage:\n\nName: ${name}\nTelefon: ${phone}\nService: ${service}\nWunschdatum: ${date}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "4915205775326"; // Replace with actual number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">Termin anfragen</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-4"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Füllen Sie das Formular aus, um uns eine Terminanfrage per WhatsApp zu senden. Wir melden uns so schnell wie möglich bei Ihnen zurück!
          </p>
        </div>
        
        <div className="max-w-xl mx-auto bg-brand-gray p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 rounded-md bg-brand-dark border border-gray-600 focus:ring-2 focus:ring-brand-red focus:outline-none transition-shadow" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">Telefon</label>
              <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-3 rounded-md bg-brand-dark border border-gray-600 focus:ring-2 focus:ring-brand-red focus:outline-none transition-shadow" required />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-300 font-medium mb-2">Dienstleistung</label>
              <select id="service" value={service} onChange={e => setService(e.target.value)} className="w-full p-3 rounded-md bg-brand-dark border border-gray-600 focus:ring-2 focus:ring-brand-red focus:outline-none transition-shadow appearance-none">
                {servicesOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="date" className="block text-gray-300 font-medium mb-2">Wunschdatum</label>
              <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} className="w-full p-3 rounded-md bg-brand-dark border border-gray-600 focus:ring-2 focus:ring-brand-red focus:outline-none transition-shadow" required />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button type="submit" className="w-full bg-brand-red text-white font-bold py-3 px-6 rounded-md text-lg hover:bg-red-800 transition-colors duration-300">
              Anfrage per WhatsApp senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
