import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import { CustomButton } from '../components'
const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain' />
          </motion.header>
          <motion.div  {...headContentAnimation}>
            <h1 className='head-text'>LET'S <br className='x1:block hidden' />DO IT.</h1>
          </motion.div>
          <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
            <p className='max-w-wd font-normal text-gray-600 text-base'>Create your unique and exclusive shirt with our brand-new 3d customization tool.<strong>Unleash your imagination</strong>{" "} and define your own style.</p>
            <CustomButton type='filled'
              title='Customize It'
              handleClick={() => state.intro = false}
              customStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
};

export default Home;
