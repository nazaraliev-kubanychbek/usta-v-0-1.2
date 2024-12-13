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
import DetailPage from '../Pages/DetailPage/DetailPage';
const detailPageList = [
    {
        id: '1',
        url: 'api/v1/education/cards',
        date: false,
        path: '/education/detail/:id',
        imageList: false,
    },
    {
        id: '2',
        url: 'api/v1/events/KeyEvents',
        date: false,
        path: '/events/significant_event/:id',
        imageList: false,
    },
    {
        id: '3',
        url: 'api/v1/projects/projects',
        date: false,
        path: '/participation/project/:id',
        imageList: false,
    },
    {
        id: '4',
        url: 'api/v1/events/PhotoEvents',
        date: true,
        path: '/events/event/:id',
        imageList: false,
    },
    {
        id: '5',
        url: 'api/v1/education/cards',
        date: false,
        path: '/education/detail/:id',
        imageList: false,
    },
    {
        id: '6',
        url: 'api/v1/base/teammember',
        date: false,
        path: '/member/:id',
        imageList: false,
    },
    {
        id: '7',
        url: 'api/v1/advantage/category',
        date: false,
        path: '/membership/category/:id',
        imageList: false,
    },
    {
        id: '8',
        url: 'api/v1/services/article',
        date: false,
        path: '/services/article/:id',
        imageList: false,
    },
    {
        id: '9',
        date: false,
        url: 'api/v1/projects/awards',
        path: '/participation/awards/:id',
        imageList: false,
    },
    {
        id: '10',
        date: false,
        url: 'api/v1/community/image-info',
        path: '/community/slider_1/:id',
        imageList: false,
    },
    {
        id: '11',
        date: false,
        url: 'api/v1/community/image-info-2',
        path: '/community/slider_2/:id',
        imageList: false,
    },
    {
        id: '12',
        date: false,
        url: 'api/v1/base/section',
        path: '/home/section/:id',
        imageList: true,
    },
    {
        id: '13',
        date: false,
        url: 'api/v1/community/partners',
        path: '/community/partner/:id',
        imageList: false,
    },
]

function App() {

    return (
        <BrowserRouter>
            <Header detailPageList={detailPageList} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/ambassadorship" element={<Ambassadorship/>} />
                <Route path="/ambassadorship/category/:id" element={<AmbassadorCategory />} />
                {/* <Route path='/requisites' element={<PropsCategoryDetails/>} /> */}
                <Route path='/ambassadorship/company/:id' element={<CompanyDetail/>} />
                <Route path="/community" element={<Community />} />
                <Route path="/education" element={<Education />} />
                <Route path="/events" element={<Events />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/participation" element={<Participation />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/news/:id" element={<News />} />
                {
                    detailPageList.map(item => {
                        return <Route
                        key={item.id}
                        path={item.path}
                        element={<DetailPage url={item.url} date={item.date} imageList={item.imageList} />}
                        />
                    })
                }
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
