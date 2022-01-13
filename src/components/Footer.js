

const Footer = () => {
    return(
        <div>
            <footer className="footer">
            <div className="footer__logo-box">

                <div className="footer__svg">
                    <svg viewBox="0 0 160 160" width="160" height="160">
                        <circle cx="80" cy="80" r="50" fill="#97AEC6"/>
                        <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                            <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#fff">
                            <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="1s" repeatCount="indefinite" />
                            </path>
                        </g>
                        <path d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" fill="#97AEC6" />
                    </svg>
                </div>


                
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a target="_blank" rel="noreferrer" href="https://github.com/aprilcr87" className="footer__link">Github</a></li>
                            <li className="footer__item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/april-rivera87" className="footer__link">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <a target="_blank" rel="noreferrer" href="https://aprilcr87.github.io/portfolio/" className="footer__link">April Barman</a> as a sample project for students at <a target="_blank" rel="noreferrer" href="https://www.zipcodewilmington.com/" className="footer__link">ZipCode Wilmington</a>.
                        Background image and all data presented comes from Unsplash and the <a target="_blank" rel="noreferrer" href="https://api.nasa.gov/" className="footer__link">NASA API</a>. Styles and design patterns credited to <a target="_blank" rel="noreferrer" href="https://www.udemy.com/user/jonasschmedtmann/" className="footer__link">Jonas
                        Schmedtmann</a>. Planet svg by <a target="_blank" rel="noreferrer" href="https://codepen.io/Vico-Adomeit" className="footer__link">Vico Adomeit</a>.
                    </p>
                </div>
            </div>
        </footer>
        </div>
    );
}

export default Footer;