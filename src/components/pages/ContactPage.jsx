import { motion } from "framer-motion";
import ContactForm from "@/components/molecules/ContactForm";
import ApperIcon from "@/components/ApperIcon";

const ContactPage = () => {
  const offices = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 200",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 123-4567", 
      email: "ny@dreamwares.com"
    },
    {
      city: "San Francisco", 
      address: "456 Tech Street, Floor 15",
      zipCode: "San Francisco, CA 94105",
      phone: "+1 (555) 765-4321",
      email: "sf@dreamwares.com"
    },
    {
      city: "Chicago",
      address: "789 Innovation Drive, Suite 300", 
      zipCode: "Chicago, IL 60601",
      phone: "+1 (555) 987-6543",
      email: "chi@dreamwares.com"
    }
  ];

  const faqs = [
    {
      question: "How long does AgentForce implementation take?",
      answer: "Implementation timelines vary based on complexity, but most projects are completed within 4-8 weeks. We provide detailed project timelines during our initial consultation."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes! We offer comprehensive training programs for administrators and end-users to ensure your team can effectively use and maintain your AgentForce implementation."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We offer 24/7 technical support, regular system health checks, and ongoing optimization recommendations to ensure your AgentForce solution continues to perform at its best."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. We specialize in integrating AgentForce with CRM systems, helpdesk platforms, and other business applications to create a unified customer service ecosystem."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">DreamWares</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your customer service with AgentForce? Our team of experts is here to help. 
              Get in touch to discuss your project and discover how we can drive your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Let's Discuss Your Project
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you're looking to implement AgentForce from scratch or optimize your existing setup, 
                  our certified experts are ready to help you achieve your goals.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <ApperIcon name="MessageSquare" className="w-5 h-5 mr-2 text-primary-600" />
                  Quick Contact
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <ApperIcon name="Phone" className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Call Us</div>
                      <a href="tel:+15551234567" className="text-primary-600 hover:text-primary-700">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ApperIcon name="Mail" className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Email Us</div>
                      <a href="mailto:hello@dreamwares.com" className="text-primary-600 hover:text-primary-700">
                        hello@dreamwares.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ApperIcon name="Calendar" className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Schedule a Call</div>
                      <span className="text-gray-600">Available Mon-Fri, 9AM-6PM EST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
                <h4 className="font-bold text-primary-900 mb-3 flex items-center">
                  <ApperIcon name="Clock" className="w-5 h-5 mr-2" />
                  Our Response Promise
                </h4>
                <ul className="space-y-2 text-primary-800">
                  <li className="flex items-start">
                    <ApperIcon name="CheckCircle" className="w-4 h-4 mr-2 mt-0.5 text-primary-600" />
                    <span className="text-sm">Initial response within 2 hours during business hours</span>
                  </li>
                  <li className="flex items-start">
                    <ApperIcon name="CheckCircle" className="w-4 h-4 mr-2 mt-0.5 text-primary-600" />
                    <span className="text-sm">Detailed project proposal within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <ApperIcon name="CheckCircle" className="w-4 h-4 mr-2 mt-0.5 text-primary-600" />
                    <span className="text-sm">Free consultation call scheduled within 48 hours</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With offices across major business hubs, we're always close to our clients and ready to provide hands-on support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <ApperIcon name="MapPin" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="text-gray-600">
                    <div>{office.address}</div>
                    <div>{office.zipCode}</div>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-center mb-2">
                      <ApperIcon name="Phone" className="w-4 h-4 text-gray-400 mr-2" />
                      <a href={`tel:${office.phone.replace(/[^\d+]/g, '')}`} className="text-primary-600 hover:text-primary-700 text-sm">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <ApperIcon name="Mail" className="w-4 h-4 text-gray-400 mr-2" />
                      <a href={`mailto:${office.email}`} className="text-primary-600 hover:text-primary-700 text-sm">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-background to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our AgentForce services and implementation process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                  <ApperIcon name="HelpCircle" className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;