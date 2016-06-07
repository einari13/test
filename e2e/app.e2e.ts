import { CliTestProjectPage } from './app.po';

describe('cli-test-project App', function() {
  let page: CliTestProjectPage;

  beforeEach(() => {
    page = new CliTestProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cli-test-project works!');
  });
});
