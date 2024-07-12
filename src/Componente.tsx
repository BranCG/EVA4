import './App.css';
import LogoChuckNorris from './ComponenteLogo';

export default function CompNav() {
    const politicasPrivacidad = () => {
        alert('POLÍTICA DE PRIVACIDAD\n\
El presente Política de Privacidad establece los términos en que ChuckNorris usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.\n\
Información que es recogida\n\
Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,  información de contacto como  su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.\n\
Uso de la información recogida\n\
Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.  Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.');
    };
    return (
        <nav className="navbar navbar-expand-sm bg-dark">
            <div className="container-fluid d-flex justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link btn btn-outline-danger text-light" href="#HOME">
                            <b>HOME</b>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-outline-danger text-light" href="#SOMOS">
                            <b>¿QUE HACER?</b>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-outline-danger text-light" href="#CONTACTO">
                            <b>CONTACTANOS</b>
                        </a>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link btn btn-outline-danger text-light terminos"
                            onClick={politicasPrivacidad}>
                            <b>POLITICAS DE PRIVACIDAD</b>
                        </button>
                    </li>
                    <LogoChuckNorris />  {/* Funcion anidada */}
                </ul>
            </div>
        </nav>
    );
}


