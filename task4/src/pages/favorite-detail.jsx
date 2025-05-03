import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const FavouriteDetail = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "unknown";
    const size = searchParams.get("size") || "default";

    return (
        <div>
            <div className="p-6 text-center mt-16">
                <h1 className="text-2xl font-bold">Favourite Detail Page</h1>
                <p className="text-lg mt-4">
                    Your favourite post is <span className="font-semibold">{query}</span>. <br />
                    Post ID is <span className="font-semibold">{id}</span>. <br />
                    Size is <span className="font-semibold">{size}</span>.
                </p>
            </div>
        </div>
    );
};

export default FavouriteDetail