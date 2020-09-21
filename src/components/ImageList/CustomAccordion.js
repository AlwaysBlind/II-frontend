import React from 'react';
import { Accordion, AccordionCollapse, Button, Card } from 'react-bootstrap';
import HorizontalImageList from './HorizontalImageList';

const CustomAccordion = ({ images, name }) => {
    return (
        <Accordion className='Accordion' >
            <Card>
                <Card.Body>
                    <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">
                        {name}
                    </Accordion.Toggle>
                </Card.Body>
            </Card>
            <AccordionCollapse eventKey='0'>
                <HorizontalImageList images={images} />
            </AccordionCollapse>
        </Accordion >
    );
}

export default CustomAccordion;