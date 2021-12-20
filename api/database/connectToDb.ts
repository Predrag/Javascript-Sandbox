import { connect } from 'mongoose';
import env from '../config/env';



const connectToDb: () => Promise<void> = async () => {
	try {
		await connect(env.uri);
		return true;
	} catch (err) {
		return err;
	}
};

export default connectToDb;
