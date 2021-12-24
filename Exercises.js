//ДЗ к 3-му уроку

'use strict'

//1-е задание
for (let i = 0; i <= 10; ++i) {
    if (i == 0) {
        console.log(i + " - это ноль");
    } else if (i % 2 == 0) {
        console.log(i + " - четное число");
    } else if (i % 2 != 0) {
        console.log(i + " - нечетное число");
    }
}
console.log('\n');

//2-е задание
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
console.log('\n');

//3-е задание
const products1 = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products1.forEach(item => item.price *= 0.85)

console.log("\n");
console.log("Объекты со сниженной ценой");
console.log(products1);

//4-е упражнение
const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhotos = products2.filter((item) => {
    if ("photos" in item) {
        return item.photos.length > 0;
    }
})
console.log("\n");
console.log("Объекты с фотографиями");
console.log(productsWithPhotos);

products2.sort((item1, item2) => item1.price - item2.price);

console.log("\n");
console.log("Сортировка по цене (от низкой к высокой)");
console.log(products2);

//6-е упражнение
let star = "";

console.log("\n");
console.log("Горка");
for (let i = 0; i < 20; ++i) {
    star += "*";
    console.log(star);
}
