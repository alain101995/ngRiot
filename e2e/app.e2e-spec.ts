import { NgRiotPage } from './app.po';

describe('ng-riot App', () => {
  let page: NgRiotPage;

  beforeEach(() => {
    page = new NgRiotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
