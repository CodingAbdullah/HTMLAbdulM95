import '../../css/about.css';

const Footer = () => {

    const statement = "Copyright "  + new Date().getFullYear() + ". All Rights Reserved";

    return (
        <div className="footer">
            <section id="footer">
                <section id="footer-section">
                    <div class="low-row row">
                        <div class="copyright-row col-lg-12">
                            <img class="abdullah-logo" src={require("../../assets/images/abdullahLogo.png").default} alt="Missing Asset" />
                        </div>
                    </div>
                    <div class="footer-icon row row">
                        <div class="footer-icon-row col-lg-12">
                            <a href="https://www.facebook.com"><img class="footer-social" src={require("../../assets/images/facebook.png").default} alt="Missing Asset" /></a>
                            <a href="https://www.instagram.com"><img class="footer-social" src={require("../../assets/images/instagram.png").default} alt="Missing Asset" /></a>
                            <a href="https://ca.linkedin.com"><img class="footer-social" src={require("../../assets/images/linkedin.png").default} alt="Missing Asset" /></a>
                            <p class="copyright-paragraph">{statement}</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Footer;