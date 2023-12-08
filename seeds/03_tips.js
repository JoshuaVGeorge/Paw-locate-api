/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("tips").del();
	await knex("tips").insert([
		{
			id: 1,
			report_id: 1,
			user_id: 1,
			text_data:
				"nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla",
			image: "http://dummyimage.com/192x100.png/5fa2dd/ffffff",
			status: false,
		},
		{
			id: 2,
			report_id: 2,
			user_id: 1,
			text_data:
				"lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a",
			image: "http://dummyimage.com/137x100.png/dddddd/000000",
			status: false,
		},
		{
			id: 3,
			report_id: 3,
			user_id: 2,
			text_data:
				"sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus",
			image: "http://dummyimage.com/204x100.png/ff4444/ffffff",
			status: true,
		},
		{
			id: 4,
			report_id: 4,
			user_id: 3,
			text_data:
				"morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien",
			image: "http://dummyimage.com/243x100.png/cc0000/ffffff",
			status: false,
		},
	]);
};
