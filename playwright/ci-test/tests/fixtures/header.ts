import type { Page, Locator } from "@playwright/test";

export class Header {
    public readonly mainNavigation: Locator;
    public readonly berandaLink: Locator;
    public readonly tentangKamiLink: Locator;
    public readonly studiKasusLink: Locator;
    public readonly acaraLink: Locator;
    public readonly komunitasLink: Locator;
    public readonly tutorialLink: Locator;
    public readonly blogLink: Locator;
    public readonly aturanLink: Locator;
    public readonly searchInput: Locator;

    constructor(public readonly page: Page) {
        this.mainNavigation = this.page.getByLabel("main navigation");
        this.berandaLink = this.mainNavigation.getByRole("link", {
            name: "Beranda",
        });
        this.tentangKamiLink = this.mainNavigation.getByRole("link", {
            name: "Tentang Kami",
        });
        this.studiKasusLink = this.mainNavigation.getByRole("link", {
            name: "Studi Kasus",
        });
        this.acaraLink = this.mainNavigation.getByRole("link", {
            name: "Acara",
        });
        this.komunitasLink = this.mainNavigation.getByRole("link", {
            name: "Komunitas",
        });
        this.tutorialLink = this.mainNavigation.getByRole("link", {
            name: "Tutorial",
        });
        this.blogLink = this.mainNavigation.getByRole("link", {
            name: "Blog",
        });
        this.aturanLink = this.mainNavigation.getByRole("link", {
            name: "Aturan",
        });
        this.searchInput = this.page.getByRole("searchbox", { name: "Search" });
    }
}
