import propTypes from 'prop-types';

const ReadTime = ({readingTime}) => {
    console.log(typeof readingTime);
    return (
        <div className="mb-6">
            <h3 className="text-[#6047EC] text-2xl font-bold py-5 px-10 rounded-lg bg-gray-50">Spent time on read: {readingTime} min</h3>
        </div>
    );
};

ReadTime.propsTypes = {
    readingTime: propTypes.number
}

export default ReadTime;