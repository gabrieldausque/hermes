/**
 * A box to encapsulate value type (string, number, boolean , etc...) in an object
 */
export class BullValueTypeBox {
  /**
   * Create a new BullValueTypeBox
   * @param valueToBox The value to encapsulate
   */
  constructor(valueToBox: any) {
    this.boxedValue = valueToBox;
  }

  /**
   * the encapsulated value
   */
  boxedValue:any;
}
