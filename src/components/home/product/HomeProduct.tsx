import clsx from 'clsx';
import TitleBasic from '../../title/title-basic/TitleBasic';
import styles from './HomeProduct.module.scss';

export default function HomeProduct(){
    return(
        <div className={clsx(styles['hpd__container'])}>
            <div className="container">
                <div className={clsx(styles['hpd__wrapper'])}>
                    <TitleBasic title='Dự án của chúng tôi' color='blue' size='m' textAlign='center' />
                    <div className={clsx(styles['hpd__desc--wrapper'])}>
                        <span>Edot cam kết hoàn thành các dự án với chất lượng đảm bảo và thời gian nhanh chóng nhất, đáp ứng đúng theo yêu cầu của khách hàng. Danh sách các khách hàng lặp lại của công ty liên tục tăng.</span>
                    </div>
                    <div className={clsx(styles['hpd__product--grid'])}>
                        <a href="" className={clsx(styles['hpd__product--item'])}>
                            <img src="https://tgl-sol.com/images/ai/1_1.webp" alt="/" className={clsx(styles['hpd__product--image'])} />
                            <div className={clsx(styles['hpd__content--wrapper'])}>
                                <span className={clsx(styles['hpd__content--title'])}>Vietgoal</span>
                                <span className={clsx(styles['hpd__content--teckstack'])}>Công nghệ: Python, Docker, Semantic Segmentation, Deep Learning, Image Processing, Deep Learning, Image Processing</span>
                                <span className={clsx(styles['hpd__content--desc'])}>Thông thường, thời gian sống sót trung bình của một bệnh nhân khoảng 3 năm kể từ khi chẩn đoán...</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}