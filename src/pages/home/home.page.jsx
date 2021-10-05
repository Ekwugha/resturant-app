import React from 'react';
import Landingpage from '../../components/landingpage/landingpage.component';
import HomeMenu from '../../components/homemenu/homemenu.component';
import Catering from '../../components/catering/catering.component';
import OrderDelivery from '../../components/order-delivery/order-delivery.component';
import Footer from '../../components/footer/footer.component';
// import SimpleSlider from '../../components/carousel/carousel.component'

function HomePage() {
    return (
        <div>
            <Landingpage />
            <HomeMenu />
            <Catering />
            {/* <SimpleSlider /> */}
            <OrderDelivery />
            <Footer />
        </div>
    )
}

export default HomePage;