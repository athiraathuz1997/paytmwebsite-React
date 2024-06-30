import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import personOne from '../images/personOne.png';
import personTwo from '../images/personTwo.png';
import personThird from '../images/personThird.png';
import personFourth from '../images/personFourth.png';
import personFifth from '../images/personFifth.png';


const Testimonial = () => {
 
    var [currentIndex, setCurrentIndex] = useState(0);
   

    const images = [
        { src: personOne, alt: 'Person One', info: "<div class='first-info'>Highly recommended!! These guys are very friendly and they will provide you more than you have expected, value for money very happy after working with them.</div><div class='first-line'>Selvedin Durak</div><div class='second-line'>Description</div>" },
        { src: personTwo, alt: 'Person Two', info: "<div class='first-info'>These guys are very friendly and they will provide you more than you have expected, value for money very happy after working with them</div><div class='first-line'>Image 2</div><div class='second-line'>Selvedin Durak</div>" },
        { src: personThird, alt: 'Person Third', info: "<div class='first-info'>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.</div><div class='first-line'>Selvedin Durak</div><div class='second-line'>Description</div>" },
        { src: personFourth, alt: 'Person Fourth', info: "<div class='first-info'>Highly recommended!! These guys are very friendly and they will provide you more than you have expected, value for money very happy after working with them</div><div class='first-line'>Image 4 Selvedin</div><div class='second-line'>Durak</div>" },
        { src: personFifth, alt: 'Person Fifth', info: "<div class='first-info'>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.</div><div class='first-line'>Selvedin Durak</div><div class='second-line'>Description</div>" }

    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [images.length]);

    const rotateImages = () => {
        const imageContainer = document.getElementById('image-container');
        const imageInfo = document.getElementById('image-info');
        const testimonialContainer = document.getElementById('testimonial');
    
        while (imageContainer.firstChild) {
            imageContainer.removeChild(imageContainer.firstChild);
        }
        // Update the content below the images based on the currently displayed image
        const currentImage = images[currentIndex];
        const image = document.createElement('img');
        image.src = currentImage.src;
        image.alt = currentImage.alt;
        image.className = 'image';
        
        // Append the image to the container
        imageContainer.appendChild(image);
        const matchResult = currentImage.info.match(/<div class='first-line'>(.*?)<\/div><div class='second-line'>(.*?)<\/div>/);


       
    if (matchResult) {
        const firstLineContent = matchResult[1];
        const secondLineContent = matchResult[2];

        const styledFirstLine = `<strong style="display: block; text-align: center;">${firstLineContent}</strong>`;
        const styledSecondLine = `<div style="text-align: center;">${secondLineContent}</div>`;
        // Now you can use firstLineContent and secondLineContent as needed

        // Set the inner HTML of the imageInfo element
        imageInfo.innerHTML = `${styledFirstLine}<br>${styledSecondLine}`;
    } else {
        // Handle the case where the regular expression didn't match
        console.error("Regular expression did not match.");
    }

        // Update the testimonial content with the first-info text
        const testContainer = currentImage.info.match(/<div class='first-info'>(.*?)<\/div>/)[1];
        const styledTestimonial = `<em style=" font-weight:600">${testContainer}</em>`;
        testimonialContainer.innerHTML = `${styledTestimonial}`;
        for (let i = 1; i < 5; i++) {
            const image = document.createElement("img");
            const indexToShow = (currentIndex + i) % images.length;
            
            image.src = images[indexToShow].src;
            image.alt = images[indexToShow].alt;
            image.className = i === 2 ? "image border-image" : "image";
        
            imageContainer.appendChild(image);
        }
        

        currentIndex = (currentIndex + 1) % images.length;
    };

    useEffect(() => {
        rotateImages();
    }, [currentIndex]);

    return (
        <Container>
      <Row className="mt-5">
        <h2 className="sect-head text-center pt-4">Testimonial</h2>
        <p className="d-flex justify-content-center text-center blur-color mb-5">
          We do not brag but what others say about us can help you in understanding our ability and ethics well.
        </p>
        <div id="testimonial"></div>
        <div id="image-container"></div>
        <div id="image-info"></div>
      </Row>
    </Container>
    );
};

export default Testimonial;
