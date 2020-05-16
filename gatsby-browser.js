/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import ReactGA from 'react-ga';

export const onClientEntry = () => {
    // Initialize GA
    ReactGA.initialize('UA-166849405-1');
}

export const onRouteUpdate = ({ location, prevLocation }) => {
    ReactGA.pageview(location.pathname + location.search);
}