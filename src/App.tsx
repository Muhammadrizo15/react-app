import React from 'react';
import Header from "./Header";
import './scss/swiper.css'
import "swiper/css";
import "swiper/css/navigation";
// import './scss/style.scss';
import Footer from './Footer'
import {Routes, Route} from "react-router-dom";

import Home from "./Home";
import PickLog from "./Registration/pick-log";
import Register from "./Registration/register";
import RegisterMaster from "./Registration/register-master";
import Remont from "./remont";
import Detail from "./detail";
import ChoiceOfReplenishmentMethod from "./ChoiceOfReplenishmentMethod/ChoiceOfReplenishmentMethod";
import Chat from "./Chat/Kirill";
import Applications from "./applications";
import Orders from "./orders";
import Refill from "./ChoiceOfReplenishmentMethod/refill";
import Pay from "./ChoiceOfReplenishmentMethod/pay";
import History from "./history";
import SettingsAll from "./Settings/Settings-all";
import Profile from "./Settings/Profile";
import Contacts from "./Settings/Contacts";
import Services from "./Settings/services";
import Finance from "./Settings/Finance";
import Order from "./Home/Order";
import Price from './Settings/Price'
import FullImage from './fullimage'
import Fullgo from "./fullgo";
import ProfileNumber from "./Chat/profileNumber";
import OfferAService from "./OfferAService";
import Address from "./Settings/Address";
import UserF from "./Chat/Support";
import AddDevices from "./addDevices/AddDevices";
import ReviewMaster from "./Chat/ReviewMaster";
import Rating from "./addDevices/rating";
import PickMaster from "./Pick-master/Pick-master";
import ReviewsMaster from "./Pick-master/Reviews-master";
import AddedDevices from './addDevices/AddedDevices'
import TitleService from "./addDevices/TitleService";
import Login from "./Registration/Login";
import Archive from "./addDevices/Archive";
import Mysuggest from "./mysuggest";

function App() {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route>

                        {/*Registrations*/}

                        <Route path={"/pick-login"} element={<PickLog/>}/>
                        <Route path={"/register"} element={<Register/>}/>
                        <Route path={"/register-master"} element={< RegisterMaster/>}/>
                        <Route path={"/login"} element={<Login/>}/>


                        {/*--Registrations--*/}



                        <Route path={"/remont"} element={<Remont/>}/>
                        <Route path={"/detail"} element={<Detail/>}/>
                        <Route path={"/replenishment"} element={<ChoiceOfReplenishmentMethod/>}/>
                        <Route path={"/applications"} element={<Applications/>}/>
                        <Route path={"/orders"} element={<Orders/>}/>
                        {/* ---CHAT--- */}


                        {/*Kirill*/}
                        <Route path={"/chat/16854163"} element={<Chat/>}/>


                        {/*TEX Support*/}
                        <Route path={"/chat/168789461"} element={<UserF/>}/>

                        {/* User Review */}

                        <Route path={"/review"} element={<ReviewMaster/>}/>
                        <Route path={"/rating"} element={<Rating/>}/>

                        {/* ---CHAT END--- */}

                        <Route path={"/refill"} element={<Refill/>}/>
                        <Route path={"/pay"} element={<Pay/>}/>
                        <Route path={"/history"} element={<History/>}/>
                        <Route path={"/settings"} element={<SettingsAll/>}/>
                        <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"/service"} element={<Services/>}/>
                        <Route path={"/finance"} element={<Finance/>}/>
                        <Route path={"/address"} element={<Address/>}/>
                        <Route path={"/contacts"} element={<Contacts/>}/>
                        <Route path={"/price"} element={<Price/>}/>
                        <Route path={"/image"} element={<Fullgo/>}/>
                        <Route path={"profile-number"} element={<ProfileNumber/>}/>
                        <Route path={"offer-service"} element={<OfferAService/>}/>

                        {/* Added divices */}
                        <Route path={"/add-device"} element={<AddDevices/>}/>
                        <Route path={"/added-device"} element={<AddedDevices/>}/>
                        <Route path={"/title-service"} element={<TitleService/>}/>
                        <Route path={"/added-device-archive"} element={<Archive/>}/>


                        {/*Pick master*/}
                        <Route path={"/pick-master"} element={<PickMaster/>}/>
                        <Route path={"/reviews-master"} element={<ReviewsMaster/>}/>


                        <Route path={"/mysuggest"} element={<Mysuggest/>}/>



                        <Route path={"/"} element={<Home/>}/>
                    </Route>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
