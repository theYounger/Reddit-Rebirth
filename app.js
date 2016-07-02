
var idReq = new XMLHttpRequest();
var idArr = [];
var bigData;

var idReqFn = function() {
  bigData = JSON.parse(this.responseText).data.children;
  console.log('bigData ' , bigData);

  idHunter();

  oReq();
};

var idHunter = function() {
  for(var i = 0; i < bigData.length; i++) { //Get the link to pass with GET
    var linkId = bigData[i].data.link_id;
    idArr.push('https://www.reddit.com/r/gaming/comments/' + linkId.slice(3, linkId.length) + '.json');
  }
};

var oReq = function() {
  for (var j = 0; j < idArr.length; j++) {
    var tempReq = new XMLHttpRequest();
    tempReq.addEventListener('load', commSec);
    tempReq.open('GET', idArr[j]);
    tempReq.send();
  }
};

var commSec = function() { //Populating the comment section
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

idReq.addEventListener('load', idReqFn);
// idReq.open('GET', 'https://www.reddit.com/r/gaming.json');
idReq.open('GET', 'https://www.reddit.com/r/gaming/comments.json');
idReq.send();
