import clsx from 'clsx';
import styles from './HomeOverview.module.scss';

export default function HomeOverview(){
    return(
        <div className={clsx(styles.hov__container)}>
            <div className="container">
                <div className={clsx(styles.hov__wrapper)}>
                    <div className={clsx(styles['hov__content--wrapper'])}>
                        <span className={clsx(styles['hov__content--comp-name'])}>EDOT</span>
                        <div className={clsx(styles['hov__content--desc-wrapper'])}>
                            <span>Với phương châm</span>
                            <b className={clsx(styles['hov__content--text-spacing'])}>“Xây dựng Công ty vững mạnh, lấy con người làm trung tâm”.</b>
                            <span>Mọi chính sách, quyết định của công ty đều hướng đến xây dựng môi trường làm việc thoải mái nhất, tạo mọi điều kiện để nhân viên phát huy hết tiềm năng, thế mạnh bản thân và định hướng nghề nghiệp.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}