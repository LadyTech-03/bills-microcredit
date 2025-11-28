// Team member type definition
export interface TeamMember {
    id: string;
    name: string;
    position: string;
    role: string;
    photo: string;
    bio: string;
    linkedIn?: string;
    email?: string;
    phone?: string;
    achievements?: string[];
    education?: string[];
    experience?: string[];
}

export type TeamCategory = "board" | "management" | "ambassadors";

// Mock data - Replace with actual data
export const boardMembers: TeamMember[] = [
    {
        id: "board-1",
        name: "Dr. Kwame Mensah",
        position: "Chairman",
        role: "Board of Directors",
        photo: "/images/team/board/chairman.jpg",
        bio: "Dr. Mensah brings over 30 years of experience in financial services and corporate governance. He has been instrumental in shaping Bills Microcredit's strategic direction.",
        linkedIn: "https://linkedin.com/in/kwame-mensah",
        email: "chairman@billsmicrocredit.com",
        achievements: [
            "Led the company through 15 years of sustainable growth",
            "Established partnerships with 5 major financial institutions",
            "Recipient of Ghana Banking Excellence Award 2023"
        ],
        education: [
            "PhD in Economics - University of Ghana",
            "MBA - Harvard Business School",
            "BSc Economics - University of Cape Coast"
        ],
        experience: [
            "Chairman, Bills Microcredit Ltd (2010 - Present)",
            "CEO, National Investment Bank (2005 - 2010)",
            "Director, Bank of Ghana (2000 - 2005)"
        ]
    },
    {
        id: "board-2",
        name: "Mrs. Abena Osei",
        position: "Vice Chairperson",
        role: "Board of Directors",
        photo: "/images/team/board/vice-chair.jpg",
        bio: "Mrs. Osei is a seasoned banker with expertise in microfinance and rural banking. She champions financial inclusion initiatives across Ghana.",
        linkedIn: "https://linkedin.com/in/abena-osei",
        email: "vice.chair@billsmicrocredit.com",
        achievements: [
            "Pioneered rural banking expansion program",
            "Increased client base by 200% in underserved areas",
            "Women in Finance Leadership Award 2022"
        ],
        education: [
            "MSc Finance - London School of Economics",
            "BA Business Administration - University of Ghana"
        ],
        experience: [
            "Vice Chairperson, Bills Microcredit Ltd (2012 - Present)",
            "Managing Director, Rural Bank Network (2008 - 2012)",
            "Head of Microfinance, GCB Bank (2003 - 2008)"
        ]
    },
    {
        id: "board-3",
        name: "Mr. Kofi Asante",
        position: "Board Member",
        role: "Board of Directors",
        photo: "/images/team/board/member-1.jpg",
        bio: "Mr. Asante is a financial strategist with deep knowledge in risk management and regulatory compliance in the microfinance sector.",
        linkedIn: "https://linkedin.com/in/kofi-asante",
        achievements: [
            "Developed comprehensive risk management framework",
            "Ensured 100% regulatory compliance for 10 years",
            "Financial Risk Management Excellence Award 2021"
        ],
        education: [
            "MSc Risk Management - University of Manchester",
            "BCom Accounting - KNUST"
        ],
        experience: [
            "Board Member, Bills Microcredit Ltd (2013 - Present)",
            "Chief Risk Officer, Fidelity Bank (2009 - 2013)",
            "Risk Analyst, Standard Chartered Bank (2005 - 2009)"
        ]
    }
];

