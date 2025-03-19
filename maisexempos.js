
//.... MAIS EXEMPLOS DE MAP, REDUCE, E FILTER....

const companies = [
    { name: 'sansung', marketValue: 50, CEO: 'kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satia Natella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zucherberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Aplle', marketValue: 845, CEO: 'Tim cook', foundedOn: 1976 },
]
//....adicionando 10% dos valores de todas as empresas....

const marketValueOldcompanies = companies.map((company) => {
    company.marketValue = company.marketValue - (company.marketValue / 10)
     return company
})
    .filter((company) => company.foundedOn > 1980)

    .reduce((acc,company) => acc + company.marketValue, 0)
        
   
    console.log(marketValueOldcompanies)

   