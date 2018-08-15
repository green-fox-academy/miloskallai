class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

let orangePostIt = new PostIt('orange', 'Idea 1', 'blue');

let pinkPostIt = new PostIt('pink', 'Awesome', 'black');

let yellowPostIt = new PostIt('yellow', 'Superb!', 'green');