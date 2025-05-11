import clsx from 'clsx';
import styles from './ProductContent.module.scss';
import CONSTANT from '../../../utils/constant';

type ProductContentProps = {
    code: string
}

export default function ProductContent({ code }: ProductContentProps){
    const product = CONSTANT.PRODUCTS.find(x => x.code === code)!;

    return(
        <div className={clsx(styles['pct__container'])}>
            <div className={clsx(styles['pct__head--container'])}>
                <div className="container">
                    <div className={clsx(styles['pct__head--wrapper'])}>
                        <span className={clsx(styles['pct__head--name'])}>{product.name}</span>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={clsx(styles['pct__tech--wrapper'], 'flex-center')}>
                    <span className={clsx(styles['pct__tech--text'])}>{product.techstacks.join(', ')}</span>
                </div>
                <div className={clsx(styles['pct__content--container'])}>
                    <div className={clsx(styles['pct__content--wrapper'])}>
                        <div className={clsx(styles['pct__left--container'])}>
                            <div className={clsx(styles['pct__left--wrapper'])}>
                                <img src={product.content.image} />
                                {
                                    product.content.graphs.map((graph, index) => (
                                        <div className={clsx(styles['pct__left--graph__wrapper'])} key={index}>
                                            <span className={clsx(styles['pct__left--graph__title'])}>{graph.title}</span>
                                            <span className={clsx(styles['pct__left--graph__description'])}>{graph.description}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={clsx(styles['pct__right--container'])}>
                            <div className={clsx(styles['pct__right--wrapper'])}>
                                <span className={clsx(styles['pct__right--title'])}>{ product.projectLead.title }</span>
                                <img className={clsx(styles['pct__right--image'])} src={product.projectLead.image} alt={product.projectLead.name} />
                                <span className={clsx(styles['pct__right--name'])}>{ product.projectLead.name }</span>
                                <div className={clsx(styles['pct__right--divider'])}></div>
                                <span className={clsx(styles['pct__right--desc'])}>{ product.projectLead.description }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}