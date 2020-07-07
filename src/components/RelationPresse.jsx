import React, { useEffect, useState } from "react";
import { Row, Table, Container } from "reactstrap";
import Axios from "axios";
const RelationPresse = () => {
    const [relationPressDatas, setRelationPressDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPress();
    }, []);

    const getPress = async () => {
        try {
            const res = Axios.get(
                "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/press"
            );
            setRelationPressDatas(res);
            console.log(relationPressDatas);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <p>Loading</p>;
    }

    return (
        <Container>
            <Row>
                <h1>Partenaires</h1>
            </Row>
            <Row>
                <Table>
                    {/* {Items.map((item, key) => (
            <BaseCardText
              key={key}
              item={item.item}
              value={item.value}
              dataArray={Items}
            />
          ))} */}
                </Table>
            </Row>
        </Container>
    );
};

export default RelationPresse;
