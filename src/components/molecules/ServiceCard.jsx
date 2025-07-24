import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group card-hover border border-gray-100"
    >
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
          <ApperIcon 
            name={service.icon} 
            className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform duration-300" 
          />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
            {service.title}
          </h3>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-3">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <ApperIcon 
              name="CheckCircle" 
              className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" 
            />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;