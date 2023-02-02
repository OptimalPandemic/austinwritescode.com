import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns'

import usePosts from '../hooks/usePosts';
import { subscribe } from '../utils/api';


function BlogList() {

    const [posts, loading] = usePosts();
    const [inputs, setInputs] = useState({});
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Subscribe");
    const [buttonBgColor, setButtonBgColor] = useState("bg-blue-700");
    const [buttonHoverBgColor, setButtonHoverBgColor] = useState("bg-blue-800");

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setInputDisabled(true);
        setButtonDisabled(true);
        setButtonBgColor("bg-blue-700");
        setButtonHoverBgColor("bg-blue-800");
        setButtonText('Subscribing...');
        try {
            await subscribe(inputs);
            setButtonBgColor("bg-green-700");
            setButtonHoverBgColor("bg-green-800");
            setButtonText('Subscribed!');
        }
        catch (err) {
            console.log(err);
            setInputDisabled(false);
            setButtonDisabled(false);
            setButtonBgColor("bg-red-700");
            setButtonHoverBgColor("bg-red-800");
            setButtonText('Try Again');
        }
    }

    const renderPosts = () => {
        if (loading) return <p>Loading...</p>;

        return (
            posts.map(post => (
                <article className="flex items-center py-4 border-b border-gray-200" key={post.fields.slug}>
                    <Link to={`/blog/${post.fields.slug}`}>
                        <div>
                            <header>
                                <h2 className="h4 mb-2">
                                    <p className="hover:underline">{post.fields.title}</p>
                                </h2>
                            </header>
                            <div className="text-lg text-gray-600 mb-4">
                                {post.fields.description}
                            </div>
                            <footer className="text-sm">
                                <div className="flex items-center">
                                    <div className="flex shrink-0 mr-3">
                                        <a className="relative">
                                            <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                                            <img className="relative rounded-full" src={post.fields.author.fields.image.fields.file.url} width="32" height="32" alt={post.fields.author.fields.name} />
                                        </a>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">By </span>
                                        <a className="font-medium hover:underline">{post.fields.author.fields.name}</a>
                                        <span className="text-gray-600"> · {formatDistance(Date.parse(post.fields.publishDate), new Date(), { addSuffix: true })}</span>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </Link>
                    <Link to={`/blog/${post.fields.slug}`} className="block shrink-0 ml-6">
                        <span className="sr-only">Read more</span>
                        <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                        </svg>
                    </Link>
                </article>
            ))
        );
    }

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl md:pb-12 pb-8 text-center md:text-left">
                        <h1 className="h1 mb-4">Code, Deploy, Repeat</h1>
                        <p className="text-xl text-gray-600">Join me as I navigate the world of software engineering and DevOps, sharing tips, tricks, and a hopefully a fresh perspective along the way. I also write about C, because I use it and I find the existing world of C content lacking.</p>
                    </div>
                    <form className="w-full lg:max-w-lg max-w-xs md:pb-20 pb-10 mx-auto" onSubmit={handleSubmit}>
                        <h2 className="text-md mb-4">Want to get updates when I post? Subscribe to my mailing list!</h2>
                        <div className="relative">
                            <input type="email" id="email" name="email" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" required onChange={handleChange} disabled={inputDisabled} />
                            <button type="submit" className={`text-white absolute right-2.5 bottom-2.5 ${buttonBgColor} hover:${buttonHoverBgColor} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2`} disabled={buttonDisabled} >{buttonText}</button>
                        </div>
                    </form>

                    {/* Main content */}
                    <div className="md:flex md:justify-between">

                        {/* Articles container */}
                        <div className="md:grow -mt-4">{renderPosts()}</div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default BlogList;