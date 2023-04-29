import { Box } from '@mui/material';
import Navbar from '../component/Nav/Navbar';
import Heading from '../component/Heading';
import Playzone from '../component/Zones/Playzone';
import Dinezone from '../component/Zones/Dinezone';
import Partyzone from '../component/Zones/Partyzone';
import ExperienceQrew from '../component/Zones/ExperienceQrew';
import Gallary from '../component/Zones/Gallary';
import Footer from '../component/Footer';

export default function Home() {
	return (
		<Box>
			<Navbar />
			<Heading />
			<Playzone />
			<Dinezone />
			<Partyzone />
			<ExperienceQrew />
			<Gallary />
			<Footer />
		</Box>
	);
}
