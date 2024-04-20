import type { WorkExperience } from "$lib/utils/types";

export default [
    {
        jobId: 1,
        company: 'PwC',
        jobTitle: 'Auditor',
        location: 'Chicago, IL USA',
        timeframe: '2014 -> 2016',
        current: false,
        description: `Conducted audits of financial statements for public companies, collaborating 
        with clients to identify risk areas and assess the effectiveness of financial reporting 
        controls. Analyzed account balances and performed analytical procedures.`,
    },
    {
        jobId: 2,
        copmany: 'PwC',
        jobTitle: 'Senior Auditor',
        location: 'Chicago, IL USA',
        timeframe: '2016 -> 2017',
        current: false,
        description: `I led a team of auditors, conducting complex audit assignments and analyzing 
        financial statements. My responsibilities included managing client relationships, ensuring 
        compliance with regulations, identifying areas of risk, and communicating audit findings 
        to management.`,
    },
    {
        jobId: 3,
        copmany: 'KPMG',
        jobTitle: 'Senior Consultant - M&A Financial Due Diligence',
        location: 'Chicago, IL USA',
        timeframe: '2017 -> 2019',
        current: false,
        description: "Analyzed a company's financial statements, customer accounts, and other relevant documentation to ensure that M&A transaction is based on accurate and complete financial information. Forecasted future performance and provided insights to buyer/seller to support decision-making. Involved with $1.2b sale of veterinary clinic chain and $470m purchase of composite decking business."
    },
    {
        jobId: 4,
        copmany: 'bp',
        jobTitle: 'Financial Analyst - Supply Fixed Cash Costs',
        location: 'Chicago, IL USA',
        timeframe: '2019 -> 2020',
        current: false,
        description: "Developed reporting, analysis and forecasting of fixed costs for multiple business managers. Created action plans to reduce costs and improve financial performance."
    },
    {
        jobId: 5,
        copmany: 'bp',
        jobTitle: 'Financial Analyst - Whiting Refinery Supply',
        location: 'Chicago, IL USA',
        timeframe: '2020 -> 2021',
        current: false,
        description: "Accountable for financial performance management, reporting and forecasting associated with refining crude/feedstock purchases & sales on behalf Whiting refinery."
    },
    {
        jobId: 6,
        copmany: 'bp',
        jobTitle: 'Senior Financial Advisor - Fuels Supply & Midstream (FS&M)',
        location: 'Chicago, IL USA',
        timeframe: '2021 -> Now',
        current: true,
        description: "Finance Partner for FS&M Americas Midwest Supply Optimization Manager, focused on maximizing the integrated margin between Whiting Refinery, Supply, Trading, B2B, and Retail.",
        bulletPoints:
            [
                "Collaborate with various stakeholders to establish a common understanding of transfer pricing, interface agreements, and integrated value.",
                "Perform forecasting and vulnerability & opportunity analysis",
                "Provide commentary to management on the Midwest's regions financial performance.",
                "Serve as a business subject batter expert for bp's entire U.S. interface between Customers & Products, Refining, and Trading & Shipping.",
                "Employ advanced analytics techniques using Python, Power BI, and other cutting-edge technologies to drive business insights and cost reduction."

            ],

    }
] as WorkExperience[];


