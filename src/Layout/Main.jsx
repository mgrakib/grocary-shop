import React from 'react';
import TopCommunication from '../Share/TopCommunication';
import NavBar from '../Share/NavBar';
import SearchSection from '../Share/SearchSection';
import Footer from '../components/Footer';
import Left from '../components/Left';
import Right from '../components/Right';

const Main = () => {

    return (
        <div>
            
			<TopCommunication />
			<NavBar />
			<SearchSection />
			
            
            
            
            {/* <div className='flex justify-between page_container'>
				<Left />
				<Right />
			</div>
			<Footer /> */}
		</div>
	);
};

export default Main;