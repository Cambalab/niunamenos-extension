var elements = document.getElementsByTagName('*');

var mapObj = {
   todos:"tod@s",
   los:"l@s",
   chicos:"chic@s"
};

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            var replacedText = text.replace(/todos|los|chicos/gi, function(matched){
              return mapObj[matched];
            });

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
