import json
import os

import pymongo
from lxml import html
import requests


def is_header(row):
    if len(row.xpath('th')):
        return True
    else:
        return False

def decode_unicode(data):
    return [x.encode('utf-8').strip() for x in data]


def scrape_rows(rows):
    numbeo_sections = {}
    current_key = None
    for row in rows:
        if is_header(row):
            header_data = decode_unicode(row.xpath('th/text()'))
            section = header_data[0]
            numbeo_sections[section] = {}
            current_key = section
        else:
            row_data = decode_unicode(row.xpath('td/text()'))
            expense = row_data[0].replace('.', ',')
            try:
                cost = float(row_data[1].replace(',', '').decode('unicode_escape').encode('ascii', 'ignore').strip('$'))
            except ValueError:
                cost = None

            # take the previous
            numbeo_sections[current_key][expense] = cost

    return numbeo_sections


def scrape_countries():
    page = requests.get('https://www.numbeo.com/cost-of-living')
    tree = html.fromstring(page.content)
    countries = tree.xpath('//select[@id="country"]/option/text()')[1:]

    return countries


def scrape_numbeo(currency='USD'):
    countries = scrape_countries()
    countries_data = dict()
    for country in countries:
        page = requests.get(
            'https://www.numbeo.com/cost-of-living/country_result.jsp?country={}&displayCurrency={}'.format(country, currency))
        tree = html.fromstring(page.content)
        rows = tree.xpath('//table[@class="data_wide_table"]/tr')
        country_data = scrape_rows(rows)
        countries_data[country] = country_data

    return countries_data

def store_data(data):
    mongo_uri = os.environ['CHEAP_VACAY_DB']
    mongo_client = pymongo.MongoClient(mongo_uri)
    country_data = mongo_client.cheapvacay.country_data
    for entry in data.keys():
        record = dict(country_name=entry, expenses={})
        for expense in data[entry].keys():
            record['expenses'][expense] = data[entry][expense]

        country_data.insert(record)

if __name__ == "__main__":

    country_data = scrape_numbeo()
    store_data(country_data)
