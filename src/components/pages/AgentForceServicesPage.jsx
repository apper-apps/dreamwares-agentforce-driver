import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/molecules/ServiceCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";
import { getServices } from "@/services/api/servicesService";

const AgentForceServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadServices = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getServices();
      setServices(data);
    } catch (err) {
      setError("Failed to load services. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  if (loading) {
    return <Loading message="Loading AgentForce services..." />;
  }

  if (error) {
    return <Error message={error} onRetry={loadServices} />;
  }

  if (services.length === 0) {
    return (
      <Empty
        title="No Services Available"
        message="We're currently updating our service offerings. Please check back soon."
        icon="Settings"
      />
    );
  }

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
              AgentForce <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AgentForce solutions designed to transform your customer service operations. 
              From implementation to ongoing support, we deliver excellence at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every service is delivered by certified experts with proven track records in AgentForce implementations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={service.Id} service={service} index={index} />
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-medium p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Our Proven Implementation Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: "Search", title: "Discovery", desc: "Analyze your current setup and requirements" },
                { icon: "PenTool", title: "Design", desc: "Create customized AgentForce solution" },
                { icon: "Rocket", title: "Deploy", desc: "Implement and configure your system" },
                { icon: "TrendingUp", title: "Optimize", desc: "Monitor, train, and continuously improve" }
              ].map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={step.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your AgentForce needs. Our experts will create a 
              customized implementation plan tailored to your business objectives.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "/contact"}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <ApperIcon name="Calendar" className="w-5 h-5 mr-2 inline" />
              Schedule Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AgentForceServicesPage;