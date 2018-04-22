import React, { Children } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Button from './button'

class CustomStripeCheckout extends React.Component {
  constructor(props) {
    super(props)
    this.onToken = this.onToken.bind(this)
  }

  async onToken (token, args) {
    try {
      let response = await fetch(process.env.STRIPE_ORDER_URL, {
        method: 'POST',
        body: JSON.stringify({
          token,
          order: {
            amount: this.props.amount,
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

      let orderJson = await response.json()
      console.log(orderJson)
      const res = await fetch(process.env.PWINTY_ORDER_URL, {
        method: 'POST',
        body: JSON.stringify({
          frame: this.props.frame,
          size: this.props.size,
          recipientName: orderJson.order.shipping.name,
          address1: orderJson.order.shipping.line1,
          addressTownOrCity: orderJson.order.shipping.city || '',
          stateOrCounty: orderJson.order.shipping.state || '',
          postalOrZipCode: orderJson.order.shipping.postal_code,
          destinationCountryCode: orderJson.order.shipping.country_code || 'GB',
          payment: 'InvoiceMe',
          qualityLevel: 'Pro',
          mobileTelephone: orderJson.order.shipping.phone || ''
        })
      })
      const data = await res.json()
      console.log(data)
    } catch (err) {
      alert(err)
    }
  }

  render () {
    return <StripeCheckout
      amount={Number(this.props.amount)}
      billingAddress={this.props.billingAddress}
      currency={this.props.currency}
      description={this.props.description}
      frame={this.props.frame}
      locale={this.props.locale}
      name={this.props.name}
      panelLabel={this.props.panelLabel}
      reconfigureOnUpdate={this.props.reconfigureOnUpdate}
      selected={this.props.selected}
      shippingAddress={this.props.shippingAddress}
      size={this.props.size}
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