import React from 'react';
import { InsuranceApprovalModalBody, InsuranceApprovalModalFooter } from '../ui/components/Modals/InsuranceApprovalModal';
import SendEmail from '../ui/components/Modals/SendEmail';

export default {
  acceptTerms(props, modal) {
    return {
      modalTitle: 'Approve Patient Insurance',
      modalBody: <InsuranceApprovalModalBody { ...props } modal={ modal }/>,
      modalFooter: <InsuranceApprovalModalFooter { ...props } modal={ modal }/>,
    };
  },
  sendEmail(props, modal) {
    return {
      modalClasses: 'Send Email',
      modalTitle: 'Send an Email',
      modalForm: <SendEmail {...props } modal={ modal } />,
    };
  },
};
