export const menuData = [
    {
        label: "Main Menu",
        items: [
            {
                name: "Dashboard",
                subMenu: [
                    { name: "Analytics", route: "analytics" },
                    { name: "Ecommerce", route: "ecommerce" }
                ]
            },
            {
                name: "Applications",
                subMenu: [
                    {
                        name: "Analytics",
                        nestedSubMenu: [
                            { name: "Customers", route: "customers" },
                            { name: "Reports", route: "reports" }
                        ],
                    },
                    {
                        name: "Projects",
                        nestedSubMenu: [
                            { name: "Clients", route: "clients" },
                            { name: "Team", route: "team" },
                            { name: "Project", route: "project" },
                            { name: "Task", route: "task" },
                            { name: "Kanban Board", route: "kanban" },
                            { name: "Users", route: "users" },
                            { name: "Project Create", route: "create" },
                        ],
                    },
                    {
                        name: "Ecommerce",
                        nestedSubMenu: [
                            { name: "Products", route: "products" },
                            { name: "Customers", route: "customers" },
                            { name: "Customer Details", route: "customers/2025" },
                            { name: "Orders", route: "orders" },
                            { name: "Order Details", route: "orders/1001" },
                            { name: "Refunds", route: "refunds" },
                        ],
                    },
                    { name: "Chat", route: "chat" },
                    { name: "Contact List", route: "contacts" },
                    { name: "Calendar", route: "calendar" },
                    { name: "Invoice", route: "invoice" },
                ]
            }
        ]
    },
    {
        label: "Components",
        items: [
            {
                name: "UI Elements",
                subMenu: [
                    { name: "Alerts", route: "alerts" },
                    { name: "Avatar", route: "avatar" }
                ]
            }
        ]
    },
    {
        label: "Crafted",
        items: [
            {
                name: "Pages",
                subMenu: [
                    { name: "Profile", route: "profile" },
                    { name: "Notifications", route: "notifcations" }
                ]
            },
            {
                name: "Authentication",
                subMenu: [
                    { name: "Login", route: "login" },
                    { name: "Register", route: "register" }
                ]
            }
        ]
    }
];
