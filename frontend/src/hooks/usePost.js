import { useEffect, useState } from 'react'

import { getPost } from '../utils/contentful'

export default function usePost(slug) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPost(slug).then(result => {
            setPost(result[0].fields)
            setLoading(false)
        });
    }, []);

    return [post, loading];
}