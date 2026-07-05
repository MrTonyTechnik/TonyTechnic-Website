import { Randomizer } from "./Randomizer.js";
import data from './videos.json' with {type: 'json'};


class NavigationButton {
    constructor(value) {
        this.value = value;
    }

    // Method handles any Javascript-based button redirect. 
    redirect() {
        window.location.href = this.value;
    }

    // This uses my randomizer library to randomly select a video link from a
    // JSON file and launch it. You are welcome to use my randomizer class.
    static random_video() {
        window.location.href = Randomizer.choice(data.random_videos);
    }
}

const youtubelink = new NavigationButton("https://www.youtube.com/@TonyTechnic");
const kaorulink = new NavigationButton('kaoru.html')

const youtube_redirect = document.getElementById('yt-link').addEventListener("click", function() {
    youtubelink.redirect();
});

const random_video = document.getElementById('random-video').addEventListener("click", function() {
    NavigationButton.random_video();
});

const kaoru_shrine = document.getElementById('kao_shrine').addEventListener("click", function() {
    kaorulink.redirect()
});


