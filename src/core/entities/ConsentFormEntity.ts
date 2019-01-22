import ConsentItemEntity from "./ConsentItemEntity";

export default class ConsentFormEntity {
  constructor(
    public name: string,
    public email: string,
    public selectedItems: ConsentItemEntity[],
    ) {}

  isValid(): boolean {
    return this.selectedItems.length > 0;
  }
}
