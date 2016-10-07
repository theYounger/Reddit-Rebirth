
var xml = new XMLHttpRequest();
var ids = [];
var data;

var xmlFn = function() {
  data = JSON.parse(this.responseText).data.children;
  console.log('data ' , data);

  idFinder();

  req1();
};

var idFinder = function() {
  for(var i = 0; i < data.length; i++) { //Get the link to pass with GET
    var linkId = data[i].data.id;
    ids.push('https://www.reddit.com/r/gaming/comments/' + linkId + '.json');
  }
};

var req1 = function() {
  for (var j = 0; j < ids.length; j++) {
    var tempReq = new XMLHttpRequest();
    tempReq.addEventListener('load', comm);
    tempReq.open('GET', ids[j]);
    tempReq.send();
  }
};

var comm = function() { //Populating the comment section
  var tempData = JSON.parse(this.responseText);
  console.log(tempData);
  var bodie = document.getElementsByTagName('body')[0];
  var divie = document.createElement('div');
  var pp = document.createElement('p');
  bodie.appendChild(divie);
  divie.appendChild(pp);
  pp.innerHTML = tempData['0'].data.children[0].data.title; // + ': ' + tempData['1'].data.children;

    // title: tempData['0'].data.children[0].data.title,
    // comments: tempData['1'].data.children

};

xml.addEventListener('load', xmlFn);
xml.open('GET', 'https://www.reddit.com/r/gaming.json');
// xml.open('GET', 'https://www.reddit.com/r/gaming/comments.json');
xml.send();
