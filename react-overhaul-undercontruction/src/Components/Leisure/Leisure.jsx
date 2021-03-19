import HorizontalRule from '../HorizontalRule/HorizontalRule';
import '../../css/leisure.css';

const Leisure = () => {

    return (
        <section className="body">
            <div className="programming-section">
                <h1 className="programming-heading">Programming</h1>
                <p className="programming-paragraph">A large part of my free time is applied to learning and honing my programming skills. As a software developer, it is important to continue to practice your skills by working on personal projects. </p>
                <p className="programming-paragraph">Not only do you grasp the concepts of the languages you are using but gain expertise in problem solving. This is an essential skill that needs to further develop if you want to become a successful developer.</p>
                <p className="programming-paragraph-list">Some of the personal projects I've worked on are: <ul><li>Building a Personal Website (this one!)</li><li>Building Websites (Search Engines, Landing Pages)</li><li>Data Mining using Python</li></ul></p>
                <p className="last-programming-paragraph">One of the projects I recently worked on involved a sportsfeed API which returns game results. </p>
                <img className="programming-image" src={require("../../assets/images/programming.png").default} alt="Not Found" />
            </div>

            <HorizontalRule />

            <div className="hockey-section">
                <h1 className="hockey-heading">Hockey</h1>
                <p className="hockey-paragraph">You know what they say, your a true Canadian if you love hockey! Well, I'm a big fan of it and love cheering on the beloved home town, Toronto Maple Leafs! Never easy being a Leafs fan, but with a young promising core I believe the Leafs will win the Stanley Cup, God willing. </p>
                <p className="hockey-paragraph">The night when the Leafs' captain raises the cup and with chants of "No more '67!". That will be an iconic moment to remember! :)</p>
                <img className="toronto-celly-image" src={require("../../assets/images/celly.png").default} height="300" width="400" alt="Not available" />
            </div>
            
            <HorizontalRule />

            <div className="chess-section">
                <h1 className="chess-heading">Chess</h1>
                <p className="chess-paragraph-first">A beautiful, mind-challenging game. Chess has always been an instant classic. From risky gambits to total domination, Chess really makes you think outside-the-box. It's one of my favourite games to play during my spare time. 
                    Below are a few games I've compiled over the years. For more information about my Chess Profile, <a href="somewhere">Click Here.</a></p>
                <div className="upper-row row">
                    <div className="chess-row col-lg-6 col-md-12 col-sm-12">
                        <h5 className="chess-title">Knight's Signature: Smothered Mate</h5>
                        <p className="chess-paragraph">A rare checkmating sequence. A sneaky double check and a queen sac "smothers" the king and a lone knight wins the game!</p>
                            <video className="chess-video" width="370" height="290" controls>
                                <source src={require("../../assets/video/knight.mp4").default} alt="Not Found" type="video/mp4" />
                            </video>
                    </div>
                    <div className="chess-row chess-row-second col-lg-6 col-md-12 col-sm-12">
                        <h5 className="chess-title">A Queen Sac for the Win</h5>
                        <p className="chess-paragraph">Often times, it matters how well your pieces are positioned, not your lead in material. An "opera" mate is hidden, can you spot it?</p>
                            <video className="chess-video" width="370" height="290" controls>
                                <source src={require("../../assets/video/BigComeback.mp4").default} alt="Not Found" type="video/mp4" />
                            </video>
                        
                    </div>
                    <div className="chess-row chess-row-last col-lg-12 col-md-12 col-sm-12">
                        <h5 className="chess-title">Every Little Bit Helps</h5>
                        <p className="chess-paragraph">This game reminds me of race against time. Even the smallest of pieces (pawns) can be very helpful! Again, positioning is key :) </p>
                            <video className="chess-video" width="370" height="290" controls>
                                <source src={require("../../assets/video/KnightWin.mp4").default} alt="Not Found" type="video/mp4" />
                            </video>
                    </div>   
                </div>      
            </div>
        </section>
    )
}

export default Leisure;