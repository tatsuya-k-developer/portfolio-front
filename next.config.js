import path from "path";

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), "assets/scss")],
    },
};

export default nextConfig;
