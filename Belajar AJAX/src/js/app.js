const xhr = new XMLHttpRequest();

xhr.onload = function(){
    const response = JSON.parse(this.responseText);
    response.books.forEach((book, index) => {
        document.body.innerText += `${index + 1}. ${book.title}\n`;
    });
};

xhr.onerror = function(){
    console.log('something wrong!');
};
//Menggunakan method GET() untuk mengambil data dari server
//xhr.open('GET', 'https://books-api.dicoding.dev/list');
//xhr.send();

// Menggunakan method POST() untuk menambahkan data ke server
xhr.open('POST', 'https://books-api.dicoding.dev/add');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', '12345');

const book = {
    id: 1,
    title: 'Bintang',
    author: 'Tere Liye',
};
xhr.send(JSON.stringify(book));