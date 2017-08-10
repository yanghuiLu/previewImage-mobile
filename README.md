# previewImage-mobile
仿微信js-sdk wx.previewImage javascript实现，支持图片预览，滑动切换，双指缩放，图片缓存;  

it's a plugin previewImage for mobile html5 which support for picture preview, slide switch, double finger zoom, picture caching
# Usage
Import dist/previewImage.min.js to your project:
```javascript
    <script src="dist/previewImage.min.js"></script>
    <script>
        var obj = {
                urls : ['1.png','2.png','3.png'],
                current : '1.png'
            };
      previewImage.start(obj);
    </script>
```
And you can import dist/md5.js to your project,if imported it is uesd to get the hash for md5(image.src) else the hash is image.src;
```javascript
    <script src="dist/md5.js"></script>
    <script src="dist/previewImage.min.js"></script>
    <script>
        var obj = {
                urls : ['1.png','2.png','3.png'],
                current : '1.png'
            };
      previewImage.start(obj);
    </script>
```
# Demo
![](image/qrcode.png)  

[Demo](http://www.luyanghui.com/mylearn/package/previewimage) 
