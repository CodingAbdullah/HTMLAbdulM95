import HomeInformation from '../HomeInformation/HomeInformation.jsx';
import HomeBillBoard from '../HomeBillBoard/HomeBillBoard.jsx';

import '../../css/home.css';

const Home = () => {
    return (
        <div className="indexSection">
            <HomeBillBoard />
            <HomeInformation />
        </div>
    )
}

export default Home;