import {FilterTreeItem} from "../FilterTreeItem";

export interface IFilterTreeNode {
  uuid: string;
  name: string;
  // andFT: boolean;
  // orFT: boolean;
  // notFT: boolean;
  children?: FilterTreeItem[];
}
