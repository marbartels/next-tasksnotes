import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import siteTheme from '../components/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from '../components/Layout';
import { BgProvider } from '../archive/ContextBg';
import '../styles/globals.css';
import '../styles/tasks.css';
import '../styles/aux-styles.css';
import '../styles/navBar.css';
import '../styles/button.scss';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={siteTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp
