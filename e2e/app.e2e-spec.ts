import { RestaurentUiPage } from './app.po';

describe('restaurent-ui App', function() {
  let page: RestaurentUiPage;

  beforeEach(() => {
    page = new RestaurentUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
