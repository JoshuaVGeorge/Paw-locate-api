/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("users").del();
	await knex("users").insert([
		{ id: 1, user_name: "pmatiebe0", password: "wC0!VaMHaXLWdT!" },
		{ id: 2, user_name: "cphilbrick1", password: "bQ8~\\QQdyU0b4" },
		{ id: 3, user_name: "swixey2", password: "vS7?CM*9/q?&f" },
		{ id: 4, user_name: "etomkies3", password: "uU1}VPtq#n" },
	]);
};
