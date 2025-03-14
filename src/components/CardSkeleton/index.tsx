const CardSkeleton = () => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-start">
            <div role="status" className="max-w-sm animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-3"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-3"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-3"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default CardSkeleton;