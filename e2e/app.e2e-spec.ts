import { MySpotifyPage } from './app.po';

describe('my-spotify App', function() {
  let page: MySpotifyPage;

  beforeEach(() => {
    page = new MySpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
