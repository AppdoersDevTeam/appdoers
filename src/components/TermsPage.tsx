import React from 'react';
import LegalPage from './LegalPage';
import { termsOfService } from '../content/siteContent';

const TermsPage: React.FC = () => (
  <LegalPage
    title={termsOfService.title}
    updated={termsOfService.updated}
    intro={termsOfService.intro}
    sections={termsOfService.sections}
    metaDescription="Terms of service for Appdoers website design, hosting, and support."
    path="/terms"
  />
);

export default TermsPage;
