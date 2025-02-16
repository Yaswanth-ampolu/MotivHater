
import { motion } from 'framer-motion';

export const ProcrastinatorPete = () => (
  <motion.div 
    className="character-container"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img 
      src="https://api.dicebear.com/7.x/personas/svg?seed=pete&backgroundColor=b6e3f4"
      alt="Procrastinator Pete"
      className="w-32 h-32"
    />
    <p className="text-sm font-medium mt-2">Procrastinator Pete</p>
  </motion.div>
);

export const FocusedFiona = () => (
  <motion.div 
    className="character-container"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img 
      src="https://api.dicebear.com/7.x/personas/svg?seed=fiona&backgroundColor=ffdfba"
      alt="Focused Fiona"
      className="w-32 h-32"
    />
    <p className="text-sm font-medium mt-2">Focused Fiona</p>
  </motion.div>
);

export const DistractedDave = () => (
  <motion.div 
    className="character-container"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img 
      src="https://api.dicebear.com/7.x/personas/svg?seed=dave&backgroundColor=baffc9"
      alt="Distracted Dave"
      className="w-32 h-32"
    />
    <p className="text-sm font-medium mt-2">Distracted Dave</p>
  </motion.div>
);
