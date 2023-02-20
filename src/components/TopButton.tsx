import React, { useState, useEffect } from 'react';
import { RxDoubleArrowUp } from 'react-icons/rx';
import '../styles/TopButton.css';

const TopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const scrollPos = window.scrollY;

    if (scrollPos > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    isVisible && (
      <button
        onClick={handleClick}
        className="to-top-button"
      >
        <RxDoubleArrowUp size={25} />
      </button>
    )
  ) || null;
};

export default TopButton;
