var output = document.getElementById("output");
var html = document.getElementById("html-code").value;
var css = document.getElementById("css-code").value;
var js = document.getElementById("js-code").value;

function run() {
    var output = document.getElementById("output");
    var html = document.getElementById("html-code").value;
    var css = document.getElementById("css-code").value;
    var js = document.getElementById("js-code").value;
    output.contentDocument.body.innerHTML = html + "<style>"+css+"</style>" + "<script>"+js+"</script>"  ;
    output.contentWindow.eval(js);

}