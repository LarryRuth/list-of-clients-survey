import { ListOfClientsSurveyPage } from './app.po';

describe('list-of-clients-survey App', function() {
  let page: ListOfClientsSurveyPage;

  beforeEach(() => {
    page = new ListOfClientsSurveyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
