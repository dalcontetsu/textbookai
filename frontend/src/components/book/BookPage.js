import styles from '../../styles/Book.module.css';
export default function BookPage({ title, description, image, isLeft }) {
  return (
    <div className={`book-page ${isLeft ? 'left' : 'right'}`}>
      {isLeft ? (
        <div className="page-content">
          <img 
            src={image} 
            alt={title}
            className={styles.pageImage}
          />
        </div>
      ) : (
        <div className={styles.pageContent}>
          <h3 className={styles.pageTitle}>{title}</h3>
          <p className={styles.pageDescription}>{description}</p>
        </div>
      )}
    </div>
  );
}