import { Component } from "@angular/core";
import { ArticleInterface } from "./article/articleInterface";

export class Article implements ArticleInterface {

  private _articleAuthor: string;
  private _articleCountry: string;
  private _articleCustomTopic: string;
  private _articleDate: string;
  private _articleGenre: string;
  private _articleLink: string;
  private _articleMedia: string;
  private _articleMediaType: string;
  private _articleRubric: string;
  private _articleSentiment: string;
  private _articleSubMedia: string;
  private _articleTag: string;
  private _articleTitle: string;
  private _articleTopic: string;
  private _articleUuid: number;

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
              articleUuid: number)
  {
    this._articleAuthor = articleAuthor;
    this._articleCountry = articleCountry;
    this._articleCustomTopic = articleCustomTopic;
    this._articleDate = articleDate;
    this._articleGenre = articleGenre;
    this._articleLink = articleLink;
    this._articleMedia = articleMedia;
    this._articleMediaType = articleMediaType;
    this._articleRubric = articleRubric;
    this._articleSentiment = articleSentiment;
    this._articleSubMedia = articleSubMedia;
    this._articleTag = articleTag;
    this._articleTitle = articleTitle;
    this._articleTopic = articleTopic;
    this._articleUuid = articleUuid;
  }

  get articleAuthor(): string {
    return this._articleAuthor;
  }

  set articleAuthor(value: string) {
    this._articleAuthor = value;
  }

  get articleCountry(): string {
    return this._articleCountry;
  }

  set articleCountry(value: string) {
    this._articleCountry = value;
  }

  get articleCustomTopic(): string {
    return this._articleCustomTopic;
  }

  set articleCustomTopic(value: string) {
    this._articleCustomTopic = value;
  }

  get articleDate(): string {
    return this._articleDate;
  }

  set articleDate(value: string) {
    this._articleDate = value;
  }

  get articleGenre(): string {
    return this._articleGenre;
  }

  set articleGenre(value: string) {
    this._articleGenre = value;
  }

  get articleLink(): string {
    return this._articleLink;
  }

  set articleLink(value: string) {
    this._articleLink = value;
  }

  get articleMedia(): string {
    return this._articleMedia;
  }

  set articleMedia(value: string) {
    this._articleMedia = value;
  }

  get articleMediaType(): string {
    return this._articleMediaType;
  }

  set articleMediaType(value: string) {
    this._articleMediaType = value;
  }

  get articleRubric(): string {
    return this._articleRubric;
  }

  set articleRubric(value: string) {
    this._articleRubric = value;
  }

  get articleSentiment(): string {
    return this._articleSentiment;
  }

  set articleSentiment(value: string) {
    this._articleSentiment = value;
  }

  get articleSubMedia(): string {
    return this._articleSubMedia;
  }

  set articleSubMedia(value: string) {
    this._articleSubMedia = value;
  }

  get articleTag(): string {
    return this._articleTag;
  }

  set articleTag(value: string) {
    this._articleTag = value;
  }

  get articleTitle(): string {
    return this._articleTitle;
  }

  set articleTitle(value: string) {
    this._articleTitle = value;
  }

  get articleTopic(): string {
    return this._articleTopic;
  }

  set articleTopic(value: string) {
    this._articleTopic = value;
  }

  get articleUuid(): number {
    return this._articleUuid;
  }

  set articleUuid(value: number) {
    this._articleUuid = value;
  }
}
