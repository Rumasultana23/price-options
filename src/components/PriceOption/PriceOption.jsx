import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;

    return (
        <div className='bg-blue-300 flex flex-col rounded-lg p-4 text-center'>
            <h2 className=''> 
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className='mt-8 bg-blue-600 text-white w-full py-3 rounded-xl font-bold hover:bg-blue-900 '>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.object.isRequired
}
export default PriceOption;