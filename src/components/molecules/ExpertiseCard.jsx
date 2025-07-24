import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const ExpertiseCard = ({ expertise, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group border border-gray-100"
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-2">
          {expertise.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {expertise.description}
        </p>
      </div>
      
      <ul className="space-y-2">
        {expertise.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start">
            <ApperIcon 
              name="ArrowRight" 
              className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" 
            />
            <span className="text-gray-700 text-sm">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors duration-300">
          <span>Learn More</span>
          <ApperIcon 
            name="ArrowRight" 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertiseCard;