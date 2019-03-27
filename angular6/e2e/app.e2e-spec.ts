import { Angular6Page } from './app.po';

describe('angular6 App', function() {
  let page: Angular6Page;

  beforeEach(() => {
    page = new Angular6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
