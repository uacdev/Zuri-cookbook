import { fetchStrapi, getStrapiMedia, extractData } from './strapi';

export interface Ingredient {
    name: string;
    quantity: string;
    unit: string;
}

export interface InstructionStep {
    step: number;
    title: string;
    content: string;
}

export interface Recipe {
    id: string;
    title: string;
    slug: string;
    description: string;
    imageUrl: string;
    category: string;
    prepTime: number;
    servings: number;
    ingredients: Ingredient[];
    instructions: InstructionStep[];
    difficulty: string;
    seasoning: string;
    tags: string[];
    videoUrl?: string;
}

export interface RecipesResponse {
    recipes: Recipe[];
    total: number;
}

const mapRecipeData = (item: any): Recipe => {
    const data = extractData(item);

    const title = data.title || '';
    const slug = data.slug || '';
    const description = data.description || '';
    const category = data.category || '';
    const prepTime = data.prepTimeMins || 0;
    const servings = data.servings || 0;
    const seasoning = data.seasoning || '';
    const difficulty = data.difficulty || '';
    const instructions = data.instructions || [];
    const ingredients = data.ingredients || [];
    const tagsRaw = data.tags || [];

    let tags: string[] = [];
    if (Array.isArray(tagsRaw)) {
        tags = tagsRaw;
    } else if (typeof tagsRaw === 'string') {
        tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);
    }

    const imageObj = extractData(data.image);
    const imageUrl = getStrapiMedia(imageObj?.url || imageObj?.formats?.large?.url || imageObj?.formats?.medium?.url || null);

    return {
        id: item.documentId || item.id?.toString() || '',
        title,
        slug,
        description,
        imageUrl,
        category,
        prepTime,
        servings,
        ingredients,
        instructions,
        seasoning,
        difficulty,
        tags,
        videoUrl: data.videoUrl || '',
    };
};

export const fetchRecipes = async (page: number = 1, limit: number = 10, category?: string, search?: string, seasoning?: string): Promise<RecipesResponse> => {
    const params = new URLSearchParams();

    params.append('pagination[page]', page.toString());
    params.append('pagination[pageSize]', limit.toString());
    params.append('populate', '*');
    params.append('sort[0]', 'createdAt:desc');

    if (category && category !== 'All Recipes') {
        params.append('filters[category][$eqi]', category);
    }
    if (seasoning) {
        params.append('filters[seasoning][$eqi]', seasoning);
    }
    if (search) {
        params.append('filters[title][$containsi]', search);
    }

    const response = await fetchStrapi(`/api/recipes?${params.toString()}`);
    const recipes = (response.data || []).map(mapRecipeData);
    const total = response.meta?.pagination?.total || 0;

    return { recipes, total };
}

export const fetchRecipeBySlug = async (slug: string): Promise<Recipe | null> => {
    const params = new URLSearchParams();
    params.append('filters[slug][$eq]', slug);
    params.append('populate', '*');

    const response = await fetchStrapi(`/api/recipes?${params.toString()}`);
    const data = response.data || [];
    if (data.length === 0) return null;

    return mapRecipeData(data[0]);
}

export const submitContactForm = async (data: any) => {
    return await fetchStrapi('/api/contact-submissions', {
        method: 'POST',
        body: JSON.stringify({ data })
    });
}