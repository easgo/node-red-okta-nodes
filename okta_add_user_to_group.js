const axios = require('axios');
module.exports = function(RED) {
    function okta_add_user_to_group(config) {
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
			axios.put(url, {}, { headers }).then(response => {
            node.warn(user_name + ' (id: ' + userID + ') was added to ' + groupName + ' (id: ' + groupID + ')');
            node.send(msg);
          })
          .catch(error => {
            node.warn(error);
          });
      } catch(error) {
        node.warn(error);
      }
    });
  }

  RED.nodes.registerType("okta_add_user_to_group", okta_add_user_to_group);
};
