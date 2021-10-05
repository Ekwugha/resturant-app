import React from 'react';
import CardBody from '../card/card.component';
import CustomButton from '../button/button.component';

export class MenuData extends React.Component {
    constructor() {
        super();
       
        this.state = {
            sections: [
                {
                  id: 1,
                  category: 'Snacks',
                  image: "assest/meat_pie.jpg",
                  title: 'Meat pie',
                  price: '₦ 250.00',
                  add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 2,
                    category: 'Snacks',
                    image:  "assest/chicken_pie.jpg",
                    title: 'Chicken pie',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 3,
                    category: 'Snacks',
                    image:  "assest/beef_roll.jpg",
                    title: 'Beef roll',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 4,
                    image:  "assest/doughnuts.jpg",
                    category: 'Snacks',
                    title: 'Doughnut',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 5,
                    category: 'Snacks',
                    image: "assest/scotch_eggs.jpg",
                    title: 'Scotch egg',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 6,
                    category: 'Snacks',
                    image: "assest/buristos.jpg",
                    title: 'Buristos',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 7,
                    category: 'Snacks',
                    image:  "assest/gigi_roll.jpg",
                    title: 'Gigi Roll',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 8,
                    category: 'Snacks',
                    image: "assest/cake.jpg",
                    title: 'Triangle cake',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 9,
                    category: 'Snacks',
                    image: "assest/cake.jpg",
                    title: 'Hexagon cake',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 10,
                    category: 'Rice',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 11,
                    category: 'Rice',
                    image: "assest/cake.jpg",
                    title: 'Fried Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 12,
                    category: 'Rice',
                    image: "assest/cake.jpg",
                    title: 'Rice and Stew',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 13,
                    category: 'Drinks',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 14,
                    category: 'Drinks',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 15,
                    category: 'Drinks',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 16,
                    category: 'Drinks',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 17,
                    category: 'Drinks',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 18,
                    category: 'Drinks',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 19,
                    category: 'Drinks',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 20,
                    category: 'Drinks',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 21,
                    category: 'Drinks',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 22,
                    category: 'Drinks',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 23,
                    category: 'Chicken / Turkey',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
                {
                    id: 24,
                    category: 'Chicken / Turkey',
                    image: "assest/cake.jpg",
                    title: 'Jollof Rice',
                    price: '₦ 250.00',
                    add: <CustomButton> Add To Cart </CustomButton>
                },
            ]
              
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.sections.map (({ id, title, image, price, add, category }) => (
                    <CardBody key={id} title={ title } image={image} add={add} category={category} price={price} />
                ))} 
            </React.Fragment>
        )
    }
    

}
export default MenuData;