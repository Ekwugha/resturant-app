import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import AboutHeader from '../about-header/about-header.component';
import './about.styles.css'

function About() {
    return (
        <div>
            <AboutHeader> Since 2012 </AboutHeader>
            <section data-aos = "fade-up">
                <Container md={4} className="py-5">
                    <Row>
                        <Col>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt modi temporibus doloremque eum consectetur obcaecati error et esse laborum pariatur rerum quaerat, ullam dolorem quibusdam maiores harum vero consequuntur exercitationem assumenda officia libero beatae magnam accusamus? In nam dolorem inventore obcaecati earum itaque porro eius eaque voluptatibus repellendus quibusdam voluptas magni, corrupti iste ad, quae doloremque nesciunt autem? Nemo eos odio adipisci eaque distinctio perferendis sunt laudantium fugit laborum esse cupiditate consequatur quod in, nulla voluptatem nam quasi quas qui quibusdam repellendus tempore aut quo, enim deleniti. Voluptatum impedit quaerat neque, commodi alias illo enim minima quia voluptates? Velit consectetur omnis provident voluptatum. Officia quia animi voluptas vitae quisquam, illum aperiam modi! Sint sequi et nihil dolores fugit adipisci, enim quos maxime ex, excepturi architecto, praesentium repudiandae. Vel accusantium possimus nam laudantium necessitatibus repudiandae quam atque esse, magni perferendis dicta vitae magnam. Odit asperiores in non iusto animi vero inventore reprehenderit, a, tempora ab expedita laborum nesciunt earum nostrum officia obcaecati excepturi repudiandae consequatur! Molestiae soluta voluptatum beatae, deleniti labore autem, non exercitationem quasi voluptatibus minima repellendus, totam optio quo delectus. Magnam ullam beatae molestias atque accusantium, debitis vel unde tempore ipsa illo, nihil cupiditate veniam, dolorum pariatur? Eligendi exercitationem id qui inventore sit. Maxime, quod recusandae velit quia illum et iure consequuntur optio eius, vero placeat perferendis blanditiis natus molestiae. Deleniti nulla iusto nisi quos animi, explicabo iure odio quaerat consequuntur modi! Rerum consequuntur itaque qui sequi cum velit, in dolore tempora omnis enim modi ex. Consequuntur, architecto.
                            </p>
                        </Col>
                    </Row>
                    <Row data-aos = "fade-down" className='show-grid text-center mt-5'>
                    <h1 className="text-center mb-5"> Our Board
                        <div className="underline text-center"></div>
                    </h1>
                        <Col xs={12} sm={4} className='person-wrapper'>
                            <Image src='assest/pic-1.jpg' width='171' roundedCircle className='profile-pic' />
                            <h4>John Doe</h4>
                            <p className="color">Chairman</p>
                        </Col>
                        <Col xs={12} sm={4} className='person-wrapper'>
                            <Image src='assest/pic-2.jpg' width='171' roundedCircle className='profile-pic' />
                            <h4>Joe Daniels</h4>
                            <p className="color">Managing Director</p>                
                        </Col>
                        <Col xs={12} sm={4} className='person-wrapper'>
                            <Image src='assest/pic-3.jpg' width='171' roundedCircle className='profile-pic' />
                            <h4>Mike Philips</h4>
                            <p className="color">Director</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default About;
