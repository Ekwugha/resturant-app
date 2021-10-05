import React from 'react';
import CardBody from '../card/card.component';

export class HomeMenuData extends React.Component {
    constructor() {
        super();
       
        this.state = {
            sections: [
                {
                    id: 1,
                    category: 'Snacks',
                    image: "assest/meat_pie.jpg",
                    title: 'Meat pie',
                  },
                  {
                      id: 2,
                      category: 'Snacks',
                      image:  "assest/chicken_pie.jpg",
                      title: 'Chicken pie',
                  },
                  {
                      id: 3,
                      category: 'Snacks',
                      image:  "assest/beef_roll.jpg",
                      title: 'Beef roll',
                  },
                  {
                      id: 4,
                      image:  "assest/doughnuts.jpg",
                      category: 'Snacks',
                      title: 'Doughnut',
                  },
                  {
                      id: 5,
                      category: 'Snacks',
                      image: "assest/scotch_eggs.jpg",
                      title: 'Scotch egg',
                  },
                  {
                      id: 6,
                      category: 'Snacks',
                      image: "assest/buristos.jpg",
                      title: 'Buristos',
                  },
                  {
                      id: 7,
                      category: 'Snacks',
                      image:  "assest/gigi_roll.jpg",
                      title: 'Gigi Roll',
                  },
                  {
                      id: 8,
                      category: 'Snacks',
                      image: "assest/cake.jpg",
                      title: 'Triangle cake',
                  },
                  {
                      id: 9,
                      category: 'Snacks',
                      image: "assest/cake.jpg",
                      title: 'Hexagon cake',
                  },
            ]
              
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.sections.map (({ id, title, image, category}) => (
                    <CardBody key={id} title={ title } image={image} category={category} />
                ))} 
            </React.Fragment>
        )
    }
    

}
export default HomeMenuData;