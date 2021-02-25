var data = require('../data.json');

exports.view = function(req, res){
  res.render('index');
}

exports.login = function(request, response){
	data['login'] = true;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.projectHome = function(request, response){
	data['login'] = false;
	data['project-home'] = true;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.wip = function(request, response){
	data['login'] = false;
	data['project-home'] = false;
	data['wip-projects'] = true;
	data['project-chat'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.chat = function(request, response){
	data['login'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = true;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.archive = function(request, response){
	data['login'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['archive'] = true;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.newProject = function(request, response){
	data['login'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['archive'] = false;
	data['new-project'] = true;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.friends = function(request, response){
	data['login'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = true;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.friendProfile = function(request, response){
	data['login'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = true;
	data['notifs'] = false;
	response.render('index', data)
}

exports.notifs = function(request, response){
	data['login'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = true;
	response.render('index', data)
}
