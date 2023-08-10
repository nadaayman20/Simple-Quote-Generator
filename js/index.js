var quoteData = document.getElementById("quote");
var quoteAuthor=document.getElementById("author");
var image=document.getElementById("img")

if(localStorage.getItem("allQuotes") != null){
    allQuotes= JSON.parse(localStorage.getItem("allQuotes"));
    randomQuotes();
}
var allQuotes=[
    {
        quote:'“ Do not take life too seriously. You will not get out alive. ”',
        author:"--Elbert Hubbard",
        image:"./images/image1.jpg"
    },
    {
        quote:"“ You miss 100% of the shots you don't take. ”",
        author:"--Wayne Gretzy",
        image:"./images/image2.jpg"
    },
    {
        quote:'“ The best revenge is massive success. ”',
        author:"--Frank Sinatra",
        image:"./images/image3.jpg"
    },
    {
        quote:'“ Be yourself; everyone else is already taken. ”',
        author:"― Oscar Wilde",
        image:"./images/image4.jpg"
    },
    {
        quote:'“ A room without books is like a body without a soul. ”',
        author:"― Marcus Tullius Cicero",
        image:"./images/image5.jpg"
    },
    {
        quote:'“ You only live once, but if you do it right, once is enough. ”',
        author:"― Mae West",
        image:"./images/image7.jpg"
    },
    {
        quote:'“ Be the change that you wish to see in the world. ”',
        author:"― Mahatma Gandhi",
        image:"./images/image6.jpg"
    },
    {
        quote:"“ If you tell the truth, you don't have to remember anything. ”",
        author:"― Mark Twain",
        image:"./images/image8.jpg"
    },
    {
        quote:"“ Always forgive your enemies; nothing annoys them so much. ”",
        author:"― Oscar Wilde",
        image:"./images/image9.jpg"
    },
    {
        quote:"“ We accept the love we think we deserve. ”",
        author:"― Stephen Chbosky",
        image:"./images/image10.jpg"
    },
]

function randomQuotes(){
    for(var i=0 ; i< allQuotes.length; i++ ){
        quoteData.innerHTML=allQuotes[Math.floor(Math.random() * allQuotes.length)].quote
        quoteAuthor.innerHTML=allQuotes[Math.floor(Math.random()* allQuotes.length)].author
        image.src=allQuotes[Math.floor(Math.random()* allQuotes.length)].image

        localStorage.setItem("allQuotes" , JSON.stringify(allQuotes))
    }
  
}

