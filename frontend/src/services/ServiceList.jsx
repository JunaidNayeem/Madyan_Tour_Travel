import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Hajj & Umrah tours`,
      desc: `Multiple package for pilgrimage which suits you the best`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Over all experienced guides provided for al the activity covered during pilgrimage`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Easy customization packs and bundles accordiing to your comfort zone`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList