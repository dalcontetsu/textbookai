import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { bookContent } from '../../data/bookContent';
import styles from '../../styles/Book.module.css';

export default function Book() {
  const bookRef = useRef();

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
          disableFlipToStart={true}
          ref={bookRef}
        >
          {/* Cover Page */}
          <div className={`${styles.bookPage} ${styles.pageCover}`}>
            <div className={styles.pageContent}>
              <h1>My Book Title</h1>
            </div>
          </div>
          
          {/* Content Pages */}
          {bookContent.map((content, index) => (
            <div key={index} className={styles.bookPage}>
              <div className={styles.pageContent}>
                <h2 className={styles.pageTitle}>{content.title}</h2>
                {content.image && (
                  <img 
                    src={content.image} 
                    alt={content.title}
                    className={styles.pageImage}
                  />
                )}
                <p className={styles.pageDescription}>{content.description}</p>
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}