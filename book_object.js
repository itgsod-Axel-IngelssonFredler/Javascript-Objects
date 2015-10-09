

function book(author, title, price){
    this.author = author;
    this.title = title;
    this.price = price
    this.sale
}

function sale(percentage) {
    with(this);
    this.price *= (1-(percentage/100));
}

var book_list = [];

var table = document.createElement("table");

for(var i = 0; i < 10; i++) {
    var row = document.createElement("tr");
    table.appendChild(row);
    book_list[i] = new book("bok"+i, "Aksel", parseInt(30*Math.random()));
    var td_author = document.createElement("td");
    td_author.innerHTML = book_list[i].author;
    td_author.style = "border: solid, 1px, black";
    var td_title = document.createElement("td");
    td_title.innerHTML = book_list[i].title;
    td_title.style = "border: solid, 1px, black";
    var td_price = document.createElement("td");
    td_price.innerHTML = book_list[i].price;
    td_price.style = "border: solid, 1px, black";
    row.appendChild(td_author);
    row.appendChild(td_title);
    row.appendChild(td_price);

}

document.body.appendChild(table);
