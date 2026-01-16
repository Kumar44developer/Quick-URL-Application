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
            return;
    }

const bookmark = {
      name:siteName,
        url: siteUrl,
};

saveBookmark(bookmark);

displayBookmark(bookmark);
    
    siteNameInput.value = ""
    siteUrlInput.value = ""

}

function validateForm(siteName,siteUrl){
if(!siteName || !siteUrl){

    
