export default class Post {
    constructor(title) {
        this.title = title
    }
    toString() {
        return JSON.stringify({
            title: this.title
        })
    }
    get uppercaseTitle() {
        return this.title.toUpperCase()
    }
}