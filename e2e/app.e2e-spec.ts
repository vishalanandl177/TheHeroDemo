import { TheHeroDemoPage } from './app.po';

describe('the-hero-demo App', () => {
  let page: TheHeroDemoPage;

  beforeEach(() => {
    page = new TheHeroDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
