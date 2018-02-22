
interface BackPack{
    name: string;
    image: string;
    description: string;
    price: number;
    type: string;
}

export class Pack implements BackPack {
    constructor(
        public name: string,
        public image: string,
        public description: string,
        public price: number,
        public type: string
    ) {}
}
