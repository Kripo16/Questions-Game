// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Show the heart-shaped loader
    showHeartLoader();

    // ... (existing code)

    // Hide the heart-shaped loader and show the page content after a delay
    setTimeout(function () {
        hideHeartLoader();
        // Your existing code to show the page content goes here
    }, 1000); // 1000 milliseconds (1 second) delay, adjust as needed
});

function showHeartLoader() {
    const heartLoader = document.getElementById('heartLoader');
    heartLoader.style.opacity = '1';
}

function hideHeartLoader() {
    const heartLoader = document.getElementById('heartLoader');
    heartLoader.style.opacity = '0';
    // Hide the heart-shaped loader after the fade-out animation
    setTimeout(function () {
        heartLoader.remove()
    }, 500); // Adjust the duration of the fade-out animation
}
function showQuestions(topic) {
    document.getElementById("popupTitle").innerHTML = topic + " Questions";
    
    let questions;
    switch (topic) {
        case "The Basics":
            questions = "Height, weight, full name (with family name) and birthdate?|What’s your hair color, and do you have a favorite hairstyle?|Describe the color of your eyes.|What’s your preferred style of clothing that makes you feel comfortable?|Do you have any distinctive physical feature that people often notice about you?|Is there a particular season you love, and if so, what draws you to it?|Describe a favorite childhood toy or item that holds sentimental value.|Share a weird fact about you that not many people know.";
            break;
        case "Hobbies / Favorite":
            questions = "What’s a hobby or activity that you could spend hours doing without getting bored?|If you had to pick one book as your all-time favorite, which would it be and why?|What’s a movie or TV show you can watch repeatedly and never get tired of?|Share a favorite musical artist/band, and a song that holds special meaning for you?|Do you have a special travel destination, and if so, what makes it special?|Describe a favorite way you like to unwind and relax yourself after a busy day.|If you could master any instrument, which one would you choose and why?|What’s a skill or hobby you always wanted to learn and haven’t yet?|What was the last thing you did?|Share a favorite quote that inspires you or reflects your outlook in life.|What sport do you like to play?|Is there a specific type of art that resonates with you?";
            break;
        case "Personal Belongings":
            questions = "Is there a sentimental item that you always carry with you? What’s its story?|If you could only keep one possession, what would it be and why?|Describe a cherished gift you received that holds sentimental value.|What’s a piece of technology that you couldn’t live without? Why is it essential?|Is there a specific item you’ve lost that you wish you could retrieve it?|Share a personal goal or dream.";
            break;
        case "Life / Experience":
            questions = "What’s your future job/career/ambition?|Have you ever tried to smoke in your life?|Share your most embarrassing moment.|Share your most proud moment.|What’s your most favorable memory?";
            break;
        case "Relationship":
            questions = "What initially attracted you to me, and has that changed over time?|Describe a specific quality in me that you appreciate and admire.|If you had to pick one thing you love the most about our relationship, what would it be?|Share a specific detail or habit of mine that you find cute or charming.|If you could change one thing about our relationship, what would it be and why?|Describe a favorite memory of us together (or a time we were texting) and what makes it memorable for you?|What’s your preferred way of expressing and receiving love in our relationship?|If you could choose one word to describe our connection, what would it be and why?|What are your plans for our relationship in the future?";
            break;
        case "Other":
            questions = "Ask me anything you've always wanted to know about me, but never asked.|What’s a question you’ve never been asked and love to answer?|Share a dream or fantasy you've never told anyone about.|Ask me about a topic you're curious to know my thoughts on.";
            break;
        default:
            questions = "No questions available for this topic.";
    }

    const questionArray = questions.split("|");
    const randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];

    document.getElementById("popupContent").innerHTML = randomQuestion;
    document.getElementById("questionPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("questionPopup").style.display = "none";
}
// script.js
function showLips() {
    const numLips = 25; // Number of lips images to show
    const delayBetweenImages = 200; // Delay between each image in milliseconds

    for (let i = 0; i < numLips; i++) {
        createAndAnimateLips(i * delayBetweenImages);
    }
    hideAndMoveButton();
}

function createAndAnimateLips(delay) {
    const lipsImage = document.createElement("img");
    lipsImage.src = "media/kiss.png"; // Replace with the actual path to your lips image
    lipsImage.style.width = "50px"; // Adjust the size of the lips image
    lipsImage.style.height = "auto";
    lipsImage.style.position = "fixed";
    lipsImage.style.opacity = "0"; // Set initial opacity to 0
    lipsImage.style.transition = "opacity 0.5s ease-in-out"; // Add transition for opacity

    // Random position on the page
    lipsImage.style.top = `${Math.random() * 100}vh`;
    lipsImage.style.left = `${Math.random() * 100}vw`;

    document.body.appendChild(lipsImage);

    // Use setTimeout to create a delay before starting the animation
    setTimeout(() => {
        lipsImage.style.opacity = "1"; // Fade in the lips image
        setTimeout(() => {
            lipsImage.style.opacity = "0"; // Fade out the lips image
            // Remove the lips image after the fade-out animation
            setTimeout(() => {
                document.body.removeChild(lipsImage);
            }, 500); // Adjust the duration of the fade-out animation
        }, 3000); // Adjust the duration of how long the image stays visible
    }, delay);

}
function hideAndMoveButton() {
    const button = document.querySelector('button');

    // Hide the button
    button.style.display = 'none';

    // Calculate random position within the window bounds
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const randomTop = Math.random() * (window.innerHeight - buttonHeight);
    const randomLeft = Math.random() * (window.innerWidth - buttonWidth);

    // Set new position
    button.style.position = 'fixed';
    button.style.top = `${randomTop}px`;
    button.style.left = `${randomLeft}px`;

    // Make the button reappear after a delay
    setTimeout(() => {
        button.style.display = 'block';
    }, 1000); // Adjust the delay (in milliseconds) before the button reappears
}
function playAudio() {
    const audio = document.getElementById('sound');
    audio.play();
}


