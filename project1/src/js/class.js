class Comment {
    constructor(text) {
        this.text = text;
        this.quotesQty = 0;
    }

    upvote() {
        this.quotesQty += 1;
    }

    static mergeComments(first, second) {
        return `${first} ${second}`;
    }
}