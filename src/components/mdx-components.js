/** @jsx jsx */
import ReactMediumImg from 'react-medium-zoom';
import {jsx} from 'theme-ui';

import './index.css';

const heading = Tag => props =>
  !!props.id ? (
    <Tag {...props} css={{width: 'fit-content'}}>
      <a
        href={`#${props.id}`}
        css={{
          position: 'relative',
          right: 20,
          color: 'inherit',
          textDecoration: 'none',
          opacity: 0,
        }}
        className="permalink"
        children="#"
      />
      <span
        css={{
          position: 'relative',
          right: 15,
        }}>
        {props.children}
      </span>
    </Tag>
  ) : (
    <Tag {...props} />
  );

export default {
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  img: props => (
    <ReactMediumImg
      {...props}
      style={{width: 'inherit', zIndex: '9', margin: '20px 0'}}
    />
  ),
  pre: props => <pre {...props} style={{margin: '25px 0'}} />,
  a: props => <a {...props} style={{textDecoration: 'none'}} />,
  code: props => (
    <code
      {...props}
      style={{
        backgroundColor: '#f3eeed',
        padding: '2px 5px',
        borderRadius: 3,
        fontFamily: "'Operator Mono', 'Dank Mono', monospace",
        fontWeight: 300,
      }}
    />
  ),
};
