import { ArticleInterface } from "./article/articleInterface";

export class Article implements ArticleInterface {

  public articleAuthor: string;
  public articleCountry: string;
  public articleCustomTopic: string;
  public articleDate: string;
  public articleGenre: string;
  public articleLink: string;
  public articleMedia: string;
  public articleMediaType: string;
  public articleRubric: string;
  public articleSentiment: string;
  public articleSubMedia: string;
  public articleTag: string;
  public articleTitle: string;
  public articleTopic: string;
  public articleUuid: number;
  public articleContent: string;


  constructor(articleAuthor: string,
              articleCountry: string,
              articleCustomTopic: string,
              articleDate: string,
              articleGenre: string,
              articleLink: string,
              articleMedia: string,
              articleMediaType: string,
              articleRubric: string,
              articleSentiment: string,
              articleSubMedia: string,
              articleTag: string,
              articleTitle: string,
              articleTopic: string,
              articleUuid: number,
              articleContent: string)
  {
    this.articleAuthor = articleAuthor;
    this.articleCountry = articleCountry;
    this.articleCustomTopic = articleCustomTopic;
    this.articleDate = articleDate;
    this.articleGenre = articleGenre;
    this.articleLink = articleLink;
    this.articleMedia = articleMedia;
    this.articleMediaType = articleMediaType;
    this.articleRubric = articleRubric;
    this.articleSentiment = articleSentiment;
    this.articleSubMedia = articleSubMedia;
    this.articleTag = articleTag;
    this.articleTitle = articleTitle;
    this.articleTopic = articleTopic;
    this.articleUuid = articleUuid;
    this.articleContent = articleContent;
  }



}
