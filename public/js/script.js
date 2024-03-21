const cardList = [
    {
        title: "Desserts",
        image: "images/Desserts.jpeg",
        link: "About Desserts",
        desciption: "Hello There! <br/> This is Strawberry Cheesecake. <br/> Dessert is the last course of your meal :)"
    },
    {
        title: "Meat",
        image: "images/Meat.jpeg",
        link: "About Meat",
        desciption: "Hello There! <br/> This is Beef steak.<br/> Help you to have good protein in your diet :)"
    },
    {
        title: "Vegetables",
        image: "images/Vegetables.avif",
        link: "About Vegetables",
        desciption: "Hello There! <br/> This is Broccoli. <br/> Broccoli contains many vitamins, minerals, and fiber:)"
    }
]

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const addCards =
    (items) => {
        items.forEach(
            item => {
                let itemToAppend = '<div class="col s4 center-align">' +
                    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img id="cardImg" class="activator" src="' + item.image + '">' +
                    '</div><div class="card-content">' +
                    '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' + '<div class="card-reveal">' +
                    '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' + '<p class="card-text">' + item.desciption + '</p>' +
                    '</div></div></div>';
                $("#card-section").append(itemToAppend)
            });
    }

$(document).ready(function() {
    addCards(cardList);
});