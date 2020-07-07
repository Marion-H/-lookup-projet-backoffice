import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from "reactstrap";
import ModalCarousel from "./ModalCarousel";

const BaseCardCarousel = ({ descriptif, picture, titre, link, uuid }) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={picture} alt={descriptif} />
                <CardBody>
                    <CardTitle>{titre}</CardTitle>
                    <CardSubtitle>Lien: {link}</CardSubtitle>
                    <CardText>descriptif: {descriptif}</CardText>
                    <ModalCarousel
                        uuid={uuid}
                        title={titre}
                        description={descriptif}
                        link={link}
                        picture={picture}
                    />
                </CardBody>
            </Card>
        </div>
    );
};

export default BaseCardCarousel;
