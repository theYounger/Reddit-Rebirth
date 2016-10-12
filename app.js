
var xml = new XMLHttpRequest(); //now
var ids = []; //now
var data;

var xmlFn = function() { //now
  data = JSON.parse(this.responseText).data.children; //later
  console.log('data ' , data); //later

  idFinder(); //later

  req1(); //later
};

var idFinder = function() { //now
  for(var i = 0; i < data.length; i++) { //Get the link to pass with GET
    var linkId = data[i].data.id; //later
    ids.push('https://www.reddit.com/r/gaming/comments/' + linkId + '.json'); //later
  } //later
};

var req1 = function() { //now
  for (var j = 0; j < ids.length; j++) {
    var tempReq = new XMLHttpRequest(); //later
    tempReq.addEventListener/*later*/('load', comm);
    tempReq.open('GET', ids[j]); //later
    tempReq.send(); //later
  } //later
};

var comm = function() { //now
  var tempData = JSON.parse(this.responseText); //even later
  console.log(tempData); //even later
  var bodie = document.getElementsByTagName('body')[0]; //even later
  var divie = document.createElement('div'); //even later
  var pp = document.createElement('p'); //even later
  bodie.appendChild(divie); //even later
  divie.appendChild(pp); //even later
  pp.innerHTML = tempData['0'].data.children[0].data.title; //even later // + ': ' + tempData['1'].data.children;

    // title: tempData['0'].data.children[0].data.title,
    // comments: tempData['1'].data.children

};

xml.addEventListener/* now */('load', xmlFn);
xml.open/* now */('GET', 'https://www.reddit.com/r/gaming.json');
// xml.open('GET', 'https://www.reddit.com/r/gaming/comments.json');
xml.send();//now

/*



*/