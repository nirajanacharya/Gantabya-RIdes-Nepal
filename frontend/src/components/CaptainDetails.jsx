import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext);

    // Fallback in case captain is undefined
    if (!captain) {
        return <div>Loading captain details...</div>;
    }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img 
                        className='h-10 w-10 rounded-full object-cover' 
                        src="https://media.licdn.com/dms/image/v2/D4D03AQHrc1abK5bufA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731836151975?e=1743638400&v=beta&t=gTJjwGRsTwhw4_N2a2pGdeBOZjLt6GJ0e82icn-ijgs" 
                        alt="Captain Profile" 
                    />
                    {/* Check captain.firstname and provide fallback */}
                    <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname || 'Captain'} {captain.fullname.lastname || ''}</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>4.9</h4>
                    <p className='text-sm text-gray-600'>Rating</p>
                </div>
            </div>
            <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
        </div>
    );
};

export default CaptainDetails;
