class News {
    draw(data) {
        let newsCount = (data.length > 10) ? 10 : data.length;
        const fragment = document.createDocumentFragment();
        const newsItemTemplate = document.querySelector('#newsItemTemplate');

        for (let i = 0; i < newsCount; i++) {
            const item = data[i];
            const newsClone = newsItemTemplate.content.cloneNode(true);

            newsClone.querySelector('.news__title').textContent = item.title;
            newsClone.querySelector('.news__author').textContent = item.author;
            newsClone.querySelector('.news__content').textContent = item.content;

            fragment.appendChild(newsClone);
        }

        document.querySelector('.news').innerHTML = '';
        document.querySelector('.news').appendChild(fragment);
    }
}