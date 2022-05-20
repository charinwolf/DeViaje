import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useTranslation } from 'react-i18next';

export default function HorizontalLabelPositionBelowStepper({ step }) {
  const [t, i18n] = useTranslation('global')
  if (step === 1) {
    return (
      <Box sx={{ width: '100%', marginTop: '30px', marginBottom: '30px' }}>
        <Stepper activeStep={step} alternativeLabel>
            <Step>
              <StepLabel>{t("stepper.p1")}</StepLabel>
            </Step>
            <Step>
              <StepLabel>{t("stepper.p2")}</StepLabel>
            </Step>
            <Step>
              <StepLabel>{t("stepper.p3")}</StepLabel>
            </Step>       
        </Stepper>
      </Box>
    )
  }

  if (step === 2) {
    return (
      <Box sx={{ width: '100%', marginTop: '30px', marginBottom: '30px' }}>
        <Stepper activeStep={step} alternativeLabel>
            <Step>
              <StepLabel>{t("stepper.p1")}</StepLabel>
            </Step>
            <Step>
              <StepLabel>{t("stepper.p2")}</StepLabel>
            </Step>
            <Step>
              <StepLabel>{t("stepper.p3")}</StepLabel>
            </Step>       
        </Stepper>
      </Box>
    )
  }

}
