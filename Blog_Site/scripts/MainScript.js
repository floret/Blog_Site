function add_comment() {
    var CSpace = document.getElementById("comment-section");
    var newComment = document.createElement("div");
    newComment.className = "Ccspace";
    CSpace.appendChild(newComment);//adds divider that will contain the comment.

    //adds the commenter's name
    var newName = document.createElement("h1");
    newName.textContent = document.getElementById("comment-name").value;
    newName.className = "CcommentName";
    newComment.appendChild(newName);

    //adds the comment text
    var newText = document.createElement("p");
    newText.textContent = document.getElementById("comment-text").value;
    newText.className = "CcommentText";//note that this is how to assign a class to a new element.
    newComment.appendChild(newText);

    //clears the name and comment boxes
    document.getElementById("comment-text").value = "";
    document.getElementById("comment-name").value = "";
}
//TODO: 
/*

1. find a way to make comments permenent 
2. delete comments (for moderation)
3. make author comments stand out (different text color or something.)
4. make direct replies possible, reply to a single comment.

*/