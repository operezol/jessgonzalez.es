import * as React from "react";

import PageContainer from "../../components/Page";

function About({ lang, mobileMenuStatus, setMobileMenuStatus }) {
  return (
    <PageContainer lang={lang} mobileMenuStatus={mobileMenuStatus} setMobileMenuStatus={setMobileMenuStatus}>
      <h2>Soy Jess, ilustradoray diseñadora gráfica</h2>
      <p>
        He dibujado y pintado desde pequeñita, asi que hacer de ello mi
        profesión parecía una buena idea. Después llegó el diseño gráfico, casi
        por casualidad, y me gustó, así que ahora me dedico a ambas cosas y me
        encanta.
      </p>
      <p>
        Estudié ilustración, fotografía y dirección de arte. Nunca dejo de
        aprender y experimentar con cosas nuevas.
      </p>
      <p>
        Si te interesa trabajar conmigo o tienes cualquier pregunta escribeme a
        hola@jessgonzalez.es ;)
      </p>
    </PageContainer>
  );
}
export default About;
