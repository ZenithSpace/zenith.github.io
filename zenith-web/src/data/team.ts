// Note: This file exports a function because it needs translation for roles/names
// Alternatively, we can store keys and translate in the component.
// For simplicity and consistency with the current request, let's export a function that takes the translation function 't'.
// Note: This file exports a function because it needs translation for roles/names
// Alternatively, we can store keys and translate in the component.
// For simplicity and consistency with the current request, let's export a function that takes the translation function 't'.

export const getTeamMembers = () => {
    const leads = [
        {
            name: "Yoongu Kang",
            team: "Team Principal",
            role: "CEO",
            image: "/assets/team/yoongu_kang.jpg"
        },
        {
            name: "Hangil Seo",
            team: "Firmware Team Lead",
            role: "CTO",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Junghwan Lee",
            team: "Hardware Team",
            role: "CFO",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Jimin Song",
            team: "Hardware Team",
            role: "Drivetrain Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Geuntaek Bae",
            team: "Hardware Team",
            role: "Drivetrain Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Hohyun Kwak",
            team: "Hardware Team",
            role: "Manipulator Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Kyeonghyeon Kim",
            team: "Firmware Team",
            role: "Manipulator Control",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Mingu Kang",
            team: "Software Team",
            role: "Global Path Planning",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Yeongji Choi",
            team: "Software Team",
            role: "Local Path Planning",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Suhyun Kim",
            team: "Software Team",
            role: "Image Processing/Communication",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Gyeongho Choi",
            team: "Firmware Team",
            role: "Power System Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Daehoon Kang",
            team: "Hardware Team",
            role: "Science Lab Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Yongwon Seo",
            team: "Software Team",
            role: "Science Lab Control",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Chohyeon Yang",
            team: "Science Team",
            role: "Science Experiment Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Jinho Seo",
            team: "Science Team",
            role: "Science Experiment Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Hanryung Shin",
            team: "Software Team",
            role: "Drone Master",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Be Our Crew!",
            team: "Join Zenith Space!",
            role: "Join the Mission!",
            image: "/assets/logo_icon.png"
        }
    ];

    return leads;
};
