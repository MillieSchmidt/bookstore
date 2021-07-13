document.onscroll = () => {
    const progressBar = document.querySelector('#progress');
    const distanceTop = window.pageYOffset;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    progressBar.style.width = (distanceTop / pageHeight) * 100 + '%' ;

    if (window.pageYOffset > 500) {
        document.getElementById('up-arrow').style.opacity = 1;
    } else {
        document.getElementById('up-arrow').style.opacity = 0;
    }
}