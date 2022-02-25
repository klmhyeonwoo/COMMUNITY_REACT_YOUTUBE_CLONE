import {Route, Routes} from 'react-router-dom';
import Subscription from './pages/Subscription';
import Explore from './pages/Explore';
import Home from './pages/Home';


function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="subscription" element={<Subscription/>}/>
      </Routes>
      // 레이아웃은 공통적인 디자인을 담당해주고, 라우터는 연결해주는 녀석
  );
}

export default App;
