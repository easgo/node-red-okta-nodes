const axios = require('axios');
module.exports = function(RED) {
    function okta_remove_user_from_group(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg) {

		try{
            const apiKey = msg.config.OktaKEY;
            const oktaDomain = msg.config.Domain;
            const groupID = msg.groupID;
            const userID = msg.usersId[0];
			const user_name = msg.emails[0];
			const groupName = msg.group_name;

			headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'SSWS ' + apiKey
            };

            const url = 'https://' + oktaDomain + '.okta.com/api/v1/groups/' + groupID + '/users/' + userID;
            const res = axios.delete(url, { headers }); // Make the axios.put() call awaitabl
			node.warn(user_name + ' (id: ' + userID + ') was removed from ' + groupName + ' (id: ' + groupID + ')');
			node.send(msg);
		}catch(error) {
			node.warn(error);
		}			
        });
    }
    RED.nodes.registerType("okta_remove_user_from_group", okta_remove_user_from_group);
};
