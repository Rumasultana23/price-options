import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {


    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Use of cardio equipment",
                "Locker room access",
                "Monthly fitness assessment",
                "Discounts on personal training sessions",
                "Online workout tracking"
            ],
            "price": 30,
            "billing_frequency": "monthly"
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym facilities",
                "Use of cardio and strength equipment",
                "Locker room access with towel service",
                "Monthly fitness assessment",
                "Unlimited group fitness classes",
                "Personal training session per month",
                "Nutritional counseling",
                "Access to exclusive fitness events"
            ],
            "price": 50,
            "billing_frequency": "monthly"
        },
        {
            "id": 3,
            "name": "Annual Membership",
            "features": [
                "Access to gym facilities",
                "Use of cardio and strength equipment",
                "Locker room access with towel service",
                "Monthly fitness assessment",
                "Unlimited group fitness classes",
                "12 personal training sessions per year",
                "Sauna and steam room access",
                "Free guest pass per month",
                "Discounted annual locker rental"
            ],
            "price": 80,
            "billing_frequency": "annually"
        },
        {
            "id": 4,
            "name": "Student Membership",
            "features": [
                "Access to gym facilities",
                "Use of cardio equipment",
                "Locker room access",
                "Monthly fitness assessment",
                "Valid student ID required",
                "Discounts on student group classes"
            ],
            "price": '68',
            "billing_frequency": "monthly"
        }
    ];


    return (
        <div className="m-12 ">
            <h2 className="text-5xl mb-4">Best Prices in the Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}> </PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;