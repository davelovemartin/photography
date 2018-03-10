import React, { Children } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Button from './button'

class CustomStripeCheckout extends React.Component {
  constructor(props) {
    super(props)
    this.onToken = this.onToken.bind(this)
    this.state = { orderNo: null}
  }

  async onToken (token, args) {
    try {
      let response = await fetch(process.env.STRIPE_ORDER_URL, {
        method: 'POST',
        body: JSON.stringify({
          token,
          order: {
            currency: this.props.currency,
            shipping: {
              name: args.shipping_name,
              address: {
                line1: args.shipping_address_line1,
                city: args.city,
                postal_code: args.shipping_address_zip
              }
            }
          }
        })
      })

      // The await operator is used to wait for a Promise. It can only be used inside an async function.
      let orderJson = await response.json()
      console.log(orderJson)
      // let mailResponse = await fetch(process.env.SES_SEND_EMAIL_URL, {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     email: `${orderJson.order.email}`,
      //     id : `${orderJson.order.id}`
      //   })
      // })
      // let email = await mailResponse.json(orderJson)
      // const history = createHistory()
      // history.push({
      //   pathname: '/thankyou/',
      //   state: { orderId: orderJson.order.id }
      // })
      // history.go()
    } catch(err) {
      // catches errors both in fetch and response.json
      alert(err);
    }
  }

  // async order (frame, size, shipping) {
  //   try {
  //     // Backend API url
  //     const res = await fetch('https://competent-brahmagupta-2bcbbd.netlify.com/.netlify/functions/order', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         frame: frame,
  //         size: size,
  //         recipientName: shipping.recipient_name,
  //         address1: shipping.line1,
  //         addressTownOrCity: shipping.city,
  //         stateOrCounty: shipping.state,
  //         postalOrZipCode: shipping.postal_code,
  //         destinationCountryCode: shipping.country_code,
  //         payment: 'InvoiceMe',
  //         qualityLevel: 'Pro',
  //         mobileTelephone: shipping.phone
  //       })
  //     })
  //     const data = await res.json()
  //     console.log(data)
  //   } catch (err) {
  //     alert(err)
  //   }
  // }

  render () {
    return <StripeCheckout
      amount={Number(this.props.amount)}
      billingAddress={this.props.billingAddress}
      currency={this.props.currency}
      description={this.props.description}
      locale={this.props.locale}
      name={this.props.name}
      panelLabel={this.props.panelLabel}
      reconfigureOnUpdate={this.props.reconfigureOnUpdate}
      selected={this.props.selected}
      shippingAddress={this.props.shippingAddress}
      skuId={this.props.skuId}
      slug={this.props.slug}
      stripeKey={this.props.stripeKey}
      token={this.onToken}
      triggerEvent={this.props.triggerEvent}
      zipCode={this.props.zipCode}
    >
      <Button
        mr={1}
        bg={'base'}
        px={4}
        py={1}
        w={1}
        disabled={!this.props.selected}
        children={this.props.panelLabel}
      />
    </StripeCheckout>
  }
}

export default CustomStripeCheckout