import {EnumValues} from "zod";

interface AuthCredentials {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string;
}

interface User {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

interface UserAddress{
    addressLineOne: string,
    addressLineTwo: string,
    city: string,
    state: string,
    zip: string,
    phone: string,
    mobile: string,
}

interface Strain {
    name: string,
    img_url: string,
    type: string,
    most_common_terpene: string,
    thc_level: string,
    description: string,
    // price: number,
    // effects: Object,
    // category: Category,
    // inventory: Inventory,
}


interface Effects{
    tingly: string,
    cancer: string,
    pms: string,
    spinalCordInjury: string,
    pain: string,
    relaxed: string,
    aroused: string,
    muscleSpasms: string,
    depression: string,
    migraines: string,
    paranoid: string,
    inflammation: string,
    phantomLimbPain: string,
    talkative: string,
    dryEyes: string,
    dryMouth: string,
    stress: string,
    alzheimers: string,
    eyePressure: string,
    ptsd: string,
    fibromyalgia: string,
    anxious: string,
    dizzy: string,
    addADHD: string,
    epilepsy: string,
    anorexia: string,
    multipleSclerosis: string,
    headaches: string,
    sleepy: string,
    fatigue: string,
    hivAids: string,
    nausea: string,
    euphoric: string,
    asthma: string,
    energetic: string,
    giggly: string,
    tourettesSyndrome: string,
    gastrointestinalDisorder: string,
    spasticity: string,
    anxiety: string,
    uplifted: string,
    cramps: string,
    parkinsons: string,
    hypertension: string,
    glaucoma: string,
    crohnsDisease: string,
    insomnia: string,
    focused: string,
    hungry: string,
    muscularDystrophy: string,
    creative: string,
    happy: string,
    lackOfAppetite: string,
    seizures: string,
    bipolarDisorder: string,
    tinnitus: string,
    arthritis:string,
    headache: string
}

interface Category {
    name: string,
    description: string,
}

interface Inventory {
    quantity: number,
    availability: boolean,
}

interface Discount {
    name: string,
    description: string,
    discountPercentage: number,
    active: boolean,
}