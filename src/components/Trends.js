import React from 'react'

const Trends = () => {
    const [state, setState] = React.useState([{
        id: 1, title: 'Imrankhan', tr: 'Trend in pakistan', tweeets: '23000 tweets'
    },
    {
        id: 2, title: 'ShahidKhan', tr: 'Trend in pakistan', tweeets: '26400 tweets'
    }])
    return (
        <div className="trends">
            <div className="trend__header">
                <h1>Trends for you</h1>
            </div>

            {state.map(trend => (
                <div className="trends__body" key={trend.id}>
                    <span className="first">{trend.tr}</span>
                    <span className="keyword">
                        {trend.title}
                    </span>
                    <span className="allTweets">
                        {trend.tweeets}
                    </span>
                </div>
            ))}

        </div>
    )
}

export default Trends
