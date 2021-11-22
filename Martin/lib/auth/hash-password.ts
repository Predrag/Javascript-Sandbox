import bcrypt from 'bcrypt';

const hashPassword = async (password, saltRounds = 10) => {
	try {
		const salt = await bcrypt.genSalt(saltRounds);
		return await bcrypt.hash(password, salt);
	} catch (error) {
		console.log(error);
	}
	return null;
};

export const comparePassword = async (password, hash) => {
	try {
		return await bcrypt.compare(password, hash);
	} catch (error) {
		console.log(error);
	}
	return false;
};

// hashPassword('654321').then(r => {
// 	comparePassword('654321', r).then(c => console.log(c));
// });


