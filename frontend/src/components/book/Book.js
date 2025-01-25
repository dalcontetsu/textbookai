import { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { bookContent } from '../../data/bookContent';
import styles from '../../styles/Book.module.css';

export default function Book() {
  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      if (bookRef.current && !isFlipping) {
        if (currentPage >= bookContent.length - 1) {
          setIsFlipping(true);
          bookRef.current.pageFlip().turnToPage(2);
          bookRef.current.pageFlip().flipPrev();
          
          // Wait for flip animation to complete
          setTimeout(() => {
            setCurrentPage(1);
            setIsFlipping(false);
          }, 1000); // Match this with flippingTime prop
        } else {
          setIsFlipping(true);
          bookRef.current.pageFlip().flipNext();
          
          setTimeout(() => {
            setCurrentPage(prev => prev + 1);
            setIsFlipping(false);
          }, 5000);
        }
      }
    }, 1000);

    return () => clearInterval(flipInterval);
  }, [currentPage, isFlipping]);

  const renderPage = (content) => {
    if (content.type === 'image') {
      return (
        <div className={styles.bookPage}>
          <div className={styles.pageContent}>
            <img 
              src={content.content} 
              alt="Page illustration"
              className={styles.pageImage}
            />
          </div>
        </div>
      );
    }

    if (content.type === 'content') {
      return (
        <div className={styles.bookPage}>
          <div className={styles.pageContent}>
            <h2 className={styles.pageTitle}>{content.title}</h2>
            <p className={styles.pageDescription}>{content.description}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.bookWrapper}>
      <div className={styles.bookContainer}>
        <div className={styles.hardcover}>
          <div className={styles.coverFront} />
          <div className={styles.coverSpine} />
          <div className={styles.coverBack} />
        </div>
        
        <HTMLFlipBook 
          width={800}
          height={900}
          size="stretch"
          minWidth={300}
          maxWidth={1000}
          minHeight={400}
          maxHeight={800}
          showCover={true}
          mobileScrollSupport={true}
          className={styles.book}
          flippingTime={1000}
          maxShadowOpacity={0.5}
          usePortrait={false}
          startPage={1}
          drawShadow={true}
          autoSize={true}
          ref={bookRef}
        >
          {bookContent.map((content, index) => (
            renderPage(content)
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}