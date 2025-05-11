import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const OverlayAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true); // Trạng thái để kiểm soát visibility

  useEffect(() => {
    // console.log('rerender',)
    // if (sessionStorage.getItem('overlayShown') === 'true') {
    //     setIsVisible(false); // Nếu đã hiển thị overlay trong phiên này, không hiển thị nữa
    // } else {
    //     sessionStorage.setItem('overlayShown', 'true'); // Đánh dấu đã hiển thị overlay trong phiên này
    // }
    setIsVisible(false);
  }, []);

  return (
    <motion.div
        initial={{ opacity: 1, height: '100vh', backgroundColor: 'white' }} // Ban đầu opacity = 1 và height = 100vh
        animate={{
            opacity: isVisible ? 1 : 0, // Khi isVisible là false, opacity giảm về 0 (fade-out)
            height: isVisible ? '100vh' : 0, // Khi isVisible là false, height giảm xuống 0
            y: isVisible ? 0 : -100, // Khi isVisible là false, kéo lên top (di chuyển lên)
            backgroundColor: isVisible ? 'white' : '#ffffffb5'
        }}
        transition={{ duration: 1, y: { duration: 0.3 } }} // Thời gian animation
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 9999, // Đảm bảo overlay hiển thị trên các phần tử khác
        }}
    >
      <div className='flex-center' style={{ color: 'white', padding: '20px', textAlign: 'center', height: '100%' }}>
        <img src='https://tgl-sol.com/images/icons/header/logo-full.svg' />
      </div>
    </motion.div>
  );
};

export default OverlayAnimation;
