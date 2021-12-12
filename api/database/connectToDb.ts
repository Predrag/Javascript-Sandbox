import { connect } from 'mongoose';
import uri from './db.url';

const connectToDb: () => Promise<void> = async () => {
	try {
		await connect(uri);
		return true;
	} catch (err) {
		return err;
	}
};

export default connectToDb;
