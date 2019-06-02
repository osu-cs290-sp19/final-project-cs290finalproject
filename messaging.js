document.getElementById("send-message-button").addEventListener('click', newMessage);

// document.querySelector("input").addEventListener('input', search);

var removedElements = [];

function newMessage(){
    var parent = document.getElementById("message-stream"); // the tweet container
    var siblings = document.getElementsByClassName("message"); // all of the other messages

    var message = document.getElementById("message-input").value;

    if(message.trim() == ""){ // check and make sure both fields contain some text
        return;
    }
    else{
        var elem = document.createElement("div"); // create the new message element
        elem.classList.add("message");
        elem.classList.add("message-outgoing");

        elem.appendChild(document.createTextNode(message));

        parent.insertBefore(elem, siblings[siblings.length + 1]); // insert after last of siblings
        document.getElementById("message-input").value = "";
    }
}
//
//
// function search(){
//     var postContent = document.getElementsByClassName("twit"); // get the text content with p tag
//     for (var i = postContent.length - 1; i >= 0 ; i--) { // loop through all the twits on the page
//            var found = postContent[i].textContent.toLowerCase().search(document.getElementById("navbar-search-input").value.toLowerCase()); // use the .search("value to search for"),
//            if(found == -1){ // if -1 then not contained therefore remove it from the DOM
//                removedElements.push({
//                    location: i,
//                    object: postContent[i].parentElement.removeChild(postContent[i])
//                });
//            }
//     }
//     for (var i = removedElements.length - 1; i >= 0 ; i--) { // loop through all the twits on the page
//         var found = (removedElements[i].object.textContent.toLowerCase()).search(document.getElementById("navbar-search-input").value.toLowerCase()); // use the .search("value to search for")
//         if(found != -1){ // then leter must have been deleted
//             var siblings = document.getElementsByClassName("twit"); // array with all twit objects
//             var parent = document.getElementsByClassName("twit-container")[0]; // array of twit container classes
//             var elem = removedElements.splice(i,1)[0];
//             parent.insertBefore(elem.object, siblings[elem.location]); // adds the thing back to the DOM
//         }
//     }
// }
//
// function searchUser(){ // when user clicked on put into search and update site
// 	var text = event.target.textContent;
//     document.querySelector("input").focus(); // move the typing focus to the search bar
//
// 	document.getElementById("navbar-search-input").value = text;
//     let input = document.querySelector('input');
//     search();
// }
