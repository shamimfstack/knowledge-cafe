import profileImg from '../../../images/profile.png'

const Header = () => {
    return (
        <div className=''>
            <div className='pt-12 pb-8 max-w-7xl mx-auto flex justify-between items-center border-b-2 border-gray-200'>
                <a className='text-3xl text-[#111] font-bold leading-6' href="">Knowledge Cafe</a>
                <img className='w-[60px] rounded-full' src={profileImg} alt="" />
            </div>
        </div>
        
    );
};

export default Header;