import ChapterTabs from './ChapterTabs'
import PageViewer from './PageViewer'
import SummaryPanel from './SummaryPanel'

export default function TextbookViewer() {
  return (
    <div className="textbook-viewer-layout">
      <ChapterTabs />
      <div className="content-container">
        <PageViewer />
        <SummaryPanel />
      </div>
    </div>
  )
}
