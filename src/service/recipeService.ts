import { contentfulClient } from './contentful'

export interface Ingredient {
    name: string
    quantity: string
    unit: string
}

export interface InstructionStep {
    step: number
    title: string
    content: string
}

export interface Recipe {
    id: string
    title: string
    slug: string
    description: string
    imageUrl: string
    category: string
    prepTime: number
    cookTime: number
    servings: number
    ingredients: Ingredient[]
    instructions: InstructionStep[]
    difficulty: string
    seasoning: string
    tags: string[]
}

export interface RecipesResponse {
    recipes: Recipe[]
    total: number
}

export const fetchRecipes = async (page: number = 1, limit: number = 10, category?: string, search?: string): Promise<RecipesResponse> => {
    const query: any = {
        content_type: 'recipe',
        order: ['-sys.createdAt'],
        limit,
        skip: (page - 1) * limit,
    }

    if (category && category !== 'All Recipes') {
        query['fields.category[match]'] = category
    }

    if (search) {
        query.query = search
    }

    const entries = await contentfulClient.getEntries(query)

    const recipes = entries.items.map((item: any) => ({
        id: item.sys.id,
        title: item.fields.title ?? '',
        slug: item.fields.slug ?? '',
        description: item.fields.description ?? '',
        imageUrl: item.fields.image?.fields?.file?.url
            ? `https:${item.fields.image.fields.file.url}`
            : '',
        category: item.fields.category ?? '',
        prepTime: item.fields.prepTime ?? 0,
        cookTime: item.fields.cookTime ?? 0,
        servings: item.fields.servings ?? 0,
        ingredients: item.fields.ingredients ?? [],
        instructions: item.fields.instructions ?? [],
        seasoning: item.fields.seasoning ?? '',
        difficulty: item.fields.difficulty ?? '',
        tags: item.fields.tags ?? [],
    }))

    return {
        recipes,
        total: entries.total,
    }
}

export const fetchRecipeBySlug = async (slug: string): Promise<Recipe | null> => {
    const entries = await contentfulClient.getEntries({
        content_type: 'recipe',
        'fields.slug': slug,
        limit: 1,
    })

    if (!entries.items.length) return null
    const item: any = entries.items[0]

    return {
        id: item.sys.id,
        title: item.fields.title ?? '',
        slug: item.fields.slug ?? '',
        description: item.fields.description ?? '',
        imageUrl: item.fields.image?.fields?.file?.url
            ? `https:${item.fields.image.fields.file.url}`
            : '',
        category: item.fields.category ?? '',
        prepTime: item.fields.prepTime ?? 0,
        cookTime: item.fields.cookTime ?? 0,
        servings: item.fields.servings ?? 0,
        ingredients: item.fields.ingredients ?? [],
        instructions: item.fields.instructions ?? [],
        seasoning: item.fields.seasoning ?? '',
        difficulty: item.fields.difficulty ?? '',
        tags: item.fields.tags ?? [],
    }
}