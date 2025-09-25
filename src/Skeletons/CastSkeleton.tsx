
import { Skeleton } from "@mui/material";

const CastSkeleton = () => {
  return (
    <div className="bg-base-100 py-6">
      <h2 className="mx-5 text-xl font-bold mb-4">Top Cast</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 px-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="w-32 flex-shrink-0 text-center">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={128}
              height={192}
              sx={{
                borderRadius: 2,
                bgcolor: (theme) =>
                  theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              width="80%"
              height={20}
              sx={{
                mt: 1,
                mx: "auto",
                bgcolor: (theme) =>
                  theme.palette.mode === "dark" ? "grey.700" : "grey.500",
              }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              width="60%"
              height={18}
              sx={{
                mx: "auto",
                bgcolor: (theme) =>
                  theme.palette.mode === "dark" ? "grey.700" : "grey.500",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CastSkeleton;