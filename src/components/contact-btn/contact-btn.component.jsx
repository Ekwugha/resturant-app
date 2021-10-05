import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './contact-btn.styles.css';

export default class ContactBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
            // let isMounted = true
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    render() {
        const { is_visible } = this.state;
        return (
            <div className="contact-btn show-contact-btn">
                {is_visible && (
                    <Link as={Link} to="/contact" className="link"> <FontAwesomeIcon icon={faComments} className="m-auto"/> </Link>
                )}
            </div>
        );
    }
}