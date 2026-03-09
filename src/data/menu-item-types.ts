export type MenuCategory = 'hibachi' | 'sushi-rolls' | 'appetizers' | 'sashimi' | 'cocktails';
export type HeatLevel = 'none' | 'mild' | 'medium' | 'hot';
export type LocationId = 'frisco' | 'lewisville';

export interface TasteProfile {
    flavor: string;
    texture: string;
    heat: HeatLevel;
    heatLabel: string;
}

export interface DietaryInfo {
    glutenFree?: boolean;
    dairyFree?: boolean;
    nutFree?: boolean;
    shellfishFree?: boolean;
    vegetarian?: boolean;
    pescatarian?: boolean;
    cooked?: boolean;
    raw?: boolean;
}

export interface PairingItem {
    slug: string;
    name: string;
    category: MenuCategory;
    why: string;
}

export interface RelatedItem {
    slug: string;
    name: string;
    category: MenuCategory;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface MenuItem {
    slug: string;
    category: MenuCategory;
    name: string;
    tagline: string;
    description: string;
    tasteProfile: TasteProfile;
    preparation: string;
    includes?: string[];
    keyIngredients: string[];
    dietary: DietaryInfo;
    pairsWith: PairingItem[];
    relatedItems: RelatedItem[];
    faqs: FAQ[];
    proTip: string;
    heroImage: string;
    /** What makes this dish special at Jinbeh specifically */
    jinbehStory: string;
    /** Origin or cultural background of the dish */
    origin: string;
    /** Nutrition or health highlight */
    nutritionHighlight: string;
    /** The tableside or dining experience tied to this dish */
    experienceNote: string;
}

export interface LocationInfo {
    id: LocationId;
    name: string;
    displayName: string;
    phone: string;
    phoneClean: string;
    neighborhood: string;
    reservationRid: string;
    otherLocation: LocationId;
    otherLocationName: string;
}

export const locations: Record<LocationId, LocationInfo> = {
    frisco: {
        id: 'frisco',
        name: 'Jinbeh Frisco',
        displayName: 'Frisco',
        phone: '(214) 619-1200',
        phoneClean: '2146191200',
        neighborhood: 'Near Stonebriar Centre, minutes from Legacy West',
        reservationRid: '188458',
        otherLocation: 'lewisville',
        otherLocationName: 'Lewisville',
    },
    lewisville: {
        id: 'lewisville',
        name: 'Jinbeh Lewisville',
        displayName: 'Lewisville',
        phone: '(214) 488-2224',
        phoneClean: '2144882224',
        neighborhood: 'Easy access from I-35E, near Vista Ridge Mall',
        reservationRid: '188461',
        otherLocation: 'frisco',
        otherLocationName: 'Frisco',
    },
};
