import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons'


function Features() {



  return (
    <section className="relative bg-gray-100">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h1 className="h2 mb-4">Things I Do</h1>
            <p className="text-xl text-gray-600">I have a wide range of experiences across the public and private sectors, so I have a pretty wide range of skills. I'm passionate about being able to adapt my skillset to any situation.</p>
          </div>

          {/* Section content */}
          {/* Illustration */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">
          {/* Skill tables */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-4xl rounded-lg shadow-2xl">
            {/* Skill table 1 */}
            <div className="relative flex flex-col h-full p-6 border-b md:border-r">
                <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-blue-400 items-center mb-6">
                    <FontAwesomeIcon icon={faCode} className="text-2xl"></FontAwesomeIcon>
                </div>
              <div className="mb-6">
                <div className="text-xl font-semibold mb-4 text-center">Software Development</div>
              </div>
              <h3 className="text-md font-semibold mb-1 text-center">I regularly build in:</h3>
              <p className="text-center mb-14">Python, Javascript, C</p>
              <h3 className="text-md font-semibold mb-1 text-center">But I've also used:</h3>
              <p className="text-center mb-3">Java, PHP, C++</p>
            </div>
            {/* Skill table 2 */}
            <div className="relative flex flex-col h-full p-6">
                <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-blue-400 items-center mb-6">
                    <FontAwesomeIcon icon={faCodeBranch} className="text-2xl"></FontAwesomeIcon>
                </div>
              <div className="mb-6">
                <div className="text-xl font-semibold mb-1 text-center">DevOps / SRE</div>
              </div>
              <h3 className="text-md font-semibold mb-1 text-center">Tools I use regularly:</h3>
              <p className="text-center mb-1">Amazon Web Services</p>
              <p className="text-center mb-1">Google Cloud Platform</p>
              <p className="text-center mb-1">Terraform</p>
              <p className="text-center mb-1">Ansible</p>
              <p className="text-center mb-1">GitHub</p>
              <p className="text-center mb-1">JIRA / BitBucket / Confluence</p>
              <p className="text-center mb-1">MySQL</p>
            </div>
          </div>
        </div>
      </div>

        </div >
      </div >
    </section >
  );
}

export default Features;
