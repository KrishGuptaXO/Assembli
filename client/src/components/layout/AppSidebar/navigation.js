import {
    House,
    Cpu,
    PackageOpen,
    Cog
} from 'lucide-react';

export const navigation = [
    {
        label: "Home",
        path: "/",
        icon: House,
    },
    {
        label: "Import Builds",
        path: "/build",
        icon: Cpu,
    },
    {
        label: "Orders",
        path: "/orders",
        icon: PackageOpen,
    },
    {
        label: "Settings",
        path: "/settings",
        icon: Cog,
    },
];