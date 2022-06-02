export const customPageData = {
    "dashboard": {
        "services":[
            {
                icon: "report",
                title: "Report an Issue",
                text: "Let us know about an issue with your device or service",
                link: "/coming-soon",
                linkText: "Submit"
            },
            {
                icon: "service",
                title: "Service Catalogue",
                text: "Browse our catalogue to request updates or changes to your services",
                link: "/coming-soon",
                linkText: "Get started"
            },
            {
                icon: "knowledge",
                title: "Knowledge Base",
                text: "Search or browse our articles for devices & service-specific topics",
                link: "/coming-soon",
                linkText: "Learn more"
            }
        ]
    },
    "navbar_header": {
        "navbar_header_link": {
            data:[
                {
                    title: "Personal",
                    isDropdown: false,
                    href: "/personal",
                    dropdownData:[]
                },
                {
                    title: "Personal business",
                    isDropdown: false,
                    href: "/personal",
                    dropdownData:[]
                },
                {
                    title: "Business",
                    isDropdown: true,
                    href: "/business",
                    dropdownData:[
                        {
                            title: "Personal",
                            isDropdown: false,
                            href: "/business/personal1",
                            dropdownData:[]
                        },
                        {
                            title: "Personal",
                            isDropdown: false,
                            href: "/business/personal2",
                            dropdownData:[]
                        }
                    ]
                },
                {
                    title: "Health",
                    isDropdown: true,
                    href: "/health",
                    dropdownData:[
                        {
                            title: "Personal",
                            isDropdown: false,
                            href: "/health/personal1",
                            dropdownData:[]
                        },
                        {
                            title: "Personal",
                            isDropdown: false,
                            href: "/health/personal2",
                            dropdownData:[]
                        }
                    ]
                },
                {
                    title: "Agriculture",
                    isDropdown: false,
                    href: "/agriculture",
                    dropdownData:[]
                },
                {
                    title: "Social Impact",
                    isDropdown: false,
                    href: "/social-impact",
                    dropdownData:[]
                }
            ]   
        },
        "navbar_header_option": {
            data:[
                {
                    title: "",
                    icon: "search",
                    input: "text",
                    isDropdown: false
                },
                {
                    title: "Help",
                    icon: "Call",
                    input: "link",
                    isDropdown: false
                },
                {
                    title: "",
                    icon: "NotifyBold",
                    input: "dropdown",
                    isDropdown: false
                },
                {
                    title: "",
                    icon: "ProfileBold",
                    input: "dropdown",
                    isDropdown: true
                }
            ],
        },
        "navbar_header_region": {
            data:[],
        }
    }

}