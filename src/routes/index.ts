import {useRoutes} from "react-router";

const isTablet =
    /(?:iPad|PlayBook)/.test(navigator.userAgent) ||
    (/(?:Android)/.test(navigator.userAgent) && !/(?:Mobile)/.test(navigator.userAgent)) ||
    (/(?:Firefox)/.test(navigator.userAgent) && /(?:Tablet)/.test(navigator.userAgent));

const routesConfig =
    /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && !isTablet == true ? require('./mobile/index') : require('./pc/index');

// console.log(routesConfig.default);

const Routes = () => {
    const routes = useRoutes(routesConfig.default);
    return routes;
};

export default Routes;
