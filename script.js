const terminal = document.getElementById("terminal");
const buttons = document.getElementById("buttons");

let typingSpeed = 35;

function typeText(text, callback) {
    terminal.textContent = "";
    buttons.innerHTML = "";

    let i = 0;

    function typing() {
        if (i < text.length) {
            terminal.textContent += text.charAt(i);
            i++;
            setTimeout(typing, typingSpeed);
        } else {
            if (callback) callback();
        }
    }

    typing();
}

function createButton(text, action) {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.onclick = action;
    buttons.appendChild(btn);
}

// SCREEN 1
function screen1() {

    typeText(`SYSTEM BOOTING...

Loading memories... ███████ 100%
Loading happiness... ███████ 100%
Loading courage... █████░░ 82%
`, () => {

        setTimeout(screen2, 1000);

    });

}

// SCREEN 2
function screen2(){

    typeText(`ERROR DETECTED

Code : 520
FeelingOverflowException

Reason:
User "Rezga" has occupied
98% of available memory.
`, () => {

        createButton("FIX ERROR", screen3);

    });

}

// SCREEN 3
function screen3(){

    typeText(`Searching for solution...

❌ Delete memories
Access denied.

❌ Ignore feelings
Failed.

✅ Recommended solution found.
`, () => {

        createButton("SHOW SOLUTION", screen4);

    });

}

// SCREEN 4
function screen4(){

    typeText(`Only one solution remains...

May I call you mine?
`, () => {

        createButton("YES ❤️", yesEnding);
        createButton("Need more time 🤍", maybeEnding);

    });

}

// YES
function yesEnding(){

    typeText(`SUCCESS!

Relationship.exe installed.

Status:
❤️ Together

Thank you for saying yes.
You just made me the happiest person alive.
I Love U ❤️
`);

}

// MAYBE
// NOT YET
function maybeEnding(){

    typeText(`Checking answer...

...

ERROR

Your answer cannot be processed.

Reason:
Too cute to reject me.

Restarting confession...
`, () => {

        setTimeout(screen4, 2000);

    });

}

screen1();