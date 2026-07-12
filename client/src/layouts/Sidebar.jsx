import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2>AssetFlow</h2>

            <nav>
                <NavLink to="/">Dashboard</NavLink>

                <NavLink to="/assets">Assets</NavLink>

                <NavLink to="/users">Users</NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;