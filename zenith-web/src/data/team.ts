// Note: This file exports a function because it needs translation for roles/names
// Alternatively, we can store keys and translate in the component.
// For simplicity and consistency with the current request, let's export a function that takes the translation function 't'.
// Note: This file exports a function because it needs translation for roles/names
// Alternatively, we can store keys and translate in the component.
// For simplicity and consistency with the current request, let's export a function that takes the translation function 't'.

export const getTeamMembers = () => {
    const leads = [
        {
            nameEn: "Yoongu Kang",
            nameKo: "강윤구",
            team: "Team Principal",
            role: "CEO",
            image: "/assets/team/yoongu_kang.webp"
        },
        {
            nameEn: "Hangil Seo",
            nameKo: "서한길",
            team: "Firmware Team Lead",
            role: "CTO",
            image: "/assets/team/hangil_seo.png"
        },
        {
            nameEn: "Junghwan Lee",
            nameKo: "이정환",
            team: "Hardware Team",
            role: "CFO",
            image: "/assets/team/junghwan_lee.jpg",
            imagePosition: "center"
        },
        {
            nameEn: "Jimin Song",
            nameKo: "송지민",
            team: "Hardware Team",
            role: "Drivetrain Design",
            image: "/assets/team/jimin_song.jpg"
        },
        {
            nameEn: "Geuntaek Bae",
            nameKo: "배근택",
            team: "Hardware Team",
            role: "Drivetrain Design",
            image: "/assets/team/geuntaek_bae.png"
        },
        {
            nameEn: "Hohyun Kwak",
            nameKo: "곽호현",
            team: "Hardware Team",
            role: "Manipulator Design",
            image: "/assets/team/hohyun_kwak.png"
        },
        {
            nameEn: "Kyeonghyeon Kim",
            nameKo: "김경현",
            team: "Firmware Team",
            role: "Manipulator Control",
            image: "/assets/team/kyeonghyeon_kim.png"
        },
        {
            nameEn: "Mingu Kang",
            nameKo: "강민구",
            team: "Software Team",
            role: "Global Path Planning",
            image: "/assets/team/mingu_kang.png"
        },
        {
            nameEn: "Yeongji Choi",
            nameKo: "최영지",
            team: "Software Team",
            role: "Local Path Planning",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            nameEn: "Suhyun Kim",
            nameKo: "김수현",
            team: "Software Team",
            role: "Image Processing/Communication",
            image: "/assets/team/suhyun_kim.jpg"
        },
        {
            nameEn: "Gyeongho Choi",
            nameKo: "최경호",
            team: "Firmware Team",
            role: "Power System Design",
            image: "/assets/team/gyeongho_choi.png",
            imagePosition: "center"
        },
        {
            nameEn: "Daehoon Kang",
            nameKo: "강대훈",
            team: "Hardware Team",
            role: "Science Lab Design",
            image: "/assets/team/daehoon_kang.png"
        },
        {
            nameEn: "Yongwon Seo",
            nameKo: "서용원",
            team: "Software Team",
            role: "Science Lab Control",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            nameEn: "Chohyeon Yang",
            nameKo: "양초현",
            team: "Science Team",
            role: "Science Experiment Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            nameEn: "Jinho Seo",
            nameKo: "서진호",
            team: "Science Team",
            role: "Science Experiment Design",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            nameEn: "Hanryung Shin",
            nameKo: "신한륭",
            team: "Software Team",
            role: "Drone Master",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300"
        },
        {
            nameEn: "Be Our Crew!",
            nameKo: "함께해요!",
            team: "Join Zenith Space!",
            role: "Join the Mission!",
            image: "/assets/logo_icon.webp"
        }
    ];

    return leads;
};
