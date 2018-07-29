//The sraper took raw HTML so I have to put the &apos;, etc. back to '
export default function(html){
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}