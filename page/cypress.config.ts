import {defineConfig} from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents: (on, config) => {
            const configOverrides: Partial<Cypress.PluginConfigOptions> = {
                baseUrl: "http://localhost:3333",
                video: false,
                screenshotOnRunFailure: false
            };

            // To use this:
            // cy.task('log', whateverYouWantInTheTerminal)
            on("task", {
                log: (message) => {
                    console.log(message);

                    return null;
                }
            });

            return {...config, ...configOverrides};
        }
    }
});
