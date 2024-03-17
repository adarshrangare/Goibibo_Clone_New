import { Modal } from 'antd'
import React from 'react'

import paymentProcess from '../../assets/paymentProcess.gif'
const PaymentLoading = () => {
  return (
    <Modal
      title="Payment Completed"
      visible={true}
      footer={
        []
      }
      closeIcon={null}
    >
      <img src={paymentProcess} className="mx-auto" alt="payment" />
      
    </Modal>
  )
}

export default PaymentLoading