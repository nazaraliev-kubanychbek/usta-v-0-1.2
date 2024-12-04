import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Shared/Components/Header/Header';
import Footer from '../Shared/Components/Footer/Footer';
import Home from '../Pages/Home/Home';
import Ambassadorship from '../Pages/Ambassadorship/Ambassadorship';
import Community from '../Pages/Community/Community';
import Education from '../Pages/Education/Education';
import Events from '../Pages/Events/Events';
import Membership from '../Pages/Membership/Membership';
import Participation from '../Pages/Participation/Participation';
import Services from '../Pages/Services/Services';
import Contacts from '../Pages/Contact/Contacts';
import News from '../Pages/News/News'
import './App.scss';
import PropsCategoryDetails from '../Pages/Ambassadorship/CardPage/PropsCategoryDetails/PropsCategoryDetails';
import CompanyDetail from '../Pages/Ambassadorship/CardPage/CompanyDetail/CompanyDetail';
import AmbassadorCategory from '../Pages/Ambassadorship/AmbassadorCategory/AmbassadorCategory';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/ambassadorship" element={<Ambassadorship />} />
                <Route path="/ambassadorship/category/:id" element={<AmbassadorCategory />} />
                <Route path='/requisites' element={<PropsCategoryDetails/>} />
                <Route path='/ambassadorship/company/:id' element={<CompanyDetail/>} />
                <Route path="/community" element={<Community />} />
                <Route path="/education" element={<Education />} />
                <Route path="/events" element={<Events />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/participation" element={<Participation />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/news/:id" element={<News />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
