import axios from "axios";
import cheerio from "cheerio";

export const ScrapeProductPage = async(url) => {
    try {
        console.log(url)
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        console.log("made it")
        const title = $('h1.product-title').text(); 
        const price = $('span.price').text(); 
        const imageUrl = $('img.product-image').attr('src');
    } catch (error) {
        console.log("damn it")
        console.log(error)
    }
}