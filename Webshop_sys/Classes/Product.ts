export class Product {
    constructor(
        private _id: string,
        private _name: string,
        private _price: number,
        private _description: string = ""
    ) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._description = _description;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get description(): string {
        return this._description;
    }

    set id(value: string) {
        this._id = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set price(value: number | string) {
        if (typeof value === 'string') {
            value = parseFloat(value.replace(/\./g, ''));
        }

        if (isNaN(value) || value < 0) {
            console.warn("Az árnak pozitív számnak kell lennie.");
        }
        this._price = value;
    }

    set description(value: string) {
        this._description = value;
    }
}