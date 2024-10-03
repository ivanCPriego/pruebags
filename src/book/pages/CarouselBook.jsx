import Carousel from 'react-bootstrap/Carousel';

export const CarouselBook = () => {
  return (
    <>
    <section className="hobbies-container">
      <Carousel fade>
        <Carousel.Item>
        <img className='w-100' src={'/public/images/001.jpg'} alt="My Image" />
          <Carousel.Caption>
            <h2>Bobsai</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className='w-100' src={'/public/images/002.jpg'} alt="My Image" />
          <Carousel.Caption>
            <h2>Padel</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className='w-100' src={'/public/images/003.jpg'} alt="My Image" />
          <Carousel.Caption>
            <h2>Hotwheels</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
    </>
  )
}
