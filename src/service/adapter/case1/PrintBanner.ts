import { Banner } from "./Banner";
import { Print } from "./Print";

export class PrintBanner extends Banner implements Print {

    constructor(text: string) {
        super(text);
    }
    
    public printStrong(): void {
        this.showWithAster();
    }

    public printWeak(): void {
        this.showWithParen();
    }
    
}