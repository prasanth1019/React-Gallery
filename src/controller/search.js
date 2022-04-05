import React from 'react';
import axios from 'axios';
// import DisplayArea from './displayArea';

const Search = props => {

    const [tags, setTags] = React.useState("");
    // const [responseData, setResponseData] = React.useState([]);

    React.useEffect(() => {
        const apiCall = () => {
            const api = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=" + tags + "&per_page=24&format=json&nojsoncallback=1";
            axios.get(api).then((response) => {
                // console.log()
                let result = response?.data?.photos?.photo
                // setResponseData(result)
                props.getUserData(result)
            }, error => {
                console.error(error);
            });
        }
        apiCall()
        console.log("useEffect");
    }, [tags])

    React.useEffect( () => {
        setTags(() => props.defaultSearch);
    }, [props.defaultSearch]);

    const updateTags = (event) => {
        setTags(() => event.target.value);
    }

    const initiateSearch = (event) => {
        const ta = event.target.value;
        // apiCall(ta);
        console.log(ta);
    }

    return (
        <div>
            <input type="text" placeholder="Search" className="input-element-design" value={tags} onChange={(e) => updateTags(e)} ></input>
            <button type="submit" className="input-btn-design" onClick={(e) => initiateSearch(e)} > Search </button>
            {/* <DisplayArea responseData={responseData} /> */}
        </div>
    )
}

export default Search