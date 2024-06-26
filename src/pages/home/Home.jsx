import './Home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

function Home() {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={userData} title="Active User Details" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
      
    </div>
  )
}

export default Home