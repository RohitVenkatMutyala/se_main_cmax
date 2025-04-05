function search_for() {
    var tagList = ["abbreviation", "acronymn", "address", "a", "area", "button", "label", "p",
    "pre", "span", "td", "th", "summary", "i", "li", "h6", "h5", "h4", "h3", "h2", "h1"];

    var social = {
        "open youtube": "https://www.youtube.com/",
        "open twitter": "https://twitter.com/home",
        "open instagram": "https://www.instagram.com/",
        "open gmail": "https://mail.google.com/",
        "open mail": "https://mail.google.com/",
        "open quora": "https://www.quora.com/",
        "compose mail": "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBzBcCBDzFrTvqvzJSlDsKRZCGZPJmkvgRLWpfxRmHjCrrQJlVzzcBZRzfJLldSDcZmLKk",
        "twitter post": "https://twitter.com/compose/tweet",
        "google images": "https://www.google.co.in/imghp?hl=en&tab=ri&authuser=0&ogbl",
        "open spotify": "https://open.spotify.com/",
        "image to speech": "https://rohitvenkatmutyala.github.io/se_image_to_text_to_speech-convertor/",
        "open max": "http://127.0.0.1:5000/try"
    };

    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = false;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        console.log(transcript.toLowerCase());

        // Check if command exists in predefined social commands
        let commandFound = false;
        for (var i in social) {
            if (transcript.toLowerCase().includes(i)) {
                window.open(social[i]);
                commandFound = true;
                break;
            }
        }

        // Handle navigation commands
        if (transcript.toLowerCase().includes("go back") || transcript.toLowerCase().includes("go backward")) {
            history.back();
            commandFound = true;
        } else if (transcript.toLowerCase().includes("go forward") || transcript.toLowerCase().includes("next page")) {
            history.forward();
            commandFound = true;
        }

        // Handle headers command
        if (transcript.toLowerCase().includes("get me the headers")) {
            var headers = "The headers are\n\n";
            for (var i = (all.length - 2); i < all.length; i++) {
                for (var j = 0; j < all[i].length; j++) {
                    headers += all[i][j].innerText + "\n";
                }
                headers += "\n";
            }
            alert(headers);
            commandFound = true;
        }

        // Handle media controls
        if (transcript.toLowerCase().includes("pause") || transcript.toLowerCase().includes("pass") || transcript.toLowerCase().includes("play")) {
            console.log(document.getElementsByClassName("vnCew8qzJq3cVGlYFXRI")[0]);
            document.getElementsByClassName("vnCew8qzJq3cVGlYFXRI")[0].click();
            commandFound = true;
        }

        var all = [];
        for (var i = 0; i < tagList.length; i++) {
            all[i] = document.getElementsByTagName(tagList[i]);
        }

        // Reset all highlights
        for (var i = 0; i < all.length; i++) {
            for (var j = 0; j < all[i].length; j++) {
                all[i][j].style.removeProperty("color");
                all[i][j].style.removeProperty("background");
            }
        }

        // Process click commands or highlight matching text
        let clickCommandProcessed = false;
        for (var i = 0; i < all.length; i++) {
            for (var j = 0; j < all[i].length; j++) {
                var txt = all[i][j].innerHTML.toLowerCase();

                if (transcript.includes("click")) {
                    var transcriptR = transcript.replace("click", "").trim();
                    if (txt.includes(transcriptR.toLowerCase())) {
                        all[i][j].click();
                        clickCommandProcessed = true;
                        commandFound = true;
                        break;
                    }
                } else if (txt.includes(transcript.toLowerCase())) {
                    all[i][j].style.background = "black";
                    all[i][j].style.color = "red";
                    commandFound = true;
                }
            }
            if (clickCommandProcessed) break;
        }

      // AI fallback for unrecognized commands that start with "open"
      if (!commandFound && transcript.toLowerCase().startsWith("open ")) {
        const siteName = transcript.toLowerCase().replace("open ", "").trim();
        
        // Try common domains
        const domains = [".com", ".org", ".net", ".edu", ".io"];
        
        // Create a function to check if a URL is valid
        const checkUrlExists = (url) => {
            return new Promise((resolve) => {
                fetch(url, { method: 'HEAD', mode: 'no-cors' })
                    .then(() => resolve(true))
                    .catch(() => resolve(false));
            });
        };
        
        // Try each domain sequentially
        (async () => {
            let success = false;
            
            for (const domain of domains) {
                const url = `https://www.${siteName}${domain}`;
                console.log(`AI attempting to navigate to: ${url}`);
                
                try {
                    // Check if URL exists before opening
                    const exists = await checkUrlExists(url);
                    
                    if (exists) {
                        window.open(url);
                        console.log(`Successfully opened: ${url}`);
                        success = true;
                        break;
                    } else {
                        console.log(`URL does not exist: ${url}`);
                        // Continue to next domain
                    }
                } catch (error) {
                    console.log(`Error checking URL: ${url}`, error);
                    // Continue to the next domain
                }
            }
            
            if (!success) {
                alert('No website found');
                console.log("Could not find a valid domain for: " + siteName);
            }
        })();
    }
    });

    if (speech == true) {
        recognition.start();
    }
}

export { search_for };