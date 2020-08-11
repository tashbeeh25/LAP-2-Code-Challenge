import React from 'react'

const Results = (props) => {
    const {repos} =props;
    console.log("Repos is: ", repos.data); 

const listRepos = repos.length !== 0 ? repos.data.map((item) =>  <li key={item.id}>{item.name} | {item.forks_count} | {item.stargazers_count} | {item.open_issues_count}</li>) : <li>No repos found</li>;
    

    return (
        <div>
            <h2>List of Repos</h2>
            <ul>
                {listRepos}
            </ul>
        </div>
    )
}
export default Results