import { MenuTreePage } from './app.po';

describe('menu-tree App', () => {
  let page: MenuTreePage;

  beforeEach(() => {
    page = new MenuTreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
