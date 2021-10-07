// import React from 'react';
// import { Container, Col, Row } from 'react-bootstrap';
// // import HomeMenuData from '../homemenudata/homemenudata.component';
// import CardBody from '../card/card.component'

// function HomeMenu(id, title, image) {
//     return (
//         <section className="background">
//             <Container>
//                 <Row>
//                     <Col className="my-5">
//                         <Row>
//                             {/* <HomeMenuData /> */}
//                             <CardBody />
//                         </Row>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     )
// }

// export default HomeMenu;

import React, {Component} from 'react';
import { Col, Image } from 'react-bootstrap';
import '../../carousel/style.css'

const Card = (props) => (
    <div className="card">
      <Image src={ props.image } 
         alt={ props.alt || 'Image' } /> 
      <div className="card-content">
        <h2>{ props.title }</h2>
        <p>{ props.content }</p>
      </div>
    </div>
  );
  
  const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            content={ card.content }
            image={ card.image } />
        ))
      }
    </div>
  );

class HomeMenu extends React.Component {

    render () {
        const cardsData =  [
            { id: 1, category: 'Snacks', image: "assest/meat_pie.jpg", title: 'Meat pie' },
            { id: 2, category: 'Snacks', image: "assest/beef_roll.jpg", title: 'Beef roll' },
            { id: 3, category: 'Snacks', image: "assest/chicken_pie.jpg", title: 'Chicken pie' },
            { id: 4, category: 'Snacks', image: "assest/doughnuts.jpg", title: 'Doughnut' },
            { id: 5, category: 'Snacks', image: "assest/scotch_eggs.jpg", title: 'Scotch egg' },
            { id: 6, category: 'Snacks', image: "assest/buristos.jpg", title: 'Buristos' },
            { id: 7, category: 'Snacks', image: "assest/gigi_roll.jpg", title: 'Gigi Roll' },
            { id: 8, category: 'Snacks', image: "assest/cake.jpg", title: 'Triangle cake' },
            { id: 9, category: 'Snacks', image: "assest/cake.jpg", title: 'Hexagon cake' },
        ]

        return(
            <div data-aos='fade-down' className="container my-5">
              <CardContainer cards={ cardsData } />
            </div>
        );
    }
}

export default HomeMenu
