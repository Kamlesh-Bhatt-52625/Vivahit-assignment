import { motion } from "framer-motion";
import cryptoCurrency from "../../../assets/cryptocurrency.png";

const MainComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2.5 } },
  };

  return (
    <div className='flex flex-wrap gap-6 justify-between items-start py-2 px-12 '>
      <motion.div
        className=''
        variants={containerVariants}
        initial='hidden'
        animate='visible'>
        <motion.h1
          className='sm:text-[6rem] text-[3rem] m-0 text-[#fff]'
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.5 },
          }}>
          Track Crypto In
        </motion.h1>
        <motion.h1
          className='sm:text-[6rem] text-[3rem] m-0 text-[#f3993a]'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }}>
          Real Time.
        </motion.h1>
        <motion.p
          className='text-[1rem] text-[#888]'
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 1.5 },
          }}>
          Track crypto through a public API in real time. Go to dashboard!
        </motion.p>
      </motion.div>
      <motion.div
        className='border border-[#f3993a] rounded-lg border-opacity-25 px-4'
        variants={imageVariants}
        initial='hidden'
        animate='visible'>
        <motion.img
          src={cryptoCurrency}
          alt='cryptoCurrency'
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.5 },
          }}
        />
      </motion.div>
    </div>
  );
};

export default MainComponent;
