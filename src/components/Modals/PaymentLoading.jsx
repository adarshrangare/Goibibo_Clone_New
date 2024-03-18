import { Modal } from 'antd'
import React from 'react'

import paymentProcess from '../../assets/paymentProcess.gif'
const PaymentLoading = () => {
  return (
    <Modal
      title="Payment Processing"
      visible={true}
      footer={
        []
      }
      closeIcon={null}
    >
      <p className='text-sm text-gray-600 text-center'>Do not Close the Tab or Refresh the Browser</p>
      <img src={paymentProcess} className="mx-auto" alt="payment" />
      
    </Modal>
  )
}

export default PaymentLoading