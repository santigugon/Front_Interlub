import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import '../../user/style.css';
import { _tasks, _posts, _timeline } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

// eslint-disable-next-line perfectionist/sort-imports
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Document, Page, pdfjs } from 'react-pdf';
// eslint-disable-next-line perfectionist/sort-imports

import { Button, Box } from '@mui/material';
import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <AboutUs />
      {/* <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Weekly sales"
            percent={2.6}
            total={714000}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="New users"
            percent={-0.1}
            total={1352831}
            color="secondary"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-users.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Purchase orders"
            percent={2.8}
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-buy.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Messages"
            percent={3.6}
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Current visits"
            chart={{
              series: [
                { label: 'America', value: 3500 },
                { label: 'Asia', value: 2500 },
                { label: 'Europe', value: 1500 },
                { label: 'Africa', value: 500 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                { name: 'Team A', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Team B', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsConversionRates
            title="Conversion rates"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Italy', 'Japan', 'China', 'Canada', 'France'],
              series: [
                { name: '2022', data: [44, 55, 41, 64, 22] },
                { name: '2023', data: [53, 32, 33, 52, 13] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentSubject
            title="Current subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsNews title="News" list={_posts.slice(0, 5)} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsOrderTimeline title="Order timeline" list={_timeline} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsTrafficBySite
            title="Traffic by site"
            list={[
              { value: 'facebook', label: 'Facebook', total: 323234 },
              { value: 'google', label: 'Google', total: 341212 },
              { value: 'linkedin', label: 'Linkedin', total: 411213 },
              { value: 'twitter', label: 'Twitter', total: 443232 },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsTasks title="Tasks" list={_tasks} />
        </Grid>
      </Grid> */}
    </DashboardContent>
  );
}

interface PDFPreviewProps {
  fileUrl: string;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ fileUrl }: PDFPreviewProps) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);

  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.min.js`;
  // Callback function to handle when the document is loaded
  const onLoadSuccess = ({ numPages: loadedPages }: { numPages: number }) => {
    setNumPages(loadedPages);
  };

  // Navigate to the next page
  const nextPage = () => {
    if (pageNumber < (numPages || 1)) {
      setPageNumber(pageNumber + 1);
    }
  };

  // Navigate to the previous page
  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <Box sx={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <Box sx={{ display: 'block', margin: 'auto' }}>
        <Document file={fileUrl} onLoadSuccess={onLoadSuccess} onLoadError={console.error}>
          <Page
            width={600}
            pageNumber={pageNumber}
            // renderAnnotationLayer={true} // Disabling annotation layer might help in some cases
            // renderTextLayer={false} // Disabling text layer might improve rendering
          />
        </Document>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Button onClick={prevPage} disabled={pageNumber <= 1}>
          Previous
        </Button>
        <Box
          sx={{
            margin: '0 15px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'black', // Set text color
          }}
        >
          Page {pageNumber} of {numPages}
        </Box>
        <Button onClick={nextPage} disabled={pageNumber >= (numPages || 1)}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

// eslint-disable-next-line arrow-body-style
const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Team Title */}
      <h1 className="team-title">Datostadas</h1>

      {/* Team Members Section */}
      <div className="team-members">
        <div className="team-member">
          <img src="/assets/images/santi.jpeg" alt="Santiago Gutierrez" />
          <p>Santiago Gutierrez</p>
        </div>
        <div className="team-member">
          <img src="/assets/images/nanis.jpeg" alt="Mariana Leon" />
          <p>Mariana Leon</p>
        </div>
        <div className="team-member">
          <img src="/assets/images/miguel.jpeg" alt="Miguel Perez" />
          <p>Miguel Perez</p>
        </div>
      </div>

      {/* Interlub Hackathon Description */}
      <div className="hackathon-description">
        <h2>Interlub Hackathon Challenge</h2>
        <p>
          El objetivo principal del hackathon es que los participantes desarrollen un enfoque
          innovador y efectivo para predecir el inventario, utilizando como base los datos
          históricos de órdenes de venta de tres años.
        </p>
        <p>
          Este desafío busca no solo la creación de un modelo predictivo preciso, sino también la
          exploración y aplicación de técnicas avanzadas de análisis de datos. Además, se espera que
          los participantes vayan más allá de los datos proporcionados y propongan nuevas ideas para
          mejorar el modelo predictivo.
        </p>
        <p>
          Esto incluye la incorporación de características exógenas, como factores económicos,
          estacionales o de mercado, que puedan influir en las ventas y, por ende, en el inventario.
        </p>
        <p>
          El hackathon está diseñado para fomentar la creatividad y el pensamiento crítico,
          incentivando a los participantes a explorar diferentes métodos y técnicas de predicción,
          como modelos de series temporales, regresión, aprendizaje automático, entre otros. La meta
          es desarrollar soluciones innovadoras que no solo sean precisas, sino también prácticas y
          aplicables en un entorno empresarial real.
        </p>
        <p>
          El hackathon ofrece una oportunidad única para que los participantes demuestren sus
          habilidades en análisis de datos y modelado predictivo, al tiempo que contribuyen con
          ideas frescas y valiosas que pueden tener un impacto significativo en la gestión de
          inventarios de la empresa.
        </p>
      </div>

      {/* PDF Render Section */}
      <div className="pdf-render">
        <h3>Ver PDF</h3>
        <div className="pdf-container">{/* <PDFPreview fileUrl="/assets/test.pdf" /> */}</div>
      </div>

      {/* Links for downloading PDF and collecting info */}
      <div className="links">
        <a href="/path/to/your/pdf.pdf" download className="download-link">
          Descargar PDF
        </a>
        <a href="/your-information-page" className="info-link">
          Drive
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
