module.exports = (db) => {
  const funds = [
    {
      name: 'Communication Services ETF',
      ticker: 'VOX',
      asset_class: 'Stock - Sector',
      risk_level: 5,
      expense_ratio: 0.1,
      investment_min: 131.91,
      price: 131.91,
      change_price: -1.16,
      summary:
        'Includes stocks of companies that provide telephone, data-transmission, cellular, wireless communication services and offer related content and information through various media.',
    },
    {
      name: 'Consumer Discretionary ETF',
      ticker: 'VCR',
      asset_class: 'Stock - Sector',
      risk_level: 5,
      expense_ratio: 0.1,
      investment_min: 320.08,
      price: 320.08,
      change_price: -5.79,
      summary:
        'Includes stocks of companies that manufacture products and provide services that consumers purchase on a discretionary basis.',
    },
    {
      name: 'Consumer Staples ETF',
      ticker: 'VDC',
      asset_class: 'Stock - Sector',
      risk_level: 5,
      expense_ratio: 0.1,
      investment_min: 193.19,
      price: 193.19,
      change_price: -0.14,
      summary:
        'Includes stocks of companies that provide direct-to-consumer products that, based on consumer spending habits, are considered nondiscretionary.',
    },
    {
      name: 'Dividend Appreciation ETF',
      ticker: 'VIG',
      asset_class: 'Stock - Large-Cap Blend',
      risk_level: 4,
      expense_ratio: 0.06,
      investment_min: 164.67,
      price: 164.67,
      change_price: -2.58,
      summary:
        'Seeks to track the performance of the S&P U.S. Dividend Growers Index. Large-cap equity, emphasizing stocks with a record of growing their dividends year over year.',
    },
    {
      name: 'Emerging Markets Government Bond ETF',
      ticker: 'VWOB',
      asset_class: 'International',
      risk_level: 3,
      expense_ratio: 0.25,
      investment_min: 76.89,
      price: 76.89,
      change_price: -0.34,
      summary:
        'Attempts to track the performance of Bloomberg USD Emerging Markets Government RIC Capped Index. Maintains a dollar-weighted average maturity consistent with that of the index.',
    },
    {
      name: 'Energy ETF',
      ticker: 'VDE',
      asset_class: 'Stock - Sector',
      risk_level: 5,
      expense_ratio: 0.1,
      investment_min: 74.11,
      price: 74.11,
      change_price: -0.97,
      summary:
        'Includes stocks of companies involved in the exploration and production of energy products such as oil, natural gas, and coal.',
    },
    {
      name: 'ESG International Stock ETF',
      ticker: 'VSGX',
      asset_class: 'International',
      risk_level: 5,
      expense_ratio: 0.12,
      investment_min: 59.85,
      price: 59.85,
      change_price: -0.55,
      summary:
        'Seeks to track the performance of the FTSE Global All Cap ex US Choice Index.',
    },
    {
      name: 'ESG U.S. Corporate Bond ETF',
      ticker: 'VCEB',
      asset_class: 'Bond - Inter-term Investment',
      risk_level: 2,
      expense_ratio: 0.12,
      investment_min: 73.51,
      price: 73.51,
      change_price: -0.23,
      summary:
        'Specifically excludes bonds of companies that the index sponsor determines are involved in, and/or derive threshold amounts of revenue from certain activities or business segments related to: adult entertainment, alcohol, gambling, tobacco, nuclear weapons, controversial weapons, conventional weapons, civilian firearms, nuclear power, genetically modified organisms, or thermal coal, oil, or gas.',
    },
  ]

  funds.forEach((fund) => db.funds.insert(fund))
}
