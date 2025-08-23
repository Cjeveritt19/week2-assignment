console.log("hello world");


//TODO: I need to store my image data
//Either use immages stored locally or remotely
const images =[
    {
        url: "https://images.unsplash.com/photo-1674973382543-6681bbdbf852?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //relative path for local images OR link to image
        altText:"A brown and white guinea pig sitting in a small container",
    },
    {
        url: "https://images.unsplash.com/photo-1583160247711-2191776b4b91?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "A white short coat puppy laying in a small flower field",
    },
    {
        url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "A turtle swimming underwater",
    }
]

//TODO: I need to create my thumbnail images 
function createThumbnails(){
    const thumbnail = document.getElementById("thumbnail-container");
    for (let i = 0; i < images.length; i++) {
    // images.forEach(function (thumbnails){ 
    const img1 = document.createElement("img");
    img1.src = images[i].url;
    img1.alt = images[i].altText;
    img1.className = "Animals";
    img1.addEventListener("click",function () {
        createLargeImagesHandler(i);
        // console.log (img1)
    });
    thumbnail.appendChild(img1);

}}

    createThumbnails ();








// \Select the DOM element (thumbnail-container) to contain our thumbnails
// \This is a repetitive task loop through our array using the length property
// \Inside the loop I need to this:
//- \create the img element
//- \update the src and alt attributes of the img element to match those in the array(parameters)
//- \give each img a className(img.className)
//- \add an event to each image event handler of this listner is the function you write to create large images 
//- \append the created images to the thumbnail-container

//TODO: I need to create my large images
// \This task is the event handler for the thumbnail events 
// \Select the large-image-container
// \Delete the current image in the large-image-conatiner
// \largeImageContainer.innerHTML = null OR ""
// \Create an image 
// \Update the src and alt values 
// \add a className for styling//Create an image 
// \Update the src and alt values 
// \add a className for styling
// \append the img to the container 
function createLargeImagesHandler(i){
    const largeimage = document.getElementById("large-image-container");
    largeimage.innerHTMl = null;
    const img2 = document.createElement("img");
    img2.src = images[i].url;
    img2.alt = images[i].altText;
    img2.className = "largeimage";

    largeimage.appendChild(img2);

}

createLargeImagesHandler()

//Add this event handler to the thumbnail event
//Make sure you call the createThumbnails function//