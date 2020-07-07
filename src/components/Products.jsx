import React from "react";
import BaseCardText from "./builders/BaseCardCarousel";
import { Row, Table, Container } from "reactstrap";
const Products = () => {
    const productInfo = [
        {
            id: 1,
            nom: "LookUp",
            prix: 45.99,
            descriptif:
                "this is a fancy product with some nice text talking about it. If we add some more text it should wrap",
            image:
                "https://mlodp7767kae.i.optimole.com/ZvkZDw-upSZOLoJ/w:840/h:630/q:auto/https://kickstore.fr/wp-content/uploads/2019/06/lookup2.png",
        },
    ];

    // const [productDatas, setProductDatas] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //   getProduct();
    // }, []);

    // const getProduct = async () => {
    //   try {
    //     const res = Axios.get(
    //       "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/products"
    //     );
    //     setProductDatas(res);
    //     console.log(productDatas);
    //   } catch (err) {
    //     console.log(err);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    // if (isLoading) {
    //   return <Spinner color="primary" />;
    // }
    let Items = [];

    const ItemLoop = (table) => {
        for (let i = 0; i < Object.keys(table[0]).length; i++) {
            let ItemValue = {
                item: Object.keys(table[0])[i],
                value: Object.values(table[0])[i],
            };
            Items.push(ItemValue);
        }
    };
    ItemLoop(productInfo);

    return (
        <Container>
            <Row>
                <h1>Products</h1>
            </Row>
            <Row>
                <Table>
                    {Items.map((item, key) => (
                        <BaseCardText
                            key={key}
                            item={item.item}
                            value={item.value}
                            dataArray={productInfo}
                        />
                    ))}
                </Table>
            </Row>
        </Container>
    );
};

export default Products;
