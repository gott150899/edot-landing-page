import clsx from 'clsx';
import TitleBasic from '../../title/title-basic/TitleBasic';
import styles from './HomeProduct.module.scss';
import CONSTANT from '../../../utils/constant';
import FadeInFromBottom from '../../animation/content-animation/ContentAnimation';

export default function HomeProduct(){
    return(
        <div className={clsx(styles['hpd__container'])} id={CONSTANT.HEADER_ITEM.product.id}>
            <div className="container">
                <FadeInFromBottom>
                    <div className={clsx(styles['hpd__wrapper'])}>
                        <TitleBasic title='Sản phẩm của chúng tôi' color='blue' size='m' textAlign='center' />
                        <div className={clsx(styles['hpd__desc--wrapper'])}>
                            <span>{CONSTANT.INFO.companyName} cam kết hoàn thành các dự án với chất lượng đảm bảo và thời gian nhanh chóng nhất, đáp ứng đúng theo yêu cầu của khách hàng. Danh sách các khách hàng lặp lại của công ty liên tục tăng.</span>
                        </div>
                        <div className={clsx(styles['hpd__product--grid'])}>
                            {
                                CONSTANT.PRODUCTS.map((product, index) => (
                                    <a href={`/product/${product.code}`} className={clsx(styles['hpd__product--item'])} key={index} >
                                        <img src="https://tgl-sol.com/images/ai/1_1.webp" alt="/" className={clsx(styles['hpd__product--image'])} />
                                        <div className={clsx(styles['hpd__content--wrapper'])}>
                                            <span className={clsx(styles['hpd__content--title'])}>{product.code}</span>
                                            <span className={clsx(styles['hpd__content--teckstack'])}>Công nghệ: {product.techstacks.join(', ')}</span>
                                            <span className={clsx(styles['hpd__content--desc'])}>{ product.shortDescription }</span>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </FadeInFromBottom>
            </div>
        </div>
    )
}