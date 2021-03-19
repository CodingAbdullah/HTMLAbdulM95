import HorizontalRule from '../HorizontalRule/HorizontalRule';
import '../../css/home.css';

const Home = () => {
    return (
        <div className="indexSection">
            <div id="home" className="row">
                <div className="head-section col-lg-6 col-md-6">
                    <div className="software-engineer-section">
                        <p className="heading-software">Software Engineer</p>
                    </div>
                    <p className="heading-paragraph">Life-long Learner. Passionate. Dedicated.</p>
                </div>
                <div className="picture-section col-lg-6 col-md-6">
                    <img className="personal-photo" src={require("../../assets/images/me.jpg").default} alt="Not Found" />
                </div>
            </div>
            <section id="mid-section">
                <div className="mid-upper-row row">
                    <div className="resume-row col-lg-4">
                        <a className="icon-address" href="resume.html">
                        <i className="fas fa-file-alt fa-6x"></i>
                        <h2 className="mid-heading">Resume</h2>
                        <p className="mid-paragraph"> A comprehensive overview about me just one click away!</p>
                        </a>
                    </div>
                </div>
                <HorizontalRule />
                <div className="mid-row row">
                    <div className="mid-row-section border-r col-lg-4 col-md-4 col-sm-4">
                        <a className="icon-address" href="about.html">
                        <i className="fas fa-address-card fa-6x"></i> 
                        <h2 className="mid-heading">About</h2>
                        <p className="mid-paragraph">You can learn more about me and where/why/what I pursued as education.</p>
                        </a>
                    </div>
                    <div className="mid-row-section border-r col-lg-4 col-md-4 col-sm-4">
                        <a className="icon-address" href="skills.html">
                        <i className="fas fa-laptop-code fa-6x"></i>  
                        <h2 className="mid-heading">Skills</h2>
                        <p className="mid-paragraph">Information pertaining to my skill set and technology stack.</p>
                        </a>
                    </div>
                    <div className="mid-row-section col-lg-4 col-md-4 col-sm-4">
                        <a className="icon-address" href="leisure.html">
                        <i className="fas fa-chess-knight fa-6x"></i> 
                        <h2 className="mid-heading">Leisure</h2>
                        <p className="mid-paragraph">I love playing sports during free time. As a developer, it is important to relax and find time for yourself!</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;