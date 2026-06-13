import React from 'react';
import LegalPage from './LegalPage';
import { privacyPolicy } from '../content/siteContent';

const PrivacyPage: React.FC = () => (
  <LegalPage
    title={privacyPolicy.title}
    updated={privacyPolicy.updated}
    sections={privacyPolicy.sections}
    metaDescription="How Appdoers collects, uses, and protects your personal information."
    path="/privacy"
  />
);

export default PrivacyPage;
