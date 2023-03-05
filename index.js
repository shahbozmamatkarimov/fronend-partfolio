let login = localStorage.getItem('login');
if (!login) {
    location.href = "./html/register.html";
}

// our works
let background = [
    "https://www.siko.cz/medias/gn-mramor-koupelna-012.jpg?context=bWFzdGVyfGF6dXJlaW1hZ2VzfDIxOTk3MXxpbWFnZS9qcGVnfGgyYS9oN2IvOTY4MDMyNTQ3NjM4Mi9nbi1tcmFtb3Ita291cGVsbmFfMDEyLmpwZ3w2NDk5MTRmOTIwZDU2YzQxN2ZlZjFhNTA0ZDNhMjg3NDJjODg5MzU1MmM4NzNkZGY5NDNkYjY4NzFjNWVhYjEy",
    "https://1303378420.rsc.cdn77.org/getfile.aspx?id_file=686797766",
    "https://colodu.club/uploads/posts/2022-11/1667385676_13-colodu-club-p-fasad-zhidkii-travertin-krasivo-14.jpg",
    "https://colodu.club/uploads/posts/2022-11/1667385734_39-colodu-club-p-fasad-zhidkii-travertin-krasivo-43.jpg",
    "https://frankfurt.apollo.olxcdn.com/v1/files/jit37728si453-UZ/image;s=710x703",
    "https://frankfurt.apollo.olxcdn.com/v1/files/e6fdoay5xr8q-UZ/image;s=1280x960",
    "https://frankfurt.apollo.olxcdn.com/v1/files/kbh7v4o7sqga-UZ/image;s=718x718",
    "https://frankfurt.apollo.olxcdn.com/v1/files/y48utchi2snl1-UZ/image;s=1080x807",
    "https://frankfurt.apollo.olxcdn.com/v1/files/4an7vc84p9eu2-UZ/image",
    "https://frankfurt.apollo.olxcdn.com/v1/files/bcpzuv1rk6jo1-UZ/image",
    "https://frankfurt.apollo.olxcdn.com/v1/files/p6qte1qjg6pc3-UZ/image;s=1280x1280",
    "https://frankfurt.apollo.olxcdn.com/v1/files/9fjt1wkse7nj-UZ/image",
    "https://frankfurt.apollo.olxcdn.com/v1/files/jrggm5j9lfuf1-UZ/image;s=576x1280",
    "https://frankfurt.apollo.olxcdn.com/v1/files/jrggm5j9lfuf1-UZ/image;s=576x1280",
    "https://bazzar.uz/wp-content/uploads/2022/06/image-2022-06-12T093113.206.jpg"
]
let back = 1;
setInterval(() => {
    ourworks.style = "width: 100%; height: 600px !important;"
    ourworks.src = `${background[back]}`
    back += 1;
    if (back == background.length) {
        back = 0;
    }
}, 2000)


// image slider
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n > background.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = background.length }
    for (i = 0; i < background.length; i++) {
        slider.src = background[slideIndex-1]
    }
    number.innerHTML = slideIndex + ' / 15'
}

function types(val){
    localStorage.setItem("type", val.innerHTML)
}