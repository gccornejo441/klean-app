import React from 'react';
import styles from './Hero.module.scss';
import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import useSite from 'hooks/use-site';
import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';
import NavListItem from 'components/NavListItem';

const Hero = () => {
   const { metadata = {}, menus } = useSite();
   const { title } = metadata;

    const navigation = findMenuByLocation(menus, [
      process.env.WORDPRESS_MENU_LOCATION_NAVIGATION,
      MENU_LOCATION_NAVIGATION_DEFAULT,
    ]);
   
  return (
    <main className={styles.overHero}>
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8 md:hidden">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-green-400 hover:text-green-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Link href="#">
                  <p className={styles.navName}>
                    <Link href="/">
                      <a>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25 0L46.6506 37.5H3.34937L25 0Z" fill="#65D43E" />
                          <path d="M24.9999 3.94739L43.232 35.5263H6.76778L24.9999 3.94739Z" fill="#0085FF" />
                          <path d="M25 6.57895L40.9531 34.2105H9.04693L25 6.57895Z" fill="#94CBFF" />
                        </svg>
                        {title}
                      </a>
                    </Link>
                  </p>
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation?.map((listItem) => {
                  return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
                })}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className={styles.container}>
        <h1>
          <span>Start your day with</span> <span>cleaner windows</span>
        </h1>
        <p>
          Anim aute id magna aliqua ad ad non deserunt sun t. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className={styles.linksContainer}>
          <div className={styles.centerContainer}>
            <div className={styles.linkLeft}>
              <Link href="#">
                <a>Get A Quote</a>
              </Link>
            </div>
            <div className={styles.linkRight}>
              <Link href="#">
                <a>Our Services</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
