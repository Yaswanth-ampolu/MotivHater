
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div 
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-12"></div>
        <div className="absolute inset-0 flex items-center justify-center font-fenix text-xl font-bold">
          M
        </div>
      </div>
      <span className="font-fenix text-xl">MotivHater</span>
    </motion.div>
  );
};
