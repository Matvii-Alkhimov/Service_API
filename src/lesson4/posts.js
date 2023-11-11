import postTpl from "../templates/post.handlebars";
import changePostTpl from "../templates/change-post.handlebars";
import postCommentsTpl from "../templates/post-comments.handlebars";
import { nanoid } from 'nanoid';

const elements = {
    createPostFormEl: document.querySelector("#createPostForm"),
    createFormContEl: document.querySelector(".form-cont"),
    postContainerEl: document.querySelector("#postsContainer"),

}

const BASE_URL = 'http://localhost:3000';

async function getPosts() {
    try {
        const posts = await fetch(`${BASE_URL}/posts`);
        const parsedPosts = await posts.json();
        return parsedPosts.reverse()
    } catch (error) {
        console.log(error);
    }
}
    // Створення нового поста
async function createPost(event) {
    event.preventDefault();

    try {
        const dataObj = [{
            title: event.currentTarget.elements.titleInput.value,
            description: event.currentTarget.elements.contentInput.value,
            id: nanoid(),
            comments: [],
        }];
        await makeFetchFunction(dataObj, 'POST', "")

        const markup = postTpl(dataObj);
        elements.createFormContEl.insertAdjacentHTML("afterend", markup);
        event.target.reset();
    } catch (error) {
        console.log(error);
    }
}
    // Оновлення поста
async function updatePost(event) {
    
    try {
        const id = event.target.dataset.id;
        const posts = Array.from(document.querySelectorAll(".post")).reverse();
        const postToUpdate = posts.find((post)=> post.dataset.id === id);
        const postInfo = await fetch(`${BASE_URL}/posts/${id}`);
        const parsedPostInfo = await postInfo.json();

        postToUpdate.innerHTML = changePostTpl([parsedPostInfo]);

        const editFormEl = document.querySelector("[data-type='form-edit']");
        editFormEl.addEventListener("submit", async (event)=>{
            event.preventDefault();
            try {
                const dataObj = [{
                    title: event.currentTarget.elements.titleInput.value,
                    description: event.currentTarget.elements.contentInput.value,
                    id: id,
                }];
                const markup = postTpl(dataObj);
                postToUpdate.insertAdjacentHTML("beforebegin", markup);
                postToUpdate.remove();
                await makeFetchFunction(dataObj, 'PATCH', id)
            } catch (error) {
                console.log(error);
            }
        })
    } catch (error) {
        console.log(error);
    }
}
    // Видалення поста
async function deletePost(event) {

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }

    try {

        const id = event.target.dataset.id;
        const elems = Array.from(document.querySelectorAll(".post")).reverse();
        const elemToDelete = elems.find((elem)=> elem.dataset.id === id);
        
        const post = await fetch(`${BASE_URL}/posts/${id}`, options);
        const parsedPost = await post.json();

        elemToDelete.remove();
        return parsedPost;

    } catch (error) {
        console.log(error);
    }
}

async function onCommentsBtnClick(event) {
    event.preventDefault();
    const id = event.target.dataset.id;
    const posts = Array.from(document.querySelectorAll(".post")).reverse();
    const neededPost = posts.find((post)=> post.dataset.id === id);
    const postInfo = await fetch(`${BASE_URL}/posts/${id}`);
    const parsedPostInfo = await postInfo.json();
    const previousForm = document.querySelector(".commentsContainer")

    if (previousForm !== null) {
        const parentElem = previousForm.parentNode;
        const neededId = parentElem.dataset.id;
        const infoObj = await fetch(`${BASE_URL}/posts/${neededId}`)
        const parsedObj = await infoObj.json()
        parentElem.insertAdjacentHTML("beforebegin", postTpl([parsedObj]));
        parentElem.remove();
    }

    parsedPostInfo.comments.length === 0 
    ? parsedPostInfo.commentsTitle = "Тут немає коментарів..." 
    : parsedPostInfo.commentsTitle = "Коментарі:";

    neededPost.innerHTML = postCommentsTpl([parsedPostInfo]);
    const newCommentFormEl = document.querySelector(".createCommentForm")
    newCommentFormEl.addEventListener("submit", createComment)
}
    // Додавання коментаря до поста
async function createComment(event) {
    event.preventDefault();
    try {

        const id = event.target.dataset.id;
        const postInfo = await fetch(`${BASE_URL}/posts/${id}`);
        const parsedPostInfo = await postInfo.json();
        const comments = parsedPostInfo.comments;
        const commentInput = document.querySelector(".createCommentForm > input")
        const newComment = {
            comment: commentInput.value
        };
        const dataObj = [{
            id: id,
            comments: [...comments, newComment],
            commentsTitle: "Коментарі:"
        }]
        await makeFetchFunction(dataObj, "PATCH", id);
        
        const posts = Array.from(document.querySelectorAll(".post")).reverse();
        const neededPost = posts.find((post)=> post.dataset.id === id);
        neededPost.innerHTML = postCommentsTpl(dataObj);

        const newCommentFormEl = document.querySelector(".createCommentForm")
        newCommentFormEl.addEventListener("submit", createComment)
    } 
    catch (error) {
        console.log(error);
    }
}

async function closeCommentsCont(event) {
    try {
        const commentsContEl = document.querySelector(".commentsContainer");
        const postToChange = commentsContEl.parentNode;
        const postId = postToChange.dataset.id;

        const postInfo = await fetch(`${BASE_URL}/posts/${postId}`);
        const parsedPostInfo = await postInfo.json();

        // postToChange.innerHTML = ;
        postToChange.insertAdjacentHTML("afterend", postTpl([parsedPostInfo]));
        postToChange.remove()
    } catch(error) {
        console.log(error);
    }
}

function renderPosts(posts) {
    const markup = postTpl(posts);
    elements.postContainerEl.insertAdjacentHTML("beforeend", markup);
}

elements.createPostFormEl.addEventListener('submit', createPost);
document.addEventListener("click", onWindowClick);

function onWindowClick(event) {
    console.log(event.target.nodeName)
    if (event.target.dataset.type === "btn-edit") {
        updatePost(event);
    } else if (event.target.dataset.type === "btn-delete") {
        deletePost(event);
    } else if (event.target.dataset.type === "btn-comment") {
        onCommentsBtnClick(event);
    } else if (event.target.dataset.type === "close-comments-btn") {
        closeCommentsCont(event);
    }
}
async function startApp() {
    const posts = await getPosts();
    renderPosts(posts);
}
startApp();

async function makeFetchFunction(dataObj, crudFn, id) {
    const options = {
        method: crudFn,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj[0])
    }
    
    const updatedPost = await fetch(`${BASE_URL}/posts/${id}`, options);
    const parsedPost = await updatedPost.json();
    return parsedPost
}