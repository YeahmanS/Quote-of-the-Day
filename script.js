// Selecting element containg quote from HTML page

const quote_to_display_html_element = document.getElementById("quote");
const quote_ka_author_html_element = document.getElementById("quote-author");

//list of all possible available background image
const arr=['one','two','three','four','five','six','seven','eight','nine','ten']

// Trying to fetch quote from FREEAPI by Definig function fetchqoute()

async function fetchquote() {
    const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random" ;
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();

        return data.data

    }catch (error) { 
        console.error(error.message);
      }
}

// writing function to update quote and it's author  
async function update(){
    const data_recieved = await fetchquote();
    // writing one placeholder quote if api responds with error

    const quote_from_api=data_recieved.content
    const quote_author_from_api=data_recieved.author

    // Updating HTML 
    quote_to_display_html_element.innerText=quote_from_api
    quote_ka_author_html_element.innerText="-"+ quote_author_from_api
}

//function to change background image
function changebackgroud(){
    url = arr[getrandomnumber()%arr.length]

    device= window.innerHeight > window.innerWidth ? 'mobile': 'desktop'
    document.body.style.backgroundImage = `url('/Images/${device}/${url}.jpg')`
}

// function to get random number
function getrandomnumber(){
    max=arr.length
    return Math.floor(Math.random() * max);
}

function reloading(){
    update();
    //changebackgroud();
}

update();
//changebackgroud();



//picked this code from stackoverflow

// const container_el = document.querySelector("#quote");

// function resize2fit(el) {
//     if (!el.parentElement) return;
//     el.style.setProperty("--font-size", "1em");
//     const {width: max_width, height: max_height} = el.getBoundingClientRect();
//     const {width, height} = el.children[0].getBoundingClientRect();
//     el.style.setProperty("--font-size", Math.min(max_width/width, max_height/height)+"em");
//   }

// resize2fit(container_el);






