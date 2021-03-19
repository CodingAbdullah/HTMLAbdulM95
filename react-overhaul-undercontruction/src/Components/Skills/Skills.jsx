import HorizontalRule from '../HorizontalRule/HorizontalRule';
import '../../css/skills.css';

const Skills = () => {

    return (
        <section id="skill">
            <div className="developer-section">
                <h1 className="developer-title">Life as a Developer</h1>
                <p className="body-paragraph">As a developer, you have to make sure you diverse yourself in many areas of software development. There are many different fields of development you can often undertake.</p>
                <p className="body-paragraph">My area of expertise includes:</p>
                <ul className="body-list"><li>Software Applications</li><li>Websites</li><li>APIs</li><li>Databases</li><li>And much more..</li></ul>
                <p className="body-paragraph-last">Over the years, I have honed my skills working on numerous websites, databases, and using APIs to simplify problems. I believe I have the expertise in this field and can tackle any project in those related areas.</p>
            </div>
            <HorizontalRule />
            <div className="website-section padding-box">
                <h1 className="skill-heading website">Web Development</h1>
                <p className="body-paragraph">Over the years, working as a web developer, allowed me to explore both front-end, back-end, and database technology. I believe developers should be versatile in both areas of development as it allows them to become a complete developer. </p>
                <p className="body-paragraph">"Full-Stack" developer, as the term goes, is just that. The "stack" referring to the list of technologies that allow for both front-end and back-end development. </p>
                <p className="body-paragraph">As a Full-Stack developer, I can design and develop dynamic, secure, and user-friendly websites. My stack is the following: </p>
                <h3 className="front-end end-heading">Front-End</h3>
                <h6 className="language-heading">Languages</h6>
                <ul className="end-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript (ECMASCRIPT 6)</li>
                    <li>EJS (Embedded JavaScript)</li>
                </ul>
                <h6 className="language-heading">Frameworks and Libraries</h6>
                <ul className="end-list">
                    <li>Bootstrap (CSS Framework)</li>
                    <li>React JS</li>
                    <li>jQuery (JavaScript Library)</li>
                </ul>
                <h3 className="end-heading back-end">Back-End</h3>
                <h6 className="language-heading">Languages</h6>
                <ul className="end-list">
                    <li>MySQL (Relational Database)</li>
                    <li>MongoDB (Non-Relational Database)</li>
                    <li>PHP</li>
                    <li>Node JS</li>
                    <li>Apache</li>
                </ul>
                <h6 className="language-heading">Frameworks and Libraries</h6>
                <ul className="end-list">
                    <li>Express JS</li>
                </ul>

                <p className="skill-describe-start skill-description">I originally learned HTML, CSS and followed that with JavaScript, MySQL and PHP. That was my "stack". As I was getting more comfortable with web development, I started to learn JavaScript libraries such as jQuery and frameworks such as React, Node, and Express. </p>
                <p className="skill-description">I love Bootstrap. As a CSS framework, it helps reduce development time by allowing developers to use ready-made components (forms, buttons, etc).</p>
            </div>
            <HorizontalRule />            
            <div className="database-section padding-box">
                <h1 className="skill-heading database">Relational/Non-Relational Databases</h1>
                <p className="sql-paragraph">In the world of databases, there are two man families: Relational and Non-Relational. I am comfortable in working with both.</p>
                <h5 className="sql-heading">SQL - Structured Query Language</h5> 
                <p className="sql-paragraph sql-first">SQL allows users to create, insert, read, update, and delete data and/or objects from the database. SQL works with Relational databases only.</p>
                <p className="sql-paragraph">I am familiar with SQL subsets such as DDL (Data Definition Language), DML (Data Manipulation Language), and TCL (Transaction Control Language). I know different types of objects such as Constraints, Sequences, Indexes, etc.</p>
                <h5 className="sql-heading">MONGODB</h5> 
                <p className="sql-paragraph sql-first">MONGODB is the Non-Relational Database equivalent of SQL. Making use of collections which store multiple documents constructed in JSON. Essentially, key-value pairs specifying a record. It does not enforce a schema like SQL does.</p>
                <p className="sql-paragraph">I LOVE working with JSON. It is simple to understand and makes MONGODB the popular choice when JavaScript is the only language for the stack.</p>
            </div>
            <HorizontalRule />
            <div className="api-section padding-box">
                <h1 className="skill-heading api">APIs</h1>
                <p className="api-paragraph">I am competant using APIs (Application Programming Interfaces) for my personal projects. I understand how to perform GET/POST HTTP requests and provide basic authentication in order to obtain a successful API request. </p>  
                <p className="api-paragraph">APIs have made many of my projects simple. Recently, I developed a hockey game score tracker which made API calls for the game description, result, goals and so on. Responses packed with valuable JSON data which I parsed using JavaScript and embedded into my hockey game results page.</p>
                <p className="api-paragraph">That application is actually on my personal website under Leisure. Go check it out!</p>
            </div>
            <HorizontalRule />
            <div className="data-development-section padding-box">
                <h1 className="skill-heading data-development">Languages/Data Formats/IDEs</h1>
                <h5 className="programming-languages-heading">Additional Programming Languages</h5>
                <p className="programming-paragraph">Other than web development, which is a big part of my skillset, I am competant in other types of programming languages as well: <ul class="programming-list"><li>Python</li><li>Java</li><li>Linux Shell Scripting/Command Line & GIT</li><li>C# (Not an expert)</li></ul></p>
                <p className="programming-paragraph">Java was the first language I learned in high school. Intrigued by the idea of programming, I decided to pursue my studies in Software Engineering. I closely followed Java up with Python which I believe to be an excellent language to learn, especially for beginners.</p>
                <p className="programming-paragraph">Over the last year, I learned valuable knowledge related to Data Science and how Python can be a useful tool to use for Data Visualization and Analysis. I have exposure to C#, Visual Studio, and the .Net Framework but I am not as well versed in it as I am with Python and Java.</p>
                <p className="programming-paragraph">Owner of a Linux operating system, I use the command line most often. It is an important tool to use and comes handy when working with directories and files. Version control, Git makes use of the command line and working with the MONGODB instance does as well so learning how to use the shell is critical.</p>
                <h5 className="programming-languages-heading">Data Interchange Formats</h5>
                <p className="programming-paragraph">Data Interchange Formats allow developers and users alike to pick a model or style in which they store/transfer/manipulate data. Data storages I am familiar are the following: <ul class="programming-list"><li>JSON</li><li>CSV</li></ul></p>
                <p className="programming-paragraph">I have used JSON to store data in a MONGODB instance and used CSV files to populate tables in a database. Both are effective styles of data storage.</p>
                <h5 className="programming-languages-heading">IDEs - Integrated Development Environment</h5>
                <p className="programming-paragraph">IDEs allow developers to make use of an application which is specifically tailored to design applications of particular language(s). There are several out there and really depends on you, the developer. Below is a list of all the IDE's I am familiar with: </p>
                    <ul className="programming-list">
                        <li>Atom.io - Generic editor. Covers any language</li>
                        <li>Eclipse - Java </li>
                        <li>Jupyter Notebook - Python</li>
                        <li>Notepad</li>
                        <li>Terminal/Bash Shell - Linux Command Line</li>
                        <li>Visual Studio Code - Perhaps the best editor ever. I make use of this editor for web development.</li>

                    </ul>      
            </div>
        </section>
    )
}

export default Skills;