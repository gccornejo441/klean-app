import Image from 'next/image';
import circleman1 from '../../../public/images/og/circle-man-1.png';
import circleman2 from '../../../public/images/og/circle-man-2.png';
import circleman3 from '../../../public/images/og/circle-man-3.png';
import styles from './Body.module.scss';

import washman1 from '../../../public/images/og/washer_1.jpg';
import washman2 from '../../../public/images/og/washer_2.jpg';


const Body = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="flex justify-center">
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
            <svg
              className="ml-5"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#0085FF" />
            </svg>
          </div>
          <div>
            <Image src={circleman3} />
          </div>
        </div>
        <div className="flex justify-center flex-col text-center mb-20 mt-20 md:mt-48">
          <h2 className={styles.proServices}>
            <span>Professional Services</span>
          </h2>
          <h3 className="font-bold text-black md:flex flex-col text-base md:text-2xl">
            <span>Our cleaning company offers quality</span> <span>cleaning servies in Corona and Orange</span>
          </h3>
          <div className="flex justify-center">
            <span className="md:w-2/3 lg:w-1/3 text-sm md:text-xs font-semibold text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nunc aliquet nulla mauris amet, tortor,
              auctor mattis vehicula. Massa donec sapien, ut quam. Nec proin in purus, suspendisse volutpat, elit.
            </span>
          </div>
        </div>
        <div className="hidden md:flex justify-center mt-0 lg:mt-32">
          <svg
            className="w-11/12 lg:w-full"
            width="1355"
            height="123"
            viewBox="0 0 1355 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M246.097 0L277 37.2543V122L177.91 122L146 95.827L146 0L246.097 0Z" fill="#65D53E" />
            <path
              d="M212 35.9333C209.482 35.9333 207.02 36.6801 204.926 38.0793C202.832 39.4785 201.2 41.4671 200.236 43.7938C199.272 46.1206 199.02 48.6808 199.511 51.1508C200.003 53.6209 201.215 55.8897 202.996 57.6705C204.777 59.4513 207.046 60.664 209.516 61.1554C211.986 61.6467 214.546 61.3945 216.873 60.4308C219.199 59.467 221.188 57.8349 222.587 55.7409C223.986 53.647 224.733 51.1851 224.733 48.6667C224.733 45.2896 223.392 42.0508 221.004 39.6629C218.616 37.2749 215.377 35.9333 212 35.9333V35.9333ZM212 56.9556C210.361 56.9556 208.758 56.4694 207.395 55.5586C206.032 54.6479 204.969 53.3533 204.342 51.8387C203.715 50.3241 203.55 48.6575 203.87 47.0496C204.19 45.4417 204.98 43.9648 206.139 42.8056C207.298 41.6463 208.775 40.8569 210.383 40.5371C211.991 40.2172 213.657 40.3814 215.172 41.0087C216.687 41.6361 217.981 42.6985 218.892 44.0616C219.803 45.4247 220.289 47.0273 220.289 48.6667C220.283 50.8612 219.407 52.9638 217.853 54.5135C216.299 56.0631 214.194 56.9334 212 56.9334V56.9556Z"
              fill="white"
            />
            <path
              d="M212 25.4445C205.078 25.4502 198.44 28.1949 193.535 33.0789C188.63 37.9629 185.857 44.5894 185.822 51.5111C185.822 61.8889 191.644 70.5778 195.911 76.9111L196.689 78.0667C200.934 84.2192 205.488 90.1527 210.333 95.8445L212.022 97.8222L213.711 95.8445C218.556 90.1522 223.11 84.2187 227.356 78.0667L228.133 76.8889C232.378 70.5556 238.2 61.8889 238.2 51.5111C238.165 44.5856 235.389 37.9557 230.479 33.0711C225.57 28.1864 218.926 25.4444 212 25.4445V25.4445ZM224.422 74.3333L223.622 75.5111C219.8 81.2445 214.733 87.6667 212 90.8445C209.378 87.6667 204.2 81.2445 200.378 75.5111L199.6 74.3333C195.667 68.4667 190.267 60.4445 190.267 51.4222C190.267 48.5682 190.829 45.7421 191.921 43.1053C193.013 40.4684 194.614 38.0726 196.632 36.0544C198.65 34.0363 201.046 32.4355 203.683 31.3433C206.32 30.2511 209.146 29.6889 212 29.6889C214.854 29.6889 217.68 30.2511 220.317 31.3433C222.954 32.4355 225.35 34.0363 227.368 36.0544C229.386 38.0726 230.987 40.4684 232.079 43.1053C233.171 45.7421 233.733 48.5682 233.733 51.4222C233.733 60.5333 228.356 68.5556 224.422 74.3333V74.3333Z"
              fill="white"
            />
            <path d="M706.097 0L737 37.2543V122L637.91 122L606 95.827V0L706.097 0Z" fill="#65D53E" />
            <path
              d="M688.5 22L684.888 34.8167L677.667 38.5883L684.888 42.3583L688.5 53.6667L692.112 42.3567L699.333 38.5867L692.112 34.8183L688.5 22Z"
              fill="white"
            />
            <path
              d="M664.333 32L662.667 38.6667L657.667 40.3333L662.667 42L664.333 48.6667L666 42L671 40.3333L666 38.6667L664.333 32Z"
              fill="white"
            />
            <path
              d="M641 62C641 61.558 641.176 61.1341 641.488 60.8215C641.801 60.509 642.225 60.3334 642.667 60.3334H647.667C648.109 60.3334 648.533 60.509 648.845 60.8215C649.158 61.1341 649.333 61.558 649.333 62V80.3267C649.333 80.7687 649.158 81.1927 648.845 81.5052C648.533 81.8178 648.109 81.9934 647.667 81.9934H642.667C642.225 81.9934 641.801 81.8178 641.488 81.5052C641.176 81.1927 641 80.7687 641 80.3267V62.0017V62Z"
              fill="white"
            />
            <path
              d="M660.508 60.6483C662.062 59.94 665.858 60.6483 665.858 60.6483L676.902 63.125C676.902 63.125 679.663 64.01 682.252 64.01C684.84 64.01 683.292 67.5533 681.56 68.79C679.83 70.0267 678.57 69.96 678.57 69.96L669.653 69.8516C669.653 69.8516 677.42 71.2683 680.353 71.445C681.838 71.535 684.387 70.4883 687.237 69.32C690.012 68.18 693.07 66.925 695.71 66.4883C701.06 65.605 701.923 70.3833 700.197 72.1533C698.472 73.9233 684.667 80.6483 682.252 81.5333C680.358 82.2267 678.07 81.9967 675.488 81.7367C674.773 81.665 674.035 81.59 673.278 81.5333C670.262 81.305 667.958 80.5717 665.678 79.8467C663.232 79.07 660.813 78.3017 657.575 78.17C656.488 78.1267 653.945 78.2617 652.667 78.3366V63.5666C654.877 62.78 659.352 61.1733 660.508 60.6466V60.6483Z"
              fill="white"
            />
            <path d="M1179.1 1L1210 38.2543V123L1110.91 123L1079 96.827V1L1179.1 1Z" fill="#65D53E" />
            <path
              d="M1145 20C1137.09 20 1129.36 22.346 1122.78 26.7412C1116.2 31.1365 1111.07 37.3836 1108.04 44.6927C1105.02 52.0017 1104.23 60.0444 1105.77 67.8036C1107.31 75.5628 1111.12 82.6902 1116.72 88.2843C1122.31 93.8784 1129.44 97.688 1137.2 99.2314C1144.96 100.775 1153 99.9827 1160.31 96.9552C1167.62 93.9277 1173.86 88.8008 1178.26 82.2228C1182.65 75.6448 1185 67.9112 1185 60C1185 49.3913 1180.79 39.2172 1173.28 31.7157C1165.78 24.2143 1155.61 20 1145 20ZM1122.23 49.725C1122.23 48.7361 1122.52 47.7694 1123.07 46.9471C1123.62 46.1249 1124.4 45.484 1125.31 45.1056C1126.23 44.7272 1127.23 44.6281 1128.2 44.8211C1129.17 45.014 1130.06 45.4902 1130.76 46.1895C1131.46 46.8887 1131.94 47.7796 1132.13 48.7495C1132.32 49.7194 1132.22 50.7248 1131.84 51.6384C1131.47 52.552 1130.83 53.3329 1130 53.8823C1129.18 54.4317 1128.21 54.725 1127.23 54.725C1125.9 54.725 1124.63 54.1982 1123.69 53.2605C1122.75 52.3228 1122.23 51.0511 1122.23 49.725ZM1145.33 85.525C1140.74 85.531 1136.27 84.0821 1132.56 81.3867C1128.85 78.6913 1126.09 74.8884 1124.68 70.525H1165.95C1164.54 74.8843 1161.78 78.6843 1158.08 81.3793C1154.37 84.0744 1149.91 85.5257 1145.33 85.525ZM1162.65 54.725C1161.66 54.725 1160.69 54.4317 1159.87 53.8823C1159.05 53.3329 1158.41 52.552 1158.03 51.6384C1157.65 50.7248 1157.55 49.7194 1157.75 48.7495C1157.94 47.7796 1158.42 46.8887 1159.11 46.1895C1159.81 45.4902 1160.7 45.014 1161.67 44.8211C1162.64 44.6281 1163.65 44.7272 1164.56 45.1056C1165.48 45.484 1166.26 46.1249 1166.81 46.9471C1167.36 47.7694 1167.65 48.7361 1167.65 49.725C1167.65 50.3837 1167.52 51.0359 1167.27 51.6442C1167.01 52.2525 1166.64 52.8048 1166.18 53.2694C1165.71 53.734 1165.16 54.1018 1164.55 54.3516C1163.94 54.6014 1163.28 54.7283 1162.63 54.725H1162.65Z"
              fill="white"
            />
            <path
              d="M145.061 53.0607C145.646 52.4749 145.646 51.5251 145.061 50.9393L135.515 41.3934C134.929 40.8076 133.979 40.8076 133.393 41.3934C132.808 41.9792 132.808 42.9289 133.393 43.5147L141.879 52L133.393 60.4853C132.808 61.0711 132.808 62.0208 133.393 62.6066C133.979 63.1924 134.929 63.1924 135.515 62.6066L145.061 53.0607ZM0 53.5H144V50.5H0V53.5Z"
              fill="#E8E8E8"
            />
            <path
              d="M1354.06 53.0607C1354.65 52.4749 1354.65 51.5251 1354.06 50.9393L1344.51 41.3934C1343.93 40.8076 1342.98 40.8076 1342.39 41.3934C1341.81 41.9792 1341.81 42.9289 1342.39 43.5147L1350.88 52L1342.39 60.4853C1341.81 61.0711 1341.81 62.0208 1342.39 62.6066C1342.98 63.1924 1343.93 63.1924 1344.51 62.6066L1354.06 53.0607ZM1210 53.5L1353 53.5V50.5L1210 50.5V53.5Z"
              fill="#E8E8E8"
            />
            <path
              d="M589.061 53.0607C589.646 52.4749 589.646 51.5251 589.061 50.9393L579.515 41.3934C578.929 40.8076 577.979 40.8076 577.393 41.3934C576.808 41.9792 576.808 42.9289 577.393 43.5147L585.879 52L577.393 60.4853C576.808 61.0711 576.808 62.0208 577.393 62.6066C577.979 63.1924 578.929 63.1924 579.515 62.6066L589.061 53.0607ZM276.5 53.5H588V50.5H276.5V53.5Z"
              fill="#CBCBCB"
            />
            <path
              d="M1032.56 53.0607C1033.15 52.4749 1033.15 51.5251 1032.56 50.9393L1023.01 41.3934C1022.43 40.8076 1021.48 40.8076 1020.89 41.3934C1020.31 41.9792 1020.31 42.9289 1020.89 43.5147L1029.38 52L1020.89 60.4853C1020.31 61.0711 1020.31 62.0208 1020.89 62.6066C1021.48 63.1924 1022.43 63.1924 1023.01 62.6066L1032.56 53.0607ZM737 53.5H1031.5V50.5H737V53.5Z"
              fill="#B3B0B0"
            />
          </svg>
        </div>
        <div className="flex flex-col md:flex-row justify-center text-center mb-48">
          <div className="mb-20">
            <div className="flex justify-center md:hidden">
              <svg width="131" height="122" viewBox="0 0 131 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.097 0L131 37.2543L131 122L31.9103 122L0 95.827L0 0L100.097 0Z" fill="#65D53E" />
                <path
                  d="M65.9999 35.9333C63.4815 35.9333 61.0197 36.6801 58.9257 38.0793C56.8317 39.4785 55.1996 41.4671 54.2359 43.7938C53.2721 46.1206 53.02 48.6808 53.5113 51.1508C54.0026 53.6209 55.2153 55.8897 56.9961 57.6705C58.7769 59.4513 61.0458 60.664 63.5158 61.1554C65.9858 61.6467 68.5461 61.3945 70.8728 60.4308C73.1995 59.467 75.1882 57.8349 76.5873 55.7409C77.9865 53.647 78.7333 51.1851 78.7333 48.6667C78.7333 45.2896 77.3917 42.0508 75.0038 39.6629C72.6158 37.2749 69.377 35.9333 65.9999 35.9333V35.9333ZM65.9999 56.9556C64.3606 56.9556 62.758 56.4694 61.3949 55.5586C60.0318 54.6479 58.9694 53.3533 58.342 51.8387C57.7146 50.3241 57.5505 48.6575 57.8703 47.0496C58.1901 45.4417 58.9796 43.9648 60.1388 42.8056C61.298 41.6463 62.775 40.8569 64.3829 40.5371C65.9907 40.2172 67.6574 40.3814 69.172 41.0087C70.6866 41.6361 71.9811 42.6985 72.8919 44.0616C73.8027 45.4247 74.2888 47.0273 74.2888 48.6667C74.2829 50.8612 73.4071 52.9638 71.8532 54.5135C70.2994 56.0631 68.1944 56.9334 65.9999 56.9334V56.9556Z"
                  fill="white"
                />
                <path
                  d="M66 25.4445C59.0783 25.4502 52.44 28.1949 47.5352 33.0789C42.6303 37.9629 39.8575 44.5894 39.8223 51.5111C39.8223 61.8889 45.6445 70.5778 49.9112 76.9111L50.6889 78.0667C54.934 84.2192 59.488 90.1527 64.3334 95.8445L66.0223 97.8222L67.7112 95.8445C72.5559 90.1522 77.1099 84.2187 81.3556 78.0667L82.1334 76.8889C86.3778 70.5556 92.2 61.8889 92.2 51.5111C92.1648 44.5856 89.3889 37.9557 84.4793 33.0711C79.5696 28.1864 72.9257 25.4444 66 25.4445V25.4445ZM78.4223 74.3333L77.6223 75.5111C73.8 81.2445 68.7334 87.6667 66 90.8445C63.3778 87.6667 58.2 81.2445 54.3778 75.5111L53.6 74.3333C49.6667 68.4667 44.2667 60.4445 44.2667 51.4222C44.2667 48.5682 44.8289 45.7421 45.9211 43.1053C47.0133 40.4684 48.6141 38.0726 50.6323 36.0544C52.6504 34.0363 55.0462 32.4355 57.6831 31.3433C60.3199 30.2511 63.146 29.6889 66 29.6889C68.8541 29.6889 71.6802 30.2511 74.317 31.3433C76.9538 32.4355 79.3497 34.0363 81.3678 36.0544C83.386 38.0726 84.9868 40.4684 86.079 43.1053C87.1712 45.7421 87.7334 48.5682 87.7334 51.4222C87.7334 60.5333 82.3556 68.5556 78.4223 74.3333V74.3333Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="px-5 lg:px-0">
              <h3 className="font-bold text-black md:flex flex-col text-base md:text-lg">
                <span>Our cleaning company offers quality</span> <span>cleaning servies in Corona and Orange</span>
              </h3>
              <div className="flex justify-center">
                <span className="w-2/3 md:w-2/3 lg:w-10/12 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nunc aliquet nulla mauris amet,
                  tortor, auctor mattis vehicula. Massa donec sapien, ut quam. Nec proin in purus, suspendisse volutpat,
                  elit.
                </span>
              </div>
            </div>
          </div>
          <div className="mb-20">
            <div className="flex justify-center md:hidden">
              <svg width="131" height="122" viewBox="0 0 131 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.097 0L131 37.2543L131 122L31.9103 122L0 95.827L0 0L100.097 0Z" fill="#65D53E" />
                <path
                  d="M83.5001 31L79.8884 43.8167L72.6667 47.5883L79.8884 51.3583L83.5001 62.6667L87.1118 51.3567L94.3334 47.5867L87.1118 43.8183L83.5001 31Z"
                  fill="white"
                />
                <path
                  d="M59.3334 41L57.6667 47.6667L52.6667 49.3333L57.6667 51L59.3334 57.6667L61.0001 51L66.0001 49.3333L61.0001 47.6667L59.3334 41Z"
                  fill="white"
                />
                <path
                  d="M36 71C36 70.558 36.1756 70.1341 36.4882 69.8215C36.8007 69.509 37.2246 69.3334 37.6667 69.3334H42.6667C43.1087 69.3334 43.5326 69.509 43.8452 69.8215C44.1577 70.1341 44.3333 70.558 44.3333 71V89.3267C44.3333 89.7687 44.1577 90.1927 43.8452 90.5052C43.5326 90.8178 43.1087 90.9934 42.6667 90.9934H37.6667C37.2246 90.9934 36.8007 90.8178 36.4882 90.5052C36.1756 90.1927 36 89.7687 36 89.3267V71.0017V71Z"
                  fill="white"
                />
                <path
                  d="M55.5084 69.6483C57.0617 68.94 60.8584 69.6483 60.8584 69.6483L71.9017 72.125C71.9017 72.125 74.6634 73.01 77.2517 73.01C79.8401 73.01 78.2917 76.5533 76.5601 77.79C74.8301 79.0267 73.5701 78.96 73.5701 78.96L64.6534 78.8516C64.6534 78.8516 72.4201 80.2683 75.3534 80.445C76.8384 80.535 79.3867 79.4883 82.2367 78.32C85.0117 77.18 88.0701 75.925 90.7101 75.4883C96.0601 74.605 96.9234 79.3833 95.1967 81.1533C93.4717 82.9233 79.6667 89.6483 77.2517 90.5333C75.3584 91.2267 73.0701 90.9967 70.4884 90.7367C69.7734 90.665 69.0351 90.59 68.2784 90.5333C65.2617 90.305 62.9584 89.5717 60.6784 88.8467C58.2317 88.07 55.8134 87.3017 52.5751 87.17C51.4884 87.1267 48.9451 87.2616 47.6667 87.3366V72.5666C49.8767 71.78 54.3517 70.1733 55.5084 69.6466V69.6483Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="px-5 lg:px-0">
              <h3 className="font-bold text-black md:flex flex-col text-base md:text-lg">
                <span>Our cleaning company offers quality</span> <span>cleaning servies in Corona and Orange</span>
              </h3>
              <div className="flex justify-center">
                <span className="w-2/3 md:w-2/3 lg:w-10/12 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nunc aliquet nulla mauris amet,
                  tortor, auctor mattis vehicula. Massa donec sapien, ut quam. Nec proin in purus, suspendisse volutpat,
                  elit.
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center md:hidden">
              <svg width="131" height="122" viewBox="0 0 131 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.097 0L131 37.2543L131 122L31.9103 122L0 95.827L0 0L100.097 0Z" fill="#65D53E" />
                <path
                  d="M66 19C58.0888 19 50.3552 21.346 43.7772 25.7412C37.1992 30.1365 32.0723 36.3836 29.0448 43.6927C26.0173 51.0017 25.2252 59.0444 26.7686 66.8036C28.312 74.5628 32.1216 81.6902 37.7157 87.2843C43.3098 92.8784 50.4372 96.688 58.1964 98.2314C65.9556 99.7748 73.9983 98.9827 81.3073 95.9552C88.6164 92.9277 94.8635 87.8008 99.2588 81.2228C103.654 74.6448 106 66.9112 106 59C106 48.3913 101.786 38.2172 94.2843 30.7157C86.7828 23.2143 76.6087 19 66 19V19ZM43.225 48.725C43.225 47.7361 43.5183 46.7694 44.0677 45.9471C44.6171 45.1249 45.398 44.484 46.3116 44.1056C47.2252 43.7272 48.2306 43.6281 49.2005 43.8211C50.1704 44.014 51.0613 44.4902 51.7605 45.1895C52.4598 45.8887 52.936 46.7796 53.1289 47.7495C53.3219 48.7194 53.2228 49.7248 52.8444 50.6384C52.466 51.552 51.8251 52.3329 51.0029 52.8823C50.1806 53.4317 49.2139 53.725 48.225 53.725C46.8989 53.725 45.6272 53.1982 44.6895 52.2605C43.7518 51.3228 43.225 50.0511 43.225 48.725ZM66.325 84.525C61.7387 84.531 57.2687 83.0821 53.5581 80.3867C49.8474 77.6913 47.0874 73.8884 45.675 69.525H86.95C85.5389 73.8843 82.7827 77.6843 79.077 80.3793C75.3714 83.0744 70.907 84.5257 66.325 84.525ZM83.65 53.725C82.6611 53.725 81.6944 53.4317 80.8722 52.8823C80.0499 52.3329 79.409 51.552 79.0306 50.6384C78.6522 49.7248 78.5532 48.7194 78.7461 47.7495C78.939 46.7796 79.4152 45.8887 80.1145 45.1895C80.8137 44.4902 81.7047 44.014 82.6746 43.8211C83.6445 43.6281 84.6498 43.7272 85.5634 44.1056C86.4771 44.484 87.2579 45.1249 87.8074 45.9471C88.3568 46.7694 88.65 47.7361 88.65 48.725C88.65 49.3837 88.5199 50.0359 88.267 50.6442C88.0142 51.2525 87.6437 51.8048 87.1767 52.2694C86.7098 52.734 86.1556 53.1018 85.5461 53.3516C84.9366 53.6014 84.2837 53.7283 83.625 53.725H83.65Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="px-5 lg:px-0">
              <h3 className="font-bold text-black md:flex flex-col text-base md:text-lg">
                <span>Our cleaning company offers quality</span> <span>cleaning servies in Corona and Orange</span>
              </h3>
              <div className="flex justify-center">
                <span className="w-2/3 md:w-2/3 lg:w-10/12 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nunc aliquet nulla mauris amet,
                  tortor, auctor mattis vehicula. Massa donec sapien, ut quam. Nec proin in purus, suspendisse volutpat,
                  elit.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex border-2 border-black">
          <div className="lg:w-1/2">
            <div className='border-2 border-blue-500'>
              <div className=''>
                <Image src={washman1} width={314} height={434} />
              </div>
              <div className=''>
                <Image src={washman2} width={314} height={434}  />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex justify-center flex-col text-center mb-20 mt-20 md:mt-48">
              <h2 className={styles.proServices}>
                <span>Professional Services</span>
              </h2>
              <h3 className="font-bold text-black md:flex flex-col text-base md:text-2xl">
                <span>Our cleaning company offers quality</span> <span>cleaning servies in Corona and Orange</span>
              </h3>
              <div className="flex justify-center">
                <span className="md:w-2/3 lg:w-1/3 text-sm md:text-xs font-semibold text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nunc aliquet nulla mauris amet,
                  tortor, auctor mattis vehicula. Massa donec sapien, ut quam. Nec proin in purus, suspendisse volutpat,
                  elit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