export const managementTeam: TeamMember[] = [
    {
        id: "mgmt-1",
        name: "Mr. Emmanuel Darko",
        position: "Chief Executive Officer",
        role: "Management",
        photo: "/images/team/management/ceo.jpg",
        bio: "Emmanuel leads the day-to-day operations of Bills Microcredit with a focus on innovation, customer service excellence, and sustainable growth.",
        linkedIn: "https://linkedin.com/in/emmanuel-darko",
        email: "ceo@billsmicrocredit.com",
        phone: "+233 24 123 4567",
        achievements: [
            "Grew loan portfolio from GHS 50M to GHS 500M",
            "Launched digital lending platform serving 100,000+ clients",
            "CEO of the Year - Microfinance Sector 2023"
        ],
        education: [
            "MBA - University of Ghana Business School",
            "BSc Banking & Finance - University of Professional Studies"
        ],
        experience: [
            "CEO, Bills Microcredit Ltd (2015 - Present)",
            "COO, Opportunity International Ghana (2011 - 2015)",
            "Head of Operations, Sinapi Aba Savings & Loans (2007 - 2011)"
        ]
    },
    {
        id: "mgmt-2",
        name: "Mrs. Akua Boateng",
        position: "Chief Financial Officer",
        role: "Management",
        photo: "/images/team/management/cfo.jpg",
        bio: "Akua oversees all financial operations, ensuring fiscal responsibility and strategic financial planning for sustainable growth.",
        linkedIn: "https://linkedin.com/in/akua-boateng",
        email: "cfo@billsmicrocredit.com",
        achievements: [
            "Maintained profitability for 8 consecutive years",
            "Secured GHS 100M in funding from development partners",
            "Financial Excellence Award 2022"
        ],
        education: [
            "ACCA Certified",
            "MSc Accounting & Finance - University of Leicester",
            "BCom Accounting - University of Ghana"
        ],
        experience: [
            "CFO, Bills Microcredit Ltd (2016 - Present)",
            "Finance Director, Express Savings & Loans (2012 - 2016)",
            "Senior Auditor, KPMG Ghana (2008 - 2012)"
        ]
    },
    {
        id: "mgmt-3",
        name: "Mr. Yaw Mensah",
        position: "Chief Operations Officer",
        role: "Management",
        photo: "/images/team/management/coo.jpg",
        bio: "Yaw manages operational efficiency across all 16 regions, ensuring seamless service delivery to clients nationwide.",
        linkedIn: "https://linkedin.com/in/yaw-mensah",
        email: "coo@billsmicrocredit.com",
        achievements: [
            "Expanded operations to all 16 regions of Ghana",
            "Reduced operational costs by 25% through process optimization",
            "Operations Excellence Award 2023"
        ],
        education: [
            "MBA Operations Management - Ashesi University",
            "BSc Business Administration - KNUST"
        ],
        experience: [
            "COO, Bills Microcredit Ltd (2017 - Present)",
            "Regional Manager, Advans Ghana (2013 - 2017)",
            "Operations Manager, Fidelity Bank (2009 - 2013)"
        ]
    }
];

export const ambassadors: TeamMember[] = [
    {
        id: "amb-1",
        name: "Nana Ama McBrown",
        position: "Brand Ambassador",
        role: "Ambassador",
        photo: "/images/team/ambassadors/mcbrown.jpg",
        bio: "Award-winning actress and media personality, Nana Ama McBrown embodies the spirit of entrepreneurship and financial empowerment that Bills Microcredit stands for.",
        linkedIn: "https://linkedin.com/in/nana-ama-mcbrown",
        achievements: [
            "Ghana Movie Awards - Best Actress (5 times)",
            "Successful entrepreneur with multiple businesses",
            "Advocate for women's financial independence"
        ],
        experience: [
            "Brand Ambassador, Bills Microcredit Ltd (2020 - Present)",
            "TV Host, United Showbiz (2019 - Present)",
            "Actress & Entrepreneur (2000 - Present)"
        ]
    },
    {
        id: "amb-2",
        name: "John Dumelo",
        position: "Youth Ambassador",
        role: "Ambassador",
        photo: "/images/team/ambassadors/dumelo.jpg",
        bio: "Actor, farmer, and entrepreneur, John Dumelo champions youth empowerment and agricultural financing through Bills Microcredit.",
        linkedIn: "https://linkedin.com/in/john-dumelo",
        achievements: [
            "Ghana Movie Awards - Best Actor",
            "Successful agribusiness entrepreneur",
            "Youth empowerment advocate"
        ],
        experience: [
            "Youth Ambassador, Bills Microcredit Ltd (2021 - Present)",
            "Farmer & Entrepreneur (2015 - Present)",
            "Actor & Producer (2005 - Present)"
        ]
    }
];

export const getTeamMembers = (category: TeamCategory): TeamMember[] => {
    switch (category) {
        case "board":
            return boardMembers;
        case "management":
            return managementTeam;
        case "ambassadors":
            return ambassadors;
        default:
            return [];
    }
};

export const getTeamMemberById = (id: string): TeamMember | undefined => {
    const allMembers = [...boardMembers, ...managementTeam, ...ambassadors];
    return allMembers.find(member => member.id === id);
};
