import '../../css/header.css';

const Header = () => {

    return (
            <section id="heading">
                <div class="navbar-row row">
                  <div class="col-md-3 navbar-brand-section">
                    <h3 class="navbar-heading navbar-brand">AbdulM95</h3>
                  </div>
                  <div class="col-md-6 links ml-auto">
                    <a class="link" href="index.html">Home</a>
                    <a class="link" href="resume.html">Resume/CV</a>
                    <a class="link" href="about.html">About</a>
                    <a class="link" href="skills.html">Skills</a>
                    <a class="link" href="leisure.html">Leisure</a>
                </div>
                </div>
            </section>
    )
}

export default Header;