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
            role: "Team Lead/CEO",
            image: "/assets/team/yoongu_kang.jpg"
        },
        {
            name: "Hangil Seo",
            role: "F/W Team Lead/CTO",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Junghwan Lee",
            role: "H/W Team/CFO",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Jimin Song",
            role: "H/W Team/Drivetrain Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Geuntaek Bae",
            role: "H/W Team/Drivetrain Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Hohyun Kwak",
            role: "H/W Team/Manipulator Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Kyeonghyeon Kim",
            role: "F/W Team/Manipulator Control",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Mingu Kang",
            role: "S/W Team/Global Path Planning",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Yeongji Choi",
            role: "S/W Team/Local Path Planning",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Suhyun Kim",
            role: "S/W Team/Image Processing/Communication",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Gyeongho Choi",
            role: "F/W Team/Power System Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Daehoon Kang",
            role: "H/W Team/Science Lab Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Yongwon Seo",
            role: "S/W Team/Science Team",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Chohyeon Yang",
            role: "Science Team",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Jinho Seo",
            role: "Science Team",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            name: "Be our Crew?",
            role: "Join Zenith Space!",
            image: "/assets/logo_icon.png" // Using logo for the 'Join Us' card if available, or placeholder
        }
    ];

    return leads;
};
