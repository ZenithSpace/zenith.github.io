export interface Partner {
    name: string;
    logo: string | null;
    link: string;
}

export const partnersData: Partner[] = [
    { name: 'SeoulTech', logo: '/assets/partners/1.webp', link: 'https://www.seoultech.ac.kr/' },
    { name: 'SeoulTech RISE', logo: '/assets/partners/2.webp', link: 'https://rise.seoultech.ac.kr/' },
    { name: 'Seoul Metropolitan Government', logo: '/assets/partners/seoul_metro.png', link: 'https://www.seoul.go.kr/' },
    { name: 'The Seoul Institute', logo: '/assets/partners/seoul_institute.png', link: 'https://www.si.re.kr/' },
    { name: 'Misumi', logo: '/assets/partners/3.webp', link: 'https://kr.misumi-ec.com/' },
    { name: 'Meviy', logo: '/assets/partners/4.webp', link: 'https://meviy.misumi-ec.com/ko-kr/' },
    { name: 'Next Partner', logo: null, link: '#contact' }, // Placeholder
];
