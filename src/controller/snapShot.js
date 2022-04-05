import React from 'react';
import Header from './header';
import Search from './search';
import BtnsCategory from './btnsCategory';
import DisplayArea from './displayArea';


const SnapShot = params => {
    
    const [responseData, setResponseData] = React.useState([]);
    const [defaultSearch, setDefaultSearch] = React.useState("");

    const populateSearchResult =  res => {
        setResponseData(res)
    }

    const populateDefaultSearch =  res => {
        setDefaultSearch(res)
    }

    return (
        <>
        <Header />
        <Search getUserData={(res) => populateSearchResult(res)} defaultSearch={defaultSearch} />
        <BtnsCategory populateDefaultSearch={(res) => populateDefaultSearch(res)}  />
        <DisplayArea responseData={responseData} />
        <br />
        </>
    )
}

export default SnapShot