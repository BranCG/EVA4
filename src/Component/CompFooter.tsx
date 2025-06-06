

{/* funcion para traer al footer, reutilice footer de EVA3, utilice rrss de Chuck*/}
export default function CompFooter1() {   
    return (       
        <footer id="CONTACTO" className="bg-dark text-light footer-container">
            <div className="footer-row">
                <div className="footer-column">
                    <h2><b>CONTACTO</b></h2><br />
                    <p><b>Dirección: Northwood Hills, Dallas, USA.</b></p>
                    <p><b>Teléfono: +1 217-677-6723</b></p>
                    <p><b>Email: contacto@ChuckNorris.com</b></p>
                </div>
                <div className="footer-column2">
                    <h2><b>SIGUEME</b></h2> <br />
                    <ul>
                        <li><a className="text-light btn-outline-danger" href="https://www.facebook.com/officialchucknorrispage" target="_blank" rel="noopener noreferrer"><b>Facebook</b></a></li>
                        <li><a className="text-light btn-outline-danger" href="https://x.com/chucknorris" target="_blank" rel="noopener noreferrer"><b>Twitter</b></a></li>
                        <li><a className="text-light btn-outline-danger" href="https://www.instagram.com/chucknorris/" target="_blank" rel="noopener noreferrer"><b>Instagram</b></a></li>
                        <li><a className="text-light btn-outline-danger" href="https://www.linkedin.com/posts/wayne-worsham-664403274_chuck-norris-words-of-wisdom-selfconfidence-activity-7170579871792906240-6uLz?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer"><b>LinkedIn</b></a></li>
                    </ul>
                </div> 
            </div>
            <div className="centrado">
                <p>Creado y desarrollado por Brandon Castro.</p>
            </div>  
        </footer>
    );
}
