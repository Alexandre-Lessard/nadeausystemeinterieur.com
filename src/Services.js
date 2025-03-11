import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import service1 from "./Service-1.jpg";
import service2 from "./Service-2.jpg";
import service3 from "./Service-3.jpg";
import service4 from "./Service-4.jpg";

function Services() {
  const services = [
    {
      title: "Pose de système intérieur",
      text: "Cette prestation consiste à installer des systèmes intérieurs tels que des murs, des cloisons, des portes, des fenêtres, des planchers et des plafonds. Les professionnels de l'entreprise utilisent des matériaux de qualité pour garantir une installation solide et durable qui répond aux normes de sécurité en vigueur.",
      img: service1
    },
    {
      title: "Pose de gypse",
      text: "Cette prestation consiste à installer des panneaux de gypse pour créer des murs intérieurs et des plafonds. Les professionnels de l'entreprise utilisent des techniques de pose de gypse pour garantir une finition lisse et uniforme, prête à être peinte ou tapissée.",
      img: service2
    },
    {
      title: "Érection mur métallique",
      text: "Cette prestation consiste à installer des murs métalliques pour créer des espaces intérieurs résistants et durables. Les professionnels de l'entreprise utilisent des matériaux de qualité pour garantir une construction solide et stable qui répond aux normes de sécurité en vigueur.",
      img: service3
    },
    {
      title: "Plafond suspendu",
      text: "Cette prestation consiste à installer des plafonds suspendus offrant une grande variété de designs et de fonctionnalités pour les espaces intérieurs, tels que l'isolation acoustique, l'absorption de l'humidité et la dissimulation des câbles et tuyaux, pour une finition soignée et esthétique. Les professionnels de l'entreprise garantissent une installation de qualité pour un résultat final à la hauteur de vos attentes.",
      img: service4
    }
  ]

  return (
    <div className='p-3 bg-dark text-black '>
      <h1 className='text-white text-center'>Services</h1>
      <div className="container">
        <Row xs={1} md={2} className="g-4">
          {Array.from(services).map((service, idx) => (
            <Col key={idx}>
              <Card className='h-100'>
                <Row>
                  <Col className="d-flex align-items-center" xs={4} md={4}>
                    <Card.Img src={service.img} className="img-fluid" />
                  </Col>
                  <Col xs={8} md={8}>
                    <Card.Body>
                      <Card.Title>{service.title}</Card.Title>
                      <Card.Text>
                        {service.text}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Services;
