import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import TextbookViewer from '@/components/textbook/TextbookViewer'

export default function TextbookViewerPage() {
  const [activeChapter, setActiveChapter] = useState(0)
  
  return (
    <Layout>
      <div className="textbook-viewer-container">
        <TextbookViewer />
      </div>
    </Layout>
  )
}
