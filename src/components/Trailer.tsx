import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Trailer: React.FC<TrailerProps> = ({ movieId }) => {
    const fetchVideos = async (): Promise<Video[]> => {
        const res = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/movie/${movieId}/videos`,
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_PUBLIC_KEY}`,
                    "Content-Type": "application/json;charset=utf-8",
                },
            }
        );
        return res.data.results;
    };

    const { data, isLoading, error } = useQuery<Video[], Error>({
        queryKey: ["movieVideos", movieId],
        queryFn: fetchVideos,
        enabled: !!movieId,
    });

    if (isLoading) return <p>Loading videos...</p>;
    if (error) return <p>Error loading videos: {error.message}</p>;
    if (!data || data.length === 0) return <p>No videos available</p>;


    const trailers = data.filter(
        (video) => video.site === "YouTube" && video.type === "Trailer"
    );

    return (
        <div className="bg-base-100">
            <div className="p-6">
                   <h2 className="text-xl font-bold mb-4 ">Trailers & Media</h2>
                <div className="max-w-6xl mx-auto p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {trailers.map((video) => (
                            <div key={video.id} className="w-full">
                                <iframe
                                    className="w-full h-64 md:h-80 rounded-lg shadow-lg"
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title={video.name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <p className="text-sm mt-2 font-semibold">{video.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trailer;
