//ДЗ к 4-му уроку

//Упражнение 1.1
//es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}


//es6
class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }
}


//Упражнение 1.2
//es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let attachedPostES5 = new AttachedPost("Bob", "text", "01.01.1970");

attachedPostES5.makeTextHighlighted();
console.log(attachedPostES5.highlighted);
attachedPostES5.edit("new text");
console.log(attachedPostES5.text);


//es6
class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let attachedPostES6 = new AttachedPostES6("Alex", "text", "01.01.2000");

attachedPostES6.edit("new ES6 text");
console.log(attachedPostES6.text);

attachedPostES6.makeTextHighlighted();
console.log(attachedPostES6.highlighted);