import * as React from 'react'
import Layout from '../components/my-layout'
import PDFViewer from '../components/pdf-viewer';
import PDFJSBackend from '../backends/pdfjs';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>About Me Section.</p>
        <div class="pdf-container"> 
        <PDFViewer backend={PDFJSBackend} src="/pdf.pdf"/>
        </div>
    </Layout>
  )
}

export default AboutPage