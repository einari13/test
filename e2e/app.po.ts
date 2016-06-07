export class CliTestProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cli-test-project-app h1')).getText();
  }
}
