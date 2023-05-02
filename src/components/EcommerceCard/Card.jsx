import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { cardlist } from "../cardlist";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
function Cards() {
  const [count,setCount]=useState(0)
  // const AddToCount=()=>{
  //     setCount(count+1)
  // }
  const [addCardslist, setAddCards] = useState([]);
  const [cardlists,setcardlist]=useState(cardlist)
  const [instocklist, setInstockList] = useState(cardlists);

  const AddToCard=(card)=>{
    // setAddCards(oldarray=>[...oldarray,cardItem])
    // console.log(addCardslist);
    console.log(instocklist,"first length")
     const NewinStocklist = instocklist.map((obj) => {
       // 👇️ if id equals then remove that items from stock and mark it false
       console.log(obj.id)
       if(obj.id===card.id){
        return { ...obj, instock: false };
       }
       // 👇️ otherwise return the object as is
       return obj;

     });
     console.log(NewinStocklist,"list")
setAddCards(oldarray => [...oldarray, card]);
console.log(addCardslist)
const instock = NewinStocklist.filter((card) => {
  return card.instock;
});
setInstockList(instock);}

// instockfilter
const Instockfitler=()=>{
    console.log(cardlists);
 const instock = cardlists.filter((card) => {
    return card.instock
  });
    setInstockList(instock);
}

useEffect(()=>{
    Instockfitler()
},[])

  return (
    <Container>
      <p className="text-end">Card count:{count}$</p>
      <Row xs={1} md={2} className="g-4">
        {instocklist.length===0&&<h1>No cards</h1>}
        {instocklist.map((card, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                className="text-center"
                variant="top"
                src={card.imageUrl}
                style={{ width: "18rem" }}
              />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Title>{card.price} $</Card.Title>

                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="success" onClick={()=>{AddToCard(card)}}>
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
