var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/gh/;botRegexYub = /^\/dearleader/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/upset/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*da bears)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/reddit/; botRegexSh = /^\/shrug/; botRegexWk = /^\/rules/; 
      botcalc = /^\/calc/; botuserdata = /^\/owners/; botviolation = /^\/flag/; 
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
    postMessage("http://daddyleagues.com/madgms/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.gamerhuddle.com/league/madden-gms/");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/736x/28/07/e7/2807e7d83d79049ac5770c869e918fda.jpg");
    this.res.end();
  }
  else if(request.text && botRegexYub.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://cdn.images.express.co.uk/img/dynamic/78/590x/25n34kim-472287.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.tumblr.com/tumblr_luh2heQsnH1qfvsmh.pngarge");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/madgms/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/madgms/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.reddit.com/maddengms/");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.gannett-cdn.com/-mm-/fc0160d61fd95df16f68d5d6f0d7d179dd9db7ad/c=113-0-2329-1666&r=x404&c=534x401/local/-/media/USATODAY/USATODAY/2014/05/16//1400214150000-c01-saban-c-13.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.reddit.com/r/MaddenGMs/comments/5q2h1j/house_rules_for_the_league/");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.tenor.co/images/42991654ff54edf5664027f2b38500d4/tenor.gif");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
    
  
  
  }
    else if(request.text && botcalc.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.reddit.com/r/Madden/comments/5qkjuo/nate_doggs_trade_value_calculator_version_20/");
    this.res.end();
      
      
  }
      else if(request.text && botuserdata.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/madgms/coaches");
    this.res.end();
    
  
  
  }
        else if(request.text && botviolation.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://drive.google.com/open?id=1aUKYKlmpAMMYrf59AndvZz0MkKLeLdN07u9ZN_rNLow");
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
