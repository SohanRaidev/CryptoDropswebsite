function openPage(page) {
    const urls = {
        'privacy': '/privacy-policy',
        'terms': '/terms-of-service',
        'contact': '/contact'
    };

    if (urls[page]) {
        window.location.href = urls[page];
    } else {
        alert('Page not found!');
    }
}

/* Optional: Add more JS animations */
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.querySelector('img').classList.add('float-image-animation');
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('img').classList.remove('float-image-animation');
    });
});

function contactUs() {
    var subject = encodeURIComponent("cryptodrops:");
    var mailtoLink = "mailto:creativecreationshub@gmail.com?subject=" + subject;
    window.location.href = mailtoLink;
}
