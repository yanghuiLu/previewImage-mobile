


export function createDom(tag,className){
    let dom = document.createElement(tag);
    dom.className = className.join(' ');
    return dom;
}

export function createImageContainer(){
    let container = createDom('div',['__previewImage-container']);
    let box = createDom('div',['__previewImage-box']);
    container.append(box)
    return container;
}


export function createImageBox(urls){
    urls.forEach(item => {
        let imgBox = createDom('div',['__previewImage-item'])
        let img = new Image();
        img.className = '__previewImage-image';
        img.dataset.src = item;
        imgBox.append(img)
    });
}