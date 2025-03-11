import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <div className="p-3 bg-dark text-white">
      <h1 className='text-white text-center'>Faq</h1>
      <div className='container'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Comment puis-je obtenir un devis pour mon projet de système intérieur ?</Accordion.Header>
            <Accordion.Body>
              Réponse : Pour obtenir un devis pour votre projet de système intérieur,
              vous pouvez nous contacter par téléphone ou par email. Notre équipe
              commerciale vous posera quelques questions pour comprendre votre projet
              et vous proposer une solution sur mesure qui répond à vos besoins.
              Nous vous fournirons ensuite un devis détaillé comprenant tous les
              éléments nécessaires pour réaliser votre projet.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Combien de temps faudra-t-il pour réaliser mon projet de système intérieur ?
            </Accordion.Header>
            <Accordion.Body>
              Réponse : Le temps nécessaire pour réaliser votre projet de système
              intérieur dépendra de plusieurs facteurs, tels que la taille du projet,
              la complexité du design, et la disponibilité des matériaux.Nous travaillons
              avec nos clients pour établir un calendrier de réalisation réaliste en
              fonction de leurs contraintes et de leurs besoins. Nous nous engageons
              à respecter les délais fixés, tout en assurant la qualité de notre travail.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Pouvons-nous apporter des modifications à notre projet après l'avoir validé ?
            </Accordion.Header>
            <Accordion.Body>
              Réponse : Oui, nous sommes flexibles en ce qui concerne les modifications
              à apporter à votre projet de système intérieur. Nous comprenons que des
              changements peuvent survenir au cours du projet, et nous travaillons avec
              nos clients pour apporter des modifications en fonction de leurs besoins.
              Nous tenons compte de l'impact sur le budget et le calendrier pour chaque
              modification, et nous veillons à communiquer clairement les implications
              avant de procéder à tout changement.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
