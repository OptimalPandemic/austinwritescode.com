import { useEffect, useState } from 'react';

import { getBlogPosts } from '../utils/contentful';

export default function usePosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBlogPosts().then(result => {
            setPosts(result);
            setLoading(false);
        });
    }, []);

    return [posts, loading];
}