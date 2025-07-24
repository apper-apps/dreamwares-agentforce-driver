import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import FormField from "@/components/molecules/FormField";
import ApperIcon from "@/components/ApperIcon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceInterest: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const serviceOptions = [
    { value: "", label: "Select a service" },
    { value: "implementation", label: "AgentForce Implementation" },
    { value: "customization", label: "Customization & Configuration" },
    { value: "integration", label: "System Integration" },
    { value: "training", label: "Training & Support" },
    { value: "consultation", label: "Strategy Consultation" }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    
    if (!formData.serviceInterest) {
      newErrors.serviceInterest = "Please select a service";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors and try again");
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Thank you! We'll be in touch within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        serviceInterest: "",
        message: ""
      });
      setErrors({});
      
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-medium p-8 space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Ready to Transform Your Customer Service?
        </h3>
        <p className="text-gray-600">
          Let's discuss how AgentForce can elevate your business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Your full name"
        />
        
        <FormField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="your.email@company.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
          placeholder="Your company name"
        />
        
        <FormField
          label="Service Interest"
          type="select"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          error={errors.serviceInterest}
        >
          {serviceOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </FormField>
      </div>

      <FormField
        label="Project Details"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell us about your project, current challenges, and goals..."
        rows={5}
      />

      <div className="pt-4">
        <Button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto min-w-[200px]"
        >
          {loading ? (
            <>
              <ApperIcon name="Loader2" className="w-5 h-5 mr-2 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <ApperIcon name="Send" className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </motion.form>
  );
};

export default ContactForm;