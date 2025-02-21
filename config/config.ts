const config = {
    env: {
        NODE_ENV: process.env.NODE_ENV || 'development',
        PORT: process.env.PORT!,
        DATABASE_URL: process.env.DATABASE_URL!,
        UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN!,
        UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL!,
        JWT_SECRET: process.env.JWT_SECRET!,
        JWT_EXPIRES_IN  : process.env.JWT_EXPIRES_IN!,
        SESSION_SECRET: process.env.SESSION_SECRET!,
    }
}
export default config;