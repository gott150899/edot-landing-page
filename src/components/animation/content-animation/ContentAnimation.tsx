import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

type FadeInFromBottomProps = {
    children: React.ReactNode; 
}

const FadeInFromBottom = ({ children }: FadeInFromBottomProps) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null); // Khai báo ref để tham chiếu đến phần tử
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    if (!ref.current || hasAnimated) return;

    const rect = ref.current.getBoundingClientRect(); // Lấy vị trí phần tử trong viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsInView(true); // Nếu phần tử vào viewport, set isInView = true
      setHasAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Kiểm tra lại khi tải trang
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <motion.div
      ref={ref} // Áp dụng ref cho phần tử
      initial={{ opacity: 0, y: 100 }}  // Ban đầu opacity là 0 và y = 100 (vị trí dưới)
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }} // Khi vào viewport, opacity = 1 và y = 0
      exit={{ opacity: 0, y: 100 }} // Khi phần tử thoát khỏi viewport, opacity giảm và y trở lại dưới
      transition={{ duration: 0.5 }} // Thời gian hiệu ứng
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromBottom;
