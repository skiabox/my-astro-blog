import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://devcanvas.org',
    avatar: {
        src: avatar,
        alt: 'Stavros Kefaleas'
    },
    title: "Developer's Canvas",
    subtitle: 'Stavros Kefaleas - Software Architect',
    description: 'Articles and software projects by Stavros Kefaleas, a full-stack software architect based in Larisa, Greece.',
    image: {
        src: '/dante-preview.jpg',
        alt: "Developer's Canvas"
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Resume',
            href: '/resume'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Resume',
            href: '/resume'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/skiabox'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/stavros-kefaleas'
        }
    ],
    hero: {
        title: "Hello, I'm Stavros Kefaleas",
        text: "I'm a **full-stack software architect** based in Larisa, Greece. I design and build maintainable web applications, with extensive experience across React, TypeScript, Node.js, MongoDB, and modern front-end architecture.\n\nExplore my [projects](/projects), read my [articles](/blog), or find the source code on [GitHub](https://github.com/skiabox).",
        image: {
            src: hero,
            alt: 'Software development workspace'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe',
        text: '',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
