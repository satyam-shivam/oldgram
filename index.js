const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let oldgramContainer = document.getElementsByClassName("container")[0];
renderPosts(posts);

function renderPosts(posts){
    for (ele of posts){
        // container section of new post
        let containerSection = document.createElement("section");
        oldgramContainer.appendChild(containerSection);
        containerSection.classList.add("new-post", "bg-white");

        // post header start
        let postHeader = document.createElement("header");
        containerSection.appendChild(postHeader);
        postHeader.classList.add("post-title", "p-10", "d-flex");

        // post header child 1
        let avatarImage = document.createElement("img");
        postHeader.appendChild(avatarImage);
        avatarImage.classList.add("avatar");
        avatarImage.src = ele.avatar;
        avatarImage.alt = `Avatar of ${ele.name}`;

        // post header child 2
        let newDiv = document.createElement("div");
        postHeader.appendChild(newDiv);

        let nameDiv = document.createElement("div");
        newDiv.appendChild(nameDiv);
        nameDiv.classList.add("fw-700");
        nameDiv.textContent = ele.name;

        let locationDiv = document.createElement("div");
        newDiv.appendChild(locationDiv);
        locationDiv.textContent = ele.location;

        // post header end

        // post image start
        let postImage = document.createElement("img");
        containerSection.appendChild(postImage);
        postImage.classList.add("post-image", "mb-10");
        postImage.src = ele.post;
        postImage.alt = `Post Image of ${ele.name}`;

        // post image end

        // post footer start 
        let footerDiv = document.createElement("div");
        containerSection.appendChild(footerDiv);
        footerDiv.classList.add("p-10");
        // ----------------
        let socialIconsDiv = document.createElement("div");
        footerDiv.appendChild(socialIconsDiv);
        socialIconsDiv.classList.add("mb-10");

        let likeIcon = document.createElement("img");
        socialIconsDiv.appendChild(likeIcon);
        likeIcon.classList.add("like");
        likeIcon.src = "images/icon-heart.png";
        likeIcon.alt = "Heart Icon";

        let commentIcon = document.createElement("img");
        socialIconsDiv.appendChild(commentIcon);
        commentIcon.classList.add("comment");
        commentIcon.src = "images/icon-comment.png";
        commentIcon.alt = "Comment Icon";

        let directMessageIcon = document.createElement("img");
        socialIconsDiv.appendChild(directMessageIcon);
        directMessageIcon.classList.add("directm");
        directMessageIcon.src = "images/icon-dm.png";
        directMessageIcon.alt = "Direct Message Icon";
        // ------------------

        let likesCountDiv = document.createElement("div");
        footerDiv.appendChild(likesCountDiv);
        likesCountDiv.classList.add("fw-700", "mb-10");
        likesCountDiv.textContent = `${ele.likes} likes`;

        // ---------------

        let postCaptionContainerDiv = document.createElement("div");
        footerDiv.appendChild(postCaptionContainerDiv);
        postCaptionContainerDiv.classList.add("mb-10");

        let userNameSpan = document.createElement("span");
        postCaptionContainerDiv.appendChild(userNameSpan);
        userNameSpan.classList.add("fw-700");
        userNameSpan.textContent = ele.username + "     ";

        let captionSpan = document.createElement("span");
        postCaptionContainerDiv.appendChild(captionSpan);
        captionSpan.textContent = ele.comment;

    }
}

let likeIcon = document.getElementsByClassName("like");
for (icons of likeIcon){
    icons.addEventListener("click", function(){
        let likeCount  = parseInt((this.parentNode.parentNode.childNodes[1].textContent).slice(0,-6));
        likeCount += 1;
        this.parentNode.parentNode.childNodes[1].textContent = `${likeCount} likes`;
    });
}

let postImage = document.getElementsByClassName("post-image");
for (photos of postImage){
    photos.addEventListener("dblclick", function(){
        let likeCount = parseInt((this.parentNode.childNodes[2].childNodes[1].textContent).slice(0,-6));
        likeCount += 1;
        this.parentNode.childNodes[2].childNodes[1].textContent = `${likeCount} likes`;
    });
}

 