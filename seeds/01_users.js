/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("users").del();
	await knex("users").insert([
		{
			id: 1,
			user_name: "pmatiebe0",
			password: "$2a$04$y7OrSQiKDCmpsNfUMUAlwecqzuIAN9YUpyDYwJaM2OYQyNCvZiSDW",
		},
		{
			id: 2,
			user_name: "cphilbrick1",
			password: "$2a$04$6fD2962cCVmJjeKt785kq.EP8JMU8YAHvSvZGZHVsyS8VEh15wxrC",
		},
		{
			id: 3,
			user_name: "swixey2",
			password: "$2a$04$9RRHVmV28aWK9rArr9BjvOfMpyPdHOJ/Em0yVpSjbCMKsLa9oExX6",
		},
		{
			id: 4,
			user_name: "etomkies3",
			password: "$2a$04$zn6Iyi.bwX..9xg9.sOpP.FAUb4dULjV.5NMDXyoOlP48BpixVbNK",
		},
	]);
};
