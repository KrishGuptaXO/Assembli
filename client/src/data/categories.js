import { createIcons, Server } from 'lucide';
const categories = [
    {
        id: 1,
        title: "Gaming",
        description: "High end gaming builds",
        icon: "🎮",
    },
    {
        id: 2,
        title: "Content Creation",
        description: "Video editing and design",
        icon: "🎥",
    },
    {
        id: 3,
        title: "Budget",
        description: "Best value for money",
        icon: "💰",
    },
    {
        id: 4,
        title: "Workstation",
        description: "Rendering, Blender, CAD",
        icon: createIcons({
            icons:{
                Server
            }
        }),
    },
];

export default categories;