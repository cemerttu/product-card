import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const firstName = "John"; // Change to your name or leave empty
const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";
const greetingImage = firstName
  ? "https://randomuser.me/api/portraits/men/75.jpg"
  : null;

function App() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
      }}
    >
      <Card
        style={{
          width: "22rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          borderRadius: "20px",
          marginTop: "40px",
        }}
      >
        <Card.Body className="text-center">
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h3 style={{ color: "#2d6cdf", fontWeight: 700 }}>{greeting}</h3>
        {greetingImage && (
          <img
            src={greetingImage}
            alt="Greeting"
            style={{
              width: "80px",
              borderRadius: "50%",
              marginTop: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
