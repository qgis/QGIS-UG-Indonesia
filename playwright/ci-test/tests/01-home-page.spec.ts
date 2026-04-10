import { test as base, expect } from "@playwright/test";
import { Header } from "./fixtures/header";
import { HomePage } from "./fixtures/home-page";
import { Footer } from "./fixtures/footer";

type HomePageFixtures = {
    header: Header;
    homePage: HomePage;
    footer: Footer;
};

const test = base.extend<HomePageFixtures>({
    header: async ({ page }, use) => {
        const header = new Header(page);
        await use(header);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    footer: async ({ page }, use) => {
        const footer = new Footer(page);
        await use(footer);
    },
});

test.describe("Home page", () => {
    test.beforeEach(async ({ header, homePage }) => {
        // Go to the home url before each test.
        await homePage.goto();
    });

    test("Header", async ({ header }) => {
        await expect(header.berandaLink).toBeVisible();
        await expect(header.tentangKamiLink).toBeVisible();
        await expect(header.studiKasusLink).toBeVisible();
        await expect(header.acaraLink).toBeVisible();
        await expect(header.komunitasLink).toBeVisible();
        await expect(header.tutorialLink).toBeVisible();
        await expect(header.blogLink).toBeVisible();
        await expect(header.aturanLink).toBeVisible();
        await expect(header.searchInput).toBeVisible();
        await expect(header.searchInput).toBeEmpty();
    });

    test("Content", async ({ homePage }) => {
        // Add more tests here

        for (const text of homePage.textList) {
            await expect(homePage.pageBody).toContainText(text);
        }
    });

    test("Footer", async ({ footer }) => {
        await expect(footer.banner).toBeVisible();
        await expect(footer.projectList).toBeVisible();
        await expect(footer.communityList).toBeVisible();
        await expect(footer.resourcesList.first()).toBeVisible();
        await expect(footer.fundingList).toBeVisible();
        await expect(footer.downloadLink).toBeVisible();
        await expect(footer.featuresLink).toBeVisible();
        await expect(footer.pluginsLink).toBeVisible();
        await expect(footer.getInvolvedLink).toBeVisible();
        await expect(footer.localUserGroupsLink).toBeVisible();
        await expect(footer.documentationLink).toBeVisible();
        await expect(footer.installationGuideLink).toBeVisible();
        await expect(footer.donateLink).toBeVisible();
        await expect(footer.logoImage).toBeVisible();
        await expect(footer.facebookLink).toBeVisible();
        await expect(footer.youtubeLink).toBeVisible();
        await expect(footer.instagramLink).toBeVisible();
        await expect(footer.ghLink).toBeVisible();
        await expect(footer.telegramLink).toBeVisible();
        await expect(footer.mailLink).toBeVisible();
    });
});
