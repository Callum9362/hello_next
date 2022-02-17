import Layout from '../components/layout';
import Image from 'next/image'
import fetch from 'isomorphic-unfetch';

const Index = ({coinData}) => {
    return (
        <Layout>
            <div>
                <h3>Coins List</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Symbol</th>
                                <th scope="col">Name</th>
                                <th scope="col">Current Price</th>
                                <th scope="col">Market Cap</th>
                                <th scope="col">Market Cap Rank</th>
                                <th scope="col">Total Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coinData?.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                        <Image
                                            loader={() => item.image}
                                            src={item.image}
                                            alt="picture of coin"
                                            height="20px"
                                            width="20px"
                                            className='avatar'
                                        />
                                            <span className='pl-2'>{ item.symbol.toUpperCase() }</span>
                                        </td>
                                        <td>
                                            { item.name }
                                        </td>
                                        <td>
                                            <span className={highlight(item.price_change_24h)}> { '$' + item.current_price.toFixed(2) } </span>
                                        </td>
                                        <td>
                                            { item.market_cap }
                                        </td>
                                        <td>
                                            { item.market_cap_rank }
                                        </td>
                                        <td>
                                            { item.total_volume }
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
                <style jsx>{`
                    .avatar {
                        vertical-align: middle;
                        border-radius: 50%;
                      }
                `}
                </style>
            </div>
        </Layout>
    );
}

function highlight(priceChange){
    return {
      'text-danger': priceChange < 0,
      'text-success': priceChange > 0
    }
}

Index.getInitialProps = async function() {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`);
    const result = await response.json();
    return { coinData: result }
}
export default Index;