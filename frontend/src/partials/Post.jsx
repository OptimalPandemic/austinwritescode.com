import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { formatDistance } from 'date-fns'

import  usePost  from '../hooks/usePost';
import usePosts from '../hooks/usePosts';
import { subscribe } from '../utils/api';
import NotFound from '../pages/NotFound';

function Post() {
    const { slug } = useParams();
    const [post, loading] = usePost(slug);
    const [posts, postsLoading] = usePosts();
    const [inputs, setInputs] = useState({});
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Subscribe");
    const [buttonBgColor, setButtonBgColor] = useState("bg-blue-700");
    const [buttonHoverBgColor, setButtonHoverBgColor] = useState("bg-blue-800");
    const navigate = useNavigate();

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

    const renderPost = () => {

        const CodeBlock = {
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          };

        if (loading) return <p>Loading...</p>
        else if (post.value == 'notfound') {
            console.log('This is bad');
            navigate('/404');
        }

        return (
            <article>

                {/* Article header */}
                <header className="max-w-3xl mx-auto mb-16">
                    {/* Title */}
                    <h1 className="h1 text-center mb-4">{post.title}</h1>
                </header>

                {/* Hero Image */}
                <div className="mb-6">
                    <img className="md:h-96 h-48 mx-auto" src={post.heroImage.fields.file.url} />
                </div>

                {/* Article content */}
                <div className="lg:flex lg:justify-between mx-auto" data-sticky-container>

                    {/* Main content */}
                    <div>

                        {/* Article meta */}
                        <div className="flex items-center mb-6">
                            <div className="flex shrink-0 mr-3">
                                <a className="relative" href="#0">
                                    <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                                    <img className="relative rounded-full" src={post.author.fields.image.fields.file.url} width="32" height="32" alt={post.author.fields.name} />
                                </a>
                            </div>
                            <div>
                                <span className="text-gray-600">By </span>
                                <a className="font-medium hover:underline">{post.author.fields.name}</a>
                                <span className="text-gray-600"> · {formatDistance(Date.parse(post.publishDate), new Date(), { addSuffix: true })}</span>
                            </div>
                        </div>
                        <hr className="w-16 h-px pt-px bg-gray-200 border-0 mb-6" />

                        {/* Article body */}
                        <div>
                            <Markdown children={post.body} className="prose" components={CodeBlock} />
                            <form className="w-full max-w-lg md:pb-10 mt-20 mx-auto" onSubmit={handleSubmit}>
                                <h2 className="text-md font-bold mb-4">Want to get updates when I post? Subscribe to my mailing list!</h2>
                                <div className="relative">
                                    <input type="email" id="email" name="email" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" required onChange={handleChange} disabled={inputDisabled} />
                                    <button type="submit" className={`text-white absolute right-2.5 bottom-2.5 ${buttonBgColor} hover:${buttonHoverBgColor} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2`} disabled={buttonDisabled} >{buttonText}</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Sidebar */}

                    <aside className="relative hidden lg:block w-64 ml-24 shrink-0">
                        <div data-sticky data-margin-top="100" data-sticky-for="768" data-sticky-wrap>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-4">More articles for you</h4>
                            <ul className="font-medium -my-1">
                                {renderPosts()}
                            </ul>
                        </div>
                    </aside>
                </div>
                
            </article>
            
        );
    }

    const renderPosts = () => {
        if (postsLoading) return <p>Loading...</p>;

        return (
            posts.filter(p => p.fields.slug != post.slug).slice(0,4).map(post => (
                <li className="py-1">
                    <a href={`/blog/${post.fields.slug}`}>
                        <div>
                            <header>
                                <img src={post.fields.heroImage.fields.file.url} />
                                <h2 className="text-lg font-bold mb-2 mt-2">
                                    <p className="hover:underline">{post.fields.title}</p>
                                </h2>
                            </header>
                            <div className="text-sm text-gray-600 mb-4">
                                {post.fields.description}
                            </div>
                        </div>
                    </a>
                </li>
            ))
        );

    };

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="max-w-3xl mx-auto lg:max-w-none">
                        {renderPost()}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Post;