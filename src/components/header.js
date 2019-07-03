/** @jsx jsx */
import {jsx, Header, Container} from 'theme-ui';

export default props => (
  <Header
    css={{
      background: '#f3eeed',
      maxWidth: 'unset',
      padding: '5px 15px',
      borderBottom: "1px solid #e8e5e5"
    }}>
    <Container
      css={{
        display: 'flex',
        padding: 'unset',
        alignItems: 'center',
      }}>
      {props.children}
    </Container>
  </Header>
);
