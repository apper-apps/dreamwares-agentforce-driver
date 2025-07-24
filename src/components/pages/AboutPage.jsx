import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const AboutPage = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Salesforce Architect",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "15+ years in Salesforce implementations with expertise in AgentForce and Service Cloud."
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Specializes in custom integrations and advanced AgentForce configurations."
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Ensures seamless client onboarding and ongoing support for maximum ROI."
    }
  ];

  const values = [
    {
      icon: "Target",
      title: "Results-Driven",
      description: "We focus on measurable outcomes that drive real business value for our clients."
    },
    {
      icon: "Users",
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships based on trust and transparency."
    },
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "We stay ahead of Salesforce updates to bring you the latest AgentForce capabilities."
    },
    {
      icon: "Award",
      title: "Excellence",
      description: "Certified experts delivering premium solutions with attention to every detail."
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">DreamWares</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in AgentForce implementation and Salesforce excellence. 
              We transform customer service operations through intelligent automation and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, DreamWares emerged from a simple vision: to help businesses unlock 
                the full potential of Salesforce AgentForce. Our founders recognized the gap between 
                powerful technology and practical implementation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we're proud to be a certified Salesforce partner with over 50 successful 
                AgentForce implementations. Our team combines deep technical expertise with 
                real-world business understanding to deliver solutions that truly make a difference.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold gradient-text mb-1">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-hard p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
                    <ApperIcon name="Users" className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary-700">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl text-center">
                    <ApperIcon name="Star" className="w-12 h-12 text-accent-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent-700">99%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-success/10 to-success/20 p-6 rounded-xl text-center">
                    <ApperIcon name="TrendingUp" className="w-12 h-12 text-success mx-auto mb-3" />
                    <div className="text-2xl font-bold text-success">70%</div>
                    <div className="text-sm text-gray-600">Avg. Efficiency Gain</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl text-center">
                    <ApperIcon name="Clock" className="w-12 h-12 text-secondary-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-secondary-700">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ApperIcon name={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-br from-background to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Certified Salesforce experts passionate about delivering exceptional AgentForce solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-semibold mb-4">{member.role}</div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="Handshake" className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Certified Salesforce Partner
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
              As an official Salesforce partner, we maintain the highest standards of expertise and 
              service delivery. Our certifications ensure you receive the best AgentForce implementation 
              and ongoing support.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "/contact"}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <ApperIcon name="ArrowRight" className="w-5 h-5 mr-2 inline" />
              Partner With Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;