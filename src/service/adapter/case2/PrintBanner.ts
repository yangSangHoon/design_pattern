import { Banner } from "../case1/Banner";
import { Print } from "./Print";

export class PrintBanner extends Print {
    #banner: Banner;

    constructor(text: string) {
        super();
        this.#banner = new Banner(text);
    }

    printWeek(): void {
        this.#banner.showWithAster();
    }
    printStrong(): void {
        this.#banner.showWithParen();
    }
}