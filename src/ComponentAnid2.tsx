import ImagenChuck from "./ImagenChuck"
import CompBtnFrase from "./ComponenteFrase"


export default function CompAnid2() {
    return (
        <div className="container p-3">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 cool-xxl-6">
                <p className='titulo'><b>~ Chuck Norris no duerme, ESPERA.</b></p>
                <ImagenChuck />
                <CompBtnFrase /> {/*Contiene componente anidado CompApiRequest*/}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 cool-xxl-6">
                
            </div>
        </div>    
    )
}