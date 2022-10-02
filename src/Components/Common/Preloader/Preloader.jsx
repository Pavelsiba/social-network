import preloader from './../../../preloader.svg'
import s from './Preloader.module.css'

let Preloader = ()=> {
    return <div >
        <img src={preloader} className={s.img_center}  alt='in progress'/>
    </div>
};

export default Preloader;