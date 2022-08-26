import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Next SVK-Ecommerce` : 'Next SVK-Ecommerce'}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className="classes.navbar">
        <Toolbar>
          <NextLink href="/" passHref>
            <Typography className={classes.brand}>SVK-Ecommerce</Typography>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              Cart
            </NextLink>
            <br />
            <NextLink href="/login" passHref>
              Login
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Next Serverkoding.</Typography>
      </footer>
    </div>
  );
}
