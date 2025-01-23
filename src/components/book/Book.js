import { useState, useEffect, useCallback } from 'react';
import { bookContent, bookSettings } from '../../data/bookContent';
import BookPage from './BookPage';
import BookControls from './BookControls';
import styles from '../../styles/Book.module.css';

//console.log("Received book content:", bookContent)
export default function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const totalPages = 10;
  const pageStack = Array.from({ length: totalPages }, (_, i) => i);
  
  const currentContent = bookContent[currentPage];

  const flipToNextPage = useCallback(() => {
    if (isFlipping || isPaused) return;
    
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % bookContent.length);
      setIsFlipping(false);
    }, bookSettings.flipDuration);
  }, [isFlipping, isPaused]);

  useEffect(() => {
    if (!bookSettings.autoPlay) return;

    const interval = setInterval(() => {
      flipToNextPage();
    }, bookSettings.pageDisplayTime);

    return () => clearInterval(interval);
  }, [flipToNextPage]);

  {/*}
  useEffect(() => {
    if (bookContent && bookContent.length > 0) {
      setIsLoading(false);
    }
  }, []);

  

  if (isLoading) {
    return <div className="book-loading">Loading...</div>;
  }*/}

  return (
    <div className={styles.bookWrapper}>
      <div className={styles.bookContainer}>
        <div className={`${styles.book} ${isFlipping ? styles.flipping : ''}`}>
          <div className={styles.bookSpine} />
          <div className={styles.bookCover} />
          {pageStack.map((pageNum) => (
            <div 
              key={pageNum}
              className={styles.stackedPage}
              style={{
                transform: `translateZ(${-pageNum * 10}px)`,
                zIndex: -pageNum
              }}
            />
          ))}
          <BookPage 
            title={currentContent.title}
            description={currentContent.description}
            image={currentContent.image}
            isLeft={true}
            styles={styles}
          />
          <BookPage 
            title={currentContent.title}
            description={currentContent.description}
            image={currentContent.image}
            isLeft={false}
            styles={styles}
          />
        </div>
      </div>
      <BookControls 
        onNext={flipToNextPage}
        onPause={() => setIsPaused(!isPaused)}
        isPaused={isPaused}
      />
    </div>
  );
}