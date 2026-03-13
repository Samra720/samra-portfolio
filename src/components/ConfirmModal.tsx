import { motion, AnimatePresence } from "framer-motion";
import ThemeButton from "./ThemeButton";

interface ConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  url: string;
}

export default function ConfirmModal({ isOpen, onClose, onConfirm, url }: ConfirmProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-regal border border-muted/20 p-8 rounded-3xl max-w-md w-full text-center shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Leaving the Portfolio?</h3>
            <p className="text-muted mb-8 text-lg">
              You're heading over to <span className="text-main font-mono text-sm underline">{url}</span>. Ready to go?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onClose} className="px-6 py-2 text-muted hover:text-main transition-colors">
                Stay here
              </button>
              <ThemeButton onClick={onConfirm} className="px-8! py-3!">
                Yes, let's go!
              </ThemeButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
