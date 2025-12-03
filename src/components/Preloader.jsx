import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
 return (
    <AnimatePresence>
      <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut"
          }}
            style={{
              textAlign: "center",
            }}
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
              style={{ 
              fontSize: "clamp(2.5rem, 8vw, 5rem)", 
              color: "#ffffff",
              fontWeight: 700,
              marginBottom: "1rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
            }}
            >
              D&M Laboratorium
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
              duration: 0.8,
              delay: 1,
              ease: "easeOut"
            }}
              style={{ 
              fontSize: "clamp(1rem, 3vw, 1.5rem)", 
              color: "#cccccc",
              fontWeight: 300,
              letterSpacing: "4px",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
            }}
            >
              Tworzymy uśmiechy przyszłości
            </motion.p>
            
            {/* Анімація завантаження */}
            <motion.div
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                margin: "2rem auto",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#ffffff",
                }}
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;