import { Link } from "react-router-dom";

import Header from '../partials/Header';
import Avatar from '../images/avatar_sad.png';
import Footer from '../partials/Footer';

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            <section className="flex items-center h-screen p-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-lg text-center items-center">
                        <div className="mb-8">
                            <img src={Avatar} width="250" className="mx-auto" />
                        </div>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to="/" className="px-8 py-3 font-semibold rounded bg-blue-500 text-gray-100">Back to homepage</Link>
                    </div>
                </div>
            </section>

        </div>
    );
}