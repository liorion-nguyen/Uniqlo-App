export type CategoryState = {
    loading: boolean;
    categories: CategoryType[];
    errorMessage: string | null;
};

export type CategoryType = {
    id: string;
    name: string;
    image: string;
    order: number;
    featured: boolean;
    size: string;
    color: string;
    material: string;
    status: string;
};