import previewImage from "../index"
import $ from "../src/lib/dom"

document.addEventListener('readystatechange',function(){
    if(document.readyState=="complete"){
        var urls = [];
        var imgs = $.all('img',$.all('#img_box')[0]);
        imgs.forEach(function(v,i){
            urls.push(v.src);
        })
        $.delegate(document.querySelector('#img_box'), 'click','img',function(){
            var current = this.src;
            var obj = {
                urls : urls,
                current : current
            };
            console.dir(previewImage)
            previewImage(obj);
        });
    }
})


