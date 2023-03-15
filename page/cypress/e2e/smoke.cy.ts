describe("💨 Smoke tests", () => {
    it("should have a local instance of Directus running", () => {
        const defaultDirectusUrl = "http://localhost:8055";
        cy.request(`${defaultDirectusUrl}/server/info`).its("isOkStatusCode");
    });

    it("should visit the page and navigate to the first article", () => {
        cy.visit("");
        cy.contains("a > p", "Read full").click();
        cy.url().should("match", /.*blog/);
    });
});
