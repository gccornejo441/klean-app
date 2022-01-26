import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';

import useSite from 'hooks/use-site';
import useSearch, { SEARCH_STATE_LOADED } from 'hooks/use-search';
import { postPathBySlug } from 'lib/posts';
import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';

import Section from 'components/Section';

import styles from './Nav.module.scss';
import NavListItem from 'components/NavListItem';

const SEARCH_VISIBLE = 'visible';
const SEARCH_HIDDEN = 'hidden';

const Nav = () => {
  const formRef = useRef();

  const [searchVisibility, setSearchVisibility] = useState(SEARCH_HIDDEN);

  const { metadata = {}, menus } = useSite();
  const { title } = metadata;

  const navigation = findMenuByLocation(menus, [
    process.env.WORDPRESS_MENU_LOCATION_NAVIGATION,
    MENU_LOCATION_NAVIGATION_DEFAULT,
  ]);

  const { query, results, search, clearSearch, state } = useSearch({
    maxResults: 5,
  });

  const searchIsLoaded = state === SEARCH_STATE_LOADED;

  // When the search visibility changes, we want to add an event listener that allows us to
  // detect when someone clicks outside of the search box, allowing us to close the results
  // when focus is drawn away from search

  useEffect(() => {
    // If we don't have a query, don't need to bother adding an event listener
    // but run the cleanup in case the previous state instance exists

    if (searchVisibility === SEARCH_HIDDEN) {
      removeDocumentOnClick();
      return;
    }

    addDocumentOnClick();
    addResultsRoving();

    // When the search box opens up, additionall find the search input and focus
    // on the element so someone can start typing right away

    const searchInput = Array.from(formRef.current.elements).find((input) => input.type === 'search');

    searchInput.focus();

    return () => {
      removeResultsRoving();
      removeDocumentOnClick();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVisibility]);

  /**
   * addDocumentOnClick
   */

  function addDocumentOnClick() {
    document.body.addEventListener('click', handleOnDocumentClick, true);
  }

  /**
   * removeDocumentOnClick
   */

  function removeDocumentOnClick() {
    document.body.removeEventListener('click', handleOnDocumentClick, true);
  }

  /**
   * handleOnDocumentClick
   */

  function handleOnDocumentClick(e) {
    if (!e.composedPath().includes(formRef.current)) {
      setSearchVisibility(SEARCH_HIDDEN);
      clearSearch();
    }
  }

  /**
   * handleOnSearch
   */

  function handleOnSearch({ currentTarget }) {
    search({
      query: currentTarget.value,
    });
  }

  /**
   * handleOnToggleSearch
   */

  function handleOnToggleSearch() {
    setSearchVisibility(SEARCH_VISIBLE);
  }

  /**
   * addResultsRoving
   */

  function addResultsRoving() {
    document.body.addEventListener('keydown', handleResultsRoving);
  }

  /**
   * removeResultsRoving
   */

  function removeResultsRoving() {
    document.body.removeEventListener('keydown', handleResultsRoving);
  }

  /**
   * handleResultsRoving
   */

  function handleResultsRoving(e) {
    const focusElement = document.activeElement;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (focusElement.nodeName === 'INPUT' && focusElement.nextSibling.children[0].nodeName !== 'P') {
        focusElement.nextSibling.children[0].firstChild.firstChild.focus();
      } else if (focusElement.parentElement.nextSibling) {
        focusElement.parentElement.nextSibling.firstChild.focus();
      } else {
        focusElement.parentElement.parentElement.firstChild.firstChild.focus();
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (focusElement.nodeName === 'A' && focusElement.parentElement.previousSibling) {
        focusElement.parentElement.previousSibling.firstChild.focus();
      } else {
        focusElement.parentElement.parentElement.lastChild.firstChild.focus();
      }
    }
  }

  /**
   * escFunction
   */

  // pressing esc while search is focused will close it

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      clearSearch();
      setSearchVisibility(SEARCH_HIDDEN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.utilNav}>
        <div className={styles.utilNavLeft}>
          <svg
            className={styles.icons}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            viewBox="0 0 28 28"
          >
            <path
              fill="#fff"
              d="M14 5.227a4.457 4.457 0 100 8.913 4.457 4.457 0 000-8.913zm0 7.357a2.901 2.901 0 112.901-2.9A2.901 2.901 0 0114 12.576v.007z"
            />
            <path
              fill="#fff"
              d="M14 1.556a9.17 9.17 0 00-9.162 9.123c0 3.632 2.038 6.673 3.53 8.89l.273.404a77.472 77.472 0 004.776 6.223l.59.692.592-.693a77.64 77.64 0 004.775-6.222l.273-.412c1.485-2.217 3.523-5.25 3.523-8.882A9.17 9.17 0 0014 1.556zm4.348 17.11l-.28.413c-1.338 2.006-3.111 4.254-4.068 5.366-.918-1.112-2.73-3.36-4.068-5.366l-.272-.412c-1.377-2.054-3.267-4.862-3.267-8.02a7.607 7.607 0 1115.214 0c0 3.19-1.883 5.997-3.26 8.02z"
            />
          </svg>
          <div className="mt-2">Corona, California</div>
        </div>
        <svg
          className={styles.tri}
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="0 0, 0 100, 80 100" />
        </svg>
        <div className={styles.utilNavRight}>
          <a href="#">
            <svg
              className={styles.icons}
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29749 18V9.55388H0V6.51287H2.29749V3.91545C2.29749 1.87438 3.65463 0 6.78176 0C8.04789 0 8.98413 0.11799 8.98413 0.11799L8.91036 2.95778C8.91036 2.95778 7.95554 2.94874 6.9136 2.94874C5.78591 2.94874 5.60524 3.45391 5.60524 4.29237V6.51287H9L8.85229 9.55388H5.60524V18H2.29749Z"
                fill="#F8F8F8"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              className={styles.icons}
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0001 7.39648C8.56652 7.39648 7.39659 8.5664 7.39659 9.99999C7.39659 11.4336 8.56652 12.6035 10.0001 12.6035C11.4337 12.6035 12.6036 11.4336 12.6036 9.99999C12.6036 8.5664 11.4337 7.39648 10.0001 7.39648ZM17.8087 9.99999C17.8087 8.92187 17.8185 7.85351 17.758 6.77734C17.6974 5.52734 17.4122 4.41797 16.4982 3.50391C15.5822 2.58789 14.4747 2.30469 13.2247 2.24414C12.1466 2.18359 11.0782 2.19336 10.0021 2.19336C8.92394 2.19336 7.85558 2.18359 6.7794 2.24414C5.5294 2.30469 4.42002 2.58984 3.50596 3.50391C2.58994 4.41992 2.30673 5.52734 2.24619 6.77734C2.18564 7.85546 2.19541 8.92382 2.19541 9.99999C2.19541 11.0762 2.18564 12.1465 2.24619 13.2226C2.30673 14.4726 2.59189 15.582 3.50596 16.4961C4.42197 17.4121 5.5294 17.6953 6.7794 17.7558C7.85753 17.8164 8.92589 17.8066 10.0021 17.8066C11.0802 17.8066 12.1486 17.8164 13.2247 17.7558C14.4747 17.6953 15.5841 17.4101 16.4982 16.4961C17.4142 15.5801 17.6974 14.4726 17.758 13.2226C17.8205 12.1465 17.8087 11.0781 17.8087 9.99999ZM10.0001 14.0058C7.78331 14.0058 5.99424 12.2168 5.99424 9.99999C5.99424 7.7832 7.78331 5.99414 10.0001 5.99414C12.2169 5.99414 14.006 7.7832 14.006 9.99999C14.006 12.2168 12.2169 14.0058 10.0001 14.0058ZM14.1701 6.76562C13.6525 6.76562 13.2345 6.34765 13.2345 5.83008C13.2345 5.3125 13.6525 4.89453 14.1701 4.89453C14.6876 4.89453 15.1056 5.3125 15.1056 5.83008C15.1058 5.95298 15.0817 6.0747 15.0347 6.18828C14.9877 6.30185 14.9188 6.40505 14.8319 6.49195C14.745 6.57885 14.6418 6.64776 14.5283 6.69472C14.4147 6.74168 14.293 6.76578 14.1701 6.76562Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              className={styles.icons}
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" fill="#0085FF" />
              <path
                d="M18.824 16.675C18.719 17.401 17.237 19.284 16.555 19.557C16.323 19.65 16.098 19.627 15.918 19.489C15.802 19.399 15.683 19.217 14.085 16.623L13.61 15.85C13.427 15.573 13.462 15.208 13.688 14.93C13.911 14.66 14.237 14.56 14.52 14.668C14.536 14.676 15.715 15.065 15.715 15.065C18.403 15.948 18.49 15.982 18.606 16.067C18.776 16.206 18.855 16.423 18.82 16.675H18.824ZM13.438 12.729C13.248 12.44 13.251 12.099 13.448 11.864L14.194 10.845C15.836 8.60999 15.926 8.49199 16.037 8.41399C16.1334 8.35148 16.2449 8.31624 16.3597 8.31202C16.4745 8.30779 16.5883 8.33474 16.689 8.38999C17.34 8.70599 18.655 10.659 18.734 11.409V11.434C18.7482 11.5461 18.7315 11.66 18.6859 11.7634C18.6403 11.8668 18.5674 11.9558 18.475 12.021C18.352 12.1 18.24 12.146 15.184 12.887C14.701 13.01 14.432 13.077 14.274 13.134L14.295 13.111C13.993 13.202 13.655 13.056 13.464 12.754L13.438 12.729ZM11.563 11.57C11.417 11.616 10.972 11.755 10.424 10.868C10.424 10.868 6.73002 5.05499 6.64402 4.87599C6.59102 4.67499 6.65502 4.44699 6.83402 4.26299C7.38402 3.69399 10.368 2.85799 11.149 3.04799C11.404 3.11399 11.579 3.27499 11.64 3.50099C11.685 3.75099 12.048 9.14699 12.1 10.355C12.151 11.389 11.708 11.526 11.563 11.57ZM12.05 17.483C12.042 20.31 12.035 20.405 11.989 20.539C11.91 20.75 11.729 20.891 11.479 20.937C10.759 21.059 8.50702 20.227 8.03802 19.67C7.95251 19.5635 7.89817 19.4355 7.88102 19.3C7.86802 19.21 7.88102 19.12 7.91402 19.041C7.97102 18.895 8.04902 18.782 10.072 16.411L10.666 15.705C10.869 15.445 11.229 15.367 11.565 15.501C11.89 15.625 12.093 15.906 12.071 16.209V17.468L12.05 17.483ZM5.92002 15.675C5.69802 15.669 5.50002 15.535 5.38502 15.317C5.30202 15.155 5.24302 14.889 5.20502 14.565C5.10302 13.591 5.22802 12.121 5.51902 11.654C5.65702 11.44 5.85702 11.327 6.07802 11.335C6.22402 11.335 6.35402 11.381 9.24502 12.571L10.093 12.908C10.395 13.019 10.582 13.335 10.565 13.695C10.543 14.043 10.341 14.311 10.044 14.391L8.84202 14.773C6.15302 15.637 6.06402 15.661 5.92302 15.65L5.92002 15.675ZM17.14 20.997H17.136L17.133 21L17.14 20.997Z"
                fill="#F8F8F8"
              />
            </svg>
          </a>
        </div>
      </div>
      <nav className={styles.nav}>
        <Section className={styles.navSection}>
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
          <ul className={styles.navMenu}>
            {navigation?.map((listItem) => {
              return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
            })}
          </ul>
          <div className={styles.navSearch}>
            {searchVisibility === SEARCH_HIDDEN && (
              <button onClick={handleOnToggleSearch} disabled={!searchIsLoaded}>
                <span className="sr-only">Toggle Search</span>
                <FaSearch />
              </button>
            )}
            {searchVisibility === SEARCH_VISIBLE && (
              <form ref={formRef} action="/search" data-search-is-active={!!query}>
                <input
                  type="search"
                  name="q"
                  value={query || ''}
                  onChange={handleOnSearch}
                  autoComplete="off"
                  placeholder="Search..."
                  required
                />
                <div className={styles.navSearchResults}>
                  {results.length > 0 && (
                    <ul>
                      {results.map(({ slug, title }, index) => {
                        return (
                          <li key={slug}>
                            <Link tabIndex={index} href={postPathBySlug(slug)}>
                              <a>{title}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {results.length === 0 && (
                    <p>
                      Sorry, not finding anything for <strong>{query}</strong>
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </Section>
      </nav>
    </>
  );
};

export default Nav;
