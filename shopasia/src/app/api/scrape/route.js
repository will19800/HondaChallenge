import scrapeProductPage from '../../lib/scrape';

export async function POST(req) {
    const { url } = await req.json();
    console.log(url)
    const productData = await scrapeProductPage(url);

    if (productData) {
        return new Response(JSON.stringify(productData), { status: 200 });
    } else {
        console.log("failed to scrape")
        return new Response(JSON.stringify({ error: 'Failed to scrape the product page.' }), { status: 500 });
    }
}