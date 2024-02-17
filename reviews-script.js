let num = 1;

document.getElementById('next').onclick = () => {

    if (num == 9) {
        return;
    }

    document.getElementById(`rev-${num}`).classList.remove('show');
    document.getElementById(`rev-${num}`).classList.add('hide');

    num++;

    document.getElementById(`rev-${num}`).classList.remove('hide');
    document.getElementById(`rev-${num}`).classList.add('show');
}

document.getElementById('back').onclick = () => {

    if (num == 1) {
        return;
    }

    document.getElementById(`rev-${num}`).classList.remove('show');
    document.getElementById(`rev-${num}`).classList.add('hide');

    num--;

    document.getElementById(`rev-${num}`).classList.remove('hide');
    document.getElementById(`rev-${num}`).classList.add('show');
}