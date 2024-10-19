import axios from "axios";
import cheerio from "cheerio";

const ScrapeProductPage = async(url) => {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const title = $('h1.product-title').text(); // Adjust selector as necessary
        const price = $('span.price').text(); // Adjust selector as necessary
        const imageUrl = $('img.product-image').attr('src'); // Adjust selector as necessary
    } catch (error) {
        console.log(error)
    }
}