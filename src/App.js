import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Slider from './components/Slider'
import data from './data/data.json'
import Offers from './components/Offers'
import Heading from './components/Heading';
import StarProducts from './components/StarProducts';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HotAccessories from './components/HotAccessories.jsx'
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptions from './components/NavOptions';


const banner = data.banner

function App() {
  return (
    <BrowserRouter>


      <PreNavbar/>
      <Navbar/>

<NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>



      <Slider start = {banner.start}/>
      <Offers offer= {data.offer}/>
      <Heading text = "STAR PRODUCTS"/>
      <StarProducts starProduct = {data.starProduct}/>
      <Heading text = "HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      <Routes>
        <Route path="/music" exact element={<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>

        <Route path="/smartDevice" exact element={ <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />}/>

        <Route path="/home" exact element={ <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}/>
        
        <Route path="/lifestyle" exact element={ <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}/>

        <Route path="/mobileAccessories" exact element={ <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}/>
      </Routes>

       <Heading text="PRODUCT REVIEWS"/>
       <ProductReviews productReviews = {data.productReviews}/>

       
       <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>
   
       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />

     
    </BrowserRouter>


      
  
  );
}

export default App;
