import { Skeleton } from "@mui/material";

const TrailerSkeleton = () => {
    return (
        <div className="bg-base-100 p-6">
            <h2 className="text-xl font-bold mb-4">Trailers & Media</h2>
            <div className="max-w-6xl mx-auto p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <div key={idx} className="w-full">
                            <Skeleton
                                variant="rectangular"
                                animation="wave"
                                height={320}
                                sx={{
                                    borderRadius: 2,
                                    bgcolor: (theme) =>
                                        theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                                }}
                            />
                            <Skeleton
                                variant="text"
                                animation="wave"
                                width="70%"
                                height={24}
                                sx={{
                                    mt: 2,
                                    borderRadius: 1,
                                    bgcolor: (theme) =>
                                        theme.palette.mode === "dark" ? "grey.700" : "grey.500",
                                }}
                            />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};
export default TrailerSkeleton;
