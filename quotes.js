
const quotes = {
    peace: [
        { text: "Peace begins the moment you choose not to let others control your emotions.", author: "Unknown" },
        { text: "Calm mind brings inner strength and self-confidence.", author: "Dalai Lama" },
        { text: "Inner peace is the key to lasting happiness.", author: "Unknown" }
    ],
    grief: [
        { text: "Grief is the price we pay for love.", author: "Queen Elizabeth II" },
        { text: "Tears shed for another person are not a sign of weakness.", author: "Paulo Coelho" },
        { text: "What we have once enjoyed we can never lose.", author: "Helen Keller" }
    ],
    stress: [
        { text: "Take one small step. That is enough for today.", author: "ThoughtGarden" },
        { text: "It’s not stress that kills us, it is our reaction to it.", author: "Hans Selye" },
        { text: "Do not anticipate trouble, or worry about what may never happen.", author: "Benjamin Franklin" }
    ],
    positivity: [
        { text: "Every day holds a small miracle.", author: "Unknown" },
        { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
        { text: "Positive anything is better than negative nothing.", author: "Elbert Hubbard" }
    ],
    anger: [
        { text: "For every minute you remain angry, you give up sixty seconds of peace.", author: "Ralph Waldo Emerson" },
        { text: "Anger is one letter short of danger.", author: "Unknown" },
        { text: "Speak when you are angry and you will make the best speech you will ever regret.", author: "Ambrose Bierce" }
    ]
};


function showRandomQuote(category) {
    const categoryQuotes = quotes[category];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    const quote = categoryQuotes[randomIndex];

    document.getElementById('quote-text').textContent = `"${quote.text}"`;
    document.getElementById('quote-author').textContent = `— ${quote.author}`;
}


document.querySelectorAll('.quote-categories button').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        showRandomQuote(category);
    });
});
