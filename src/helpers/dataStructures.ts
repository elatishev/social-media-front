type valuesOrEntriesType = "entries" | "values";

interface INextReturnType {
  value: string;
  done: boolean;
}

interface IObject {
  next: () => INextReturnType;
  valuesOrEntries: string;
}

export class IterableObject extends Object {
  valuesOrEntries: valuesOrEntriesType;

  constructor(object: Record<string, any>, valuesOrEntries: valuesOrEntriesType) {
    super();
    this.valuesOrEntries = valuesOrEntries;
    Object.assign(this, object);
  }

  [Symbol.iterator]() {
    const entries = Object.entries(this);
    const values = Object.values(this);

    let index = -1;

    return {
      next(): INextReturnType {
        index++;

        return {
          value: this.valuesOrEntries === "entries" ? entries[index] : values[index],
          done: index >= entries.length,
        };
      },
    } as IObject;
  }
}
