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

export const boardMembers: TeamMember[] = [
    {
        id: "board-1",
        name: "KWADWO DEI KWARTENG",
        position: "Board Chairman",
        role: "Board of Directors",
        photo: "/images/team/board/kwadwo_dei_kwarteng.jpg",
        bio: "Mr. Kwarteng brings over 30 years of experience in financial services and corporate governance. He has been instrumental in shaping Bills Microcredit's strategic direction.",
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
        name: "ROMEO-RICHLOVE KWEKU ELORM SESHIE",
        position: "Board Member",
        role: "Board of Directors",
        photo: "/images/team/board/romeo-richlove_kweku_elorm_seshie.jpg",
        bio: "Mr. Romeo is a seasoned banker with expertise in microfinance and rural banking. She champions financial inclusion initiatives across Ghana.",
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
        name: "EMMANUEL N. L. LAMPTEY",
        position: "Board Member",
        role: "Board of Directors",
        photo: "/images/team/board/emanuel_n_l_lamptey.jpg",
        bio: "Mr. Emmanuel is a financial strategist with deep knowledge in risk management and regulatory compliance in the microfinance sector.",
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
    },
    {
        id: "board-4",
        name: "ABIGAIL NAA DEDEI QUAYE",
        position: "Board Secretary",
        role: "Board of Directors",
        photo: "/images/team/board/abigail_naa_deedi_quaye.jpg",
        bio: "Ms. Abigail is a financial strategist with deep knowledge in risk management and regulatory compliance in the microfinance sector.",
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
        name: "ROMEO-RICHLOVE KWEKU ELORM SESHIE",
        position: "Chief Executive Officer",
        role: "Management",
        photo: "/images/team/board/romeo-richlove_kweku_elorm_seshie.jpg",
        bio: "Mr. Romeo is a seasoned banker with expertise in microfinance and rural banking. She champions financial inclusion initiatives across Ghana.",
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
        name: "BISMARK ADJEI",
        position: "Head of Credit Union, Monitoring and Evaluation",
        role: "Management",
        photo: "/images/team/management/bismark_adjei.jpg",
        bio: "Mr. Bismark oversees all financial operations, ensuring fiscal responsibility and strategic financial planning for sustainable growth.",
        linkedIn: "https://linkedin.com/in/bismark-adjei",
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
        name: "ISAAC KWAKU EGYIR ARTHUR",
        position: "CA, CT, BCOM (HEAD OF INTERNAL AUDIT)",
        role: "Management",
        photo: "/images/team/management/isaac_egoir_arthur.jpg",
        bio: "Isaac manages operational efficiency across all 16 regions, ensuring seamless service delivery to clients nationwide.",
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
    },
    {
        id: "mgmt-4",
        name: "NUHU SALIFU",
        position: "Head of Finance and Administration",
        role: "Management",
        photo: "/images/team/management/nuhu_salifu.jpg",
        bio: "Nuhu manages operational efficiency across all 16 regions, ensuring seamless service delivery to clients nationwide.",
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
    },
    {
        id: "mgmt-5",
        name: "KWEKU BAAH",
        position: "Head of Operations",
        role: "Management",
        photo: "/images/team/management/kweku_bah.jpg",
        bio: "Kweku manages operational efficiency across all 16 regions, ensuring seamless service delivery to clients nationwide.",
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
    },
    {
        id: "mgmt-6",
        name: "ABIGAIL NAA DEDEI QUAYE",
        position: "Head of Human Capital",
        role: "Management",
        photo: "/images/team/board/abigail_naa_deedi_quaye.jpg",
        bio: "Abigail manages operational efficiency across all 16 regions, ensuring seamless service delivery to clients nationwide.",
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
    },
    {
        id: "mgmt-6",
        name: "SAVIOUR QUAMMEY",
        position: "Head of Recovery",
        role: "Management",
        photo: "/images/team/management/saviour_quamme.jpg",
        bio: "Abigail manages operational efficiency across all 16 regions, ensuring seamless service delivery to clients nationwide.",
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
    },
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
