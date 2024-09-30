import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Footer from './Footer'
import fetchRandomImages from './API_Integration'
import Imagebox from './Imagebox'
import Image from './Image'

function App() {
    const [value, setValue] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (value) {
            fetchRandomImages(value, 12).then(fetchedImages => {
                setImages(fetchedImages);
            }).catch(error => {
                console.error('Error fetching random images:', error);
            });
        }
    }, [value]);

    return (
        <>
            <Navbar/>
            <Searchbar search={setValue} />
            <Imagebox>
                {images.map((image, index) => (
                    <Image 
                        key={index}
                        url={image.url}
                        description={image.description}
                        downloadUrl={image.downloadUrl}
                    />
                ))}
            </Imagebox>
            <Footer/>
        </>
    )
}

export default App