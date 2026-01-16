const bookMarkForm = document.getElementById("bookmarkForm");
const siteNameInput = document.getElementById("siteName");
const siteUrlInput = document.getElementById("siteUrl");
const bookmarkList = document.getElementById("bookmarkList");

bookMarkForm.addEventListener("submit",addBookmark);
document.addEventListener("DOMContentLoaded",displayBoomarks);


function addBookmark(event){
    event.preventDefault();
    
    const siteName = siteNameInput.value;
    const siteUrl = siteUrlInput.value;

if(!validateForm(siteName,siteUrl)){
            return;
    }

if(isDuplicateBookmark(siteName,siteUrl)){
alert("This bookmark already exists");

