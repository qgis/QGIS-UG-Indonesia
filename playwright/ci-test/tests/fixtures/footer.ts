import type { Page, Locator } from "@playwright/test";

export class Footer {
    public readonly banner: Locator;
    private readonly liElement: Locator;
    public readonly projectList: Locator;
    public readonly communityList: Locator;
    public readonly resourcesList: Locator;
    public readonly fundingList: Locator;
    public readonly downloadLink: Locator;
    public readonly featuresLink: Locator;
    public readonly pluginsLink: Locator;
    public readonly getInvolvedLink: Locator;
    public readonly localUserGroupsLink: Locator;
    public readonly documentationLink: Locator;
    public readonly installationGuideLink: Locator;
    public readonly donateLink: Locator;
    public readonly logoImage: Locator;
    public readonly facebookLink: Locator;
    public readonly youtubeLink: Locator;
    public readonly instagramLink: Locator;
    public readonly ghLink: Locator;
    public readonly telegramLink: Locator;
    public readonly mailLink: Locator;

    constructor(public readonly page: Page) {
        this.banner = this.page.getByRole("contentinfo");
        this.liElement = this.banner.locator("li");
        this.projectList = this.liElement
            .filter({ hasText: "Project" })
            .first();
        this.communityList = this.liElement.filter({ hasText: "Community" });
        this.resourcesList = this.liElement.filter({ hasText: "Resources" });
        this.fundingList = this.liElement.filter({ hasText: "Funding" });
        this.downloadLink = this.banner
            .locator("div")
            .filter({ hasText: "Download" })
            .nth(2);
        this.featuresLink = this.banner.getByRole("link", { name: "Overview" });
        this.pluginsLink = this.banner.getByRole("link", {
            name: "Plugins",
            exact: true,
        });
        this.getInvolvedLink = this.banner.getByRole("link", {
            name: "Get involved",
        });
        this.localUserGroupsLink = this.banner.getByRole("link", {
            name: "Local User Groups",
        });
        this.documentationLink = this.page
            .getByRole("link", {
                name: "Documentation",
                exact: true,
            })
            .first();
        this.installationGuideLink = this.liElement.filter({
            hasText: "Installation guide",
        });
        this.donateLink = this.banner.getByRole("link", { name: "Donate" });
        this.logoImage = this.page.getByRole("img", { name: "Logo" });
        this.facebookLink = this.page.getByRole("link", { name: "" });
        this.youtubeLink = this.page.getByRole("link", { name: "" });
        this.instagramLink = this.page
            .locator("div:nth-child(2) > div:nth-child(2) > a:nth-child(3)")
            .first();
        this.ghLink = this.page.getByRole("link", { name: "" });
        this.telegramLink = this.page
            .locator("div:nth-child(2) > div:nth-child(2) > a:nth-child(5)")
            .first();
        this.mailLink = this.page.getByRole("link", { name: "" });
    }
}
