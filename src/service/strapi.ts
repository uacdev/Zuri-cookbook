const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '';
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN || '';

export const fetchStrapi = async (path: string, options?: RequestInit) => {
    if (!STRAPI_URL) {
        console.error("FATAL ERROR: VITE_STRAPI_URL is missing. Please set it in your production environment variables (Vercel/Netlify)!");
        return { data: null, meta: {}, error: { status: 500, message: "Missing Strapi URL configuration" } };
    }

    try {
        const url = `${STRAPI_URL}${path}`;
        const response = await fetch(url, {
            ...options,
            headers: {
                'Authorization': `Bearer ${STRAPI_TOKEN}`,
                'Content-Type': 'application/json',
                ...options?.headers,
            },
        });

        if (!response.ok) {
            console.error(`Strapi fetch failed: ${response.status} ${response.statusText}`);
            try {
                const errorBody = await response.json();
                return { data: null, meta: {}, error: errorBody.error || { status: response.status, message: response.statusText } };
            } catch (e) {
                return { data: null, meta: {}, error: { status: response.status, message: response.statusText } };
            }
        }

        return await response.json();
    } catch (error) {
        console.error('Strapi network error:', error);
        return { data: [], meta: {}, error };
    }
}

export const getStrapiMedia = (url: string | null | undefined) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${STRAPI_URL}${url}`;
}

export const extractData = (item: any) => {
    return item?.attributes || item || {};
}