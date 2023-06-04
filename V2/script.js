const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const encodedCode = urlParams.get('code');
const decodedCode = decodeURIComponent(encodedCode);

console.log(decodedCode);
var code = decodedCode;
var iframe = document.getElementById("myIframe");
var iframeHtml = `
<html><script src="https://pygame-web.github.io/archives/0.5/pythons.js" type="module" id="__main__" data-src="gui,vtx" async="" defer="">#<!--
${code}
# --></script></html>
<style>
body{
background:#111;
margin:0px;
}
#terminal{
overflow-x:scroll;
}
</style>
<body>

    <div id="transfer" align=center>
<!--        <div class="spinner" id='spinner'></div> -->
        <div class="emscripten" id="status">Downloading...</div>
        <div class="emscripten">
            <progress value="0" max="100" id="progress"></progress>
        </div>
    </div>
    <center>
    <canvas class="emscripten" id="canvas"
width="1px"
height="1px"
    oncontextmenu="event.preventDefault()" tabindex=1>
    </canvas>
    </center>
</body>
</html>
`;
iframe.srcdoc = iframeHtml;
