import { motion } from "framer-motion";
import ExpertiseCard from "@/components/molecules/ExpertiseCard";
import expertiseData from "@/services/mockData/expertise.json";

const ExpertiseSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">AgentForce</span> Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deep knowledge across all AgentForce capabilities. We leverage the full power of the platform 
            to create seamless, intelligent customer service experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((expertise, index) => (
            <ExpertiseCard key={expertise.Id} expertise={expertise} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl shadow-medium p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Trusted by Industry Leaders
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-600">Cases Resolved Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                <div className="text-gray-600">First Contact Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">30s</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-gray-600">System Uptime</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
              <p className="text-lg text-gray-700 italic mb-4">
                "DreamWares transformed our customer service operations with AgentForce. 
                Response times improved by 70% and customer satisfaction reached an all-time high."
              </p>
              <div className="font-semibold text-gray-900">
                Sarah Johnson, Customer Success Director
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;