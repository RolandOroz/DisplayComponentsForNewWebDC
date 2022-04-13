import {IFilterTreeItem} from "./Interface/IFilterTreeItem";

export class FilterTreeItem implements IFilterTreeItem {

  public name: string;
  public uuid: string;
  public andFT: boolean;
  public orFT: boolean;
  public notFT: boolean

  constructor(
    name: string,
    uuid: string,
    andFT: false,
    orFT: false,
    notFT: true
  )

  {
    this.name = name;
    this.uuid = uuid;
    this.andFT = andFT;
    this.orFT = orFT;
    this.notFT = notFT;
  }
}

