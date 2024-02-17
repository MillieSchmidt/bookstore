document.onscroll = () => {
    const progressBar = document.querySelector('#progress');
    const distanceTop = window.pageYOffset;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    progressBar.style.width = (distanceTop / pageHeight) * 100 + '%' ;
}