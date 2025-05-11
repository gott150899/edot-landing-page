import clsx from 'clsx';
import TitleBasic from '../../title/title-basic/TitleBasic';
import styles from './HomeTechstack.module.scss';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TbBrandCSharp } from "react-icons/tb";
import { SiAngular } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import CONSTANT from '../../../utils/constant';
import FadeInFromBottom from '../../animation/content-animation/ContentAnimation';

const techList = [
    TbBrandCSharp,
    SiAngular,
    DiMsqlServer,
    SiMongodb,
    DiNodejs,
    DiMysql,
    FaReact,
    SiAntdesign
];

export default function HomeTechstack(){
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (contentRef.current) {
                setWidth(contentRef.current.offsetWidth);
            }
          }, 0); // hoặc delay vài ms nếu cần
        
          return () => clearTimeout(timeout);
    }, []);

    const duration = width / (80 - 16); // 60px per second

    return(
        <div className={clsx(styles['htt__container'])} id={CONSTANT.HEADER_ITEM.techstack.id}>
            <FadeInFromBottom>
                <div className={clsx(styles['htt__wrapper'])}>
                    <div className="container">
                        <TitleBasic title='Các công nghệ' color='blue' size='m' textAlign='center' />
                    </div>
                    <div className={clsx(styles['htt__techstack--container'])}>
                        <motion.div
                            ref={contentRef}
                            className={clsx(styles['htt__techstack--wrapper'])}
                            animate={{ x: [`0%`, `-${width}px`] }}
                            transition={{ duration: duration, ease: 'linear', repeat: Infinity }}
                        >
                            {[...techList, ...techList, ...techList].map((Icon, index) => (
                                <div className={clsx(styles['htt__techstack--item'])} key={index}>
                                    <Icon
                                        size={80}
                                        color="#a9a9a9"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </FadeInFromBottom>
        </div>
    )
}