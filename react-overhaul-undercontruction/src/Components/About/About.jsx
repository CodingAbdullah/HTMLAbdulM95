import '../../css/about.css';
import HorizontalRule from '../HorizontalRule/HorizontalRule';

const About = () => {

    return (
        <section id="body">
            <h1 className="background-heading">A Bit About Me</h1>
            <h3 className="education-heading about-heading">Education</h3>
            <p className="about-paragraph">Hey there! Thanks for taking the time to read about me! I hope the person reading this is in a good state of health mentally, physically, and spiritually. I am a Software Engineering graduate from McMaster University.</p>
            <p className="about-paragraph">A demanding program that covers a large scope of all things related to software design, development, and testing. Having a keen eye to program since high school, my passion extended into university and I decided to pursue an engineering degree specialized in Software. </p>
            <p className="about-paragraph">I chose McMaster because of its unique program structure. The landscape, students, professors and the overall environment foster the learning and growth of students. </p> 
            
            <div className="image-section">
                <img className="image" src={require("../../assets/images/mcmaster.jpg").default}  alt="Not Found" />
            </div>
            
            <HorizontalRule />
            
            <h3 className="job-placement-heading about-heading">Job Placements</h3>
            <h6 className="cibc-heading job-heading">CIBC</h6>
            <p className="about-paragraph">While completing my degree, I also had two Co-op placements. One at a bank (CIBC) and the other at an educational institution (TEC Diversified Solutions). I worked for four months at TEC and an year long internship with CIBC for a total of 16 months of CO-OP. I made use of my skills in both places and learned a lot about the working environment and how skills translate into the workplace. </p>
            <p className="about-paragraph">At CIBC, I was in a technical role providing assistance to my team and making sure all the software ran properly. Debugging/testing/re-writing portions of Bash and Python scripts to make sure they did what they were intended to do.</p>
            <p className="about-paragraph">Working in the infrastructure department, I learned about automation by creating Ruby files, understanding how CIBC's file transfer system worked (FeedHub and Autosys). I also made sure vulnerabilities were handled accordingly and ServiceNow was clean of any tickets. </p>
            <h6 className="tec-heading job-heading">TEC Diversified Solutions INC</h6>
            <p className="about-paragraph">Working at TEC was a unique experience. It was my first four month co-op placement. I used my knowledge of HTML, CSS, and JavaScript to design and develop a website for the startup.</p>
            <p className="about-paragraph">Incorporating UI principles, I had to make sure the design fit what the team was requesting for as well as making it visually appealing. I made use of a popular CSS framework, Bootstrap to complete the job and the website was good to go!</p>
            
            <div className="image-section">
                <img className="cibc" src={require("../../assets/images/cibc.jpg").default}  alt="Not Found" />
            </div>
            
            <HorizontalRule />
            
            <h1 className="background-heading">Today. The Future.</h1>
            <p className="about-paragraph">Originally from Brampton, I graduated McMaster in June 2018. Being a McMaster student was a surreal experience, one I will never forget. All the friends I made, through the good times and bad. The endless grinding journey of six years to pursue my degree was a major accomplishment.</p>
            <p className="about-paragraph">Upon graduation, I wanted to pursue a freelance role but due to circumstances, that didn't work out the way I expected.</p>
            <p className="about-paragraph">As of right now, due to the COVID-19 pandemic, I am working remotely and approaching things day by day. I greatly appreciate you taking the time to read about the "shy kid in class." Much love!</p>
            
            <div className="image-section">
                <img className="image" src={require("../../assets/images/bell.jpeg").default}  alt="Not Found" />
            </div>
        </section>
    )
}

export default About;