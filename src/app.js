
let converter = new showdown.Converter(),
    text      = text1,
    html      = converter.makeHtml(text);

console.log(html);