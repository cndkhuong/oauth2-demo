import { ThirdpartyFrontierPage } from './app.po';

describe('thirdparty-frontier App', () => {
  let page: ThirdpartyFrontierPage;

  beforeEach(() => {
    page = new ThirdpartyFrontierPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
