import React from "react";

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from "reactstrap";

const BaseCardImage = ({
    nom,
    prix,
    descriptif,
    image,
    titre,
    sujet,
    date,
    logo,
}) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={image} alt={image} />
                <CardImg top width="100%" src={logo} alt={logo} />
                <CardBody>
                    <CardTitle>{titre}</CardTitle>
                    <CardTitle>{nom}</CardTitle>
                    <CardSubtitle>{prix}</CardSubtitle>
                    <CardSubtitle>{date}</CardSubtitle>
                    <CardSubtitle>{sujet}</CardSubtitle>
                    <CardText>{descriptif}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default BaseCardImage;
