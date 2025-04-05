click_to_record.addEventListener('click',
    function() {
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
        recognition.interimResults = true;
    
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
    
            document.getElementById("convert_text").innerHTML = transcript;
            
            // Check if command exists in predefined social commands
            let commandFound = false;
            for (var i in social) {
                if (transcript.toLowerCase().includes(i)) {
                    window.open(social[i]);
                    commandFound = true;
                    break;
                }
            }
    
            // Handle specific test commands
            if (transcript.toLowerCase().includes("ishihara test")) {
                document.getElementById("test1").click();
                commandFound = true;
            } else if (transcript.toLowerCase().includes("cambridge test")) {
                document.getElementById("test2").click();
                commandFound = true;
            } else if (transcript.toLowerCase().includes("solution")) {
                document.getElementById("gotoSol").click();
                commandFound = true;
            }
            
            // AI fallback for unrecognized commands that start with "open"
            if (!commandFound && transcript.toLowerCase().startsWith("open ")) {
                const siteName = transcript.toLowerCase().replace("open ", "").trim();
                
                // If site name contains spaces, join with hyphens for domain name
                const formattedSite = siteName.replace(/\s+/g, "");
                
                // Try to intelligently guess the URL
                let url = "";
                
                // First check if it's a known major site that might not follow standard formatting
                const commonSites = {
                    "facebook": "https://www.facebook.com/",
                    "amazon": "https://www.amazon.com/",
                    "netflix": "https://www.netflix.com/",
                    "google": "https://www.google.com/",
                    "linkedin": "https://www.linkedin.com/",
                    "reddit": "https://www.reddit.com/",
                    "github": "https://github.com/",
                    "stackoverflow": "https://stackoverflow.com/",
                    "pinterest": "https://www.pinterest.com/"
                };
                
                for (const site in commonSites) {
                    if (formattedSite.includes(site)) {
                        url = commonSites[site];
                        break;
                    }
                }
                
                // If not a known site, construct URL with common pattern
                if (!url) {
                    url = `https://www.${formattedSite}.com`;
                }
                
                console.log(`AI attempting to navigate to: ${url}`);
                window.open(url);
            }
            
            // For search queries
            if (!commandFound && transcript.toLowerCase().startsWith("search for ")) {
                const query = transcript.toLowerCase().replace("search for ", "").trim();
                const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                window.open(searchUrl);
            }
        });
        
        if (speech == true) {
            recognition.start();
        }
    });
    
//speech_help.addEventListener('click',
//function()
//{
    //chrome.tts.speak("I will now explain you the keywords used for the voice assistant.........Open is used for opening a website......Compase mail to compose a mail......Post tweet to post a tweet......Cambridge test or Ishihara test to take the respective test",{'rate': 1});
//});