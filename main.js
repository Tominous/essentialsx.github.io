const mainCI = "https://ci.ender.zone/job/EssentialsX/";
const mirrorCI = "https://ci.akpmakes.tech/job/EssentialsX/";

axios.defaults.baseURL = mirrorCI; // ender.zone doesn't allow CORS

const landing = window.landing;
const dlPage = window.dlPage;

docute.init({
    url: "https://raw.githubusercontent.com/wiki/EssentialsX/Essentials/",
    home: "https://raw.githubusercontent.com/wiki/EssentialsX/Essentials/_DocuteHome.md",
    landing,
    tocVisibleDepth: 3,
    disableSidebarToggle: true,
    icons: [
        { icon: "edit", label: "Source Wiki", link: "https://github.com/EssentialsX/Essentials/wiki" },
        { icon: "github", label: "EssentialsX on GitHub", link: "https://github.com/EssentialsX/Essentials" }
    ],
    nav: [
        { title: "Home", path: "/" },
        {
            title: "Wiki",
            type: "dropdown",
            items: [
                { title: "Wiki Home", path: "/Home" },
                { type: "sep" },
                { type: "label", title: "Features" },
                { title: "Improvements", path: "/Improvements", source: "Home.md" },
                { title: "BannerMeta", path: "/BannerMeta" },
                { title: "Command Cooldowns", path: "/Command-Cooldowns" }
            ],
        },
        { title: "Common Issues", path: "/Common-Issues" },
        { title: "Issue Tracker", path: "https://github.com/EssentialsX/Essentials/issues" },
        { title: "Discord", path: "/Discord-Rules" }
    ],
    plugins: [
        docuteWikilink,
    ],
    debug: true
});
