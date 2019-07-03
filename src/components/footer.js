/** @jsx jsx */
import {jsx, Footer, Container, Flex} from 'theme-ui';
import NavLink from './nav-link';

export default () => (
  <Footer
    css={{
      marginTop: 20,
      background: '#f3eeed',
      borderTop: '1px solid #e8e5e5',
    }}>
    <Container>
      <Flex mx={-2}>
        <NavLink href="https://github.com/packem/packem">GitHub</NavLink>
        <NavLink href="https://gitter.im/packem_bundler/community">
          Gitter Community
        </NavLink>
      </Flex>
    </Container>
  </Footer>
);
