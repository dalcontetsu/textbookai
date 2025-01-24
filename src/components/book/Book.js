import { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { bookContent } from '../../data/bookContent';
import styles from '../../styles/Book.module.css';

export default function Book() {
  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(1); // Start after cover

  useEffect(() => {
    const flipInterval = setInterval(() => {
      if (bookRef.current) {
        if (currentPage >= bookContent.length - 1) {
          // Reset to first content page when reaching the end
          bookRef.current.pageFlip().flip(1);
          setCurrentPage(1);
        } else {
          // Flip to next page
          bookRef.current.pageFlip().flipNext();
          setCurrentPage(prev => prev + 1);
        }
      }
    }, 5000); // Flip every 5 seconds

    return () => clearInterval(flipInterval);
  }, [currentPage]);

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