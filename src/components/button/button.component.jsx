import React from 'react'
import { Button } from 'react-bootstrap';
import './button.styles.css'

const CustomButton = ({ children }) => (

    <Button className="bg-color text-light btn-sm"> { children } </Button>
)

export default CustomButton
