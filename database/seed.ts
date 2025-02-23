"use server"

import {productTable} from "@/database/schema";

import {createProduct, deleteProductById, deleteProductByName, getProducts} from "@/database/index";
import {config} from "dotenv";


config({path:'.env.local'});
