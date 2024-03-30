import './Home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData';

function Home() {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={userData} title="Active User Details" grid dataKey="Active User"/>
      <div className="homeWidgets"></div>
      
    </div>
  )
}

export default Home