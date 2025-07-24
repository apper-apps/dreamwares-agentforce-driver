import { motion } from "framer-motion";
import ContactForm from "@/components/molecules/ContactForm";
import ApperIcon from "@/components/ApperIcon";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "Mail",
      title: "Email Us",
      content: "hello@dreamwares.com",
      action: "mailto:hello@dreamwares.com"
    },
    {
      icon: "Phone",
      title: "Call Us",
      content: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: "MapPin",
      title: "Visit Us",
      content: "123 Business Ave, Tech City, TC 12345",
      action: "#"
    },
    {
      icon: "Clock",
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM EST",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">AgentForce Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your customer service? Our AgentForce experts are here to help you 
            design and implement the perfect solution for your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Have questions about AgentForce implementation? Need a custom solution? 
                Our team of certified Salesforce experts is ready to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ApperIcon name={info.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      {info.action.startsWith("#") ? (
                        <p className="text-gray-300 text-sm">{info.content}</p>
                      ) : (
                        <a
                          href={info.action}
                          className="text-primary-300 hover:text-primary-200 transition-colors duration-300 text-sm"
                        >
                          {info.content}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <h4 className="font-bold text-white mb-4 flex items-center">
                <ApperIcon name="Award" className="w-5 h-5 mr-2 text-accent-400" />
                Why Choose DreamWares?
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <ApperIcon name="CheckCircle" className="w-4 h-4 mr-2 mt-0.5 text-success flex-shrink-0" />
                  Certified Salesforce Partners with 5+ years experience
                </li>
                <li className="flex items-start">
                  <ApperIcon name="CheckCircle" className="w-4 h-4 mr-2 mt-0.5 text-success flex-shrink-0" />
                  100% success rate in AgentForce implementations
                </li>
                <li className="flex items-start">
                  <ApperIcon name="CheckCircle" className="w-4 h-4 mr-2 mt-0.5 text-success flex-shrink-0" />
                  Dedicated support team and ongoing maintenance
                </li>
                <li className="flex items-start">
                  <ApperIcon name="CheckCircle" className="w-4 h-4 mr-2 mt-0.5 text-success flex-shrink-0" />
                  Custom solutions tailored to your business needs
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;