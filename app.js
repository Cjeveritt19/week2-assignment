console.log("hello world");


//TODO: I need to store my image data
//Either use immages stored locally or remotely
const images =[
    {
        url: "url1", //relative path for local images OR link to image
        altText:"altText1",
    },
    {
        url: "url2",
        altText: "altText2",
    },
    {
        url: "url3",
        altText: "altText3",
    }
]

//TODO: I need to create my thumbnail images 
//function createThumbnails(){
    //Select the DOM element (thumbnail-conatainer) to contain our thumbnails
//This is a repetitive task loop through our array using the length property
//Inside the loop I need to this:
//- create the img element
//- update the src and alt attributes of the img element to match those in the array(parameters)
//- give each img a className(img.className)
//- add an event to each imaage event handler of this listner is the function you write to create large images 
//- append the created images to the thumbnail-container
// }
//TODO: I need to create my large images
//This task is the event handler for the thumbnail events 
// function createLargeImagesHandler(){
//Select the large-image-container
//Delete the current image in the large-image-conatiner
//largeImageContainer.innerHTML = null OR ""
//Create an image 
//Update the src and alt values 
//add a className for styling  
//append the img to the container 

// }

//Add this event handler to the thumbnail event
//Make sure you call the createThumbnails function