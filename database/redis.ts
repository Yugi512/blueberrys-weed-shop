import {config} from "dotenv";
import { Redis } from "@upstash/redis";

config({path: `.env.local`});

const redis = new Redis({
    url: "https://balanced-dane-14540.upstash.io",
    token: 'ATjMAAIjcDFmYzBiNWIwYWNlM2I0MTY0YmQ3NTFlMGJkYjY4MzAyMXAxMA',
});

export default redis;