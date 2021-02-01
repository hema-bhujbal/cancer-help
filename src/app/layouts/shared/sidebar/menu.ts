import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'Home',
        icon: ' dripicons-home',
        link: '/home'
    },
    {
        id: 3,
        label: 'MENUITEMS.HEALTHRECORDS.TEXT',
        icon: 'fas fa-heartbeat',
        subItems: [
            {
                id: 19,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.ADDNEWCASE',
                link: '/wizard',
                parentId: 18
            },
            {
                id: 20,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.OVERVIEW',
                link: '/pages/register-1',
                parentId: 18
            },
            {
                id: 21,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.LABSANDIMAGING',
                link: '/pages/recoverpwd-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.DIAGNOSES',
                link: '/pages/lock-screen-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.MEDICATION',
                link: '/pages/lock-screen-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.IMMUNIZATION',
                link: '/pages/lock-screen-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.ALLERGIES',
                link: '/pages/lock-screen-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.PROCEDURES',
                link: '/pages/lock-screen-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.CAREPLANS',
                link: '/pages/lock-screen-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.PASTVISITS',
                link: '/pages/lock-screen-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.VITALS',
                link: '/pages/lock-screen-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.HEALTHRECORDS.LIST.SOCIALHISTORY',
                link: '/pages/lock-screen-1',
                parentId: 18
            }
        ]
    },
    {
        id: 4,
        label: 'MENUITEMS.APPOIONTMENTS.TEXT',
        icon: ' fas fa-calendar-alt',
        link: '/appointment'
    },
   
    
    {
        id: 5,
        label: 'MENUITEMS.MESSAGES.TEXT',
        icon: ' fas fa-envelope',
        link: '/chat'
    },
    {
        id: 6,
        label: 'MENUITEMS.PROVIDERS.TEXT',
        icon: 'fas fa-hand-holding',
        link: '/providers'
    },
    {
        id: 7,
        label: 'MENUITEMS.PROFILE.TEXT',
        icon: ' fas fa-user',
        link: '/profile'
    },
    {
        id: 8,
        label: 'MENUITEMS.ACCOUNTSETTING.TEXT',
        icon: 'dripicons-scale',
        link: '/account'
    },
    {
        id: 9,
        label: 'MENUITEMS.SERVICEPAYMENT.TEXT',
        icon: 'fas fa-credit-card',
        link: '/service-payment'
    },
    {
        id: 10,
        label: 'MENUITEMS.HELP.TEXT',
        icon: 'ri-chat-1-line',
        link: '/help'
    },
    {
        id: 11,
        label: 'MENUITEMS.GLOSSARY.TEXT',
        icon: 'fas fa-book-open',
        link: '/glossary'
    },
    {
        id: 12,
        label: 'MENUITEMS.TERMOFSERVICE.TEXT',
        icon: 'fas fa-handshake',
        link: '/terms'
    },
    {
        id: 13,
        label: 'MENUITEMS.PRIVACY.TEXT',
        icon: ' fas fa-lock',
        link: '/privacy'
    },
    {
        id: 14,
        label: 'MENUITEMS.LOGOUT.TEXT',
        icon: ' fas fa-sign-out-alt',
        link: '/chat'
    },
    {
        id: 17,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 23,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'ri-profile-line',
        subItems: [
            {
                id: 24,
                label: 'MENUITEMS.UTILITY.LIST.STARTER',
                link: '/pages/starter',
                parentId: 23
            },
            {
                id: 25,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 23
            },
            {
                id: 26,
                label: 'MENUITEMS.UTILITY.LIST.COOMINGSOON',
                link: '/pages/coming-soon',
                parentId: 23
            },
            {
                id: 27,
                label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                link: '/pages/timeline',
                parentId: 23
            },
            {
                id: 28,
                label: 'MENUITEMS.UTILITY.LIST.FAQS',
                link: '/pages/faqs',
                parentId: 23
            },
            {
                id: 29,
                label: 'MENUITEMS.UTILITY.LIST.PRICING',
                link: '/pages/pricing',
                parentId: 23
            },
            {
                id: 30,
                label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                link: '/pages/404',
                parentId: 23
            },
            {
                id: 31,
                label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                link: '/pages/500',
                parentId: 23
            },
        ]
    },
    {
        id: 32,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 57,
        label: 'MENUITEMS.TABLES.TEXT',
        icon: 'ri-table-2',
        subItems: [
            {
                id: 58,
                label: 'MENUITEMS.TABLES.LIST.BASIC',
                link: '/tables/basic',
                parentId: 57
            },
            {
                id: 59,
                label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                link: '/tables/advanced',
                parentId: 57
            }
        ]
    },
    {
        id: 63,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'ri-brush-line',
        subItems: [
            {
                id: 64,
                label: 'MENUITEMS.ICONS.LIST.REMIX',
                link: '/icons/remix',
                parentId: 63
            },
            {
                id: 65,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/icons/materialdesign',
                parentId: 63
            },
            {
                id: 66,
                label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                link: '/icons/dripicons',
                parentId: 63
            },
            {
                id: 67,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: '/icons/fontawesome',
                parentId: 63
            }
        ]
    }
];
