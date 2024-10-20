import axios from 'axios';
import cheerio from 'cheerio';

const scrapeProductPage = async (url) => {
  try {
    console.log("Fetching data from:", url);
    const { data } = await axios.get(url); 
    const $ = cheerio.load(data);
    console.log($)

    // const images = [];

    // // Select all <li> elements with the class "thumbnail--TxeB1sWz"
    // $('.thumbnail--TxeB1sWz img').each((index, element) => {
    //   const imgSrc = $(element).attr('src'); // Get the src attribute of the img element
    //   if (imgSrc) {
    //     images.push(imgSrc); // Add to the images array
    //   }
    // });
    return {"magic" : "magic"}

  } catch (error) {
    console.error("Error scraping:", error);
    return null;
  }
};

export default scrapeProductPage;