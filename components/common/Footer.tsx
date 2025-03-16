import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 mt-20 backdrop-blur-md bg-opacity-80">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                vid.ai.studio
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Resources
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="https://flowbite.com" className="hover:underline">
                    vid.ai.studio
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Github Repo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/arvindpndit"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href=" " className="hover:underline">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            Made with ❤️ by{' '}
            <a href="" className="hover:underline">
              @arvind
            </a>
            . This project is open source.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

