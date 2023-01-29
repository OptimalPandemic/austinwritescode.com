import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        

        {/* Bottom area */}
        <div className="absolute left-0 right-0 m-automd:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <div className="grid place-items-center">
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                <li>
                <a href="https://twitter.com/austinjonesoff" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out w-16 h-16 fill-current" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} className="text-3xl"></FontAwesomeIcon>
                </a>
                </li>
                <li className="ml-8">
                <a href="https://github.com/OptimalPandemic" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out w-16 h-16 fill-current" aria-label="Twitter">
                    <FontAwesomeIcon icon={faGithub} className="text-3xl"></FontAwesomeIcon>
                </a>
                </li>
                <li className="ml-8">
                <a href="https://www.linkedin.com/in/austin-jones-a5765863/" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out w-16 h-16 fill-current" aria-label="Twitter">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl"></FontAwesomeIcon>
                </a>
                </li>
            </ul>
          </div>


        </div>

      </div>
    </footer>
  );
}

export default Footer;
