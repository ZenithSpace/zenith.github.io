export interface Partner {
    name: string;
    logo: string | null;
    link: string;
    className?: string;
}

export const partnersData: Partner[] = [
    { name: 'SeoulTech', logo: '/assets/partners/1.webp', link: 'https://www.seoultech.ac.kr/' },
    { name: 'SeoulTech RISE', logo: '/assets/partners/2.webp', link: 'https://rise.seoultech.ac.kr/' },
    { name: 'Seoul Metropolitan Government', logo: '/assets/partners/seoul_metro.png', link: 'https://www.seoul.go.kr/', className: '-translate-y-1.5' },
    { name: 'Ministry of Education', logo: '/assets/partners/moe_logo.webp', link: 'https://www.moe.go.kr/', className: 'scale-125' },
    { name: 'Korea Foundation for Science and Creativity', logo: '/assets/partners/kofac.jpg', link: 'https://www.kofac.re.kr/', className: 'scale-125' },
    { name: 'The Seoul Institute', logo: '/assets/partners/seoul_institute.png', link: 'https://www.si.re.kr/' },
    { name: 'Denver Korea', logo: '/assets/partners/denver.jpg', link: 'http://www.denverkorea.co.kr/' },
    { name: 'Misumi', logo: '/assets/partners/3.webp', link: 'https://kr.misumi-ec.com/' },
    { name: 'Meviy', logo: '/assets/partners/4.webp', link: 'https://meviy.misumi-ec.com/ko-kr/' },
    { name: 'DOGU', logo: '/assets/partners/dogu.png', link: 'https://dogu.xyz/' },
    { name: 'Soksok Camp', logo: '/assets/partners/soksok.png', link: 'https://www.teachforkorea.go.kr/', className: 'scale-125' },
    { name: 'Next Partner', logo: null, link: '#contact' }, // Placeholder
];

export interface Affiliate {
    nameKo: string;
    nameEn: string;
}

export const affiliatesData: Affiliate[] = [
    { nameKo: '손수아', nameEn: 'Suah Son' },
    { nameKo: '이효민', nameEn: 'Hyomin Lee' },
    { nameKo: '고기열', nameEn: 'Kiyul Ko' },
    { nameKo: '김선', nameEn: 'Seon Kim' },
    { nameKo: '최윤정', nameEn: 'Yunjeong Choi' },
    { nameKo: '송상은', nameEn: 'Sangeun Song' },
    { nameKo: '이치범', nameEn: 'Chibum Lee' },
    { nameKo: '전성우', nameEn: 'IMJUST' },
    { nameKo: '노성용 & 유승희', nameEn: 'Sungyong Ro & Seunghui Yu' }
];
