# Node-Red-Okta-nodes

This Node-RED package provides nodes for working with Okta, an identity management and single sign-on service. It includes the following nodes:

## okta_add_user_to_group.js

This node adds users to a group in Okta. It requires the following properties to be set in the input `msg` object:
- `msg.config.OktaKEY`: Okta API key for authentication.
- `msg.config.Domain`: Okta domain.
- `msg.groupID`: ID of the group to which the users should be added.
- `msg.create_user`: User ID of the user to add to the group.
- `msg.emails`: List of user emails.
- `msg.group_name`: Name of the group.

The node returns the original `msg` object without modifying it and prints a message indicating that the user has been added to the group.

## okta_remove_user_from_group.js

This node removes users from a group in Okta. It requires the following properties to be set in the input `msg` object:
- `msg.config.OktaKEY`: Okta API key for authentication.
- `msg.config.Domain`: Okta domain.
- `msg.groupID`: ID of the group from which the users should be removed.
- `msg.create_user`: User ID of the user to remove from the group.
- `msg.emails`: List of user emails.
- `msg.group_name`: Name of the group.

The node returns the original `msg` object without modifying it and prints a message indicating that the user has been removed from the group.

## okta_users_to_id.js

This node retrieves a list of Okta IDs for all the users in the `msg.emails` list. It requires the following properties to be set in the input `msg` object:
- `msg.config.OktaKEY`: Okta API key for authentication.
- `msg.config.Domain`: Okta domain.
- `msg.emails`: List of user emails.

The node returns the user's ID in `msg.usersId`.

## okta_create_okta_group.js

This node creates a group in Okta. It requires the following properties to be set in the input `msg` object:
- `msg.config.OktaKEY`: Okta API key for authentication.
- `msg.config.Domain`: Okta domain.
- `msg.group_name`: Name of the group to create.
- `msg.group_desc`: Description of the group.

The node returns the group's ID in `msg.groupID`.

## okta_does_group_exist.js

This node checks if a group exists in Okta based on its name. It requires the following properties to be set in the input `msg` object:
- `msg.config.OktaKEY`: Okta API key for authentication.
- `msg.config.Domain`: Okta domain.
- `msg.group_name`: Name of the group to check.

If the group exists, its ID is returned in `msg.groupID`.

## okta_list_group.js

This node retrieves a list of all user IDs in a specific Okta group based on the group ID. It requires the following properties to be set in the input `msg` object:
- `msg.config.OktaKEY`: Okta API key for authentication.
- `msg.config.Domain`: Okta domain.
- `msg.groupID`: ID of the group.

The node returns the users' IDs in `msg.okta_group_ids`.

## Usage

1. Install the node-red-okta-nodes package using npm: npm i node-red-okta-nodes

2. In your Node-RED flow, you will find the Azure nodes under the "Authomize Okta" category in the Node-RED palette.

3. Drag and drop the desired nodes into your flow and configure their properties as required.

4. Connect the nodes to create the desired workflow.

## Contributing

Contributions, bug reports, and feature requests are welcome!

## License

This project is licensed under the [MIT License](LICENSE).