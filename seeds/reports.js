/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("reports").del();
	await knex("reports").insert([
		{
			id: 1,
			user_id: 1,
			pet_name: "Macropus agilis",
			pet_image: "http://dummyimage.com/128x100.png/ff4444/ffffff",
			description:
				"aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
			contact_info: "chext0@phpbb.com",
			location_data: "Room 306",
			status: false,
		},
		{
			id: 2,
			user_id: 1,
			pet_name: "Zonotrichia capensis",
			pet_image: "http://dummyimage.com/115x100.png/ff4444/ffffff",
			description:
				"curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer",
			contact_info: "meicke1@digg.com",
			location_data: "Suite 9",
			status: false,
		},
		{
			id: 3,
			user_id: 2,
			pet_name: "Anas bahamensis",
			pet_image: "http://dummyimage.com/189x100.png/cc0000/ffffff",
			description:
				"faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus",
			contact_info: "elemanu2@amazon.com",
			location_data: "Suite 79",
			status: false,
		},
		{
			id: 4,
			user_id: 3,
			pet_name: "Cyrtodactylus louisiadensis",
			pet_image: "http://dummyimage.com/142x100.png/5fa2dd/ffffff",
			description:
				"nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis",
			contact_info: "gpriscott3@skyrock.com",
			location_data: "Room 1243",
			status: false,
		},
	]);
};
