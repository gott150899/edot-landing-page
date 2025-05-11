import clsx from "clsx";
import styles from './HomeAbout.module.scss';
import TitleBasic from "../../title/title-basic/TitleBasic";
import CONSTANT from "../../../utils/constant";
import FadeInFromBottom from "../../animation/content-animation/ContentAnimation";

export default function HomeAbout(){
    return(
        <div className={clsx(styles['hab__container'])} id={CONSTANT.HEADER_ITEM.about.id}>
            <div className="container">
                <FadeInFromBottom>
                    <div className={clsx(styles['hab__wrapper'])}>
                            <TitleBasic title='Về chúng tôi' color='blue' size='m' textAlign="center" />
                            <div className={clsx(styles['hab__text--wrapper'])}>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, possimus nisi incidunt, autem similique eos tempore illum quibusdam ea architecto repellendus suscipit est vitae excepturi optio ut quisquam exercitationem aperiam?</span>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, possimus nisi incidunt, autem similique eos tempore illum quibusdam ea architecto repellendus suscipit est vitae excepturi optio ut quisquam exercitationem aperiam?</span>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, possimus nisi incidunt, autem similique eos tempore illum quibusdam ea architecto repellendus suscipit est vitae excepturi optio ut quisquam exercitationem aperiam?</span>
                            </div>
                    </div>
                </FadeInFromBottom>
            </div>
        </div>
    )
}