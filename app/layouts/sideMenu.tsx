import {Link, Outlet} from "react-router";

export default function SideMenu() {

    interface MenuItem {
        name: string;
        path: string;
    }

    const menuItems: MenuItem[] = [
        {name: "記事一覧", path: "/"},
        {name: "人気記事", path: "/popular"},
        {name: "記事検索", path: "/search"},
    ];

    return (
        <div>
            <aside className={`fixed left-0 top-0 z-40 h-screen w-64 bg-white shadow-lg`}>
                <div>
                    <div>
                        <nav>
                            {menuItems.map((item: MenuItem) => (
                                <Link key={item.name} to={item.path}
                                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100">
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </aside>
            <Outlet/>
        </div>
    );
}