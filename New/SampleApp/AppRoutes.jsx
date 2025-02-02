import { Routes, Route } from "react-router-dom";

import TestRoute from "./components/TestRoutes";

function AppRoutes(props) {
    return (
        <Routes>
            {/* index matches on default/home URL: / */}{" "}
            <Route index element={<TestRoute {...props} />} />
            {/* nested routes, matches on /dash/messages etc */}{" "}
            {/* <Route path="dash" element={<DashboardPage {...props} />}>
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route> */}
            {/* <Route path="/about" element={<AboutPage {...props} />} /> */}
            {/* special route to handle if none of the above match */}
           <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}
export default AppRoutes;