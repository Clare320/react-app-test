import TestGridPage from "../pages/TestGridPage";
import TestPage from "../pages/TestPage";
import TestTablePage from "../pages/TestTablePage";

const routes = [
    {
        name: 'test',
        path: '/test',
        component: TestPage,
        routes: [
            {
                name: 'test grid',
                path: '/test/grid',
                component: TestGridPage
            },
            {
                name: 'test table',
                path: '/test/table',
                component: TestTablePage
            }
        ]
    }
];

export default routes;

/**
 * 子路由对应的组件如何替换掉主页面
 */