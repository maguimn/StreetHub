import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Sign-in';
import { Home } from "../pages/Home";
import { About } from '../pages/about';
import {Relationships} from '../pages/Relationships';
import {Privacy} from '../pages/privacy/'
import { Doubts } from '../pages/doubts';
import Aj1 from '../pages/Aj1';
import {Shoes} from "../pages/shoes";
import {Sales} from "../pages/sales";
import {Clothes} from "../pages/clothes";
import {Acessories} from"../pages/acessories"
import Yeezy from '../pages/Yeezy';
import Dunk from '../pages/dunk';
import SignUp from '../pages/Sign-up'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/relationships" element={<Relationships />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/doubts" element={<Doubts />}/>
            <Route path="/aj1" element={<Aj1 />}/>
            <Route path="/yeezy" element={<Yeezy /> } />
            <Route path="/dunk" element={<Dunk />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/acessories" element={<Acessories />} />
            <Route path="/sales" element={<Sales />} />
           


        </Routes>
    )
}