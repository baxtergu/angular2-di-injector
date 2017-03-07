import { Angular2DiInjectorPage } from './app.po';

describe('angular2-di-injector App', () => {
  let page: Angular2DiInjectorPage;

  beforeEach(() => {
    page = new Angular2DiInjectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
