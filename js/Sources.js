class Sources {
    draw(data) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemplate = document.querySelector('#sourceItemTemplate');

        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const sourceClone = sourceItemTemplate.content.cloneNode(true);
            const sourceButton = sourceClone.querySelector('.source__item');

            sourceButton.textContent = item.name;
            sourceButton.setAttribute('data-source-id', item.id);

            fragment.appendChild(sourceClone);
        }

        document.querySelector('.sources').appendChild(fragment);
    }
}