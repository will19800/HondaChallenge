from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
from selenium import webdriver
from flask_cors import CORS  
import time

app = Flask(__name__)
CORS(app)

@app.route('/scrape', methods=['POST'])
def scrape():
    # Get the URL from the request
    data = request.json
    url = data.get('url')

    if not url:
        return jsonify({'error': 'No URL provided'}), 400
    
    print(f"URL to scrape: {url}") 
    
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')  # Run in headless mode (no GUI)
    driver = webdriver.Chrome(options=options)

    # URL = 'https://item.taobao.com/item.htm?spm=a21bo.jianhua%2Fa.201876.d4.5af92a89pCDDf6&id=782187936409&scm=1007.40986.410040.0&pvid=7577577a-db47-4664-9b17-0733918f3539&xxc=home_recommend&skuId=5513261751966&utparam=%7B%22aplus_abtest%22%3A%222b3904bd7a3d48b6a050223cb88dd3a5%22%7D&priceTId=213e003117293822666125190e1600&pisk=g1SjQA4e11IzVpFq3leyRgh8yDKGctZEcA9OKOnqBnKx6fBpacyD0Px11Q1MgE-Afam1KOj4nhyD0txMXWPUYG6cnhjx06d5cbHJnTnxHKEEcRSzKWPUYkWcnhxTTsR1mGpJdpK9HhKtw89wdmhA6EnReQvMBjptD86JZQHxkFK9ebp6QfKtDcLJ2KvnHmp96TEJZdKt6B_oCLPHZtwltNBnUYpFHQitXiLDlptn7ci66KLjo9d5UTSWhEOBrL-1SM6dHMv1jJ361IQAJnI_Of85wZQpDGNIwCb2Kg8rTBNMuVMW-cpSo8wSSVDO66qT8gYQnEpkUry7F286kLvWb8wSSVYvELyzF8ge5'

    try:
        driver.get(url)
        time.sleep(4) 

        html = driver.page_source
        # Parse the HTML content
        soup = BeautifulSoup(html, 'lxml')  # or 'html.parser' if lxml is not installed

        #Get Into Deep Layer
        deepLayerHTML = soup.find('div', id='ice-container').find('div').find('div', class_='main--XyozDD28').find('div', class_='pageContentWrap').find('div', class_='content--SdcyFggV').find('div', class_="BasicContent--neLyCouC").find('div', class_="summaryInfoWrap--Ndc7k4Hv")

        productHTML = deepLayerHTML.find('div', class_="purchasePanel--cG3DU6bX normalPanel--tH79cfP4 normalPanel").find('div', class_=False).find('div', class_="ItemTitle--UReZzEW5").find('h1')
        productName = productHTML.get('title')
        
        return jsonify({'product_name': productName})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        driver.quit()
        
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)   