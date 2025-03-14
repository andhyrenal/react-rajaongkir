import { Destination } from "./index.types";

const Card = (props: Destination) => {
    const {
        subDistrict,
        city,
        district,
        province
    } = props;
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-start">
            <h5 className="mb-2 text-2xl font-bold text-gray-900">
                {subDistrict}
            </h5>
            <p className="font-normal">
               {district}
            </p>
            <p className="font-normal">
                {city}
            </p>
            <p className="font-normal">
                {province}
            </p>
        </div>
    )
}

export default Card;