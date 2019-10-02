const { openBrowser, goto, write, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser({ headless: false},{args:['--window-size=1440,900']});
        await goto("google.com");
        await write("taiko test automation");
        await click("Google Search");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
