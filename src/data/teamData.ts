// Team member type definition
export interface TeamMember {
    id: string;
    name: string;
    position: string;
    role: string;
    photo: string;
    bio?: string;
    fullBio?: string; // Comprehensive professional biography
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
        // photo: "/images/team/board/kwadwo_dei_kwarteng.jpg",
        photo: "https://ik.imagekit.io/nsuolqs5g/others/board/kwadwo_dei_kwarteng.jpg?updatedAt=1764454764013",
        fullBio: `Kwadwo Dei Kwarteng is a dedicated and accomplished corporate lawyer with over a decade of experience in corporate governance, regulatory compliance, and commercial transactions. As Board Chairman of Bills Microcredit, he brings deep legal insight, strategic leadership, and a strong commitment to ethical governance.

                    Born in Kumasi on January 20, 1986, Mr. Kwarteng has built a solid reputation as a trusted legal advisor and boardroom strategist. His ability to navigate complex legal frameworks and advise on high-stakes corporate matters makes him a valuable asset to the Board and leadership of Bills Microcredit.

                    An alumnus of Opoku Ware School, he went on to earn his law degree from Kwame Nkrumah University of Science and Technology (KNUST), followed by his professional legal training at the Ghana School of Law. He was called to the Bar in 2010.

                    Fluent in both English and Twi, Mr. Kwarteng is known for his clarity in communication and cultural fluency. He is an active member of the Ghana Bar Association and is widely respected for his legal acumen, integrity, and dedication to excellence in client service.

                    As Board Chairman, Mr. Kwarteng is focused on strengthening corporate governance, advancing compliance standards, and supporting Bills Microcredit's mission of financial empowerment across Ghana.`,
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
        // photo: "/images/team/board/romeo-richlove_kweku_elorm_seshie.jpg",
        photo: "https://ik.imagekit.io/nsuolqs5g/others/board/romeo-richlove_kweku_elorm_seshie.jpg?updatedAt=1764454762168",
        fullBio: `Romeo-Richlove Elorm Kweku Seshie is the Chief Executive Officer (CEO) of BILLS Micro-Credit Ltd, having risen through the ranks after previously serving as the General Manager and Head of Finance and Administration of the company. Under his visionary leadership, BILLS has achieved significant milestones, gaining both national and international recognition for innovation and financial inclusion.

                    Romeo boasts a robust academic and professional background in finance, accounting, taxation, banking and strategic management.
                    He holds a Master’s degree in Finance from the Ghana Institute of Management and Public Administration (GIMPA) and a Bachelor’s degree in Accounting and Information Systems from Regent University College of Science and Technology. His academic journey also includes a Higher National Diploma in Accounting from Accra Polytechnic, an Advanced Executive Certificate in Financial Management from the Leadership and Entrepreneurial Training Center in Tema, and an advanced diploma in Transfer Pricing from the Chartered Institute of Taxation, Ghana.

                    In addition to his academic qualifications, Romeo is a well-decorated professional. He is a Chartered Accountant and member of the Institute of Chartered Accountants, Ghana (ICAG), a Chartered Management Accountant (CIMA – UK), and a Chartered Banker with the Chartered Institute of Bankers, Ghana. He is also a Certified Credit Administrator from the National Banking College in Accra and a Certified Tally Accounting Software Administrator from IPMC. He further holds professional diplomas in Forensic Audit and Audit & Fraud Analytics from Institute of Chartered Accountants, Ghana (ICAG).

                    Demonstrating a continuous commitment to lifelong learning and professional growth, Romeo is currently a Chartered Tax Expert with the Chartered Institute of Taxation, Ghana. He is also a law student at Central University and a candidate pursuing the Chartered Financial Analyst (CFA) designation from the CFA Institute. In 2025, he enrolled in a PhD program in Finance at Noble International Business School, affiliated with the Swiss Business School.

                    With over a decade of experience in finance, auditing, and corporate strategy, Romeo is known for his analytical acumen, strategic foresight, and innovative problem-solving abilities. He has consistently demonstrated excellence in crafting and executing balanced strategies that have enhanced the financial health and operational efficiency of BILLS Micro-Credit.

                    Romeo’s contributions to the microfinance and banking sectors have earned him several accolades. He was named Microfinance CEO of the Year at the 11th Ghana Entrepreneur & Corporate Executive Awards in 2021 and received recognition for his impactful leadership during the COVID-19 pandemic at the West Africa Regional Business Excellence Awards. He was also honored in the Banking and Finance category at the 40 under 40 Awards in 2020. Under his stewardship, BILLS Micro-Credit won SME Company of the Year at the 2020 Ghana Business Awards and the Innovation in Financial Inclusion Loan Service Provider award at the European Global Business and Finance Awards 2020.

                    Born on May 2, 1984, Romeo spent most of his childhood in Keta-Anyako, in the Volta Region of Ghana. A product of Keta Business Secondary School, he remains grounded in his roots and continues to champion financial empowerment and inclusive growth across communities in Ghana.

                    Romeo-Richlove Seshie is widely regarded as a transformative leader and an astute financial management professional whose contributions continue to shape the future of microfinance in Ghana and beyond`,
        linkedIn: "https://www.linkedin.com/in/romeo-richlove-elorm-kweku-seshie-bsc-llb-mba-ca-acib-cit-cima-03370841",
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
        // photo: "/images/team/board/emanuel_n_l_lamptey.jpg",
        photo: "https://ik.imagekit.io/nsuolqs5g/others/board/emanuel_n_l_lamptey.jpg?updatedAt=1764454762066",
        fullBio: `Emmanuel N.L. Lamptey is a visionary entrepreneur and seasoned executive with a wealth of experience in business development, human resource management, finance, and administration. Currently serving as the Chairman and Chief Executive Officer of Quick Angels Limited, Mr. Lamptey plays a critical role in shaping Ghana’s entrepreneurial landscape through equity financing. Under his leadership, Quick Angels has expanded its investment portfolio to include over 30 innovative and high-growth businesses across various sectors. Notable among these are Ceqa Foods and Beverages Ghana Ltd, Gold Coast Foods Herbs and Spices Ltd, Coli Link Ghana, Ridge Medical Centre, and Superior Fisheries and Aquaculture.

                    Before his elevation to CEO and Board Chairman of Quick Angels, Mr. Lamptey served diligently as the company’s General Manager, where he distinguished himself through strategic insight, operational efficiency, and transformative leadership.

                    He also serves as a valued member of the Board of Directors at Bills Microcredit, contributing his broad expertise in finance, credit analysis, and strategic planning to support the company’s growth and mission of empowering individuals and businesses through accessible financial solutions.

                    Academically, Mr. Lamptey holds an MBA in Finance and Administration from Sikkim Manipal University in India and a Bachelor of Arts (Hons) in Economics and Statistics from the University of Cape Coast (UCC). He is currently pursuing the Chartered Financial Analyst (CFA) certification, further solidifying his commitment to professional excellence.

                    A natural leader with a pragmatic approach to problem-solving, Emmanuel is known for his keen analytical mind, effective communication skills, and ability to inspire high-performing teams. He is also a shrewd business owner and a hands-on mentor, highly respected for his integrity, empathy, and unwavering commitment to positive impact.

                    Guided by his strong Christian faith, Emmanuel balances his professional responsibilities with a deep sense of purpose and service. He is happily married and a proud father of two intelligent children.

                    Mr. Emmanuel Lamptey exemplifies the perfect blend of business acumen, leadership, and compassion—consistently driving growth, nurturing innovation, and transforming lives.`,
        email: "vice.chair@billsmicrocredit.com",
        linkedIn: "https://www.linkedin.com/in/emmanuel-lamptey-142075272",
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
        // photo: "/images/team/board/abigail_naa_deedi_quaye.jpg",
        photo: "https://ik.imagekit.io/nsuolqs5g/others/board/abigail_naa_deedi_quaye.jpg?updatedAt=1764454761365",
        fullBio: `Ms. Abigail Naa Dedei Quaye joined the then Quick Credit and Investment Micro-credit Ltd., after a successful career with Barclays Bank (now Absa Bank) in 2018 as an Administrative Assistant. Her dedication to work and special qualities in managing people offered her an opportunity for a Managerial position in the Human Resource Department.

                    By dint of hard work and dedication, Abigail has risen to become a Director, Board Secretary, and Executive Member of Bills Micro-credit Ltd, as well as the Head of Human Capital (HC). Abigail also doubles as the Group Human Capital, with all brands affiliated with Mr. Richard Nii Armah Quaye, the Board Chairman. 

                    She is an experienced and result-driven HC professional with an unparalleled drive for excellence. Versatility, dynamism, meticulousness, and a proven ability to contribute at both strategic and operational levels to meet the goals of organizations are some of her outstanding attributes. 

                    With over 10 years of experience in the banking industry, Abigail combines the application of innovative ideas in People Management, with resourcefulness to retain talents and influence the drive for high performance.

                    She is currently an Associate Member of the Chartered Institute of Human Resource Management, Ghana.`,
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
        // photo: "/images/team/board/romeo-richlove_kweku_elorm_seshie.jpg",
        photo: "https://ik.imagekit.io/nsuolqs5g/others/board/romeo-richlove_kweku_elorm_seshie.jpg?updatedAt=1764454762168",
        fullBio: `Romeo-Richlove Elorm Kweku Seshie is the Chief Executive Officer (CEO) of BILLS Micro-Credit Ltd, having risen through the ranks after previously serving as the General Manager and Head of Finance and Administration of the company. Under his visionary leadership, BILLS has achieved significant milestones, gaining both national and international recognition for innovation and financial inclusion.

                Romeo boasts a robust academic and professional background in finance, accounting, taxation, banking and strategic management.
                He holds a Master’s degree in Finance from the Ghana Institute of Management and Public Administration (GIMPA) and a Bachelor’s degree in Accounting and Information Systems from Regent University College of Science and Technology. His academic journey also includes a Higher National Diploma in Accounting from Accra Polytechnic, an Advanced Executive Certificate in Financial Management from the Leadership and Entrepreneurial Training Center in Tema, and an advanced diploma in Transfer Pricing from the Chartered Institute of Taxation, Ghana.

                In addition to his academic qualifications, Romeo is a well-decorated professional. He is a Chartered Accountant and member of the Institute of Chartered Accountants, Ghana (ICAG), a Chartered Management Accountant (CIMA – UK), and a Chartered Banker with the Chartered Institute of Bankers, Ghana. He is also a Certified Credit Administrator from the National Banking College in Accra and a Certified Tally Accounting Software Administrator from IPMC. He further holds professional diplomas in Forensic Audit and Audit & Fraud Analytics from Institute of Chartered Accountants, Ghana (ICAG).

                Demonstrating a continuous commitment to lifelong learning and professional growth, Romeo is currently a Chartered Tax Expert with the Chartered Institute of Taxation, Ghana. He is also a law student at Central University and a candidate pursuing the Chartered Financial Analyst (CFA) designation from the CFA Institute. In 2025, he enrolled in a PhD program in Finance at Noble International Business School, affiliated with the Swiss Business School.

                With over a decade of experience in finance, auditing, and corporate strategy, Romeo is known for his analytical acumen, strategic foresight, and innovative problem-solving abilities. He has consistently demonstrated excellence in crafting and executing balanced strategies that have enhanced the financial health and operational efficiency of BILLS Micro-Credit.

                Romeo’s contributions to the microfinance and banking sectors have earned him several accolades. He was named Microfinance CEO of the Year at the 11th Ghana Entrepreneur & Corporate Executive Awards in 2021 and received recognition for his impactful leadership during the COVID-19 pandemic at the West Africa Regional Business Excellence Awards. He was also honored in the Banking and Finance category at the 40 under 40 Awards in 2020. Under his stewardship, BILLS Micro-Credit won SME Company of the Year at the 2020 Ghana Business Awards and the Innovation in Financial Inclusion Loan Service Provider award at the European Global Business and Finance Awards 2020.

                Born on May 2, 1984, Romeo spent most of his childhood in Keta-Anyako, in the Volta Region of Ghana. A product of Keta Business Secondary School, he remains grounded in his roots and continues to champion financial empowerment and inclusive growth across communities in Ghana.

                Romeo-Richlove Seshie is widely regarded as a transformative leader and an astute financial management professional whose contributions continue to shape the future of microfinance in Ghana and beyond`,
        linkedIn: "https://www.linkedin.com/in/romeo-richlove-elorm-kweku-seshie-bsc-llb-mba-ca-acib-cit-cima-03370841",
        email: "ceo@billsmicrocredit.com",
        // phone: "+233 24 123 4567",
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
        // photo: "/images/team/management/bismark_adjei.jpg",
        photo: "https://res.cloudinary.com/dmhtrzmfa/image/upload/v1764757150/BISMARK_ADJEI-6B_mdotca.jpg",
        fullBio: `Bismark is a professional banker with over 18 years of experience spanning Microfinance, Banking Operations, and Compliance-related activities in the financial sector.

                He holds a Bachelor in Business Administration (BBA), an Accounting option from Christian Service University College, and a Master of Science (MSc) in Accounting & Finance from the University of Cape Coast. Bismark is an Associate member of the Chartered Institute of Bankers (ACIB) Ghana, and a student member of the Institute of Chartered Accountants (ICA)Ghana.

                He started working with Opportunity International Savings and Loans Ltd as the Monitoring Officer in the Deposit Mobilization Department in 2005. He rose through the ranks to become the Branch Operations Manager for the Goaso Branch of the Institution.

                Bismark also worked at Sinapi Aba Savings and Loans Ltd (SASL) as the Branch Operations Manager in 2013. The role he held continuously for many of the Institution’s branches for four (4) years and later became the Compliance Manager of the Institution before switching carpets to join Quick Credit and Investment Micro Credit Ltd now Bills Micro-Credit Ltd in 2018 as the Operations Manager for the Ashanti Region and later, the entire Institution.

                Bismark became an integral part of the company’s expansion and growth program in 2020, where the company grew from 25 branches operating in two regions to operating all over Ghana. He then became the Head of Operations and subsequently moved to Head the Training and Monitoring Department.

                Currently, at Bills, Bismark is the Head of Credit, Monitoring, and Evaluation.`,
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
        // photo: "/images/team/management/isaac_egoir_arthur.jpg",
        photo: "https://res.cloudinary.com/dmhtrzmfa/image/upload/v1764757186/ISAAC_ARTHUR-32i_vlrhw5.jpg",
        fullBio: `Isaac Kwaku Egyir Arthur is a Chartered Accountant and a Chartered Tax Practitioner. He is a member in good standing with both the Institute of Chartered Accountants Ghana (ICAG) and the Chartered Institute of Taxation Ghana (CITG).

                    He holds a Bachelor of Commerce degree (Accounting) from the University of Cape Coast. He is currently pursuing a Master’s Degree in Accounting and Finance with the Kwame Nkrumah University of Science and Technology (KNUST).

                    Isaac is well-versed in accounting, auditing, financial analysis, budgeting, taxation, and risk management. He has an excellent knowledge of QuickBooks, Tally Accounting Software, Microsoft Office Suit, and Provisio Banking Software.

                    Before joining Bills Micro Credit Limited, Isaac worked as a Senior Audit Associate with R-Alliance Consults where he was in charge of statutory audits of private and public sector entities. He joined Bills Micro Credit Ltd (formerly Quick Credit & Investment Micro Credit Ltd) as a Finance Manager in 2020. He is currently the Head of Internal Audit of Bills Micro Credit Limited`,
        linkedIn: "https://www.linkedin.com/in/ikearthur",
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
        // photo: "/images/team/management/nuhu_salifu.jpg",
        photo: "https://res.cloudinary.com/dmhtrzmfa/image/upload/v1764757251/NUHU_SALIFU-33_f0fb6r.jpg",
        fullBio: `Nuhu Salifu is a forty-two (42) year-old Chartered Accountant and a member of the Institute of Chartered Accountants Ghana with over 17 years experience in Accounting, Finance & Taxation. 

                Nuhu is a product of the Kwame Nkrumah University of Science and Technology, where he pursued an MSc in Accounting and Finance (pending graduation).

                He also graduated with a B.Sc. Accounting (2nd Class Upper Honors) from the University of Education Winneba-Kumasi campus (2008 to 2010).

                Before entering the University of Education, Nuhu had graduated with an HND in Accounting (2nd Class Upper Honors) from the Tamale Polytechnic (2000 to 2003). He is also a product of Wa Senior High School (1997 to 1999) and Jindabo Junior High School (1994 to 1996)

                He worked with Nandom Rural Bank Limited as an Assistant Accountant from June 2006 to March 2008 after his national service with the Wa Regional Hospital as an Accountant Trainee. 

                Nuhu also worked with Boateng and Darko Depot Contractors Limited as an Accounts Officer from April 2008 to February 2010. Before joining Quick Credit and Investment Microcredit Limited, Nuhu worked with Akate Farms & Trading Company Limited as an Accountant from September 2010 to December 2017.

                Nuhu joined the company in 2018 as a Finance and Administrative Manager and has been the Head of Finance and Administration for the past five years.

                Nuhu has expertise in; designing and implementing accounting systems, preparing financial statements and annual budgets, maintaining efficient budgetary control systems, instituting internal control procedures and efficient credit control mechanisms, working capital management, and capital budgeting among others. Nuhu has good working knowledge in QuickBooks, Proviso (Accounting Software), and Microsoft Office Suite. 

                He is a Ghanaian, married, and has since been blessed with four children.

                Nuhu’s main hobbies include reading and cycling.`,
        linkedIn: "https://www.linkedin.com/in/nuhu-salifu-3ba67470",
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
        // photo: "/images/team/management/kweku_bah.jpg",
        photo: "https://res.cloudinary.com/dmhtrzmfa/image/upload/v1764757237/KWAKU_BAAH-33K_uz96gc.jpg",
        fullBio: `Kweku Baah is an experienced Business Development specialist with a demonstrated history of working in the financial and sports industries. He is skilled in credit administration, sales, business development, investments, and sports marketing and has over 18 years of industrial experience.

                Kweku has worked for several companies, including Pan African Savings and Loans (formerly EB-Accion Savings and Loans), Galaxy Micro Finance, and Firstrust Savings and Loans Limited.

                At Pan African, he was the first officer to rise through the loans officer rank to attain the position of Branch Manager in just 4 years. Kweku held the position of Monitoring and Recovery Manager at Galaxy and Firstrust Savings and Loans, he was the Branch Manager in charge of the Head Office.

                He also had a brief stint as the General Manager of Vivantti Micro Finance and also co-founded Centa14 Sports and Entertainment Limited in 2017 where he headed the Business Development Unit.

                Until he was appointed Head of Operations at Quick Credit, Kweku worked as an Operations Associate at Quick Angels (a sister company of Quick Credit). He was responsible for securing and managing the interest of Quick Angels in the following brands; Pizzaman Chickenman, Ridge Medical Center, Tigon Entertainment, Addicent Foods, Alcilla Farms, and Jenam Cosmetics Gh.

                Kweku holds an MBA degree in Marketing from the University of Cape Coast. 

                He had his First degree at the University of Ghana where he graduated with a BA Honors in Political Science with Sociology.

                For his Secondary School education, Kweku attended Prempeh College in Kumasi.

                He has also attended a lot of training programs and obtained certificates in risk management, credit administration, sports marketing, business development, portfolio management, and leadership.`,
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
        // photo: "/images/team/board/abigail_naa_deedi_quaye.jpg",
        photo: "https://ik.imagekit.io/nsuolqs5g/others/board/abigail_naa_deedi_quaye.jpg?updatedAt=1764454761365",
        fullBio: `Ms. Abigail Naa Dedei Quaye joined the then Quick Credit and Investment Micro-credit Ltd., after a successful career with Barclays Bank (now Absa Bank) in 2018 as an Administrative Assistant. Her dedication to work and special qualities in managing people offered her an opportunity for a Managerial position in the Human Resource Department.

                    By dint of hard work and dedication, Abigail has risen to become a Director, Board Secretary, and Executive Member of Bills Micro-credit Ltd, as well as the Head of Human Capital (HC). Abigail also doubles as the Group Human Capital, with all brands affiliated with Mr. Richard Nii Armah Quaye, the Board Chairman. 

                    She is an experienced and result-driven HC professional with an unparalleled drive for excellence. Versatility, dynamism, meticulousness, and a proven ability to contribute at both strategic and operational levels to meet the goals of organizations are some of her outstanding attributes. 

                    With over 10 years of experience in the banking industry, Abigail combines the application of innovative ideas in People Management, with resourcefulness to retain talents and influence the drive for high performance.

                    She is currently an Associate Member of the Chartered Institute of Human Resource Management, Ghana.`,
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
        id: "mgmt-7",
        name: "SAVIOUR QUAMMEY",
        position: "Head of Recovery",
        role: "Management",
        // photo: "/images/team/management/saviour_quamme.jpg",
        photo: "https://res.cloudinary.com/dmhtrzmfa/image/upload/v1764757298/SAVIOUR-15_tidp9u.jpg",
        fullBio: `Saviour Quammey is a highly driven and results-oriented professional with over a decade of experience across finance, compliance, credit operations, and recovery. He currently serves as the Head of Recovery at Bills Microcredit, where he leads the design and execution of recovery strategies aimed at maintaining the health and sustainability of the company’s loan portfolio.

 

                Saviour’s journey at Bills Microcredit began in 2021, where he served in progressively senior roles across credit analysis and operations. As a Credit Analyst, he played a key role in evaluating loan applications, monitoring field performance, and recommending data-informed lending decisions. He was later promoted to Area Manager for the Keta-Aflao area, where he oversaw field operations and team performance, ensuring compliance and driving portfolio growth. He then advanced to Operations Manager for the Volta and Oti regions, managing a wider portfolio and providing direct supervision and leadership to multiple area managers and field teams. His strategic oversight significantly contributed to improved loan performance and recovery rates in the region.

                

                Before joining Bills Microcredit, Saviour held key roles in other financial institutions, including Head of Compliance at FastTrack Microfinance Limited, Finance Officer at VisionFund Ghana, and Loan Officer at ASA Savings and Loans Ltd. These roles gave him a strong foundation in both the regulatory and operational sides of financial services.

                

                Saviour holds a Master of Business Administration (MBA) from Accra Business School and a Bachelor of Science in Business Administration, majoring in Accounting and Finance, from Presbyterian University College, Ghana. He has also participated in several workshops and training programs, including the Data Bank Greatness Summit and World Vision International’s security and awareness programs.

                

                Known for his professionalism, integrity, and hands-on leadership, Saviour brings structure and focus to every aspect of his work, consistently delivering results that align with Bills Microcredit’s mission of responsible lending and financial inclusion.`,
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
