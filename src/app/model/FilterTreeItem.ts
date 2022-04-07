import {IFilterTreeItem} from "./Interface/IFilterTreeItem";

export class FilterTreeItem implements IFilterTreeItem {

  public name: string;
  public uuid: string;

  constructor(
    name: string,
    uuid: string
  )
  {
    this.name = name;
    this.uuid = uuid;
  }

}

