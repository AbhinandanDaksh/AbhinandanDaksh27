import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../icons';
import { socialMedia } from '../config/config';
import { IoStarOutline } from 'react-icons/io5';
import { GoRepoForked } from 'react-icons/go';

const Footer = () => {
  // const [githubInfo, setGitHubInfo] = useState({
  //   stars: 1,
  //   forks: 1,
  // });

  // useEffect(() => {
  //   if (process.env.NODE_ENV !== 'production') {
  //     return;
  //   }

  //   // GitHub API endpoint
  //   const GITHUB_API_URL = 'https://github.com/AbhinandanDaksh/Portfolio';
  //   const fetchGitHubInfo = async () => {
  //     try {
  //       const response = await fetch(GITHUB_API_URL, {
  //         headers: {
  //           Accept: 'application/vnd.github.v3+json',
  //           Authorization: `Bearer ${"Abhinandan"}`, // Use environment variable for token
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error(`Error fetching GitHub data: ${response.statusText}`);
  //       }

  //       const data = await response.json();
  //       const { stargazers_count, forks_count } = data;
  //       setGitHubInfo({
  //         stars: stargazers_count,
  //         forks: forks_count,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchGitHubInfo();
  // }, []);

  return (
    <footer className="flex flex-col items-center justify-center min-h-[70px] p-4 text-center">
      {/* Social Links */}
      <div className="sm:block w-full max-w-xs mx-auto mb-4 text-light-slate">
        <ul className="flex justify-between list-none  ">
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i} className='text-[#a8b2d1] hover:-translate-y-[2px] duration-300 hover:text-[#64ffda] transition-all'>
                <a
                  href={url}
                  aria-label={name}
                  className="p-3 "
                >
                  <Icon name={name} className={name} />
                </a>
              </li>
            ))}
        </ul>
      </div>

      {/* Credit Section */}
      <div
        className="text-[#8892b0] font-mono text-lg leading-none focus:outline-none hover:text-[#64ffda] hover:-translate-y-[2px] duration-300"
        tabIndex="-1"
      >
        <a href="https://github.com/AbhinandanDaksh" className="inline-block p-2 mb-7 ">
          <div>Designed &amp; Built by Abhinandan</div>

          {/* GitHub Stats */}
          {/* {githubInfo.stars !== null && githubInfo.forks !== null && (
            <div className="flex justify-evenly mt-4">
              <span className="flex items-center mx-2">
                <IoStarOutline className="inline-block mr-1 w-3.5 h-3.5" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span className="flex items-center mx-2">
                <GoRepoForked className="inline-block mr-1 w-3.5 h-3.5" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )} */}
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
