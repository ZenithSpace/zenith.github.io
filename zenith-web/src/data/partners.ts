export interface Partner {
    name: string;
    logo: string | null;
    link: string;
}

export const partnersData: Partner[] = [
    { name: 'SeoulTech', logo: '/assets/partners/1.webp', link: 'https://www.seoultech.ac.kr/' },
    { name: 'SeoulTech RISE', logo: '/assets/partners/2.webp', link: 'https://rise.seoultech.ac.kr/' },
    { name: 'Misumi', logo: '/assets/partners/3.webp', link: 'https://kr.misumi-ec.com/' },
    { name: 'Meviy', logo: '/assets/partners/4.webp', link: 'https://meviy.misumi-ec.com/ko-kr/' },
    { name: 'Next Partner', logo: null, link: '#contact' }, // Placeholder
];
