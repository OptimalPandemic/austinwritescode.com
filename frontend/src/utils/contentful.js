import { createClient } from 'contentful';

const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});
  
const getBlogPosts = async () => {
    const response = await client.getEntries({ content_type: 'blogPost' }).then(response => response.items);
    return response;
}
  
const getPost = async (slug) => {
    const response = await client.getEntries({
        'fields.slug': slug,
        content_type: 'blogPost'
    });
    return response.items;
}

export { getBlogPosts, getPost }