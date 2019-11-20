/*show image using tag 'name'*/
function show_img(url, imgname) {
    var url_it = url + "?name=" + imgname;
    window.open(url_it);
}