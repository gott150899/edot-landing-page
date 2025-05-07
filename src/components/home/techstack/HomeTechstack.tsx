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
            console.log('width:', width);
            if (contentRef.current) {
              setWidth(contentRef.current.offsetWidth);
            }
          }, 0); // hoặc delay vài ms nếu cần

        
          return () => clearTimeout(timeout);
    }, []);

    const duration = width / 60; // 60px per second

    return(
        <div>
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
                        {[...techList, ...techList].map((Icon, index) => (
                            // <span key={index} className={clsx(styles['htt__techstack--item'])}>
                            //     {item}
                            // </span>
                            <Icon
                                key={index}
                                size={80}
                                color="#a9a9a9"
                                className={clsx(styles['htt__techstack--item'])}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}