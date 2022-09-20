import BusinessAndEcon from './Images/CategoryImages/BaE.png';
import Education from './Images/CategoryImages/ESaT.png';
import Literature from './Images/CategoryImages/LaF.png';
import Science from './Images/CategoryImages/SNaM.png';
import Health from './Images/CategoryImages/HFaN.png';
import Law from './Images/CategoryImages/Law.png';
import style from './CSS/categoryBar.module.css';

export default function CategoryBar() {
    return (
        <div className={style.Categories}>
            <img className={style.CategoryImage} src={BusinessAndEcon} alt='BusinessAndEcon'/>
            <img className={style.CategoryImage} src={Education} alt='Education'/>
            <img className={style.CategoryImage} src={Literature} alt='Literature'/>
            <img className={style.CategoryImage} src={Science} alt='Science'/>
            <img className={style.CategoryImage} src={Health} alt='Health'/>
            <img className={style.CategoryImage} src={Law} alt='Law'/>
        </div>
    )
}