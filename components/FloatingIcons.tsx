import { motion } from "framer-motion";
import { 
  Server, 
  Cloud, 
  Database, 
  Code2, 
  Settings, 
  Shield 
} from "lucide-react";


export const FloatingIcons = () => {
  const icons = [
    { Icon: Server, delay: 0, position: { top: "20%", left: "20%" } },
    { Icon: Cloud, delay: 1, position: { top: "15%", right: "25%" } },
    { Icon: Database, delay: 2, position: { bottom: "40%", left: "10%" } },
    { Icon: Code2, delay: 3, position: { top: "25%", right: "10%" } },
    { Icon: Settings, delay: 4, position: { bottom: "15%", right: "20%" } },
    { Icon: Shield, delay: 5, position: { bottom: "20%", left: "25%" } },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
      {icons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{
            delay: delay * 0.2,
            duration: 0.5,
          }}
          style={position}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-full p-4 shadow-lg hover:shadow-primary/50 transition-shadow duration-300"
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            animate={{
              y: [0, -20, 0],
              x: [-10, 10, -10],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              whileHover={{
                rotate: [0, 90, 180, 270, 360],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <Icon className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};