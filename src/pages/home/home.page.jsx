import React from 'react';
import Landingpage from '../../components/home/landingpage/landingpage.component';
import HomeMenu from '../../components/home/homemenu/homemenu.component';
import Catering from '../../components/home/catering/catering.component';
import OrderDelivery from '../../components/home/order-delivery/order-delivery.component';
import Footer from '../../components/footer/footer.component';

function HomePage() {
    return (
        <div>
            <Landingpage />
            <HomeMenu />
            <Catering />
            <OrderDelivery />
            <Footer />
        </div>
    )
}

export default HomePage;