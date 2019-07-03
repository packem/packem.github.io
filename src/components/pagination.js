/** @jsx jsx */
import React from 'react';
import {jsx, Flex, Box} from 'theme-ui';
import {Location} from '@reach/router';
import {AwesomeButton} from 'react-awesome-button';
import NavLink from './nav-link';
import Sidebar from '../sidebar.mdx';
import './pagination.css';

const flattenLinks = children =>
  React.Children.toArray(children).reduce((acc, child) => {
    if (child.props && child.props.mdxType === 'a') {
      return [...acc, child];
    }
    if (!child.props || !child.props.children) return acc;
    return React.Children.toArray([
      ...acc,
      ...flattenLinks(child.props.children),
    ]);
  }, []);

const PaginationLink = ({label, ...props}) => {
  let arrowLabel = '';

  if (label === 'PREVIOUS') arrowLabel = '⬅ ';
  if (label === 'NEXT') arrowLabel = '➡ ';

  return (
    <NavLink {...props}>
      <div
        css={{
          fontSize: 3,
        }}>
        <AwesomeButton type="primary">
          {arrowLabel}
          {props.children}
        </AwesomeButton>
      </div>
    </NavLink>
  );
};

const Pagination = props => {
  const links = flattenLinks(props.children);
  const index = links.findIndex(
    link => link.props.href === removeSlash(props.location.pathname),
  );
  const hasPagination = index > -1;
  const previous = links[index - 1];
  const next = links[index + 1];

  return (
    <Flex py={4} mx={-2}>
      {hasPagination && previous && (
        <PaginationLink {...previous.props} label="PREVIOUS" />
      )}
      <Box mx="auto" />
      {hasPagination && next && <PaginationLink {...next.props} label="NEXT" />}
    </Flex>
  );
};

const removeSlash = str => (str.length > 1 ? str.replace(/\/$/, '') : str);

export default props => (
  <Location>
    {({location}) => (
      <Sidebar
        location={location}
        components={{
          wrapper: Pagination,
        }}
      />
    )}
  </Location>
);
