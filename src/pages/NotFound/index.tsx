import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { RouterLink } from '../../components/RouterLink';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Página no encontrada 🚀</Heading>
          <p>
            ¡Ups! Parece que la página que estás intentando acceder no existe.
            Tal vez se haya ido de vacaciones, haya decidido explorar el
            universo o se haya perdido en algún lugar entre dos agujeros negros.
            🌌
          </p>
          <p>
            Pero tranquilo, no estás perdido en el espacio (todavía). Puedes
            volver de forma segura a la{' '}
            <RouterLink href='/'>página principal</RouterLink> o{' '}
            <RouterLink href='/history'>al historial</RouterLink> — o puedes
            quedarte por aquí y fingir que encontraste una página secreta a la
            que solo los exploradores más geniales pueden acceder. 🧭✨
          </p>
          <p>
            Si crees que esta página debería existir (o si quieres charlar sobre
            viajes en el tiempo y agujeros de gusano), solo tienes que ponerte
            en contacto. De lo contrario, usa el menú para volver al mundo real.
          </p>
          <p>
            Mientras tanto, aquí tienes una reflexión: "Si una página no existe
            en internet, ¿habrá existido de verdad?" 🤔💭
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
