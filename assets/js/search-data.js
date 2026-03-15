// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "For a more extensive CV please see my LinkedIn profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-research",
          title: "research",
          description: "My research interest today addresses all computational aspects around digital twins. In the past, I have furthermore worked on mathematical and computational methods for pedestrian dynamics as well as computational mechanobiology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "My research papers and articles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "A list of my invited talks, guest lectures, and conference presentations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-videos",
          title: "videos",
          description: "Collection of videos covering demonstrators, prototypes, talks, and other materials.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/videos/";
          },
        },{id: "news-launched-the-art-of-the-possible-siemens-blog-which-journeys-through-the-future-of-predictive-engineering-technologies-memo",
          title: 'Launched The Art of the Possible Siemens blog which journeys through the future...',
          description: "",
          section: "News",},{id: "news-dirk-joined-the-tu-darmstadt-as-a-cooperation-professor-building-up-the-chair-of-digital-twins-mortar-board",
          title: 'Dirk joined the TU Darmstadt as a cooperation professor building up the chair...',
          description: "",
          section: "News",},{id: "news-added-a-section-on-talks-amp-amp-presentations-memo",
          title: 'Added a section on  talks &amp;amp;amp; presentations. :memo:',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%69%72%6B.%68%61%72%74%6D%61%6E%6E@%74%75-%64%61%72%6D%73%74%61%64%74.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Dirk-Hartmann", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dirkhartmann", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6020-1061", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=4XvBneEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
