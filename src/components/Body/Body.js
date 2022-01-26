import Image from 'next/image';
import circleman1 from '../../../public/images/og/circle-man-1.png';
import circleman2 from '../../../public/images/og/circle-man-2.png';
import circleman3 from '../../../public/images/og/circle-man-3.png';
import styles from './Body.module.scss';

const Body = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={circleman1} />
      </div>
      <div>
        <svg
          className="ml-5 hidden md:block"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#65D53E" />
        </svg>
      </div>

      <div className="mt-16 mx-5 md:mx-0">
        <Image src={circleman2} />
      </div>
      <div className="md:flex flex-col-reverse hidden">
        <svg className="ml-5" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#0085FF" />
        </svg>
      </div>
      <div>
        <Image src={circleman3} />
      </div>
    </div>
  );
};

export default Body;
