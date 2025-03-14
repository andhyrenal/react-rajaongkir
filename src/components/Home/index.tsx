import Button from "../Button";
import Card from "../Card";
import CardSkeleton from "../CardSkeleton";
import useHome from "./index.hooks";

const Home = () => {
    const {
        destination,
        setSearch,
        handleSearch,
        isLoading,
        handleLogOut
    } = useHome();
    return (
        <div>
            <div className="flex gap-3">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl focus:outline-none focus:ring-0 focus:ring-blue-500"
                        placeholder="Search Domestic Destination"
                    />
                </div>
                <div className="w-56">
                    <Button
                        onClick={handleSearch}
                        type="button"
                        className="bg-blue-700 hover:bg-blue-80 p-4 rounded-2xl"
                    >
                        Search
                    </Button>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-5 gap-5">
                {isLoading ? (
                    Array(10).fill(0).map((_, i) => (
                        <CardSkeleton key={i} />
                    ))
                ) :
                    (
                        destination && destination.data.map((el, i) => (
                            <Card
                                key={i}
                                city={el.city_name}
                                district={el.district_name}
                                province={el.province_name}
                                subDistrict={el.subdistrict_name}
                            />
                        ))
                    )
                }
            </div>
            <div className="mt-10 flex justify-end absolute bottom-1 right-5">
                <div>
                    <Button
                        onClick={handleLogOut}
                        type="button"
                        className="bg-red-700 rounded-lg hover:bg-blue-80 px-3 py-2"
                    >
                        Log Out
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home;