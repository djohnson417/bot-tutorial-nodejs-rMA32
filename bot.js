var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/tag/i;botRegexSalt = /^\/salt/;botRegexYub = /^\/web/
      botRegexAd=/^\/update/;botRegexGTA = /^\/pawl/; botRegexSC = /^\/ea/i; botODB = /(.*\s+)(.*fuck)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/login/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/stats/; botRegexSh = /^\/shrug/; botRegexFu = /^\/fu/; botRegexPl = /^\/pawl/; botRegexCc = /^\/cash/; botRegexWk = /^\/upset/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://thedynasty.football/tag/"+request.text.substring(5,20)+"/");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/DkfVMKJ.gif");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://reactiongifs.me/wp-content/uploads/2014/04/office-darryl-philbin-quotes-im-hot-you-re-hot-lets-get-it-poppin.gif");
    this.res.end();
  }
  else if(request.text && botRegexYub.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://thedynasty.football/");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://usatftw.files.wordpress.com/2014/10/pawlllll.gif");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.easports.com/dynasty/");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://thedynasty.football/wp-login.php?redirect_to=http%3A%2F%2Fthedynasty.football%2F");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://thedynasty.football/statistics/");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/NxEsKrLJXPuwg/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://buckeyeinteractive.com/wp-content/uploads/2013/05/flying-lawnmower.gif");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("WHOA CALLER. You can't say that on the air!");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
    else if(request.text && botRegexCc.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://cdn2.sbnation.com/imported_assets/703934/auburn_cash_cab.gif");
    this.res.end();
  }
      else if(request.text && botRegexPl.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://usatftw.files.wordpress.com/2014/10/pawlllll.gif");
    this.res.end();
  }
       else if(request.text && botRegexFu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://cdn1.sbnation.com/imported_assets/575713/sabanbirddooley.gif");
    this.res.end();
  }
  
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
