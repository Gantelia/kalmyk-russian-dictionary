import { useEffect, useState } from 'react';

import './scroll-button.scss';

function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button className="button scroll-button" onClick={handleScrollToTop}>
          <svg
            className="scroll-button__image"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 31 31"
            width="31"
            height="31"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 21.33c.41 0 .76-.14 1.04-.42.28-.28.42-.62.42-1.04v-4.66l1.31 1.31c.27.27.6.4 1.02.4.41 0 .76-.13 1.02-.4.27-.27.4-.6.4-1.02 0-.41-.13-.75-.4-1.02l-3.79-3.8c-.14-.14-.3-.24-.47-.3a1.62 1.62 0 00-1.1 0c-.17.06-.32.16-.47.3l-3.8 3.8c-.26.27-.4.6-.4 1.02 0 .41.14.75.4 1.02.27.27.62.4 1.03.4.41 0 .75-.13 1.02-.4l1.31-1.31v4.66c0 .42.14.76.42 1.04.28.28.63.42 1.04.42zm0 8.75a14.72 14.72 0 01-13.43-8.9A14.2 14.2 0 01.92 15.5a14.72 14.72 0 018.9-13.44A14.2 14.2 0 0115.5.92c2.02 0 3.91.38 5.69 1.14a14.72 14.72 0 018.9 13.44 14.72 14.72 0 01-8.9 13.43 14.2 14.2 0 01-5.69 1.15z" />
          </svg>
          <span className="visually-hidden">Прокрутить к началу</span>
        </button>
      )}
    </>
  );
}

export default ScrollButton;
