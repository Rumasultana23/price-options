import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div className=''>
            <p className='flex items-center'> <AiFillCheckCircle className='text-blue-800 mr-2'></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string.isRequired
}
export default Feature;