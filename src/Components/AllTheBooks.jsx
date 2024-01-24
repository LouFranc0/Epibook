import { Card, Col, Row } from "react-bootstrap";
import scifi from "../data/scifi.json";

const AllTheBooks = () => {
  return (
    <Row>
      {scifi.map((book) => {
        return (
          <Col xs={12} md={6} lg={4} key={book.id}>
            <Card className="book-cover">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
