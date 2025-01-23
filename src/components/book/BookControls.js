export default function BookControls({ onNext, onPause, isPaused }) {
  return (
    <div className="book-controls">
      <button 
        onClick={onPause}
        className="control-button"
      >
        {isPaused ? 'Play' : 'Pause'}
      </button>
      <button 
        onClick={onNext}
        className="control-button"
        disabled={isPaused}
      >
        Next Page
      </button>
    </div>
  );
}
