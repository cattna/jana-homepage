import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import List from './components/List';

export default function App() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <Header />

      <Section title="About">
        <p>
          I am a 3rd year undergraduate Information Systems student with a strong interest
          in database systems, data management, and machine learning. My current
          focus lies in exploring how learning-based approaches can enhance
          traditional data systems for real-world applications.
        </p>
      </Section>

      <Section title="Research Interests">
        <List>
          <li>Machine Learning for Database Systems</li>
          <li>Representation Learning on Structured and Graph Data</li>
          <li>Graph-based Data Management and Analytics</li>
          <li>Data-intensive System Design</li>
        </List>
      </Section>

      <Section title="Education & Experience">
        <List>
          <li>
            <strong>B.Sc. in Computer Science</strong> — Undergraduate Student
          </li>
          <li>
            <strong>SYAIR Research Program</strong> — International research
            collaboration under Prof. Haryadi Gunawi (University of Chicago)
          </li>
          <li>
            Research experience in data pipelines, geospatial analytics, and
            applied machine learning.
          </li>
        </List>
      </Section>

      <Section title="Reproducibility Study Artifacts">
        <List>
          <li>
            <strong>STrans-GAN: ICDM'22</strong>
            <br />
            <a
              href="https://github.com/cattna/Reproducibility-Study-of-STrans-GAN-ICDM-22-"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </li>

          <li>
            <strong>MORAL-Ranking-Aware-Fairness: AAAI'26</strong>
            <br />
            <a
              href="https://github.com/cattna/A-Reproducibility-Study-of-MORAL-Ranking-Aware-Fairness-in-Link-Prediction"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code & Experimental Artifacts
            </a>
          </li>

          <li>
            <strong>TSB-Clustering: PVLDB'25</strong>
            <br />
            <a
              href="https://github.com/cattna/Reproduction-of-TSB-Clustering-from-VLDB-2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data Pipeline Artifacts
            </a>
          </li>
        </List>
      </Section>


      <Section title="Projects">
        <List>
          <li>
            <strong>Machine Learning–Integrated Database Research</strong>
            <br />
            Research-oriented exploration of representation learning and graph-based
            approaches for enhancing data management and analytical capabilities.
          </li>

          <li>
            <strong>Cafe Sales ETL Pipeline & Dashboard</strong>
            <br />
            End-to-end ETL system using Python for data extraction, transformation,
            and visualization with Streamlit.
          </li>

          <li>
            <strong>Tree Cover Loss Visualization (GIS)</strong>
            <br />
            Interactive spatio-temporal visualization of annual deforestation in
            Jambi Province using geospatial data and web mapping tools.
          </li>

          <li>
            <strong>WebGIS Church Distribution Mapping</strong>
            <br />
            Design and implementation of a web-based GIS for spatial distribution
            analysis using Leaflet and GeoJSON.
          </li>

          <li>
            <strong>Land Cover Classification using Remote Sensing</strong>
            <br />
            Supervised land cover classification using satellite imagery and
            Semi-Automatic Classification Plugin (SCP).
          </li>

          <li>
            <strong>Network Simulation & Access Control</strong>
            <br />
            Multi-department network simulation with routing, subnetting, and access
            restrictions using Cisco Packet Tracer.
          </li>

          <li>
            <strong>Time-Series & Feature-Based Clustering</strong>
            <br />
            Clustering and dimensionality reduction experiments on media and
            categorical datasets using unsupervised learning methods.
          </li>
        </List>
      </Section>

      <Footer />
    </main>
  );
}
