/** @jsx jsx */
import {
  jsx,
  Styled,
  Layout,
  Main,
  Box,
  Container
  // useColorMode
} from "theme-ui";
import { useState, useRef } from "react";
import { Global } from "@emotion/core";
import GitHubButton from "react-github-btn";

import SkipLink from "./skip-link";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Pagination from "./pagination";
import MenuButton from "./menu-button";
import NavLink from "./nav-link";
// import Button from "./button";

// const modes = ["deep", "swiss"];

export default props => {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useRef(null);

  // const cycleMode = e => {
  //   const i = modes.indexOf(mode);
  //   const next = modes[(i + 1) % modes.length];
  //   setMode(next);
  // };

  return (
    <Styled.root>
      <Global
        styles={{
          "*": {
            boxSizing: "border-box"
          },
          body: {
            margin: 0,
            overflowX: "hidden"
          }
        }}
      />
      <SkipLink>Skip to content</SkipLink>
      <Layout>
        <Header>
          <MenuButton
            onClick={e => {
              setMenuOpen(!menuOpen);
              if (!nav.current) return;
              const navLink = nav.current.querySelector("a");
              if (navLink) navLink.focus();
            }}
          />
          <NavLink to="/">
            <img
              width="32"
              src={require("../images/packem-logo.png")}
              alt="Packem"
            />
          </NavLink>
          <Box mx="auto" />
          <GitHubButton
            href="https://github.com/packem/packem"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star packem/packem on GitHub"
            style={{
              marginTop: 5
            }}
          >
            Star
          </GitHubButton>
          {/* <Button
            css={{
              ml: 2
            }}
            onClick={cycleMode}
            children={mode}
          /> */}
        </Header>
        <Main>
          <Container
            css={{
              p: 0,
              display: "flex",
              maxWidth: props.fullwidth ? "none" : 1000
            }}
          >
            <Sidebar
              ref={nav}
              open={menuOpen}
              fullwidth={props.fullwidth}
              onFocus={e => {
                setMenuOpen(true);
              }}
              onBlur={e => {
                setMenuOpen(false);
              }}
              onClick={e => {
                setMenuOpen(false);
              }}
            />
            <Box id="content" width={1} px={props.fullwidth ? 0 : 3}>
              {props.children}
              <Pagination />
            </Box>
          </Container>
        </Main>
        <Footer />
      </Layout>
    </Styled.root>
  );
};
